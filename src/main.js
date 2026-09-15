// Rug Showroom · Phase 0
// One grey 8x10 slab at true size, teleport + snap-turn, and a probe readout that
// reports what this headset and browser actually give us. Everything here is
// deliberately plain three.js (pinned 0.186.0) so every number is inspectable.

import * as THREE from 'three';
import { VRButton } from 'three/addons/webxr/VRButton.js';
import { XRControllerModelFactory } from 'three/addons/webxr/XRControllerModelFactory.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { Locomotion } from './locomotion.js';
import { Hud } from './hud.js';
import { Probe } from './probe.js';

const FT = 0.3048;
const RUG_W = 8 * FT;   // 2.438 m across
const RUG_L = 10 * FT;  // 3.048 m deep
const RUG_T = 0.012;    // 12 mm slab, roughly a hand-knotted pile + backing
const FLOOR_SIZE = 12;  // metres

const statusEl = document.getElementById('status');
const setStatus = (msg) => { statusEl.textContent = msg; };

// ---------------------------------------------------------------------------
// Optional desktop emulator. Loads only when there is no real WebXR runtime or
// when the page is opened with ?emu. On the Quest, navigator.xr exists and this
// whole branch is skipped, so the emulator never ships into the headset path.
// ---------------------------------------------------------------------------
async function maybeInstallEmulator() {
  const params = new URLSearchParams(location.search);
  const wantEmu = params.has('emu');
  if (!wantEmu && navigator.xr) return false;
  try {
    const { XRDevice, metaQuest3 } = await import('iwer');
    const device = new XRDevice(metaQuest3);
    // Desktop Chrome exposes navigator.xr with no headset behind it; when the
    // emulator is explicitly requested, let it replace that runtime.
    device.installRuntime({ forceInstall: wantEmu });
    window.__xrDevice = device; // exposed for automated checks
    if (params.get('emu') !== 'headless') {
      const { DevUI } = await import('@iwer/devui');
      new DevUI(device);
    }
    setStatus('Emulated Meta Quest 3 runtime installed (desktop testing only).');
    return true;
  } catch (err) {
    console.warn('Emulator not available:', err);
    setStatus('No WebXR runtime and the emulator failed to load.');
    return false;
  }
}

