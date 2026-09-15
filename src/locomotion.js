// Teleport + snap-turn for a player rig, following the official three.js
// webxr_vr_teleport example for the pointing/raycast part, but moving a rig
// group instead of swapping reference spaces so that turning about the head is
// a plain rotation.
//
// Trigger (either controller): while held, a marker shows where you would land;
// release to teleport there. Right thumbstick left/right: snap-turn.

import * as THREE from 'three';

const UP = new THREE.Vector3(0, 1, 0);

export class Locomotion {
  constructor({ renderer, scene, player, camera, controllers, floor, snapDegrees = 30 }) {
    this.renderer = renderer;
    this.player = player;
    this.camera = camera;
    this.controllers = controllers;
    this.floor = floor;
    this.snapAngle = THREE.MathUtils.degToRad(snapDegrees);
    this.raycaster = new THREE.Raycaster();
    this.tmpMatrix = new THREE.Matrix4();
    this.tmpVec = new THREE.Vector3();
    this.headWorld = new THREE.Vector3();
    this.target = null;
    this.turnArmed = true;
    this.teleports = 0;
    this.turns = 0;

    this.marker = new THREE.Mesh(
      new THREE.RingGeometry(0.18, 0.24, 40).rotateX(-Math.PI / 2),
      new THREE.MeshBasicMaterial({ color: 0xc79a3c, toneMapped: false })
    );
    this.marker.position.y = 0.005;
    this.marker.visible = false;
    scene.add(this.marker);

    for (const c of controllers) {
      c.add(this.buildRay());
      c.addEventListener('selectstart', () => { c.userData.selecting = true; });
      c.addEventListener('selectend', () => { c.userData.selecting = false; this.commitTeleport(); });
    }
  }

  buildRay() {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, -1], 3));
    const ray = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0xc79a3c, toneMapped: false }));
    ray.scale.z = 6;
    return ray;
  }

  headPosition(out) {
    // Always read the rig's own camera. In XR three.js copies the tracked head
    // pose into this camera's local transform every frame, and because it is a
    // child of the rig its world position includes the rig's position and turn.
    // (renderer.xr.getCamera() lives outside the scene graph, so asking it for a
    // world position drops the rig transform and pivots turns around the wrong point.)
    return this.camera.getWorldPosition(out);
  }

  commitTeleport() {
    if (!this.target) return;
    this.headPosition(this.headWorld);
    // Move the rig so the head lands on the target, keeping height untouched.
    this.player.position.x += this.target.x - this.headWorld.x;
    this.player.position.z += this.target.z - this.headWorld.z;
    this.teleports += 1;
    this.target = null;
    this.marker.visible = false;
  }

  snapTurn(direction) {
    const angle = direction * this.snapAngle;
    this.headPosition(this.headWorld);
    // Rotate the rig about the head's vertical axis so the person turns in place.
    this.player.position.sub(this.headWorld);
    this.player.position.applyAxisAngle(UP, angle);
    this.player.position.add(this.headWorld);
    this.player.rotation.y += angle;
    this.turns += 1;
  }

  readThumbstickX(controller) {
    const src = controller.userData.inputSource;
    const gp = src && src.gamepad;
    if (!gp || !gp.axes) return 0;
    // xr-standard mapping: axes[2], axes[3] are the thumbstick; some devices only expose two axes.
    if (gp.axes.length >= 4) return gp.axes[2] || 0;
    if (gp.axes.length >= 2) return gp.axes[0] || 0;
    return 0;
  }

  update() {
    // Teleport aim: whichever controller is holding its trigger.
    this.target = null;
    for (const c of this.controllers) {
      if (!c.userData.selecting) continue;
      this.tmpMatrix.identity().extractRotation(c.matrixWorld);
      this.raycaster.ray.origin.setFromMatrixPosition(c.matrixWorld);
      this.raycaster.ray.direction.set(0, 0, -1).applyMatrix4(this.tmpMatrix);
      const hits = this.raycaster.intersectObject(this.floor, false);
      if (hits.length) { this.target = hits[0].point.clone(); break; }
    }
    this.marker.visible = !!this.target;
    if (this.target) this.marker.position.set(this.target.x, 0.005, this.target.z);

    // Snap-turn on the right hand thumbstick, one turn per push.
    let x = 0;
    for (const c of this.controllers) {
      const src = c.userData.inputSource;
      if (src && src.handedness === 'right') { x = this.readThumbstickX(c); break; }
    }
    if (Math.abs(x) > 0.7 && this.turnArmed) { this.snapTurn(x > 0 ? -1 : 1); this.turnArmed = false; }
    if (Math.abs(x) < 0.3) this.turnArmed = true;
  }
}
