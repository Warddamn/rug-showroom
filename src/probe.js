// Collects the device facts the plan needs before any texture size, rug count or
// frame budget can be trusted: what the browser exposes, what the session runs
// at, and what this scene costs.

import * as THREE from 'three';

export class Probe {
  constructor({ renderer, camera, scene, controllers, emulated }) {
    this.renderer = renderer;
    this.camera = camera;
    this.scene = scene;
    this.controllers = controllers;
    this.emulated = emulated;
    this.frameMsEma = 0;
    this.frames = 0;
    this.fpsWindowStart = 0;
    this.fps = 0;
    this.session = null;
    this.sessionSummary = null;
    this.worstMs = 0;
    this.collectStatic();
  }

  collectStatic() {
    const r = this.renderer;
    const gl = r.getContext();
    let gpu = 'unknown';
    try {
      const dbg = gl.getExtension('WEBGL_debug_renderer_info');
      if (dbg) gpu = gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL);
    } catch { /* not exposed */ }
    this.static = {
      three: 'r' + THREE.REVISION,
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      webxr: !!navigator.xr,
      emulated: this.emulated,
      gpu,
      webgl2: r.capabilities.isWebGL2,
      maxTextureSize: r.capabilities.maxTextureSize,
      maxAnisotropy: r.capabilities.getMaxAnisotropy(),
      astc: r.extensions.has('WEBGL_compressed_texture_astc'),
      etc2: r.extensions.has('WEBGL_compressed_texture_etc'),
      bptc: r.extensions.has('EXT_texture_compression_bptc'),
      s3tc: r.extensions.has('WEBGL_compressed_texture_s3tc'),
      devicePixelRatio: window.devicePixelRatio,
      window: `${window.innerWidth}x${window.innerHeight}`,
      toneMapping: 'Neutral',
      foveationRequested: r.xr.getFoveation(),
    };
  }

  onSessionStart(session) {
    this.session = session;
    this.worstMs = 0;
    this.frameMsEma = 0;
    this.sessionSummary = null;
  }

  onSessionEnd() {
    this.sessionSummary = { ...this.sessionInfo(), worstFrameMs: +this.worstMs.toFixed(1), avgFrameMs: +this.frameMsEma.toFixed(2) };
    this.session = null;
  }

  sessionInfo() {
    const s = this.session;
    if (!s) return { presenting: false };
    // Per-eye pixels: prefer the session's own layer size (two eyes side by side),
    // fall back to the viewport three.js recorded on the first eye camera.
    let eye = null;
    const layer = s.renderState && s.renderState.baseLayer;
    if (layer && layer.framebufferWidth) {
      eye = { z: layer.framebufferWidth / 2, w: layer.framebufferHeight };
    } else {
      const xrCam = this.renderer.xr.getCamera();
      const v = xrCam.cameras && xrCam.cameras[0] ? xrCam.cameras[0].viewport : null;
      if (v && v.z) eye = v;
    }
    const sources = [];
    try {
      for (const src of s.inputSources) {
        sources.push(`${src.handedness}:${src.targetRayMode}${src.gamepad ? ' gp' + src.gamepad.axes.length + 'ax' : ''}${src.hand ? ' hand' : ''}`);
      }
    } catch { /* ignore */ }
    return {
      presenting: true,
      frameRate: s.frameRate ?? null,
      supportedFrameRates: s.supportedFrameRates ? Array.from(s.supportedFrameRates) : null,
      eyeViewport: eye ? `${Math.round(eye.z)}x${Math.round(eye.w)}` : null,
      foveationActive: this.renderer.xr.getFoveation(),
      referenceSpace: 'local-floor',
      inputSources: sources,
      environmentBlend: s.environmentBlendMode,
    };
  }

  tick(dt, frame) {
    if (dt > 0) {
      this.frameMsEma = this.frameMsEma ? this.frameMsEma * 0.95 + dt * 0.05 : dt;
      if (this.session && this.frames > 30 && dt > this.worstMs) this.worstMs = dt;
    }
    this.frames += 1;
    const now = performance.now();
    if (!this.fpsWindowStart) this.fpsWindowStart = now;
    if (now - this.fpsWindowStart >= 1000) {
      this.fps = Math.round(this.frames * 1000 / (now - this.fpsWindowStart));
      this.frames = 0; this.fpsWindowStart = now;
    }
  }

  renderStats() {
    const info = this.renderer.info;
    return {
      avgFrameMs: +this.frameMsEma.toFixed(2),
      fps: this.fps,
      worstFrameMs: +this.worstMs.toFixed(1),
      drawCalls: info.render.calls,
      triangles: info.render.triangles,
      textures: info.memory.textures,
      geometries: info.memory.geometries,
      programs: info.programs ? info.programs.length : null,
    };
  }

  snapshot() {
    return {
      capturedAt: new Date().toISOString(),
      ...this.static,
      session: this.session ? this.sessionInfo() : (this.sessionSummary || { presenting: false }),
      render: this.renderStats(),
      locomotion: window.__app ? { teleports: window.__app.locomotion.teleports, turns: window.__app.locomotion.turns } : null,
    };
  }

  asText() { return JSON.stringify(this.snapshot(), null, 2); }

  hudLines() {
    const s = this.snapshot();
    const ses = s.session;
    return [
      `frame ${s.render.avgFrameMs} ms  fps ${s.render.fps}  worst ${s.render.worstFrameMs} ms`,
      `draws ${s.render.drawCalls}  tris ${s.render.triangles}  tex ${s.render.textures}  prog ${s.render.programs}`,
      `rate ${ses.frameRate ?? '-'} Hz  offered ${ses.supportedFrameRates ? ses.supportedFrameRates.join('/') : '-'}`,
      `eye ${ses.eyeViewport ?? '-'}  foveation ${ses.foveationActive ?? s.foveationRequested}`,
      `astc ${s.astc}  etc2 ${s.etc2}  bptc ${s.bptc}  s3tc ${s.s3tc}`,
      `maxTex ${s.maxTextureSize}  aniso ${s.maxAnisotropy}  ${s.three}`,
      `inputs ${ses.inputSources ? ses.inputSources.join(', ') : '-'}`,
      `teleports ${s.locomotion ? s.locomotion.teleports : 0}  turns ${s.locomotion ? s.locomotion.turns : 0}`,
      `gpu ${String(s.gpu).slice(0, 44)}`,
    ];
  }
}
