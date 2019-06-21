var vue2MapboxGl =
/******/ (function(modules) { // webpackBootstrap
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/VMapbox.vue?vue&type=template&id=561fee85&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VMapbox.vue?vue&type=template&id=561fee85& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _vm._t(\"layers\"),\n      _vm._v(\" \"),\n      _vm._t(\"sources\"),\n      _vm._v(\" \"),\n      _vm._t(\"default\")\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/VMapbox.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/VMapboxGeocoder.vue?vue&type=template&id=5fe0d1ce&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VMapboxGeocoder.vue?vue&type=template&id=5fe0d1ce& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\")\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/VMapboxGeocoder.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/VMapboxLayer.vue?vue&type=template&id=5e1bc77c&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VMapboxLayer.vue?vue&type=template&id=5e1bc77c& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\")\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/VMapboxLayer.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/VMapboxNavigationControl.vue?vue&type=template&id=065f9358&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VMapboxNavigationControl.vue?vue&type=template&id=065f9358& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\")\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/VMapboxNavigationControl.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/VMapboxSource.vue?vue&type=template&id=28974780&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VMapboxSource.vue?vue&type=template&id=28974780& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\")\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/VMapboxSource.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _VMapbox_vue_vue_type_template_id_561fee85___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VMapbox.vue?vue&type=template&id=561fee85& */ \"./src/components/VMapbox.vue?vue&type=template&id=561fee85&\");\n/* harmony import */ var _v_mapbox_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v-mapbox.js?vue&type=script&lang=js& */ \"./src/components/v-mapbox.js?vue&type=script&lang=js&?ac10\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _v_mapbox_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _VMapbox_vue_vue_type_template_id_561fee85___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _VMapbox_vue_vue_type_template_id_561fee85___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/VMapbox.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/VMapbox.vue?");

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

/***/ "./src/components/VMapboxGeocoder.vue":
/*!********************************************!*\
  !*** ./src/components/VMapboxGeocoder.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _VMapboxGeocoder_vue_vue_type_template_id_5fe0d1ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VMapboxGeocoder.vue?vue&type=template&id=5fe0d1ce& */ \"./src/components/VMapboxGeocoder.vue?vue&type=template&id=5fe0d1ce&\");\n/* harmony import */ var _v_mapbox_geocoder_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v-mapbox-geocoder.js?vue&type=script&lang=js& */ \"./src/components/v-mapbox-geocoder.js?vue&type=script&lang=js&?acc8\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _v_mapbox_geocoder_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _VMapboxGeocoder_vue_vue_type_template_id_5fe0d1ce___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _VMapboxGeocoder_vue_vue_type_template_id_5fe0d1ce___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/VMapboxGeocoder.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/VMapboxGeocoder.vue?");

/***/ }),

/***/ "./src/components/VMapboxGeocoder.vue?vue&type=template&id=5fe0d1ce&":
/*!***************************************************************************!*\
  !*** ./src/components/VMapboxGeocoder.vue?vue&type=template&id=5fe0d1ce& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VMapboxGeocoder_vue_vue_type_template_id_5fe0d1ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./VMapboxGeocoder.vue?vue&type=template&id=5fe0d1ce& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/VMapboxGeocoder.vue?vue&type=template&id=5fe0d1ce&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VMapboxGeocoder_vue_vue_type_template_id_5fe0d1ce___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VMapboxGeocoder_vue_vue_type_template_id_5fe0d1ce___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/VMapboxGeocoder.vue?");

/***/ }),

/***/ "./src/components/VMapboxLayer.vue":
/*!*****************************************!*\
  !*** ./src/components/VMapboxLayer.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _VMapboxLayer_vue_vue_type_template_id_5e1bc77c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VMapboxLayer.vue?vue&type=template&id=5e1bc77c& */ \"./src/components/VMapboxLayer.vue?vue&type=template&id=5e1bc77c&\");\n/* harmony import */ var _v_mapbox_layer_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v-mapbox-layer.js?vue&type=script&lang=js& */ \"./src/components/v-mapbox-layer.js?vue&type=script&lang=js&?c650\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _v_mapbox_layer_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _VMapboxLayer_vue_vue_type_template_id_5e1bc77c___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _VMapboxLayer_vue_vue_type_template_id_5e1bc77c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/VMapboxLayer.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/VMapboxLayer.vue?");

/***/ }),

