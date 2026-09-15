// Collects the device facts the plan needs before any texture size, rug count or
// frame budget can be trusted: what the browser exposes, what the session runs
// at, and what this scene costs. Every number is labelled with where it came from.

import * as THREE from 'three';

export class Probe {
  constructor({ renderer, camera, scene, controllers, emulated, foveationRequested }) {
    this.renderer = renderer;
    this.camera = camera;
    this.scene = scene;
    this.controllers = controllers;
    this.emulated = emulated;
    this.foveationRequested = foveationRequested;
    this.frameMsEma = 0;
    this.frames = 0;
    this.sessionFrames = 0;
    this.fpsWindowStart = 0;
    this.fps = 0;
    this.session = null;
    this.sessionSummary = null;
    this.lastSessionInfo = null;
    this.nativeScale = null;
    this.pauses = 0;
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
      foveationRequested: this.foveationRequested,
    };
  }

  onSessionStart(session) {
    this.session = session;
    this.worstMs = 0;
    this.frameMsEma = 0;
    this.sessionFrames = 0;
    this.pauses = 0;
    this.sessionSummary = null;
    this.lastSessionInfo = null;
    // Native scale: how much bigger the display's own resolution is than the
    // default render size. Read it now; it reports 0 once the session is over.
    try {
      this.nativeScale = (typeof XRWebGLLayer !== 'undefined' && typeof XRWebGLLayer.getNativeFramebufferScaleFactor === 'function')
        ? +XRWebGLLayer.getNativeFramebufferScaleFactor(session).toFixed(3) : null;
    } catch { this.nativeScale = null; }
  }

  onVisibilityChange(state) {
    if (state && state !== 'visible') this.pauses += 1;
  }

  onSessionEnd() {
    const info = this.lastSessionInfo || { presenting: false };
    this.sessionSummary = {
      ...info,
      presenting: false,
      endedAt: new Date().toISOString(),
      worstFrameMs: +this.worstMs.toFixed(1),
      avgFrameMs: +this.frameMsEma.toFixed(2),
      fps: this.fps,
      pauses: this.pauses,
    };
    this.session = null;
  }

  sessionInfo() {
    const s = this.session;
    if (!s) return { presenting: false };
    const st = s.renderState || {};
    const layer = (st.layers && st.layers[0]) || st.baseLayer || null;
    // Per-eye pixels at the default render scale (1.0). Two eyes share one
    // framebuffer on the classic layer path; projection layers report per-eye.
    let eye = null;
    if (layer && layer.framebufferWidth) eye = { w: layer.framebufferWidth / 2, h: layer.framebufferHeight };
    else if (layer && layer.textureWidth) eye = { w: layer.textureWidth, h: layer.textureHeight };
    const fov = layer && layer.fixedFoveation !== undefined ? layer.fixedFoveation : null;
    const sources = [];
    try {
      for (const src of s.inputSources) {
        const axes = src.gamepad && src.gamepad.axes ? src.gamepad.axes.length : 0;
        sources.push(`${src.handedness}:${src.targetRayMode} axes${axes}${src.hand ? ' hand' : ''}`);
      }
    } catch { /* ignore */ }
    const info = {
      presenting: true,
      frameRate: s.frameRate ?? null,
      supportedFrameRates: s.supportedFrameRates ? Array.from(s.supportedFrameRates) : null,
      eyeViewportAtScale1: eye ? `${Math.round(eye.w)}x${Math.round(eye.h)}` : null,
      nativeScale: this.nativeScale,
      nativeEyeViewport: eye && this.nativeScale ? `${Math.round(eye.w * this.nativeScale)}x${Math.round(eye.h * this.nativeScale)}` : null,
      foveationRequested: this.foveationRequested,
      foveationOnLayer: fov,
      referenceSpace: 'local-floor',
      visibility: s.visibilityState || null,
      pauses: this.pauses,
      inputSources: sources,
      environmentBlend: s.environmentBlendMode,
    };
    this.lastSessionInfo = info;
    return info;
  }

  tick(dt) {
    if (dt > 0) {
      this.frameMsEma = this.frameMsEma ? this.frameMsEma * 0.95 + dt * 0.05 : dt;
      if (this.session) this.sessionFrames += 1;
      // Skip the first 30 frames after entering VR (the 2D-to-VR transition).
      if (this.session && this.sessionFrames > 30 && dt > this.worstMs) this.worstMs = dt;
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
    const frozen = !this.session && this.sessionSummary;
    return {
      source: this.session ? 'live VR session' : (frozen ? 'last VR session (frozen at exit)' : 'flat page, not VR'),
      avgFrameMs: frozen ? this.sessionSummary.avgFrameMs : +this.frameMsEma.toFixed(2),
      fps: frozen ? this.sessionSummary.fps : this.fps,
      worstFrameMs: frozen ? this.sessionSummary.worstFrameMs : +this.worstMs.toFixed(1),
      drawCalls: info.render.calls,
      triangles: info.render.triangles,
      textures: info.memory.textures,
      geometries: info.memory.geometries,
      programs: info.programs ? info.programs.length : null,
    };
  }

  snapshot() {
    const loco = window.__app ? window.__app.locomotion : null;
    return {
      capturedAt: new Date().toISOString(),
      ...this.static,
      session: this.session ? this.sessionInfo() : (this.sessionSummary || { presenting: false }),
      render: this.renderStats(),
      locomotion: loco ? { teleports: loco.teleports, turns: loco.turns, ignoredHandPinches: loco.ignoredHandSelects } : null,
    };
  }

  asText() { return JSON.stringify(this.snapshot(), null, 2); }

  hudLines() {
    const s = this.snapshot();
    const ses = s.session;
    return [
      `frame ${s.render.avgFrameMs} ms  fps ${s.render.fps}  worst ${s.render.worstFrameMs} ms  pauses ${ses.pauses ?? 0}`,
      `draws ${s.render.drawCalls}  tris ${s.render.triangles}  tex ${s.render.textures}  prog ${s.render.programs}`,
      `rate ${ses.frameRate ?? '-'} Hz  offered ${ses.supportedFrameRates ? ses.supportedFrameRates.join('/') : '-'}`,
      `eye ${ses.eyeViewportAtScale1 ?? '-'} @1.0   native x${ses.nativeScale ?? '-'} = ${ses.nativeEyeViewport ?? '-'}`,
      `foveation asked ${s.foveationRequested}  on layer ${ses.foveationOnLayer ?? '-'}`,
      `astc ${s.astc}  etc2 ${s.etc2}  bptc ${s.bptc}  s3tc ${s.s3tc}`,
      `maxTex ${s.maxTextureSize}  aniso ${s.maxAnisotropy}  ${s.three}`,
      `inputs ${ses.inputSources ? ses.inputSources.join(', ') : '-'}`,
      `teleports ${s.locomotion ? s.locomotion.teleports : 0}  turns ${s.locomotion ? s.locomotion.turns : 0}`,
      `gpu ${String(s.gpu).slice(0, 44)}`,
    ];
  }
}
