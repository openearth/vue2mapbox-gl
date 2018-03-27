const vue = require('rollup-plugin-vue');
const buble = require('rollup-plugin-buble');

export default {
  name: 'Vue2MapboxGL',
  input: 'src/main.js',
  output: {
    file: 'dist/vue2mapbox-gl.js',
    format: 'umd',
    sourcemap: true
  },
  globals: {
    lodash: '_',
    'mapbox-gl': 'mapbox-gl'
  },
  plugins: [
    // vue components
    vue({
      compileTemplate: true,
      css: 'dist/bundle.css'
    }),
    // es2015
    buble()
  ]
};