function makeGridTexture() {
  // 1 ft grid, heavier line every 5 ft, drawn once into a 2 m x 2 m tile.
  // 2 m is not a whole number of feet, so draw the tile at 1 ft resolution
  // over a 10 ft square instead and repeat it.
  const feet = 10, px = 1024, c = document.createElement('canvas');
  c.width = c.height = px;
  const g = c.getContext('2d');
  g.fillStyle = '#d9d2c4'; g.fillRect(0, 0, px, px);
  for (let i = 0; i <= feet; i++) {
    const p = Math.round(i * px / feet) + 0.5;
    g.strokeStyle = i % 5 === 0 ? 'rgba(60,50,36,0.55)' : 'rgba(60,50,36,0.22)';
    g.lineWidth = i % 5 === 0 ? 3 : 1.5;
    g.beginPath(); g.moveTo(p, 0); g.lineTo(p, px); g.stroke();
    g.beginPath(); g.moveTo(0, p); g.lineTo(px, p); g.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  const tile = feet * FT;
  tex.repeat.set(FLOOR_SIZE / tile, FLOOR_SIZE / tile);
  tex.anisotropy = 8;
  return tex;
}

function makeLabelTexture(text) {
  const c = document.createElement('canvas');
  c.width = 1024; c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#16110b'; g.fillRect(0, 0, c.width, c.height);
  g.fillStyle = '#efe7d6'; g.font = '600 120px Helvetica, Arial, sans-serif';
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(text, c.width / 2, c.height / 2 + 6);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

async function main() {
  const emulated = await maybeInstallEmulator();

  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.NeutralToneMapping;   // Khronos PBR Neutral: built for product colour
  renderer.toneMappingExposure = 1.0;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.xr.enabled = true;
  renderer.xr.setReferenceSpaceType('local-floor');
  renderer.xr.setFoveation(0.66); // Quest Browser snaps this to low/medium/high; medium to start
  document.body.appendChild(renderer.domElement);
  document.body.appendChild(VRButton.createButton(renderer));

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xe9e4da);

  // Neutral studio environment for sheen and reflections; no file download needed.
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.7;
  pmrem.dispose();

  const sun = new THREE.DirectionalLight(0xfff3df, 2.2);
  sun.position.set(3, 6, 2);
  scene.add(sun);

  // Floor with a 1 ft grid (heavier line every 5 ft) so a tape measure has references.
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(FLOOR_SIZE, FLOOR_SIZE).rotateX(-Math.PI / 2),
    new THREE.MeshStandardMaterial({ map: makeGridTexture(), roughness: 0.9, metalness: 0 })
  );
  floor.name = 'floor';
  scene.add(floor);

  // The rug slab: one opaque box, physical material with cloth sheen, no texture yet.
  const slabMat = new THREE.MeshPhysicalMaterial({
    color: 0x9a948a, roughness: 0.85, metalness: 0,
    sheen: 0.4, sheenRoughness: 0.8, sheenColor: new THREE.Color(0xd8d2c8),
  });
  const slab = new THREE.Mesh(new THREE.BoxGeometry(RUG_W, RUG_T, RUG_L), slabMat);
  slab.position.y = RUG_T / 2;
  slab.name = 'slab';
  scene.add(slab);

  // Corner posts so the tape measure has something to touch.
  const postGeo = new THREE.CylinderGeometry(0.01, 0.01, 0.12, 12);
  const postMat = new THREE.MeshStandardMaterial({ color: 0x9e3b1f, roughness: 0.6 });
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const post = new THREE.Mesh(postGeo, postMat);
    post.position.set(sx * RUG_W / 2, 0.06, sz * RUG_L / 2);
    scene.add(post);
  }

  // Label standing at the far edge of the slab.
  const label = new THREE.Mesh(
    new THREE.PlaneGeometry(1.2, 0.3),
    new THREE.MeshBasicMaterial({ map: makeLabelTexture('8 ft × 10 ft  ·  2.438 × 3.048 m'), toneMapped: false })
  );
  label.position.set(0, 0.5, -RUG_L / 2 - 0.15);
  scene.add(label);

  // Player rig: the camera and both controllers live inside this group, so moving
  // or turning the group moves the whole person. Spawn 2.2 m before the near edge.
  const player = new THREE.Group();
  player.position.set(0, 0, RUG_L / 2 + 2.2);
  scene.add(player);

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.05, 60);
  camera.position.set(0, 1.6, 0);
  player.add(camera);

  const modelFactory = new XRControllerModelFactory();
  const controllers = [];
  for (let i = 0; i < 2; i++) {
    const controller = renderer.xr.getController(i);
    controller.addEventListener('connected', (e) => { controller.userData.inputSource = e.data; });
    controller.addEventListener('disconnected', () => { controller.userData.inputSource = null; });
    player.add(controller);
    const grip = renderer.xr.getControllerGrip(i);
    grip.add(modelFactory.createControllerModel(grip));
    player.add(grip);
    controllers.push(controller);
  }

  const locomotion = new Locomotion({ renderer, scene, player, camera, controllers, floor, snapDegrees: 30 });
  const hud = new Hud(camera);
  const probe = new Probe({ renderer, camera, scene, controllers, emulated });

  const probeEl = document.getElementById('probe');
  document.getElementById('copyProbe').addEventListener('click', async () => {
    const text = probe.asText();
    try { await navigator.clipboard.writeText(text); setStatus('Copied. Paste it into a message to Claude.'); }
    catch { setStatus('Clipboard blocked in this browser. Take a screenshot instead: Meta button + right trigger.'); }
  });
  document.getElementById('toggleHud').addEventListener('click', (e) => {
    hud.visible = !hud.visible;
    e.target.textContent = hud.visible ? 'Hide in-VR readout' : 'Show in-VR readout';
  });

  renderer.xr.addEventListener('sessionstart', () => {
    probe.onSessionStart(renderer.xr.getSession());
    setStatus('VR session running.');
  });
  renderer.xr.addEventListener('sessionend', () => {
    probe.onSessionEnd();
    probeEl.textContent = probe.asText();
    setStatus('VR session ended. The numbers above are from that session. Tap "Copy probe values".');
  });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  let lastTime = 0, hudClock = 0, panelClock = 0;
  renderer.setAnimationLoop((time, frame) => {
    const dt = lastTime ? time - lastTime : 0;
    lastTime = time;
    probe.tick(dt, frame);
    locomotion.update(dt);

    hudClock += dt; panelClock += dt;
    if (hudClock > 250) { hudClock = 0; hud.setLines(probe.hudLines()); }
    if (panelClock > 1000 && !renderer.xr.isPresenting) { panelClock = 0; probeEl.textContent = probe.asText(); }

    renderer.render(scene, camera);
  });

  window.__app = { renderer, scene, camera, player, locomotion, probe, hud, slab };
}

main().catch((err) => { console.error(err); setStatus('Startup error: ' + err.message); });
