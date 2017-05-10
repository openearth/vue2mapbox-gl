import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

export default {
  name: 'v-mapbox-geocoder',
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
      console.debug('token', mapboxgl.accessToken);
      let control = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken
      });
      map.addControl(control);
    }
  }
};
