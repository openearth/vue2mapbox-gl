export default {
  name: 'v-mapbox-source',
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
      map.addSource(this.options.id, _.omit(this.options, ['id']));
    }
  }
};
