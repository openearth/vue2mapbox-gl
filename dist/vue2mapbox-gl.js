(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@mapbox/mapbox-gl-geocoder"), require("mapbox-gl"));
	else if(typeof define === 'function' && define.amd)
		define(["@mapbox/mapbox-gl-geocoder", "mapbox-gl"], factory);
	else if(typeof exports === 'object')
		exports["vue2MapboxGl"] = factory(require("@mapbox/mapbox-gl-geocoder"), require("mapbox-gl"));
	else
		root["vue2MapboxGl"] = factory(root["@mapbox/mapbox-gl-geocoder"], root["mapbox-gl"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__mapbox_mapbox_gl_geocoder__, __WEBPACK_EXTERNAL_MODULE_mapbox_gl__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/VMapbox.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/VMapbox.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: props, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"props\", function() { return props; });\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapbox-gl */ \"mapbox-gl\");\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_propsBinder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/propsBinder.js */ \"./src/utils/propsBinder.js\");\n/* harmony import */ var _utils_eventsBinder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/eventsBinder.js */ \"./src/utils/eventsBinder.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nconst mapEvents = [\n  'load',\n  'zoomstart',\n  'zoomend',\n  'zoom',\n  'styledata'\n]\n\n// props that we want to proxy\n// some are disabled pending testing\n// note that boolean props are always defined (unspecified = false).\n// The default true's are copied from https://www.mapbox.com/mapbox-gl-js/api/#map\n// these can be disabled after object construction\n// we can watch all these properties but that's disabled\n\nconst props = {\n  accessToken: {\n    type: String,\n    required: true\n  },\n  // always this component\n  container: {\n    type: [HTMLElement, String]\n  },\n  minZoom: {\n    type: Number\n  },\n  maxZoom: {\n    type: Number\n  },\n  // can't use style (reserved), use same approach as uber/react-map-gl\n  mapStyle: {\n    type: [Object, String]\n  },\n\n  antialias: {\n    type: Boolean,\n    default: true\n  },\n  // hash: {\n  //   type: Boolean,\n  //   default: false\n  // },\n  // interactive: {\n  //   type: Boolean,\n  //   default: true\n  // },\n  // bearingSnap: {\n  //   type: Number\n  // },\n  // classes: {\n  //   // array of strings\n  //   type: Array\n  // },\n  // attributionControl: {\n  //   type: Boolean,\n  //   default: true\n  // },\n  // logoPosition: {\n  //   type: String\n  // },\n  // failIfMajorPerformanceCaveat: {\n  //   type: Boolean,\n  //   default: false\n  // },\n  preserveDrawingBuffer: {\n    type: Boolean,\n    default: false\n  },\n  // refreshExpiredTiles: {\n  //   type: Boolean,\n  //   default: true\n  // },\n  // maxBounds: {\n  //   // latLngLike\n  //   type: [Object, Array]\n  // },\n  // scrollZoom: {\n  //   type: [Boolean, Object],\n  //   default: true\n  // },\n  // boxZoom: {\n  //   type: Boolean,\n  //   default: true\n  // },\n  // dragRotate: {\n  //   type: Boolean,\n  //   default: true\n  // },\n  // dragPan: {\n  //   type: Boolean,\n  //   default: true\n  // },\n  // keyboard: {\n  //   type: Boolean,\n  //   default: true\n  // },\n  // doubleClickZoom: {\n  //   type: Boolean,\n  //   default: true\n  // },\n  // touchZoomRotate: {\n  //   type: [Boolean, Object],\n  //   default: true\n  // },\n  // trackResize: {\n  //   type: Boolean,\n  //   default: true\n    // },\n  center: {\n    type: [Object, Array]\n  },\n  zoom: {\n    type: Number\n  },\n  bearing: {\n    type: Number\n  },\n  pitch: {\n    type: Number\n  },\n  // renderWorldCopies: {\n  //   type: Boolean,\n  //   default: true\n  // }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'v-mapbox',\n  data () {\n    return {\n    }\n  },\n  props,\n  provide () {\n    // allows to use inject:  ['getMap']  in child components\n    return {\n      getMap: () => this.map\n    }\n  },\n  mounted () {\n    //Initialze Map\n    mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default.a.accessToken = this.accessToken\n\n\n    let options = Object(_utils_propsBinder_js__WEBPACK_IMPORTED_MODULE_1__[\"propsDefaults\"])(props, this.$props)\n\n    options.container = this.$el\n\n    // Note that we don't add this.map to data\n    // It does not have to be observed. See:\n    // https://github.com/vuejs/vue/issues/2637#issuecomment-207076744\n    this.map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default.a.Map(options)\n\n    // listen to property changes and set the corresponding data in mapbox\n    Object(_utils_propsBinder_js__WEBPACK_IMPORTED_MODULE_1__[\"propsBinder\"])(this, this.map, options)\n\n    // emit a map created event\n    this.$emit('mb-created', this.map)\n    Object(_utils_eventsBinder_js__WEBPACK_IMPORTED_MODULE_2__[\"bindMapEvents\"])(this, this.map, mapEvents)\n\n    // ones the map  is loaded, add al layers that were present during mount time\n    // we can consider watching our children.\n    this.$on('mb-load', () => {\n      this.addLayers()\n    })\n    this.$on('style:update', () => {\n      // if the style was changed,  wait for the styledata to be loaded and re-add all the layers\n      this.$once('mb-styledata', () => {\n        this.addLayers()\n      })\n    })\n\n    // Mapbox has some resize issues\n    // Create an observer on this object\n    // Call resize on the map when we change szie\n    let observer = new ResizeObserver(this.resize)\n    observer.observe(this.$el)\n    this.resizeObserver = observer\n  },\n  methods: {\n    addLayers () {\n      let [...children] = this.$children\n      // TODO: consider sorting or using slots if we run to render order problems\n      // children.sort(child => {\n      //   return child.key\n      // })\n      this.$children.forEach(\n        (child) => {\n          child.deferredMountedTo(this.map)\n        }\n      )\n\n    },\n    resize() {\n      if (this.map) {\n        this.map.resize()\n      }\n    }\n  }\n});\n\n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/VMapbox.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/VMapbox.vue?vue&type=template&id=561fee85&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VMapbox.vue?vue&type=template&id=561fee85& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _vm._t(\"layers\"),\n      _vm._v(\" \"),\n      _vm._t(\"sources\"),\n      _vm._v(\" \"),\n      _vm._t(\"default\")\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/VMapbox.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functioal component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://vue2MapboxGl/./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./src/components/VMapbox.vue":
/*!************************************!*\
  !*** ./src/components/VMapbox.vue ***!
  \************************************/
/*! exports provided: default, props */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _VMapbox_vue_vue_type_template_id_561fee85___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VMapbox.vue?vue&type=template&id=561fee85& */ \"./src/components/VMapbox.vue?vue&type=template&id=561fee85&\");\n/* harmony import */ var _VMapbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VMapbox.vue?vue&type=script&lang=js& */ \"./src/components/VMapbox.vue?vue&type=script&lang=js&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"props\", function() { return _VMapbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"props\"]; });\n\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _VMapbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _VMapbox_vue_vue_type_template_id_561fee85___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _VMapbox_vue_vue_type_template_id_561fee85___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/VMapbox.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/VMapbox.vue?");

/***/ }),

