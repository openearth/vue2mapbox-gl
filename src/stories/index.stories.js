/* eslint-disable react/react-in-jsx-scope */

import { storiesOf  } from '@storybook/vue';
import { withKnobs, button, number } from '@storybook/addon-knobs';

import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
// needed for  the  v-mapbox-geocoder
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'
import Vue from 'vue'
import Vue2MapboxGl from '../main.js'

Vue.use(Vue2MapboxGl)

const mapTemplate = `
<v-mapbox
 map-style="mapbox://styles/mapbox/satellite-streets-v10"
 ref="map"
 access-token="pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
 style="height: 300px;"
/>
`

const zoomTemplate = `
<v-mapbox
 map-style="mapbox://styles/mapbox/satellite-streets-v10"
 :center="center"
 :zoom="zoom"
 ref="map"
 access-token="pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
 style="height: 300px;"
/>
`

const navigationTemplate = `
<v-mapbox
 map-style="mapbox://styles/mapbox/satellite-streets-v10"
 access-token="pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
 style="height: 300px;"
>
 <v-mapbox-navigation-control></v-mapbox-navigation-control>
 <v-mapbox-navigation-control position="top-left" :options="{showCompass: false}"></v-mapbox-navigation-control>
</v-mapbox>
`

const controlTemplate = `
<v-mapbox
 map-style="mapbox://styles/mapbox/satellite-streets-v10"
 access-token="pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
 style="height: 300px;"
>
 <v-mapbox-geolocate-control></v-mapbox-geolocate-control>
 <v-mapbox-geocoder position="top-left"></v-mapbox-geocoder>
</v-mapbox>
`

const controlScaleTemplate = `
<v-mapbox
 map-style="mapbox://styles/mapbox/satellite-streets-v10"
 access-token="pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
 style="height: 90vh;"
>
 <v-mapbox-scale-control position="bottom-right"></v-mapbox-scale-control>
</v-mapbox>
`

const styleTemplate = `
<v-mapbox
 :map-style="style"
 access-token="pk.eyJ1IjoiZ2xvYmFsLWRhdGEtdmlld2VyIiwiYSI6ImNqdG9lYWQ3NTFsNWk0M3Fqb2Q5dXBpeWUifQ.3DvxuGByM33VNa59rDogWw"
 style="height: 300px;"
>
 <v-mapbox-navigation-control></v-mapbox-navigation-control>
</v-mapbox>
`


const nonInteractiveTemplate = `
<v-mapbox
 map-style="mapbox://styles/mapbox/satellite-streets-v10"
 access-token="pk.eyJ1IjoiZ2xvYmFsLWRhdGEtdmlld2VyIiwiYSI6ImNqdG9lYWQ3NTFsNWk0M3Fqb2Q5dXBpeWUifQ.3DvxuGByM33VNa59rDogWw"
 style="height: 300px;"
 :interactive="false"
>
</v-mapbox>
`

const canvasTemplate = `
<div>
<v-mapbox
 map-style="mapbox://styles/mapbox/satellite-streets-v10"
 access-token="pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
 :preserve-drawing-buffer="true"
 ref="map"
 style="height: 300px;"
/>
<h2>A rendered map should appear below</h2>
</div>
`

const injectTemplate = `
<v-mapbox
 map-style="mapbox://styles/mapbox/satellite-streets-v10"
 access-token="pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
 style="height: 300px;"
>
 <v-mapbox-geolocate-control v-if="geoLocateControl"></v-mapbox-geolocate-control>
</v-mapbox>
`

const layerA = {
  'id': 'a',
  'type': 'fill',
  'source': {
    'type': 'geojson',
    'data': {
      'type': 'Feature',
      'geometry': {
        'type': 'Polygon',
        'coordinates': [
          [
            [-1, 49],
            [-1, 61],
            [11, 61],
            [11, 49],
            [-1, 49]
          ]
        ]
      }
    }
  },
  'layout': {
    'visibility': 'visible'
  },
  'paint': {
    'fill-color': '#0f0',
    'fill-opacity': 1
  }
}

const layerB = {
  'id': 'b',
  'type': 'fill',
  'source': {
    'type': 'geojson',
    'data': {
      'type': 'Feature',
      'geometry': {
        'type': 'Polygon',
        'coordinates': [
          [
            [0,  50],
            [0, 60],
            [10, 60],
            [10, 50],
            [0, 50]
          ]
        ]
      }
    }
  },
  'layout': {},
  'paint': {
    'fill-color': '#f00',
    'fill-opacity': 1
  }
}

