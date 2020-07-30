import { isNil } from '../utils/helpers';

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
    },

    clickable: {
      type: Boolean,
      default: false
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
      map.addLayer(this.layer, this.before);

      if(this.clickable) {
        const layerId = this.layer.id;
        map.on('click', layerId, this.clickFn);
        map.on('mouseenter', layerId, this.mouseEnterFn);
        map.on('mouseleave', layerId, this.mouseLeaveFn);
      }

      if(!isNil(this.opacity)) {
        this.setOpacity();
      }
    },

    removeLayer() {
      const map = this.getMap();
      if(map) {
        const layerId = this.layer.id;
        const layer = map.getLayer(layerId);
        if(layer) {
          map.removeLayer(layerId);
          map.removeSource(layer.source);
          if(this.clickable) {
            map.off('click', layerId, this.clickFn);
            map.off('mouseenter', layerId, this.mouseEnterFn);
            map.off('mouseleave', layerId, this.mouseLeaveFn);
          }
        }
      }
    },

    clickFn(e) {
      this.$emit('click', e);
    },

    mouseEnterFn() {
      const map = this.getMap();
      map.getCanvas().style.cursor = 'pointer';
    },

    mouseLeaveFn() {
      const map = this.getMap();
      map.getCanvas().style.cursor = '';
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
    layer: {
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