/***/ "./src/components/VMapbox.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/components/VMapbox.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default, props */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_VMapbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./VMapbox.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./src/components/VMapbox.vue?vue&type=script&lang=js&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"props\", function() { return _node_modules_vue_loader_lib_index_js_vue_loader_options_VMapbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"props\"]; });\n\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_VMapbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/VMapbox.vue?");

/***/ }),

/***/ "./src/components/VMapbox.vue?vue&type=template&id=561fee85&":
/*!*******************************************************************!*\
  !*** ./src/components/VMapbox.vue?vue&type=template&id=561fee85& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VMapbox_vue_vue_type_template_id_561fee85___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./VMapbox.vue?vue&type=template&id=561fee85& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/VMapbox.vue?vue&type=template&id=561fee85&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VMapbox_vue_vue_type_template_id_561fee85___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VMapbox_vue_vue_type_template_id_561fee85___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/VMapbox.vue?");

/***/ }),

/***/ "./src/components/v-mapbox-geocoder.js":
/*!*********************************************!*\
  !*** ./src/components/v-mapbox-geocoder.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapbox-gl */ \"mapbox-gl\");\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mapbox_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mapbox/mapbox-gl-geocoder */ \"@mapbox/mapbox-gl-geocoder\");\n/* harmony import */ var _mapbox_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mapbox_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'v-mapbox-geocoder',\n  // return rendered slots only\n  render() { },\n  data () {\n    return {\n    }\n  },\n  props: {\n    options: {\n      default: () => {\n        return {}\n      },\n      type: Object\n    },\n    position: {\n      // see https://docs.mapbox.com/mapbox-gl-js/api/#map#addcontrol for posible values\n      type: String,\n      required: false\n    }\n  },\n  mounted () {\n  },\n  methods: {\n    deferredMountedTo(map) {\n      let options = {\n        mapboxgl: map,\n        accessToken: mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default.a.accessToken\n      }\n      options = Object.assign(options, this.options)\n      let control = new _mapbox_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_1___default.a(options)\n      if (this.position) {\n        // if you pass an invalid position, this wil fail\n        map.addControl(control, this.position)\n      } else {\n        map.addControl(control)\n      }\n\n    }\n  }\n});\n\n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/v-mapbox-geocoder.js?");

