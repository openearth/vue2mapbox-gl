export default {
  name: 'v-mapbox-layer',
  inject: ['getMap'],
  render() {
    return null;
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
  data() {
    return {
      // used to determine if mounted or deferredMountedTo should be used
      isInitialized: false
    };
  },
  // watch props and rerender if they change
  watch: {
    options: {
      deep: true,
      handler() {
        this.removeLayer();
        this.addLayer();
      }
    },
    before() {
      this.removeLayer();
      this.addLayer();
    }
  },
  mounted() {
    // only execute when map is available and layer is not already initialized
    if (this.getMap()) {
      this.removeLayer();
      this.addLayer();
      this.isInitialized = true;
    }
  },
  destroyed() {
    this.removeLayer();
  },
  methods: {
    deferredMountedTo() {
      // only execute when layer is not already initialized
      if (!this.isInitialized) {
        this.removeLayer();
        this.addLayer();
        this.isInitialized = true;
      }
    },
    removeLayer() {
      const map = this.getMap();
      if (map) {
        const layer = map.getLayer(this.options.id);

        if (layer) {
          map.removeLayer(this.options.id);
          try {
            map.removeSource(layer.source);
          } catch {
            console.warn('could not remove source', layer.source);
          }
        }
      }
    },
    addLayer() {
      const map = this.getMap();

      if (this.before) {
        map.addLayer(this.options, this.before)
      } else {
        map.addLayer(this.options)
      }
    }
  }
};
