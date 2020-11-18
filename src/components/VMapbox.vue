<template>
  <!--
    The main div will receive class `mapboxgl-map`; you can use that class for styling.
    Note: If you put a id on the main element it won't work with multiple maps on one page (for example with compare plugin).
  -->
  <div>
    <!-- Are these named slots actually ever used?-->
    <slot name="layers"></slot>
    <slot name="sources"></slot>
    <slot></slot>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import { propsBinder, propsDefaults } from '../utils/propsBinder.js'
import { bindMapEvents } from '../utils/eventsBinder.js'

const MAP_EVENTS = [
  'load',
  'zoomstart',
  'zoomend',
  'zoom',
  'styledata'
]

// Props that we want to proxy.
// Some are disabled pending testing.
// Note that boolean props are always defined (unspecified = false).
// The default trues are copied from https://www.mapbox.com/mapbox-gl-js/api/#map
// These can be disabled after object construction.
// We can watch all these properties but that's disabled.

export const props = {
  accessToken: {
    type: String,
    required: true
  },
  // always this component
  // @QUESTION :: This gets overridden by default, do we really need this?
  container: {
    type: [HTMLElement, String]
  },
  minZoom: {
    type: Number
  },
  maxZoom: {
    type: Number
  },
  // We can't use `style` (reserved); `mapStyle` follows same approach as uber/react-map-gl
  mapStyle: {
    type: [Object, String]
  },
  antialias: {
    type: Boolean,
    default: true
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
  preserveDrawingBuffer: {
    type: Boolean,
    default: false
  },
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
}

export default {
  name: 'v-mapbox',

  // @QUESTION :: Why is this back? Now the whole map is reactive again..
  data () {
    return {
	    map: null
    }
  },

  props,

  provide () {
    // Allows us to use inject: ['getMap'] in child components
    return {
      getMap: () => this.map
    }
  },

  methods: {
    addLayers () {
      // @TODO :: consider sorting or using slots if we run into render order problems
      // let [...children] = this.$children
      // children.sort(child => {
      //   return child.key
      // })
      this.$children.forEach(child => {
        child.deferredMountedTo(this.map)
      })
    },

    resize() {
      if (this.map) {
        this.map.resize()
      }
    }
  },

  mounted () {
    // Initialize Map
    mapboxgl.accessToken = this.accessToken

    // Gather all options to inialize the mapbox map
    let options = propsDefaults(props, this.$props)
    options.container = this.$el

    // Note that we don't add `this.map` to data.
    // For performance reasons, it does not have to be observed. See:
    // https://github.com/vuejs/vue/issues/2637#issuecomment-207076744
    this.map = new mapboxgl.Map(options)

    // Listen to property changes and set the corresponding data in mapbox
    propsBinder(this, this.map, options)

    // Emit a map created event
    this.$emit('mb-created', this.map)

    // Bind all map events
    bindMapEvents(this, this.map, MAP_EVENTS)

    // Once the map is loaded, add all layers that were present during mount time
    this.$on('mb-load', () => {
      this.addLayers()
    })

    // If the style was changed, wait for the styledata to be loaded and re-add all the layers
    this.$on('style:update', () => {
      this.$once('mb-styledata', () => {
        this.addLayers()
      })
    })

    // Mapbox has some resize issues
    // Create an observer on this object
    // Call resize on the map when we change szie
    let observer = new ResizeObserver(this.resize)
    observer.observe(this.$el)
    this.resizeObserver = observer
  }
}
</script>