/***/ }),

/***/ "./src/components/v-mapbox-geolocate-control.js":
/*!******************************************************!*\
  !*** ./src/components/v-mapbox-geolocate-control.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapbox-gl */ \"mapbox-gl\");\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'v-mapbox-geolocate-control',\n  // return rendered slots only\n  render() { },\n  data () {\n    return {\n      control: null\n    }\n  },\n  inject:  ['getMap'],\n  props: {\n    options: {\n      default: () => {\n        return {}\n      },\n      type: Object\n    },\n    position: {\n      // see https://docs.mapbox.com/mapbox-gl-js/api/#map#addcontrol for posible values\n      type: String,\n      required: false\n    }\n  },\n  beforeDestroy () {\n    let map = this.getMap()\n    if (this.control) {\n      map.removeControl(this.control)\n    }\n  },\n  mounted () {\n    let map = this.getMap()\n    // if we are already loaded\n    if (map && map.loaded()) {\n      this.addToMap(map)\n    }\n  },\n  methods: {\n    deferredMountedTo(map) {\n      this.addToMap(map)\n    },\n    addToMap(map) {\n      let options = {\n        accessToken: mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default.a.accessToken\n      }\n      // override with properties\n      options = Object.assign(options, this.options)\n      let control = new mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default.a.GeolocateControl(options)\n      if (this.position) {\n        // if you pass an invalid position, this wil fail\n        map.addControl(control, this.position)\n      } else {\n        map.addControl(control)\n      }\n      this.control = control\n    }\n  }\n});\n\n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/v-mapbox-geolocate-control.js?");

/***/ }),

/***/ "./src/components/v-mapbox-layer.js":
/*!******************************************!*\
  !*** ./src/components/v-mapbox-layer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'v-mapbox-layer',\n  render () { },\n  data () {\n    return {\n    };\n  },\n  props: {\n    options: {\n      default: () => {\n        return {};\n      },\n      type: [Object, String]\n    },\n    // allows to place a layer before another\n    before: {\n      type: String,\n      required: false\n    }\n  },\n  mounted () {\n  },\n  methods: {\n    deferredMountedTo(map) {\n      // if we were already mounted, we need  to remove the old layr\n      let oldLayer = map.getLayer(this.options.id)\n      if (oldLayer) {\n        map.removeLayer(this.options.id)\n        try {\n          map.removeSource(oldLayer.source)\n        } catch {\n          console.warn('could not remove source', oldLayer.source)\n        }\n      }\n      // if we  want to add a layer before another layer, use the before option\n      if (this.before) {\n        map.addLayer(this.options, this.before)\n      } else {\n        map.addLayer(this.options)\n      }\n      let layer = map.getLayer(this.options.id)\n    }\n  }\n});\n\n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/v-mapbox-layer.js?");

/***/ }),

/***/ "./src/components/v-mapbox-navigation-control.js":
/*!*******************************************************!*\
  !*** ./src/components/v-mapbox-navigation-control.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapbox-gl */ \"mapbox-gl\");\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'v-mapbox-navigation-control',\n  render () { },\n  data () {\n    return {\n    };\n  },\n  props: {\n    options: {\n      // options passed to the navigation control\n      default: () => {\n        return {};\n      },\n      type: Object\n    },\n    position: {\n      // see https://docs.mapbox.com/mapbox-gl-js/api/#map#addcontrol for posible values\n      type: String,\n      required: false\n    }\n  },\n  mounted () {\n  },\n  methods: {\n    deferredMountedTo(map) {\n      let control = new mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default.a.NavigationControl(this.options)\n      // if not null/undefined\n      if (this.position) {\n        // if you pass an invalid position, this wil fail\n        map.addControl(control, this.position)\n      } else {\n        map.addControl(control)\n      }\n    }\n  }\n});\n\n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/v-mapbox-navigation-control.js?");

