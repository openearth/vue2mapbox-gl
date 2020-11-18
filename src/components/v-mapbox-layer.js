export default {
  name: 'v-mapbox-layer',

  inject: [ 'getMapMethods' ],

  render: () => null,

  props: {
    options: {
      type: Object,
      default: () => ({})
    },
    before: {
      type: String,
      default: undefined
    }
  },

  methods: {
    addLayer() {
      const mapMethods = this.getMapMethods()
      mapMethods.addLayer(this.options, this.before)
    },

    removeLayer() {
      const mapMethods = this.getMapMethods()
      const layerId = this.options.id
      mapMethods.removeLayer(layerId)
    },

    updateLayer() {
      const mapMethods = this.getMapMethods()
      mapMethods.updateLayer(this.options)
    },
  },

  mounted() {
    this.addLayer()
  },

  destroyed() {
    this.removeLayer()
  },

  watch: {
    options: {
      deep: true,
      handler() {
        this.updateLayer()
      }
    }
  }
}
