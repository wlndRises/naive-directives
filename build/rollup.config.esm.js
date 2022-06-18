import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

const config = {
  input: 'src/index.js',
  external: ['vue'],
  plugins: [
    resolve(),
  ],
  output: [
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
