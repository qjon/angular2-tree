import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'tmp/esm2015/angular2-tree.js',
  output: {
    file: 'dist/esm2015/angular2-tree.js',
    format: 'es'
  },
  external: ['rxjs'],
  plugins: [
    resolve(),
    commonjs()
  ]
}