/***/ "./src/components/VMapboxLayer.vue?vue&type=template&id=5e1bc77c&":
/*!************************************************************************!*\
  !*** ./src/components/VMapboxLayer.vue?vue&type=template&id=5e1bc77c& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VMapboxLayer_vue_vue_type_template_id_5e1bc77c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./VMapboxLayer.vue?vue&type=template&id=5e1bc77c& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/VMapboxLayer.vue?vue&type=template&id=5e1bc77c&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VMapboxLayer_vue_vue_type_template_id_5e1bc77c___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VMapboxLayer_vue_vue_type_template_id_5e1bc77c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/VMapboxLayer.vue?");

/***/ }),

/***/ "./src/components/VMapboxNavigationControl.vue":
/*!*****************************************************!*\
  !*** ./src/components/VMapboxNavigationControl.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _VMapboxNavigationControl_vue_vue_type_template_id_065f9358___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VMapboxNavigationControl.vue?vue&type=template&id=065f9358& */ \"./src/components/VMapboxNavigationControl.vue?vue&type=template&id=065f9358&\");\n/* harmony import */ var _v_mapbox_navigation_control_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v-mapbox-navigation-control.js?vue&type=script&lang=js& */ \"./src/components/v-mapbox-navigation-control.js?vue&type=script&lang=js&?7836\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _v_mapbox_navigation_control_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _VMapboxNavigationControl_vue_vue_type_template_id_065f9358___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _VMapboxNavigationControl_vue_vue_type_template_id_065f9358___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/VMapboxNavigationControl.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/VMapboxNavigationControl.vue?");

/***/ }),

/***/ "./src/components/VMapboxNavigationControl.vue?vue&type=template&id=065f9358&":
/*!************************************************************************************!*\
  !*** ./src/components/VMapboxNavigationControl.vue?vue&type=template&id=065f9358& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VMapboxNavigationControl_vue_vue_type_template_id_065f9358___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./VMapboxNavigationControl.vue?vue&type=template&id=065f9358& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/VMapboxNavigationControl.vue?vue&type=template&id=065f9358&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VMapboxNavigationControl_vue_vue_type_template_id_065f9358___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VMapboxNavigationControl_vue_vue_type_template_id_065f9358___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/VMapboxNavigationControl.vue?");

/***/ }),

/***/ "./src/components/VMapboxSource.vue":
/*!******************************************!*\
  !*** ./src/components/VMapboxSource.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _VMapboxSource_vue_vue_type_template_id_28974780___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VMapboxSource.vue?vue&type=template&id=28974780& */ \"./src/components/VMapboxSource.vue?vue&type=template&id=28974780&\");\n/* harmony import */ var _v_mapbox_source_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v-mapbox-source.js?vue&type=script&lang=js& */ \"./src/components/v-mapbox-source.js?vue&type=script&lang=js&?6bce\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _v_mapbox_source_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _VMapboxSource_vue_vue_type_template_id_28974780___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _VMapboxSource_vue_vue_type_template_id_28974780___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/VMapboxSource.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/VMapboxSource.vue?");

/***/ }),

/***/ "./src/components/VMapboxSource.vue?vue&type=template&id=28974780&":
/*!*************************************************************************!*\
  !*** ./src/components/VMapboxSource.vue?vue&type=template&id=28974780& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VMapboxSource_vue_vue_type_template_id_28974780___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./VMapboxSource.vue?vue&type=template&id=28974780& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/VMapboxSource.vue?vue&type=template&id=28974780&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VMapboxSource_vue_vue_type_template_id_28974780___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VMapboxSource_vue_vue_type_template_id_28974780___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/VMapboxSource.vue?");

/***/ }),

/***/ "./src/components/v-mapbox-geocoder.js?vue&type=script&lang=js&?4ccd":
/*!**********************************************************************!*\
  !*** ./src/components/v-mapbox-geocoder.js?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapbox-gl */ \"mapbox-gl\");\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mapbox_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mapbox/mapbox-gl-geocoder */ \"@mapbox/mapbox-gl-geocoder\");\n/* harmony import */ var _mapbox_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mapbox_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'v-mapbox-geocoder',\n  data () {\n    return {\n    };\n  },\n  props: {\n    options: {\n      default: () => {\n        return {};\n      },\n      type: Object\n    }\n  },\n  mounted () {\n  },\n  methods: {\n    deferredMountedTo(map) {\n      let control = new _mapbox_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_1___default.a({\n        accessToken: mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default.a.accessToken\n      });\n      map.addControl(control);\n    }\n  }\n});\n\n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/v-mapbox-geocoder.js?");

