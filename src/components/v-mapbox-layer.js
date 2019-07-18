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
    // allows to place a layer before another
    before: {
      type: String,
      required: false
    }
  },
  mounted () {
  },
  methods: {
    deferredMountedTo(map) {
      // if we were already mounted, we need  to remove the old layr
      let oldLayer = map.getLayer(this.options.id)
      if (oldLayer) {
        map.removeLayer(this.options.id)
        try {
          map.removeSource(oldLayer.source)
        } catch {
          console.warn('could not remove source', oldLayer.source)
        }
      }
      // if we  want to add a layer before another layer, use the before option
      if (this.before) {
        map.addLayer(this.options, this.before)
      } else {
        map.addLayer(this.options)
      }
      let layer = map.getLayer(this.options.id)
    }
  }
};
