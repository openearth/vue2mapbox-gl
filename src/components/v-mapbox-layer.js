import { isNil } from '../utils/helpers';

export default {
  name: 'v-mapbox-layer',

  inject: ['getMap'],

  render: () => null,

  props: {
    options: {
      type: Object,
      default: () => ({})
    },

    // Allows to place a layer before another
    before: {
      type: String,
      default: undefined
    },

    opacity: {
      type: Number,
      required: false,
      validator: val => val >= 0 && val <= 1
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
      map.addLayer(this.options, this.before);

      if(!isNil(this.opacity)) {
        this.setOpacity();
      }
    },

    removeLayer() {
      const map = this.getMap();
      if(map) {
        const layerId = this.options.id;
        const layer = map.getLayer(layerId);
        if(layer) {
          const layerSource = layer.source;
          map.removeLayer(layerId);
          if(layerSource && !map.getStyle().layers.some(({ source }) => source === layerSource)) {
            map.removeSource(layerSource);
          }
        }
      }
    },

    setOpacity() {
      const map = this.getMap();
      const { id, type } = this.layer;
      map.setPaintProperty(id, `${ type }-opacity`, this.opacity);
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
    options: {
      deep: true,
      handler() {
        this.renderLayer();
      }
    },
    opacity() {
      this.setOpacity();
    }
  }
};
