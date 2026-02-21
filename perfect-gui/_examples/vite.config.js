import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: 'src',
    base: './',
    build: {
        outDir: '../../',
        emptyOutDir: false, // Important so we don't wipe the project root
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                fullpage: resolve(__dirname, 'src/fullpage.html'),
                single: resolve(__dirname, 'src/single.html'),
                threejs: resolve(__dirname, 'src/threejs.html'),
                demo: resolve(__dirname, 'src/demo.html'),
            },
            output: {
                entryFileNames: '[name].bundle.js',
                assetFileNames: '[name].[ext]',
            },
        },
    },
});
