const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = module.exports = {
  plugins: [new BundleAnalyzerPlugin()]
};

// export to web loadable objects
config.target = 'web';

// Set context to root of project

// Client entry
config.entry = {
  Vue2MapboxGL: path.resolve(__dirname, 'src/main')
};

// Basic output config
config.output = {
  path: path.resolve(__dirname, 'dist'),
  filename: 'vue2mapbox-gl.js',
  library: ["Vue2MapboxGL"],
  libraryTarget: 'umd'
};

const externals = {
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
  },
  'lodash': {
    umd: 'lodash',
    global: '_',
    root: '_',
    commonjs2: 'lodash',
    commonjs: 'lodash',
    amd: 'lodash'
  }
};
// for node target, use nodeexternals [nodeExternals()];
config.externals = externals;
// Resolver config
config.resolve = {
  extensions: ['.js', '.vue'],
  enforceExtension: false
};

config.resolveLoader = {
  modules: config.resolve.modules
};

config.module = {
  loaders: [
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      // important: exclude files in node_modules, otherwise it's going to be really slow!
      exclude: /node_modules|vendor/
    },
    {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    },
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.output.filename = "vue2mapbox-gl.min.js"
  config.devtool = '#source-map';

  // Pass build environment inside bundle
  // This will strip comments in Vue code & hort-circuits all Vue.js warning code
  config.plugins.push(new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }));

  // The UglifyJsPlugin will no longer put loaders into minimize mode, and the debug option has been deprecated.
  config.plugins.push(new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }));

  // Minify with dead-code elimination
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {warnings: false},
    sourceMap: true
  }));
} else {
  config.devtool = '#eval-source-map';
}
