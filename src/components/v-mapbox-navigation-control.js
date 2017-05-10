import mapboxgl from 'mapbox-gl';

export default {
  name: 'v-mapbox-navigation-control',
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
      let control = new mapboxgl.NavigationControl();
      map.addControl(control);
    }
  }
};
