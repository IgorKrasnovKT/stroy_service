import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      svgrOptions: { exportType: 'named', ref: true, svgo: false, titleProp: true },
      include: '**/*.svg',
    }),
    cssInjectedByJsPlugin({
      dev: {
        enableDev: true
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: function ({ name }) {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'assets/img/[name]-[hash][extname]';
          }

          if (/\.css$/.test(name ?? '')) {
            return 'assets/css/[name]-[hash][extname]';
          }

          if (/.(png|woff|woff2|eot|ttf)/.test(name ?? '')) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  // Функция которая поможет решить проблему путей
  experimental: {
    renderBuiltUrl: function (filename: string, { hostId, hostType, type }: { hostId: string, hostType: 'js' | 'css' | 'html', type: 'public' | 'asset' }) {
      if (type === 'asset') {
        if (hostType === 'css') {
          const stringRemove = 'assets';
          const stringLength = stringRemove.length;
          const stringPesence = filename.indexOf(stringRemove);
          if (-1 !== stringPesence) {
            console.log('..' + filename.substring(stringLength));
            return '..' + filename.substring(stringLength);
          }
        }
      }
    }
  },
})
