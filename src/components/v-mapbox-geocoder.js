import mapboxgl from 'mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'

export default {
  name: 'v-mapbox-geocoder',
  // return rendered slots only
  render() { },
  data () {
    return {
    }
  },
  props: {
    options: {
      default: () => {
        return {}
      },
      type: Object
    },
    position: {
      // see https://docs.mapbox.com/mapbox-gl-js/api/#map#addcontrol for posible values
      type: String,
      required: false
    }
  },
  mounted () {
  },
  methods: {
    deferredMountedTo(map) {
      let options = {
        mapboxgl: map,
        accessToken: mapboxgl.accessToken
      }
      options = Object.assign(options, this.options)
      let control = new MapboxGeocoder(options)
      if (this.position) {
        // if you pass an invalid position, this wil fail
        map.addControl(control, this.position)
      } else {
        map.addControl(control)
      }

    }
  }
}
