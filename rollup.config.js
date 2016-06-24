import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';
import strip from 'rollup-plugin-strip';


export default {
  entry: 'src/main.js',
  format: 'umd',
  plugins: [
    nodeResolve({
      jsnext: true,
      browser: true,
    }),
    strip({debugger: true, sourceMap: true}),
    commonjs(),
    babel(),
    uglify({}, minify),
  ],
  dest: 'dist/kaleidoscope.min.js',
  moduleName: 'Kaleidoscope',
};