const sortingTemplate = `
<v-mapbox
 :map-style="style"
 access-token="pk.eyJ1IjoiZ2xvYmFsLWRhdGEtdmlld2VyIiwiYSI6ImNqdG9lYWQ3NTFsNWk0M3Fqb2Q5dXBpeWUifQ.3DvxuGByM33VNa59rDogWw"
 style="height: 300px;"
 :center="[0, 0]"
>
 <!-- green (we want this on top) -->
 <v-mapbox-layer :options="layerA"></v-mapbox-layer>
 <!-- red -->
 <v-mapbox-layer :options="layerB"></v-mapbox-layer>
</v-mapbox>
`

const dynamicLayersTemplate = `
<v-mapbox
 :map-style="style"
 access-token="pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
 style="height: 300px;"
 :center="center"
>
  <v-mapbox-layer v-for="layer in layers" :options="layer" :key="layer.id" :opacity="opacity" />
</v-mapbox>
`

const clickableLayersTemplate = `
<v-mapbox
 :map-style="style"
 access-token="pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
 style="height: 300px;"
 :center="center"
>
  <v-mapbox-layer v-for="layer in layers" :options="layer" :key="layer.id" :clickable="true" @click="onLayerClick" />
</v-mapbox>
`

const styleAndLayerTemplate = `
<v-mapbox
 access-token="pk.eyJ1IjoiZ2xvYmFsLWRhdGEtdmlld2VyIiwiYSI6ImNqdG9lYWQ3NTFsNWk0M3Fqb2Q5dXBpeWUifQ.3DvxuGByM33VNa59rDogWw"
 :map-style="style"
 style="height: 300px;"
 :center="[0, 0]"
>
  <v-mapbox-layer :options="layerA"></v-mapbox-layer>
</v-mapbox>
`

storiesOf('Basic map', module)
  .add('map', () => {
    return {
      template: mapTemplate
    }
  })
  .add('map with center and zoom', () => {
    return {
      data () {
        return {
          center: [4, 52],
          zoom: 10
        }
      },
      template: zoomTemplate,
      mounted () {
        button('random center', () => {
          this.center = [Math.random() * 50, Math.random() * 50]
        })
      }
    }
  })

  .add('map with center and layers', () => {
    return {
      data () {
        return {
          center: [4, 52],
          zoom: 5
        }
      },
      template: zoomTemplate,
      mounted () {
        let map = this.$refs.map.map
        map.on('load', () => {
          map.addLayer(layerA)
        })
        button('random opacity', () => {
          let opacity = Math.random()
          map.setPaintProperty('a', 'fill-opacity', opacity)
        })
        button('toggle visibility', () => {
          let visibility = map.getLayoutProperty('a', 'visibility')
          if (visibility === 'visible')  {
            visibility = 'none'
          } else {
            visibility = 'visible'
          }
          map.setLayoutProperty('a', 'visibility', visibility)
        })
      }
    }
  })

storiesOf('Map controls', module)
  .addDecorator(withKnobs)
  .add('map with navigation control', () => {
    return {
      template: navigationTemplate
    }
  })
  .add('map with geolocate control and geocoder', () => {
    return {
      template: controlTemplate
    }
  })
  .add('map with scale control', () => {
    return {
      template: controlScaleTemplate
    }
  })
  .add('add/remove control', () => {
    return {
      template: injectTemplate,
      data () {
        return {
          geoLocateControl: true
        }
      },
      mounted () {
        button('toggle control', () => {
          this.geoLocateControl = !this.geoLocateControl
        })
      }
    }
  })

