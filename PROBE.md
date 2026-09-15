# Headset probe results

Fill one column per session on the real Quest 3. End the session first (Quit next to the address bar, or EXIT VR on the page), then tap "Copy probe values". The `render` block then says `last VR session (frozen at exit)`; those are the numbers to use. The Quest software version is under Settings > System > Software Update on the headset.

| Value | Session 1 | Session 2 |
|---|---|---|
| Date / Quest software version |  |  |
| Browser (from userAgent) |  |  |
| Frame rate chosen / offered (`session.frameRate`, `supportedFrameRates`) |  |  |
| Avg frame ms / worst frame ms / pauses (`render.avgFrameMs`, `render.worstFrameMs`, `session.pauses`) |  |  |
| Eye viewport at scale 1.0 / native scale (`session.eyeViewportAtScale1`, `session.nativeScale`) |  |  |
| astc / etc2 / bptc / s3tc |  |  |
| maxTextureSize / maxAnisotropy |  |  |
| Foveation asked / on layer (`session.foveationOnLayer`) |  |  |
| Input sources seen (`session.inputSources`) |  |  |
| Controllers-on-floor measurement, near posts (target 8 ft) |  |  |
| Controllers-on-floor measurement, near to far post (target 10 ft) |  |  |
| Teleport works / ring visible on slab / turn works |  |  |
| Comfort notes |  |  |

Raw JSON from each session goes below, verbatim.
