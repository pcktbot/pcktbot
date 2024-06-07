import * as esbuild from 'esbuild';
import {sassPlugin} from 'esbuild-sass-plugin';
import htmlPlugin from '@chialab/esbuild-plugin-html';
import {clean} from 'esbuild-plugin-clean'

const cleanPlugin = () => clean({
  cleanOnStartPatterns: ['./dist/*']
});

const result = await esbuild.build({
  entryPoints: ['./src/index.html'],
  bundle: true,
  outdir: './dist',
  assetNames: 'assets/[name]-[hash]',
  chunkNames: '[ext]/[name]-[hash]',
  loader: {
    '.html': 'text',
    '.scss': 'css',
    '.jpg': 'file',
  },
  plugins: [cleanPlugin(), htmlPlugin(), sassPlugin()],
  minify: true,
  sourcemap: true,
  // target: 'es2015',
  platform: 'browser',
  format: 'esm',
  splitting: true,
  metafile: true,
});

console.log(result);