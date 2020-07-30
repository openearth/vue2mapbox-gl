export default {
  name: 'v-mapbox-layer',

  inject: ['getMap'],

  render: () => null,

  props: {
    layer: {
      type: Object,
      default: () => ({})
    },

    // Allows to place a layer before another
    before: {
      type: String,
      default: null
    }
  },

  data: () => ({
    isInitialized: false
  }),

  methods: {
    deferredMountedTo() {
      if(!this.isInitialized) {
        this.renderLayer();
        this.isInitialized = true;
      }
    },

    renderLayer() {
      this.removeLayer();
      this.addLayer();
    },

    addLayer() {
      const map = this.getMap();
      map.addLayer(this.layer, this.before);
    },

    removeLayer() {
      const map = this.getMap();
      if(map) {
        const layerId = this.layer.id;
        const layer = map.getLayer(layerId);
        if(layer) {
          map.removeLayer(layerId);
          map.removeSource(layer.source);
        }
      }
    },
  },

  mounted() {
    const map = this.getMap();
    // We can immediately initialize if we have the map ready
    if(map && map.isStyleLoaded()) {
      this.renderLayer();
      this.isInitialized = true;
    }
  },

  destroyed() {
    this.removeLayer();
  },

  watch: {
    layer: {
      deep: true,
      handler() {
        this.renderLayer();
      }
    }
  }
};
