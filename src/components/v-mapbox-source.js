export default {
  name: 'v-mapbox-source',
  render () {},
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
      let {id, ...options } = this.options
      map.addSource(id, options)
    }
  }
};
