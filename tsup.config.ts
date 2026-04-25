import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    server: 'src/server.ts',
    'server/stt/route': 'src/server/stt/route.ts',
    'server/tts/synthesize/route': 'src/server/tts/synthesize/route.ts',
  },
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  clean: true,
  external: ['react', 'react-dom', 'next'],
});
