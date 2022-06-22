// rollup.config.js
import resolve from '@rollup/plugin-node-resolve'
import buble from '@rollup/plugin-buble'
import { terser } from 'rollup-plugin-terser'

const config = {
  input: 'src/index.js',
  external: ['vue'],
  plugins: [
    resolve(),
    buble(),
  ],
  output: [
    {
      file: 'lib/index.cjs.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: 'lib/index.cjs.min.js',
      format: 'cjs',
      exports: 'named',
      plugins: [
        terser({
          format: {
            comments: false
          }
        })
      ]
    },
    {
      file: 'lib/index.esm.js',
      format: 'es',
      sourcemap: true
    },
    {
      file: 'lib/index.esm.min.js',
      format: 'es',
      plugins: [
        terser({
          format: {
            comments: false
          }
        })
      ]
    }
  ]
}

export default config
