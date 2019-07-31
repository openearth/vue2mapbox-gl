import mapboxgl from 'mapbox-gl'

export default {
  name: 'v-mapbox-geolocate-control',
  // return rendered slots only
  render() { },
  data () {
    return {
      control: null
    }
  },
  inject:  ['getMap'],
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
  beforeDestroy () {
    let map = this.getMap()
    if (this.control) {
      map.removeControl(this.control)
    }
  },
  mounted () {
    let map = this.getMap()
    // if we are already loaded
    if (map && map.loaded()) {
      this.addToMap(map)
    }
  },
  methods: {
    deferredMountedTo(map) {
      this.addToMap(map)
    },
    addToMap(map) {
      let options = {
        accessToken: mapboxgl.accessToken
      }
      // override with properties
      options = Object.assign(options, this.options)
      let control = new mapboxgl.GeolocateControl(options)
      if (this.position) {
        // if you pass an invalid position, this wil fail
        map.addControl(control, this.position)
      } else {
        map.addControl(control)
      }
      this.control = control
    }
  }
}
