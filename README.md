# vue2mapbox-gl [![Build Status](https://travis-ci.org/SiggyF/vue2mapbox-gl.svg?branch=master)](https://travis-ci.org/SiggyF/vue2mapbox-gl) [![Coverage Status](https://coveralls.io/repos/github/SiggyF/vue2mapbox-gl/badge.svg?branch=master)](https://coveralls.io/github/SiggyF/vue2mapbox-gl?branch=master)

> Vue components for mapbox-gl. Api similar to Vue2Leaflet.


## Install

```
$ npm install --save vue2mapbox-gl
```


## Usage
Import using umd, for example using an es6 import.

```js
import Vue2MapboxGL from 'vue2mapbox-gl';

// Use the plugin
Vue.use(Vue2MapboxGL);
```

## API

```html

<v-mapbox
  access-token="pk...."
  map-style="mapbox://styles/mapbox/satellite-streets-v10"
  :center="[52, 3]"
  :zoom="10"
  :pitch="60"
  :bearing="-132"
  :min-zoom="5"
  id="map"
  ref="map"
></v-mapbox>

```


## License

GPLv3 © [Fedor Baart](https://github.com/openearth/vue2mapbox-gl)
