# Rug Showroom (Meta Quest 3, WebXR)

Jaipur Living's VR rug showroom, rebuilt from the ground up for photoreal rugs on a Meta Quest 3. Opens from a web link in the Quest's browser. Nothing is installed on the headset.

This is **Phase 0**: one grey 8 ft × 10 ft slab at true size, teleport, snap-turn, and a probe readout that tells us what this headset and browser actually provide. Every later decision about texture sizes and rug counts depends on the numbers this page prints.

## Open it on the Quest 3

1. Put the headset on and open **Browser** from the app grid.
2. Tap the address bar and type the link exactly as written in the Pages URL section below.
3. Tap the **star** in the address bar to bookmark it so you never type it again.
4. Tap the big **ENTER VR** button at the bottom of the page. If the headset asks for permission, choose **Allow**.
5. You are standing about 2 m in front of the near edge of the grey slab. Four rust-coloured posts mark its corners. The floor has a 1 ft grid with a heavier line every 5 ft.

Controls:

- **Trigger** on either controller: hold to aim at the floor, release to teleport to the gold ring.
- **Right thumbstick** left or right: snap-turn 30 degrees.
- **Meta button**: pause or leave VR. Back on the flat page, the probe numbers from that session are shown.

## The Phase 0 check

Do these in the headset and tell Claude the result of each:

1. **True size.** Lay a tape measure on the real floor. Walk to two corner posts of the slab. The distance between the near two posts should read 8 ft, and between a near and a far post 10 ft, within an inch or two. Note the actual readings.
2. **Teleport.** Aim at the floor, release the trigger, confirm you land on the ring and stay at standing height.
3. **Snap-turn.** Push the right stick left, then right. You should turn in place, not swing around the room.
4. **Comfort.** Turn your head quickly and look around the edges of the slab. Note any smearing, doubling or stutter.
5. **Numbers.** Read the in-VR readout, or leave VR and tap **Copy probe values**, then paste it into a message. If copying is blocked, take a screenshot: hold the **Meta button** and pull the **right trigger**. The screenshot lands in the Quest's Files app and the Meta Horizon phone app.

What the numbers mean, in plain words:

| Line | What we learn |
|---|---|
| frame ms / fps / worst | Whether the headset holds its refresh rate. 11.1 ms is 90 Hz, 13.9 ms is 72 Hz. |
| rate / offered | Which refresh rates this browser offers and which one it chose. |
| eye | How many pixels each eye renders. Sets how sharp textures can ever look. |
| astc / etc2 / bptc / s3tc | Which compressed texture formats the browser exposes. Decides how rug artwork is encoded. |
| maxTex / aniso | The largest texture allowed and how sharp textures stay at grazing angles. |
| foveation | Whether the browser accepted the medium setting or snapped to something else. |
| inputs | Whether both controllers are seen, with thumbsticks, and whether hands are tracked. |

Paste the probe JSON into the table in `PROBE.md` once the check passes, then Claude tags the release `v0.0.1`.

## Run it locally (for Claude or a developer)

```bash
npm install
npm run dev
```

That serves `https://<this Mac's IP>:5173/` with a self-signed certificate. On the Quest, on the same Wi-Fi, open that address, tap **Advanced** and **Proceed** once, then it behaves exactly like the Pages link. `npm run dev:http` serves plain `http://localhost:5174/` for desktop testing.

Desktop testing without a headset: add `?emu` to the URL. A Meta Quest 3 is emulated in the page with an on-screen control panel, using Meta's own Immersive Web Emulation Runtime.

## What is deliberately not here yet

No artwork, no construction packs, no wall of designs, no RugVault connection, no server. Those arrive one phase at a time, each after a check on the real headset. The slab uses the exact material type the real rugs will use, so the sheen you see is the same shader.

## Pages URL

Published automatically from the `main` branch by GitHub Actions. The address is `https://warddamn.github.io/rug-showroom/`.
