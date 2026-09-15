// A small text panel fixed in front of the camera. Used only for the Phase 0
// probe readout; it is not part of the showroom's real interface.

import * as THREE from 'three';

export class Hud {
  constructor(camera) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 1024;
    this.canvas.height = 512;
    this.ctx = this.canvas.getContext('2d');
    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(0.56, 0.28),
      new THREE.MeshBasicMaterial({ map: this.texture, transparent: true, toneMapped: false, depthTest: false })
    );
    this.mesh.renderOrder = 999;
    this.mesh.position.set(0, -0.24, -0.9);
    camera.add(this.mesh);
    this.setLines(['probe warming up…']);
  }

  get visible() { return this.mesh.visible; }
  set visible(v) { this.mesh.visible = v; }

  setLines(lines) {
    const { ctx, canvas } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(22,17,11,0.82)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#c79a3c';
    ctx.font = '600 30px Helvetica, Arial, sans-serif';
    ctx.fillText('PHASE 0 PROBE', 24, 44);
    ctx.fillStyle = '#efe7d6';
    ctx.font = '26px Menlo, monospace';
    lines.slice(0, 14).forEach((line, i) => ctx.fillText(line, 24, 86 + i * 30));
    this.texture.needsUpdate = true;
  }
}