/***/ }),

/***/ "./src/components/v-mapbox-geocoder.js?vue&type=script&lang=js&?acc8":
/*!**********************************************************************!*\
  !*** ./src/components/v-mapbox-geocoder.js?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _v_mapbox_geocoder_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./v-mapbox-geocoder.js?vue&type=script&lang=js& */ \"./src/components/v-mapbox-geocoder.js?vue&type=script&lang=js&?4ccd\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_v_mapbox_geocoder_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/v-mapbox-geocoder.js?");

/***/ }),

/***/ "./src/components/v-mapbox-layer.js?vue&type=script&lang=js&?51b9":
/*!*******************************************************************!*\
  !*** ./src/components/v-mapbox-layer.js?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'v-mapbox-layer',\n  data () {\n    return {\n    };\n  },\n  props: {\n    options: {\n      default: () => {\n        return {};\n      },\n      type: Object\n    }\n  },\n  mounted () {\n  },\n  methods: {\n    deferredMountedTo(map) {\n      map.addLayer(this.options);\n    }\n  }\n});\n\n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/v-mapbox-layer.js?");

/***/ }),

/***/ "./src/components/v-mapbox-layer.js?vue&type=script&lang=js&?c650":
/*!*******************************************************************!*\
  !*** ./src/components/v-mapbox-layer.js?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _v_mapbox_layer_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./v-mapbox-layer.js?vue&type=script&lang=js& */ \"./src/components/v-mapbox-layer.js?vue&type=script&lang=js&?51b9\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_v_mapbox_layer_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/v-mapbox-layer.js?");

/***/ }),

/***/ "./src/components/v-mapbox-navigation-control.js?vue&type=script&lang=js&?7836":
/*!********************************************************************************!*\
  !*** ./src/components/v-mapbox-navigation-control.js?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _v_mapbox_navigation_control_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./v-mapbox-navigation-control.js?vue&type=script&lang=js& */ \"./src/components/v-mapbox-navigation-control.js?vue&type=script&lang=js&?a200\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_v_mapbox_navigation_control_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/v-mapbox-navigation-control.js?");

/***/ }),

/***/ "./src/components/v-mapbox-navigation-control.js?vue&type=script&lang=js&?a200":
/*!********************************************************************************!*\
  !*** ./src/components/v-mapbox-navigation-control.js?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapbox-gl */ \"mapbox-gl\");\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'v-mapbox-navigation-control',\n  data () {\n    return {\n    };\n  },\n  props: {\n    options: {\n      default: () => {\n        return {};\n      },\n      type: Object\n    }\n  },\n  mounted () {\n  },\n  methods: {\n    deferredMountedTo(map) {\n      let control = new mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default.a.NavigationControl();\n      map.addControl(control);\n    }\n  }\n});\n\n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/v-mapbox-navigation-control.js?");

/***/ }),

/***/ "./src/components/v-mapbox-source.js?vue&type=script&lang=js&?6bce":
/*!********************************************************************!*\
  !*** ./src/components/v-mapbox-source.js?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _v_mapbox_source_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./v-mapbox-source.js?vue&type=script&lang=js& */ \"./src/components/v-mapbox-source.js?vue&type=script&lang=js&?89d5\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_v_mapbox_source_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/v-mapbox-source.js?");

/***/ }),

/***/ "./src/components/v-mapbox-source.js?vue&type=script&lang=js&?89d5":
/*!********************************************************************!*\
  !*** ./src/components/v-mapbox-source.js?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'v-mapbox-source',\n  data () {\n    return {\n    };\n  },\n  props: {\n    options: {\n      default: () => {\n        return {};\n      },\n      type: Object\n    }\n  },\n  mounted () {\n  },\n  methods: {\n    deferredMountedTo(map) {\n      let {id, ...options } = this.options\n      map.addSource(id, options)\n    }\n  }\n});\n\n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/v-mapbox-source.js?");

/***/ }),

