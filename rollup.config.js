export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/amd/bundle.amd.js',
      format: 'amd',
      sourcemap: false,
    },
    {
      file: 'dist/cjs/bundle.cjs.js',
      format: 'cjs',
      sourcemap: false,
    },
    {
      file: 'dist/umd/bundle.umd.js',
      format: 'umd',
      name: 'example',
      sourcemap: false,
    },
    {
      file: 'dist/es/bundle.es.js',
      format: 'es',
      sourcemap: false,
    },
    {
      file: 'dist/iife/bundle.iife.js',
      format: 'iife',
      name: 'example',
      sourcemap: false,
    },
    {
      file: 'dist/system/bundle.system.js',
      format: 'system',
      sourcemap: false,
    },
  ]
}
