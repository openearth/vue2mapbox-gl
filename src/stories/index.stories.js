/* eslint-disable react/react-in-jsx-scope */

import { storiesOf, addDecorator } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean, array, select, color, date, button } from '@storybook/addon-knobs';
import { linkTo } from '@storybook/addon-links';

import 'mapbox-gl/dist/mapbox-gl.css'
// needed for  the  v-mapbox-geocoder
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'
import Vue from 'vue'
import Vue2MapboxGl from '../main.js'

Vue.use(Vue2MapboxGl)

const mapTemplate = `
<v-mapbox
 map-style="mapbox://styles/mapbox/satellite-streets-v10"
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


const styleTemplate = `
<v-mapbox
 :map-style="style"
 access-token="pk.eyJ1IjoiZ2xvYmFsLWRhdGEtdmlld2VyIiwiYSI6ImNqdG9lYWQ3NTFsNWk0M3Fqb2Q5dXBpeWUifQ.3DvxuGByM33VNa59rDogWw"
 style="height: 300px;"
>
 <v-mapbox-navigation-control></v-mapbox-navigation-control>
</v-mapbox>
`




storiesOf('Map', module)
  .add('map', () => {
    return {
      template: mapTemplate
    }
  })
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
  .addDecorator(withKnobs)
  .add('style  change', () => {
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
