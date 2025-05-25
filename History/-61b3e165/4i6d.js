import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default defineConfig({
  server: {
    port: 3000,
    open: true,
    cors: true,
    hmr: {
      overlay: true
    },
    watch: {
      usePolling: true
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Место для глобальных переменных, если потребуется
      }
    },
    postcss: {
      plugins: [
        autoprefixer(),
        cssnano({
          preset: ['default', {
            discardComments: {
              removeAll: true,
            },
          }]
        })
      ],
    },
  },
  build: {
    minify: 'terser',
    cssMinify: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
  },
}); 