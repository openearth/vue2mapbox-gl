import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

export default {
  name: 'v-mapbox-geocoder',
  // return rendered slots only
  render() {
    return this.$scopedSlots.default({})
  },
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
      let control = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken
      });
      map.addControl(control);
    }
  }
};
