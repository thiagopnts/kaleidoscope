import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import strip from 'rollup-plugin-strip';


const targets = [
    {dest: 'dist/kaleidoscope.js', format: 'umd'},
    {dest: 'dist/kaleidoscope.iife.js', format: 'iife'},
];

if (process.env.BABEL_ENV !== 'production') {
  targets.push({dest: 'dist/kaleidoscope.es.js', format: 'es'})
}

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
  amd: { id: 'kaleidoscope' },
  targets: targets,
};
