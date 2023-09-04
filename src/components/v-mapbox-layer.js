import { isNil } from '../utils/helpers';

export default {
  name: 'v-mapbox-layer',

  inject: ['getMap'],

  render: () => null,

  expose: ['deferredMountedTo'],

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

  methods: {
    deferredMountedTo() {
      console.log('Hello')
      this.renderLayer();
    },

    renderLayer() {
      this.removeLayer();
      this.addLayer();
    },

    addLayer() {
      const map = this.getMap();
      
      if (this.before && map.getLayer(this.before)) {
        map.addLayer(this.options, this.before)
      } else {
        map.addLayer(this.options)
      }

      if(this.clickable) {
        const layerId = this.options.id;
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
        const layerId = this.options.id;
        const layer = map.getLayer(layerId);
        if(layer) {
          const layerSource = layer.source;
          map.removeLayer(layerId);
          if(layerSource && !map.getStyle().layers.some(({ source }) => source === layerSource)) {
            map.removeSource(layerSource);
          }
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
      const { id, type } = this.options;
      map.setPaintProperty(id, `${ type }-opacity`, this.opacity);
    },
  },

  mounted() {
    const map = this.getMap();
    // We can immediately initialize if we have the map ready
    if(map && map.isStyleLoaded()) {
      this.renderLayer();
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