/***/ }),

/***/ "./src/components/v-mapbox-scale-control.js":
/*!**************************************************!*\
  !*** ./src/components/v-mapbox-scale-control.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapbox-gl */ \"mapbox-gl\");\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'v-mapbox-scale-control',\n  render () { },\n  data () {\n    return {\n    };\n  },\n  props: {\n    options: {\n      // options passed to the scale control\n      default: () => {\n        return {};\n      },\n      type: Object\n    },\n    position: {\n      // see https://docs.mapbox.com/mapbox-gl-js/api/#map#addcontrol for posible values\n      type: String,\n      required: false\n    }\n  },\n  mounted () {\n  },\n  methods: {\n    deferredMountedTo(map) {\n      let control = new mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default.a.ScaleControl(this.options)\n\n      // if not null/undefined\n      if (this.position) {\n        // if you pass an invalid position, this wil fail\n        map.addControl(control, this.position)\n      } else {\n        map.addControl(control)\n      }\n    }\n  }\n});\n\n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/v-mapbox-scale-control.js?");

/***/ }),

/***/ "./src/components/v-mapbox-source.js":
/*!*******************************************!*\
  !*** ./src/components/v-mapbox-source.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'v-mapbox-source',\n  render () {},\n  data () {\n    return {\n    };\n  },\n  props: {\n    options: {\n      default: () => {\n        return {};\n      },\n      type: Object\n    }\n  },\n  mounted () {\n  },\n  methods: {\n    deferredMountedTo(map) {\n      let {id, ...options } = this.options\n      map.addSource(id, options)\n    }\n  }\n});\n\n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/v-mapbox-source.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_VMapbox_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/VMapbox.vue */ \"./src/components/VMapbox.vue\");\n/* harmony import */ var _components_v_mapbox_layer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/v-mapbox-layer.js */ \"./src/components/v-mapbox-layer.js\");\n/* harmony import */ var _components_v_mapbox_source_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/v-mapbox-source.js */ \"./src/components/v-mapbox-source.js\");\n/* harmony import */ var _components_v_mapbox_geolocate_control_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/v-mapbox-geolocate-control.js */ \"./src/components/v-mapbox-geolocate-control.js\");\n/* harmony import */ var _components_v_mapbox_navigation_control_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/v-mapbox-navigation-control.js */ \"./src/components/v-mapbox-navigation-control.js\");\n/* harmony import */ var _components_v_mapbox_scale_control_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/v-mapbox-scale-control.js */ \"./src/components/v-mapbox-scale-control.js\");\n/* harmony import */ var _components_v_mapbox_geocoder_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/v-mapbox-geocoder.js */ \"./src/components/v-mapbox-geocoder.js\");\n\n\n\n\n\n\n\n\nfunction install(Vue, options) {\n  // This component can install itself by using Vue.use(Vue2MapboxGl)\n  // That will call this install function.\n  Vue.component('v-mapbox', _components_VMapbox_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n  Vue.component('v-mapbox-layer', _components_v_mapbox_layer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n  Vue.component('v-mapbox-source', _components_v_mapbox_source_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n  Vue.component('v-mapbox-navigation-control', _components_v_mapbox_navigation_control_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\n  Vue.component('v-mapbox-geolocate-control', _components_v_mapbox_geolocate_control_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n  Vue.component('v-mapbox-scale-control', _components_v_mapbox_scale_control_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])\n  // for consistency, name this according to the package name Geocoder\n  Vue.component('v-mapbox-geocoder', _components_v_mapbox_geocoder_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (install);\n\n\n//# sourceURL=webpack://vue2MapboxGl/./src/main.js?");

/***/ }),

/***/ "./src/utils/eventsBinder.js":
/*!***********************************!*\
  !*** ./src/utils/eventsBinder.js ***!
  \***********************************/
/*! exports provided: bindMapEvents, bindLayerEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bindMapEvents\", function() { return bindMapEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bindLayerEvents\", function() { return bindLayerEvents; });\nfunction bindMapEvents(vueElement, map, events) {\n  for (var i = 0; i < events.length; i++) {\n    const exposedName = 'mb-' + events[i];\n    const eventName = events[i];\n    map.on(eventName, (ev) => {\n      vueElement.$emit(exposedName, ev);\n    });\n  }\n}\n\nfunction bindLayerEvents(vueElement, map, layer, events) {\n  for (var i = 0; i < events.length; i++) {\n    const exposedName = 'mbl-' + events[i];\n    const eventName = events[i];\n    map.on(eventName, layer, (ev) => {\n      vueElement.$emit(exposedName, ev);\n    });\n  }\n}\n\n\n\n\n//# sourceURL=webpack://vue2MapboxGl/./src/utils/eventsBinder.js?");

/***/ }),

