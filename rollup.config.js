import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import analyze from 'rollup-plugin-analyzer';

const analyzeBundle = !!process.env.ANALYZE_BUNDLE;
const production = !!process.env.PRODUCTION;

const plugins = [
  commonjs(),
  nodeResolve({ jsnext: true, browser: true, preferBuiltins: true }),
  babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
  analyzeBundle && analyze(),
];

const name = 'Kaleidoscope';
const output = [
    {
      file: 'dist/kaleidoscope.js',
      format: 'umd',
      sourcemap: true,
      name
    },
    {
      file: 'dist/kaleidoscope.iife.js',
      format: 'iife',
      sourcemap: true,
      name
    },
    production && {
      file: 'dist/kaleidoscope.es.js',
      format: 'es',
      sourcemap: true,
      name
    },
    production && {
      file: 'dist/kaleidoscope.min.js',
      format: 'umd',
      sourcemap: true,
      name,
      plugins: terser()
    }
];

export default {
  input: 'src/main.js',
  output,
  plugins
};
