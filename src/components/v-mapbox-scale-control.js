import mapboxgl from 'mapbox-gl';

export default {
  name: 'v-mapbox-scale-control',
  render () { },
  data () {
    return {
    };
  },
  props: {
    options: {
      // options passed to the scale control
      default: () => {
        return {};
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
      let control = new mapboxgl.ScaleControl(this.options)

      // if not null/undefined
      if (this.position) {
        // if you pass an invalid position, this wil fail
        map.addControl(control, this.position)
      } else {
        map.addControl(control)
      }
    }
  }
};