/***/ "./src/utils/propsBinder.js":
/*!**********************************!*\
  !*** ./src/utils/propsBinder.js ***!
  \**********************************/
/*! exports provided: propsBinder, propsDefaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"propsBinder\", function() { return propsBinder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"propsDefaults\", function() { return propsDefaults; });\nfunction capitalizeFirstLetter(string) {\n  return string.charAt(0).toUpperCase() + string.slice(1)\n}\n\nfunction propsBinder(vueElement, mapboxElement, props) {\n  let keys = Object.keys(props)\n  keys.forEach((key, i) => {\n    // rename\n    if (key === 'mapStyle') {\n      key = 'style'\n    }\n    let setMethodName = 'set' + capitalizeFirstLetter(key)\n\n    let keyToWatch = key\n    if (key === 'style') {\n      // for style watch the mapStyle property\n      keyToWatch = 'mapStyle'\n    }\n    vueElement.$watch(keyToWatch, (newVal, oldVal) => {\n      mapboxElement[setMethodName](newVal)\n      vueElement.$emit(key + ':update', newVal)\n    })\n  })\n}\n\nfunction propsDefaults (props, options) {\n  // pass along  the props  and fill in the options\n  let entries = Object.entries(props)\n  let result = {}\n  entries.forEach(([key, value]) => {\n    // if  value is not set, we're  done\n    if (value === undefined || value === null) {\n      return\n    }\n    // if value has a  props default, set that\n    if (value.default !== null && value.default !== undefined) {\n      result[key] = value.default\n    }\n\n  })\n  // override with options (which can be null or undefined)\n  let optionEntries = Object.entries(options ||  {})\n  optionEntries.forEach(([key, value]) => {\n    if (value !== null && value !== undefined) {\n      result[key] =  value\n    }\n  })\n\n  // rename mapStyle (Vue element property)  to style (mapbox property)\n  let style = result.mapStyle\n  if (style) {\n    delete result.mapStyle\n    result.style = style\n  }\n  return result\n}\n\n\n\n\n//# sourceURL=webpack://vue2MapboxGl/./src/utils/propsBinder.js?");

/***/ }),

/***/ "@mapbox/mapbox-gl-geocoder":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** external {"umd":"@mapbox/mapbox-gl-geocoder","root":"@mapbox/mapbox-gl-geocoder","global":"@mapbox/mapbox-gl-geocoder","commonjs2":"@mapbox/mapbox-gl-geocoder","commonjs":"@mapbox/mapbox-gl-geocoder","amd":"@mapbox/mapbox-gl-geocoder"} ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__mapbox_mapbox_gl_geocoder__;\n\n//# sourceURL=webpack://vue2MapboxGl/external_%7B%22umd%22:%22@mapbox/mapbox-gl-geocoder%22,%22root%22:%22@mapbox/mapbox-gl-geocoder%22,%22global%22:%22@mapbox/mapbox-gl-geocoder%22,%22commonjs2%22:%22@mapbox/mapbox-gl-geocoder%22,%22commonjs%22:%22@mapbox/mapbox-gl-geocoder%22,%22amd%22:%22@mapbox/mapbox-gl-geocoder%22%7D?");

/***/ }),

/***/ "mapbox-gl":
/*!*********************************************************************************************************************************************!*\
  !*** external {"umd":"mapbox-gl","root":"mapbox-gl","global":"mapbox-gl","commonjs2":"mapbox-gl","commonjs":"mapbox-gl","amd":"mapbox-gl"} ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_mapbox_gl__;\n\n//# sourceURL=webpack://vue2MapboxGl/external_%7B%22umd%22:%22mapbox-gl%22,%22root%22:%22mapbox-gl%22,%22global%22:%22mapbox-gl%22,%22commonjs2%22:%22mapbox-gl%22,%22commonjs%22:%22mapbox-gl%22,%22amd%22:%22mapbox-gl%22%7D?");

/***/ })

/******/ });
});
//# sourceMappingURL=vue2mapbox-gl.js.map