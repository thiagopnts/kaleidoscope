import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

const name = 'Kaleidoscope';
const output = [
    {file: 'dist/kaleidoscope.js', format: 'umd', name},
    {file: 'dist/kaleidoscope.iife.js', format: 'iife', name},
];

if (process.env.BABEL_ENV !== 'production') {
  output.push({file: 'dist/kaleidoscope.es.js', format: 'es'})
}

export default {
  input: 'src/main.js',
  output,
  plugins: [
    nodeResolve({
      jsnext: true,
      browser: true,
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
  ],
};
