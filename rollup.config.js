const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const babel = require('rollup-plugin-babel')
const {terser} = require('rollup-plugin-terser')

const suffix = process.env.USE_POLYFILLS == 'on' ? '.polyfilled' : ''

module.exports = {
  external: [
    'basekits', 'event-emitter-object'
  ],
  input: 'src/index.js',
  output: [
    {
      format: 'amd',
      file: 'dist/local-storage-pro.amd' + suffix + '.js'
    },
    {
      format: 'cjs',
      file: 'dist/local-storage-pro.cjs' + suffix + '.js'
    },
    {
      format: 'es',
      file: 'dist/local-storage-pro.es' + suffix + '.js'
    },
    {
      format: 'iife',
      file: 'dist/local-storage-pro.iife' + suffix + '.js',
      name: 'LocalStoragePro',
      globals: {
        'basekits': 'Basekits',
        'event-emitter-object': 'EventEmitterObject'
      }
    },
    {
      format: 'umd',
      file: 'dist/local-storage-pro.umd' + suffix + '.js',
      name: 'LocalStoragePro',
      globals: {
        'basekits': 'Basekits',
        'event-emitter-object': 'EventEmitterObject'
      }
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel(),
    terser({sourcemap: false})
  ]
}
