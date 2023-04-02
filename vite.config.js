import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import miniCssExtract from 'mini-css-extract-plugin';

// ...

export default defineConfig({
  plugins: [
    reactRefresh(),
    new miniCssExtract({
      filename: '[name].[contenthash].css',
    }),
  ],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
    postcss: {
      plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {
    exclude: ['bootstrap'],
  },
});
