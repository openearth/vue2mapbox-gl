export default {
  name: 'v-mapbox-layer',
  data () {
    return {
    };
  },
  props: {
    options: {
      default: () => {
        return {};
      },
      type: Object
    }
  },
  mounted () {
  },
  methods: {
    deferredMountedTo(map) {
      map.addLayer(this.options);
    }
  }
};