storiesOf('Map events', module)
  .addDecorator(withKnobs)
  .add('style change', () => {
    return {
      template: styleTemplate,
      data () {
        return {
          style: 'mapbox://styles/global-data-viewer/cjtss3jfb05w71fmra13u4qqm'
        }
      },
      mounted () {
        this.dark()
        button('dark', () => {
          this.dark()
        })
        button('light', () => {
          this.light()
        })
      },
      methods: {
        dark () {
          this.style = 'mapbox://styles/global-data-viewer/cjtss3jfb05w71fmra13u4qqm'
        },
        light () {
          this.style = 'mapbox://styles/global-data-viewer/cjtslsula05as1fppvrh7n4rv'
        }
      }
    }
  })
  .add('layer order', () => {
    return {
      template: sortingTemplate,
      data () {
        return {
          style: 'mapbox://styles/global-data-viewer/cjtss3jfb05w71fmra13u4qqm',
          layerA,
          layerB
        }
      },
    }
  })
  .add('add and remove layers', () => {
    return {
      template: dynamicLayersTemplate,
      data: () => ({
        style: 'mapbox://styles/global-data-viewer/cjtss3jfb05w71fmra13u4qqm',
        layers: [],
        center: [0, 0],
        opacity: 1
      }),
      mounted() {
        button('Toggle layer A', this.toggleLayerA),
        button('Toggle layer B', this.toggleLayerB)
      },
      methods: {
        toggleLayerA() {
          const hasLayerA = this.layers.some(({ id }) => id === 'a');
          if(hasLayerA) this.layers = this.layers.filter(({ id }) => id !== 'a');
          else this.layers = [ ...this.layers, layerA];
        },
        toggleLayerB() {
          const hasLayerB = this.layers.some(({ id }) => id === 'b');
          if(hasLayerB) this.layers = this.layers.filter(({ id }) => id !== 'b');
          else this.layers = [ ...this.layers, layerB];
        }
      }
    }
  })

  .add('clickable layers', () => {
    return {
      template: clickableLayersTemplate,
      data: () => ({
        style: 'mapbox://styles/global-data-viewer/cjtss3jfb05w71fmra13u4qqm',
        center: [0, 0],
        layers: [ layerA ],
      }),
      methods: {
        onLayerClick() {
          alert('You clicked the layer');
        }
      }
    }
  })

  .add('change opacity for layer', () => {
    return {
      template: dynamicLayersTemplate,
      props: {
        opacity: {
          default: number('Layer opacity', 1, {
            range: true,
            min: 0,
            max: 1,
            step: 0.01
          })
        }
      },
      data: () => ({
        style: 'mapbox://styles/global-data-viewer/cjtss3jfb05w71fmra13u4qqm',
        center: [0, 0],
        layers: [ layerA ],
      })
    }
  })

  .add('preserve drawing buffer order', () => {
    return {
      template: canvasTemplate,
      mounted () {
        let map = this.$refs.map.map
        map.on('load', () => {
          // render the image (only works on preserve drawing buffer)
          let el = this.$el.querySelector('canvas')
          let src = el.toDataURL()
          let img = document.createElement('img')
          img.classList.add('render')
          img.setAttribute('src', src)
          img.setAttribute('width', 300)
          img.setAttribute('height', 200)
          this.$el.appendChild(img)
        })

      }
    }
  })

  .add('style change with layers', () => {
    return {
      template: styleAndLayerTemplate,
      data () {
        return {
          style: 'mapbox://styles/global-data-viewer/cjtss3jfb05w71fmra13u4qqm',
          layerA
        }
      },
      mounted () {
        this.dark()
        button('dark', () => {
          this.dark()
        })
        button('light', () => {
          this.light()
        })
      },
      methods: {
        dark () {
          this.style = 'mapbox://styles/global-data-viewer/cjtss3jfb05w71fmra13u4qqm'
        },
        light () {
          this.style = 'mapbox://styles/global-data-viewer/cjtslsula05as1fppvrh7n4rv'
        }
      }
    }
  })

storiesOf('Map markers', module)
  .addDecorator(withKnobs)
  .add('add a marker', () => {
    return {
      template: mapTemplate,
      data () {
        return {
        }
      },
      mounted () {
        let map = this.$refs.map.map
        let center = map.getCenter()
        map.on('load', () => {
          const marker = new mapboxgl.Marker()
                .setLngLat(center)
                .addTo(map);
          map.addLayer(marker)
        })
      },
      methods: {
      }
    }
  })

storiesOf('Map issues', module)
  .addDecorator(withKnobs)
  .add('map resize bug', () => {
    return {
      template: mapTemplate,
      mounted () {
        this.normal()
        button('small', () => {
          this.small()
        })
        button('big', () => {
          this.big()
        })
        button('normal', () => {
          this.normal()
        })

      },

      methods: {
        resize() {
          this.$refs.map.map.resize()
        },
        small () {
          this.$el.style = 'height: 200px; width: 300px; border: 1px solid red;'
        },
        big () {
          this.$el.style = 'height: 800px; width: 800px; border: 1px solid red;'
        },
        normal () {
          this.$el.style = 'height: 300px; width: 600px; border: 1px solid red;'
        }
      }
    }
  })
  .add('make non interactive map', () => {
    return {
      template: nonInteractiveTemplate
    }
  })
