import VMapbox from './components/VMapbox.vue'
import VMapboxLayer from './components/v-mapbox-layer.js'
import VMapboxSource from './components/v-mapbox-source.js'
import VMapboxGeolocateControl from './components/v-mapbox-geolocate-control.js'
import VMapboxNavigationControl from './components/v-mapbox-navigation-control.js'
import VMapboxScaleControl from './components/v-mapbox-scale-control.js'
import VMapboxGeocoder from './components/v-mapbox-geocoder.js'

function install(Vue, options) {
  // This component can install itself by using Vue.use(Vue2MapboxGl)
  // That will call this install function.
  Vue.component('v-mapbox', VMapbox)
  Vue.component('v-mapbox-layer', VMapboxLayer)
  Vue.component('v-mapbox-source', VMapboxSource)
  Vue.component('v-mapbox-navigation-control', VMapboxNavigationControl)
  Vue.component('v-mapbox-geolocate-control', VMapboxGeolocateControl)
  Vue.component('v-mapbox-scale-control', VMapboxScaleControl)
  // for consistency, name this according to the package name Geocoder
  Vue.component('v-mapbox-geocoder', VMapboxGeocoder)
}
export default install
