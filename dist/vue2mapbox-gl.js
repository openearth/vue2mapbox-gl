(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('lodash'), require('mapbox-gl'), require('mapbox-gl/dist/mapbox-gl.css')) :
	typeof define === 'function' && define.amd ? define(['lodash', 'mapbox-gl', 'mapbox-gl/dist/mapbox-gl.css'], factory) :
	(global.Vue2MapboxGL = factory(global._,global['mapbox-gl']));
}(this, (function (_$1,mapboxgl) { 'use strict';

_$1 = _$1 && _$1.hasOwnProperty('default') ? _$1['default'] : _$1;
mapboxgl = mapboxgl && mapboxgl.hasOwnProperty('default') ? mapboxgl['default'] : mapboxgl;

function propsDefaults (props, options) {
    return _.omitBy(
        props,
        function (val) {
            // keep values that are not nil
            return _.isNil(val);
        }
    );
}

function bindMapEvents(vueElement, map, events) {
  var loop = function ( i ) {
    var exposedName = 'mb-' + events[i];
    var eventName = events[i];
    map.on(eventName, function (ev) {
      vueElement.$emit(exposedName, ev);
    });
  };

  for (var i = 0; i < events.length; i++) loop( i );
}

var mapEvents = [
  'load',
  'zoomstart',
  'zoomend',
  'zoom'
];

// props that we want to proxy
// some are disabled pending testing
// note that boolean props are always defined (unspecified = false).
// The default true's are copied from https://www.mapbox.com/mapbox-gl-js/api/#map
// these can be disabled after object construction
// we can watch all these properties but that's disabled
var props = {
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

var __vue_module__ = {
  name: 'v-mapbox',
  data: function data () {
    return {
      map: null,
      layers: []
    };
  },
  props: props,
  mounted: function mounted () {
    var this$1 = this;

    //Initialze Map
    var options = {};
    mapboxgl.accessToken = this.accessToken;
    // renamed properties
    if (this.mapStyle) {
      options.style = this.mapStyle;
    }
    var defaults = propsDefaults(this.$props);
    _$1.assign(options, defaults);
    options.container = this.$el;

    this.map = new mapboxgl.Map(options);
    // emit a map created event
    this.$emit('mb-created', this.map);
    bindMapEvents(this, this.map, mapEvents);


    // propsBinder(this, this.map, props);



    this.$on('mb-load', function () {
      _$1.each(
        this$1.$children,
        function (child) {
          child.deferredMountedTo(this$1.map);
          if (child.$options.name === 'v-mapbox-layer') {
            this$1.layers.push(child.options);
          }
        }
      );
    });

  },
  watch: {
    layers: function layers(old) {
      console.log('layers changed', old);
    }
  },
  methods: {
  }
};

var __$__vue_module__ = Object.assign(__vue_module__, {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("layers"),_vm._v(" "),_vm._t("sources"),_vm._v(" "),_vm._t("default")],2)},staticRenderFns: [],});
    __$__vue_module__.prototype = __vue_module__.prototype;

var __vue_module__$1 = {
  name: 'v-mapbox-layer',
  data: function data () {
    return {
    };
  },
  props: {
    options: {
      default: function () {
        return {};
      },
      type: Object
    }
  },
  mounted: function mounted () {
  },
  methods: {
    deferredMountedTo: function deferredMountedTo(map) {
      map.addLayer(this.options);
    }
  }
};

var __$__vue_module__$1 = Object.assign(__vue_module__$1, {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')},staticRenderFns: [],});
    __$__vue_module__$1.prototype = __vue_module__$1.prototype;

var __vue_module__$2 = {
  name: 'v-mapbox-source',
  data: function data () {
    return {
    };
  },
  props: {
    options: {
      default: function () {
        return {};
      },
      type: Object
    }
  },
  mounted: function mounted () {
  },
  methods: {
    deferredMountedTo: function deferredMountedTo(map) {
      map.addSource(this.options.id, _$1.omit(this.options, ['id']));
    }
  }
};

var __$__vue_module__$2 = Object.assign(__vue_module__$2, {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')},staticRenderFns: [],});
    __$__vue_module__$2.prototype = __vue_module__$2.prototype;

var __vue_module__$3 = {
  name: 'v-mapbox-navigation-control',
  data: function data () {
    return {
    };
  },
  props: {
    options: {
      default: function () {
        return {};
      },
      type: Object
    }
  },
  mounted: function mounted () {
  },
  methods: {
    deferredMountedTo: function deferredMountedTo(map) {
      var control = new mapboxgl.NavigationControl();
      map.addControl(control);
    }
  }
};

var __$__vue_module__$3 = Object.assign(__vue_module__$3, {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')},staticRenderFns: [],});
    __$__vue_module__$3.prototype = __vue_module__$3.prototype;

function install(Vue, options) {
  console.log('Installing', Vue, options);
  Vue.component('v-mapbox', __$__vue_module__);
  Vue.component('v-mapbox-layer', __$__vue_module__$1);
  Vue.component('v-mapbox-source', __$__vue_module__$2);
  Vue.component('v-mapbox-navigation-control', __$__vue_module__$3);
}

return install;

})));
//# sourceMappingURL=vue2mapbox-gl.js.map
