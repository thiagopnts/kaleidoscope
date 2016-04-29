import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/main.js',
  dest: 'dist/360viewer.rollup.js',
  format: 'umd',
  moduleName: 'ThreeSixtyViewer',
  plugins: [
    nodeResolve(),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/threejs360/index.js': [
          'Object3D',
          'VideoTexture',
          'LinearFilter',
          'Scene',
          'Vector3',
          'PerspectiveCamera',
          'RGBFormat',
          'Math',
          'Vector2',
          'Quaternion',
          'Euler',
          'TextureLoader',
          'WebGLRenderer',
          'SphereGeometry',
          'Matrix4',
          'MeshBasicMaterial',
          'Mesh',
          'PointLight',
        ]
      }
    }),
    babel({
      exclude: 'node_modules/**',
      presets: 'es2015-rollup',
    }),
  ],
}

