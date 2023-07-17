import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'

import { defineConfig, loadEnv } from 'vite'

export default ({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    return defineConfig({
      define: {
        "process.env": env,
      },
      plugins: [vue()],
      server: {
        host: true,
      },
      resolve: {
        alias: {
            find: '@',
            replacement: 'src',
          "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
        extensions: ['.vue', '.js']
      },
    });
  };