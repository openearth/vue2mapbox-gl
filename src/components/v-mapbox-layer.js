export default {
  name: 'v-mapbox-layer',
  render () { },
  data () {
    return {
    };
  },
  props: {
    options: {
      default: () => {
        return {};
      },
      type: [Object, String]
    },
    before: {
      type: String,
      required: false
    }
  },
  mounted () {
  },
  methods: {
    deferredMountedTo(map) {
      console.log('adding layer', this)
      let oldLayer = map.getLayer(this.options.id)
      if (oldLayer) {
        console.log('replacing', oldLayer)
        map.removeLayer(this.options.id)
        try {
          map.removeSource(oldLayer.source)
        } catch {
          console.warn('could not remove source', oldLayer.source)
        }
      }
      if (this.before) {
        map.addLayer(this.options, this.before)
      } else {
        map.addLayer(this.options)
      }
      let layer = map.getLayer(this.options.id)
      console.log('layer', layer)
    }
  }
};
