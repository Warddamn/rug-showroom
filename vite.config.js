import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

// `npm run dev`      -> https://<this Mac's IP>:5173/  (self-signed cert; the Quest can open it on the same Wi-Fi)
// `npm run dev:http` -> http://localhost:5174/          (plain http for desktop/emulator testing)
// `npm run build`    -> dist/ served by GitHub Pages under /rug-showroom/
export default defineConfig(({ command, mode }) => ({
  base: command === 'build' ? '/rug-showroom/' : '/',
  plugins: mode === 'https' ? [basicSsl()] : [],
  server: { host: true },
  build: { target: 'es2022', sourcemap: false },
}));