/***/ "./src/components/v-mapbox.js?vue&type=script&lang=js&?4b29":
/*!*************************************************************!*\
  !*** ./src/components/v-mapbox.js?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapbox-gl */ \"mapbox-gl\");\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_propsBinder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/propsBinder.js */ \"./src/utils/propsBinder.js\");\n/* harmony import */ var _utils_eventsBinder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/eventsBinder.js */ \"./src/utils/eventsBinder.js\");\n\n\n\n\nconst mapEvents = [\n  'load',\n  'zoomstart',\n  'zoomend',\n  'zoom'\n]\n\n// props that we want to proxy\n// some are disabled pending testing\n// note that boolean props are always defined (unspecified = false).\n// The default true's are copied from https://www.mapbox.com/mapbox-gl-js/api/#map\n// these can be disabled after object construction\n// we can watch all these properties but that's disabled\nconst props = {\n  accessToken: {\n    type: String,\n    required: true\n  },\n  // always this component\n  container: {\n    type: [HTMLElement, String]\n  },\n  minZoom: {\n    type: Number\n  },\n  maxZoom: {\n    type: Number\n  },\n  // can't use style (reserved), use same approach as uber/react-map-gl\n  mapStyle: {\n    type: [Object, String]\n  },\n  // hash: {\n  //   type: Boolean,\n  //   default: false\n  // },\n  // interactive: {\n  //   type: Boolean,\n  //   default: true\n  // },\n  // bearingSnap: {\n  //   type: Number\n  // },\n  // classes: {\n  //   // array of strings\n  //   type: Array\n  // },\n  // attributionControl: {\n  //   type: Boolean,\n  //   default: true\n  // },\n  // logoPosition: {\n  //   type: String\n  // },\n  // failIfMajorPerformanceCaveat: {\n  //   type: Boolean,\n  //   default: false\n  // },\n  // preserveDrawingBuffer: {\n  //   type: Boolean,\n  //   default: false\n  // },\n  // refreshExpiredTiles: {\n  //   type: Boolean,\n  //   default: true\n  // },\n  // maxBounds: {\n  //   // latLngLike\n  //   type: [Object, Array]\n  // },\n  // scrollZoom: {\n  //   type: [Boolean, Object],\n  //   default: true\n  // },\n  // boxZoom: {\n  //   type: Boolean,\n  //   default: true\n  // },\n  // dragRotate: {\n  //   type: Boolean,\n  //   default: true\n  // },\n  // dragPan: {\n  //   type: Boolean,\n  //   default: true\n  // },\n  // keyboard: {\n  //   type: Boolean,\n  //   default: true\n  // },\n  // doubleClickZoom: {\n  //   type: Boolean,\n  //   default: true\n  // },\n  // touchZoomRotate: {\n  //   type: [Boolean, Object],\n  //   default: true\n  // },\n  // trackResize: {\n  //   type: Boolean,\n  //   default: true\n  // },\n  center: {\n    type: [Object, Array]\n  },\n  zoom: {\n    type: Number\n  },\n  bearing: {\n    type: Number\n  },\n  pitch: {\n    type: Number\n  },\n  // renderWorldCopies: {\n  //   type: Boolean,\n  //   default: true\n  // }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'v-mapbox',\n  data () {\n    return {\n      map: null,\n      layers: []\n    }\n  },\n  props: props,\n  mounted () {\n    //Initialze Map\n    let options = {}\n    mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default.a.accessToken = this.accessToken\n\n    // renamed properties\n    if (this.mapStyle) {\n      options.style = this.mapStyle\n    }\n    let defaults = Object(_utils_propsBinder_js__WEBPACK_IMPORTED_MODULE_1__[\"propsDefaults\"])(this.$props)\n    Object.assign(options, defaults)\n    options.container = this.$el\n\n    this.map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default.a.Map(options)\n    // emit a map created event\n    this.$emit('mb-created', this.map)\n    Object(_utils_eventsBinder_js__WEBPACK_IMPORTED_MODULE_2__[\"bindMapEvents\"])(this, this.map, mapEvents)\n\n    // ones the map  is loaded, add al layers that were present during mount time\n    // we can consider watching our children.\n    this.$on('mb-load', () => {\n      this.$children.forEach(\n        (child) => {\n          child.deferredMountedTo(this.map)\n          // if we have a layer. add it to  layers\n          if (child.$options.name === 'v-mapbox-layer') {\n            this.layers.push(child.options)\n          }\n        }\n      )\n    })\n    // Mapbox has some resize issues\n    // Create an observer  on this object\n    // Call resize on the map when we change szie\n    let observer = new ResizeObserver(this.resize)\n    observer.observe(this.$el)\n    this.resizeObserver = observer\n  },\n  methods: {\n    resize() {\n      if (this.map) {\n        this.map.resize()\n      }\n    }\n  }\n});\n\n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/v-mapbox.js?");

/***/ }),

