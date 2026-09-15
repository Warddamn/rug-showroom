# Rug Showroom (Meta Quest 3, WebXR)

Jaipur Living's VR rug showroom, rebuilt from the ground up for photoreal rugs on a Meta Quest 3. Opens from a web link in the Quest's browser. Nothing is installed on the headset.

This is **Phase 0**: one grey 8 ft × 10 ft slab at true size, teleport, snap-turn, and a probe readout that tells us what this headset and browser actually provide. Every later decision about texture sizes and rug counts depends on the numbers this page prints.

Live address: `https://warddamn.github.io/rug-showroom/`

## Open it on the Quest 3

1. Put the headset on, hold both controllers, and open **Browser** from the app grid.
2. Tap the address bar and type `warddamn.github.io/rug-showroom` then tap Go.
3. Tap the **bookmark icon** in the browser toolbar (a small ribbon shape) to save the page. A short form shows the name and address; leave them and tap **Save**. Next time: open Browser, tap the bookmark icon, choose **Bookmarks**, tap **Rug Showroom**.
4. Tap the big **ENTER VR** button at the bottom of the page. If the headset asks for permission, choose **Allow**. The browser may also show its own small headset button near the address bar; that does the same thing.
5. You are standing about 2 m in front of the near edge of the grey slab. Four rust-coloured posts mark its corners. The floor has a 1 ft grid with a heavier line every 5 ft. A dark readout floats below your view; it is the probe.

Controls:

- **Trigger** on either controller: hold to aim at the floor or the slab, release to teleport to the gold ring.
- **Right thumbstick** left or right: snap-turn 30 degrees.
- **Meta button, short press**: pauses VR and shows the flat browser page with **Resume** and **Quit** next to the address bar. The readout does not update while paused.
- **Do not hold the Meta button down.** Holding it about two seconds is the Quest's "reset view" and moves the slab to a new spot on your real floor. If that happens, teleport back and start the measurement over.
- To finish a session, tap **Quit** next to the address bar, or the page's **EXIT VR** button. The numbers from that session then appear on the page.

## The Phase 0 check

Before entering VR, make sure your boundary is roomscale with a clear patch of real floor at least 9 ft × 11 ft. Stepping outside the boundary switches to passthrough and interrupts the check.

1. **True size.** You cannot see a tape measure while in VR, so the controllers are your markers.
   - Enter VR. Pull the trigger once to teleport so the gold ring sits just beside one of the two near posts. From here until both controllers are on the floor: no trigger, no thumbstick, no Meta button.
   - Walk physically to the near-left post and set the left controller down on the real floor exactly under it. Walk to the near-right post and set the right controller down exactly under it.
   - Take the headset off. Measure between the two controllers with a tape. Target: 8 ft. Write down the reading.
   - Put the headset back on, pick up the controllers, and repeat with a near post and the far post on the same side. Target: 10 ft. If your room is too small for 10 ft, say so and skip it.
   - The moment both controllers are on the floor the Quest switches to hand tracking. The page ignores hand pinches on purpose, so an accidental pinch will not teleport you. The probe counts them as "ignoredHandPinches".
2. **Teleport.** Aim at the floor, release the trigger, confirm you land on the ring at standing height. Aim at the slab itself: the ring should sit on top of the slab, not vanish under it.
3. **Snap-turn.** Push the right stick left, then right. You should turn in place, not swing around the room.
4. **Comfort.** Turn your head quickly and look around the edges of the slab. Note any smearing, doubling or stutter.
5. **Numbers.** End the session with **Quit** or **EXIT VR**, then tap **Copy probe values** and paste the text into a message. If copying is blocked, take a screenshot of the flat page: hold the **Meta button** and pull the **right trigger**. Only do this on the flat page, never inside VR, because the held Meta button is also "reset view". The screenshot lands in the Quest's Files app and the Meta Horizon phone app.

What the numbers mean, in plain words:

| Line | What we learn |
|---|---|
| frame ms / fps / worst / pauses | Whether the headset holds its refresh rate. 11.1 ms is 90 Hz, 13.9 ms is 72 Hz. Pauses are Meta-button breaks and are excluded from the frame numbers. |
| rate / offered | Which refresh rates this browser offers and which one it chose. |
| eye … @1.0, native | Pixels each eye renders at the default size, and how much larger the display's own resolution is. Sets how sharp textures can ever look. |
| foveation asked / on layer | The blur level we asked for at the edges of view, and what the browser actually applied. |
| astc / etc2 / bptc / s3tc | Which compressed texture formats the browser exposes. Decides how rug artwork is encoded. |
| maxTex / aniso | The largest texture allowed and how sharp textures stay at grazing angles. |
| inputs | Whether both controllers are seen and how many thumbstick axes each reports. Hand tracking is not requested in Phase 0, so hands are not listed even when the controllers are down. |

Paste the probe JSON into `PROBE.md` once the check passes, then Claude tags the release `v0.0.1`.

## Run it locally (for Claude or a developer)

```bash
npm install
npm run dev
```

That serves `https://<this Mac's IP>:5173/` with a self-signed certificate. On the Quest, on the same Wi-Fi, open that address, tap **Advanced** and **Proceed** once, then it behaves like the live link. `npm run dev:http` serves plain `http://localhost:5174/` for desktop testing.

Desktop testing without a headset: add `?emu` to the URL. A Meta Quest 3 is emulated in the page with an on-screen control panel, using Meta's own Immersive Web Emulation Runtime. The emulator shows its own "Enter XR" offer at the top of the page as well.

## What is deliberately not here yet

No artwork, no construction packs, no wall of designs, no RugVault connection, no server, no downloaded controller models. Those arrive one phase at a time, each after a check on the real headset. The slab uses the exact material type the real rugs will use, so the sheen you see is the same shader.

## Publishing

Publishing is one command on the Mac, run by Claude after every verified change:

```bash
npm run deploy
```

It builds the site and pushes the result to the `gh-pages` branch, which GitHub Pages serves over HTTPS at the live address above.

A ready-made GitHub Actions workflow is kept in `docs/pages-workflow.yml.txt`. Moving it to `.github/workflows/pages.yml` would make GitHub build on every push to `main` instead. Two things must happen first: the GitHub login on this Mac needs the `workflow` permission (`gh auth refresh -s workflow`, which opens a browser sign-in), and on github.com the repo's **Settings > Pages > Build and deployment > Source** must be switched from **Deploy from a branch** to **GitHub Actions**. After that switch, `npm run deploy` no longer publishes anything; pushing to `main` does.
