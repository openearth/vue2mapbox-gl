import _ from 'lodash';
import mapboxgl from 'mapbox-gl';
import {propsBinder, propsDefaults} from '../utils/propsBinder.js';
import 'mapbox-gl/dist/mapbox-gl.css';

// props that we want to proxy
// some are disabled pending testing
// note that boolean props are always defined (unspecified = false).
// The default true's are copied from https://www.mapbox.com/mapbox-gl-js/api/#map
// these can be disabled after object construction
// we can watch all these properties but that's disabled
const props = {
  accessToken: {
    type: String,
    required: true
  },
  // always this component
  container: {
    type: [HTMLElement, String]
  },
  minZoom: {
    type: Number
  },
  maxZoom: {
    type: Number
  },
  // can't use style (reserved), use same approach as uber/react-map-gl
  mapStyle: {
    type: [Object, String]
  },
  // hash: {
  //   type: Boolean,
  //   default: false
  // },
  // interactive: {
  //   type: Boolean,
  //   default: true
  // },
  // bearingSnap: {
  //   type: Number
  // },
  // classes: {
  //   // array of strings
  //   type: Array
  // },
  // attributionControl: {
  //   type: Boolean,
  //   default: true
  // },
  // logoPosition: {
  //   type: String
  // },
  // failIfMajorPerformanceCaveat: {
  //   type: Boolean,
  //   default: false
  // },
  // preserveDrawingBuffer: {
  //   type: Boolean,
  //   default: false
  // },
  // refreshExpiredTiles: {
  //   type: Boolean,
  //   default: true
  // },
  // maxBounds: {
  //   // latLngLike
  //   type: [Object, Array]
  // },
  // scrollZoom: {
  //   type: [Boolean, Object],
  //   default: true
  // },
  // boxZoom: {
  //   type: Boolean,
  //   default: true
  // },
  // dragRotate: {
  //   type: Boolean,
  //   default: true
  // },
  // dragPan: {
  //   type: Boolean,
  //   default: true
  // },
  // keyboard: {
  //   type: Boolean,
  //   default: true
  // },
  // doubleClickZoom: {
  //   type: Boolean,
  //   default: true
  // },
  // touchZoomRotate: {
  //   type: [Boolean, Object],
  //   default: true
  // },
  // trackResize: {
  //   type: Boolean,
  //   default: true
  // },
  center: {
    type: [Object, Array]
  },
  zoom: {
    type: Number
  },
  bearing: {
    type: Number
  },
  pitch: {
    type: Number
  },
  // renderWorldCopies: {
  //   type: Boolean,
  //   default: true
  // }
};

export default {
  name: 'v-mapbox',
  data () {
    return {
      map: null,
      layers: []
    };
  },
  props: props,
  mounted () {
    //Initialze Map
    let options = {};
    mapboxgl.accessToken = this.accessToken;
    // renamed properties
    if (this.mapStyle) {
      options.style = this.mapStyle;
    }
    let defaults = propsDefaults(this.$props);
    _.assign(options, defaults);
    options.container = this.$el;


    this.map = new mapboxgl.Map(options);

    // propsBinder(this, this.map, props);



    this.map.on('load', () => {
      _.each(
        this.$children,
        (child) => {
          child.deferredMountedTo(this.map);
          if (child.$options.name === 'v-mapbox-layer') {
            this.layers.push(child.options);
          }
        }
      );
    });

  },
  methods: {
  }
};
