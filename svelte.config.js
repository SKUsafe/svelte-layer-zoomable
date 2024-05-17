import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter(),
    paths: { base: '/svelte-layer-zoomable' },
    prerender: {
      default: true,
    },
    package: {
      dir: 'dist',
      exports: (file) => file === 'index.ts', // Ensure this matches your entry file
      files: (file) => !file.startsWith('dev') // Include necessary files
    },
  },
};

export default config;
