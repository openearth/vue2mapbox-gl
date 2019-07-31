# vue2mapbox-gl
[![Build Status](https://travis-ci.org/openearth/vue2mapbox-gl.svg?branch=master)](https://travis-ci.org/openearth/vue2mapbox-gl)
[![npm version](https://badge.fury.io/js/vue2mapbox-gl.svg)](https://badge.fury.io/js/vue2mapbox-gl)

> Vue components for mapbox-gl. Api similar to Vue2Leaflet.


## Install

```
$ npm install --save vue2mapbox-gl
```


## Usage
Import using umd, for example using an es6 import.

```js
import Vue2MapboxGL from 'vue2mapbox-gl';

// You might want to import the relevant css, for example:
import 'mapbox-gl/dist/mapbox-gl.css';
// for the v-mapbox-geocoder
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

// Use the plugin
Vue.use(Vue2MapboxGL);
```

## API
Here are some simple examples. You can find more examples if you run the storybook using `npm run storybook`.

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
>
</v-mapbox>
```
Using the example above you can use the map reference available from `$refs.map.map` to access the mapbox map object.
For example in the mounted method:

``` js
mounted() {
  let map = this.$refs.map.map
  map.on('load', () => {
  map.addLayer(style)
})
```

You can also add the other components, for example the controls.
``` html
<v-mapbox
  access-token="pk...."
  map-style="mapbox://styles/mapbox/satellite-streets-v10"
>
 <v-mapbox-navigation-control></v-mapbox-navigation-control>
</v-mapbox>
```

Or you can add a custom component as a layer
``` html
<v-mapbox
  access-token="pk...."
  map-style="mapbox://styles/mapbox/satellite-streets-v10"
>
 <custom-layer></custom-layer>
</v-mapbox>
```

In this approach you can implement a component with a method `deferredMountedTo`. This idea was taken from Vue2Leaflet. Another approach is to use the inject functionality of vue. This is a minimal example.

``` js
export default {
  name: 'custom-layer',
  render() {
    // you
    return this.$slots.default
  },
  methods: {
    deferredMountedTo(map) {
      console.log('CustomLayer got a map')
    }
  }
}
```

You can also use an `inject: ['getMap']`, to access the map in your component.

## Styling

Mapbox adds a `mapboxgl-map` class to the main element. You can style that element so the element fits it's parent container.

``` css
.mapboxgl-map {
  width: 100%;
  height: 100%;
}
```


## Development
Please feel free to submit pull requests or fork the repository. You can test the current codebase  with `npm run test` and some examples  are  available in the storybook, which you can start by `npm run storybook`.


## License

GPLv3 © [Fedor Baart](https://github.com/openearth/vue2mapbox-gl)
