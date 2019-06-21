import test from 'ava';
import install from '.';
import Vue from 'vue'


test('install', t => {
  Vue.use(install)
  // get the component
  // Testing is not working in node, consider testing in a browser component
  // https://github.com/mapbox/mapbox-gl-js/issues/4593
  let VMapbox = Vue.component('v-mapbox')
	t.truthy(VMapbox);
});