/***/ "./src/components/v-mapbox.js?vue&type=script&lang=js&?ac10":
/*!*************************************************************!*\
  !*** ./src/components/v-mapbox.js?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _v_mapbox_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./v-mapbox.js?vue&type=script&lang=js& */ \"./src/components/v-mapbox.js?vue&type=script&lang=js&?4b29\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_v_mapbox_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://vue2MapboxGl/./src/components/v-mapbox.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_VMapbox_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/VMapbox.vue */ \"./src/components/VMapbox.vue\");\n/* harmony import */ var _components_VMapboxLayer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/VMapboxLayer.vue */ \"./src/components/VMapboxLayer.vue\");\n/* harmony import */ var _components_VMapboxSource_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/VMapboxSource.vue */ \"./src/components/VMapboxSource.vue\");\n/* harmony import */ var _components_VMapboxGeocoder_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/VMapboxGeocoder.vue */ \"./src/components/VMapboxGeocoder.vue\");\n/* harmony import */ var _components_VMapboxNavigationControl_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/VMapboxNavigationControl.vue */ \"./src/components/VMapboxNavigationControl.vue\");\n\n\n\n\n\n\nfunction install(Vue, options) {\n  // This component can install itself by using Vue.use(Vue2MapboxGl)\n  // That will call this install function.\n  Vue.component('v-mapbox', _components_VMapbox_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  Vue.component('v-mapbox-layer', _components_VMapboxLayer_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  Vue.component('v-mapbox-source', _components_VMapboxSource_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  Vue.component('v-mapbox-navigation-control', _components_VMapboxNavigationControl_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  Vue.component('v-mapbox-geocoder', _components_VMapboxGeocoder_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (install);\n\n\n//# sourceURL=webpack://vue2MapboxGl/./src/main.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"propsBinder\", function() { return propsBinder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"propsDefaults\", function() { return propsDefaults; });\nfunction capitalizeFirstLetter(string) {\n    return string.charAt(0).toUpperCase() + string.slice(1);\n}\n\nfunction propsBinder(vueElement, mapboxElement, props) {\n    const keys = _.keys(props);\n    _.each(keys, (key, i) => {\n        const setMethodName = 'set' + capitalizeFirstLetter(key);\n        const deepValue = (props[key].type === Object);\n        vueElement.$watch(key, (newVal, oldVal) => {\n            mapboxElement[setMethodName](newVal);\n        });\n    });\n}\n\nfunction propsDefaults (props, options) {\n    return _.omitBy(\n        props,\n        (val) => {\n            // keep values that are not nil\n            return _.isNil(val);\n        }\n    );\n}\n\n\n\n\n//# sourceURL=webpack://vue2MapboxGl/./src/utils/propsBinder.js?");

/***/ }),

/***/ "@mapbox/mapbox-gl-geocoder":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** external {"umd":"@mapbox/mapbox-gl-geocoder","root":"@mapbox/mapbox-gl-geocoder","global":"@mapbox/mapbox-gl-geocoder","commonjs2":"@mapbox/mapbox-gl-geocoder","commonjs":"@mapbox/mapbox-gl-geocoder","amd":"@mapbox/mapbox-gl-geocoder"} ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = undefined;\n\n//# sourceURL=webpack://vue2MapboxGl/external_%7B%22umd%22:%22@mapbox/mapbox-gl-geocoder%22,%22root%22:%22@mapbox/mapbox-gl-geocoder%22,%22global%22:%22@mapbox/mapbox-gl-geocoder%22,%22commonjs2%22:%22@mapbox/mapbox-gl-geocoder%22,%22commonjs%22:%22@mapbox/mapbox-gl-geocoder%22,%22amd%22:%22@mapbox/mapbox-gl-geocoder%22%7D?");

/***/ }),

/***/ "mapbox-gl":
/*!*********************************************************************************************************************************************!*\
  !*** external {"umd":"mapbox-gl","root":"mapbox-gl","global":"mapbox-gl","commonjs2":"mapbox-gl","commonjs":"mapbox-gl","amd":"mapbox-gl"} ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = undefined;\n\n//# sourceURL=webpack://vue2MapboxGl/external_%7B%22umd%22:%22mapbox-gl%22,%22root%22:%22mapbox-gl%22,%22global%22:%22mapbox-gl%22,%22commonjs2%22:%22mapbox-gl%22,%22commonjs%22:%22mapbox-gl%22,%22amd%22:%22mapbox-gl%22%7D?");

/***/ })

/******/ });