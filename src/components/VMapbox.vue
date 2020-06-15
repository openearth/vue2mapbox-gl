<template>
  <div>
    <!-- the main div will get class mapboxgl-map, you can use that class or an id for styling -->
    <!-- if you put a id in the main element it won't work with 2 maps on one page (for example with compare plugin) -->
    <slot name="layers"></slot>
    <slot name="sources"></slot>
    <slot></slot>
  </div>
</template>
<!-- script is lowercase -->
<script>
import mapboxgl from 'mapbox-gl'
import {propsBinder, propsDefaults} from '../utils/propsBinder.js'
import {bindMapEvents, bindLayerEvents} from '../utils/eventsBinder.js'

const mapEvents = [
  'load',
  'zoomstart',
  'zoomend',
  'zoom',
  'styledata'
]

// props that we want to proxy
// some are disabled pending testing
// note that boolean props are always defined (unspecified = false).
// The default true's are copied from https://www.mapbox.com/mapbox-gl-js/api/#map
// these can be disabled after object construction
// we can watch all these properties but that's disabled

export const props = {
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
  data () {
    return {
	    map: null
    }
  },
  props,
  provide () {
    // allows to use inject:  ['getMap']  in child components
    return {
      getMap: () => this.map
    }
  },
  mounted () {
    //Initialze Map
    mapboxgl.accessToken = this.accessToken


    let options = propsDefaults(props, this.$props)

    options.container = this.$el

    // Note that we don't add this.map to data
    // It does not have to be observed. See:
    // https://github.com/vuejs/vue/issues/2637#issuecomment-207076744
    this.map = new mapboxgl.Map(options)

    // listen to property changes and set the corresponding data in mapbox
    propsBinder(this, this.map, options)

    // emit a map created event
    this.$emit('mb-created', this.map)
    bindMapEvents(this, this.map, mapEvents)

    // ones the map  is loaded, add al layers that were present during mount time
    // we can consider watching our children.
    this.$on('mb-load', () => {
      this.addLayers()
    })
    this.$on('style:update', () => {
      // if the style was changed,  wait for the styledata to be loaded and re-add all the layers
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
  },
  methods: {
    addLayers () {
      let [...children] = this.$children
      // TODO: consider sorting or using slots if we run to render order problems
      // children.sort(child => {
      //   return child.key
      // })
      this.$children.forEach(
        (child) => {
          child.deferredMountedTo(this.map)
        }
      )

    },
    resize() {
      if (this.map) {
        this.map.resize()
      }
    }
  }
}
</script>
