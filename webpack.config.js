const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vue2mapbox-gl.js',
    library: 'vue2MapboxGl'
  },
  externals: {
    // don't include lodash in the bundle, rename to lodash
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    },
    'mapbox-gl': {
      umd: 'mapbox-gl',
      root: 'mapbox-gl',
      global: 'mapbox-gl',
      commonjs2: 'mapbox-gl',
      commonjs: 'mapbox-gl',
      amd: 'mapbox-gl'
    },
    '@mapbox/mapbox-gl-geocoder': {
      umd: '@mapbox/mapbox-gl-geocoder',
      root: '@mapbox/mapbox-gl-geocoder',
      global: '@mapbox/mapbox-gl-geocoder',
      commonjs2: '@mapbox/mapbox-gl-geocoder',
      commonjs: '@mapbox/mapbox-gl-geocoder',
      amd: '@mapbox/mapbox-gl-geocoder'
    },
    'vue': {
      umd: 'Vue',
      global: 'Vue',
      root: 'Vue',
      commonjs2: 'vue',
      commonjs: 'vue',
      amd: 'vue'
    }

  },
  module: {
    rules: [
      // Load vue files
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin(),
    new BundleAnalyzerPlugin({analyzerMode: 'static'})
  ]
}
