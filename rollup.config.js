import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';
import strip from 'rollup-plugin-strip';


export default {
  entry: 'src/main.js',
  plugins: [
    nodeResolve({
      jsnext: true,
      browser: true,
    }),
    strip({debugger: true, sourceMap: false}),
    commonjs(),
    babel(),
  ],
  moduleName: 'Kaleidoscope',
  moduleId: 'kaleidoscope',
  targets: [
    {dest: 'dist/kaleidoscope.js', format: 'umd'},
    {dest: 'dist/kaleidoscope.iife.js', format: 'iife'},
    {dest: 'dist/kaleidoscope.es.js', format: 'es'},
  ],
};
