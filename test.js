import 'URL'
import Vue from 'vue'
import install from './src/main'
import { propsDefaults } from './src/utils/propsBinder'
import VMapbox from './src/components/VMapbox'


test('install', () => {

  Vue.use(install)
  // get the component
  // Testing is not working in node, consider testing in a browser component
  // https://github.com/mapbox/mapbox-gl-js/issues/4593
  let VMapbox = Vue.component('v-mapbox')
	expect(VMapbox).toBeDefined()
})

test('utils', () => {
  let props = {
    interactive: {
      type: Boolean,
      default: true
    },
    minZoom: {
      type: Number
    }
  }
  let defaults = propsDefaults(props)
  let expected = {interactive: true}
  expect(defaults).toEqual(expected)

})

test('utils of VMapbox', () => {
  let defaults = propsDefaults(VMapbox.props)
  let expected = {}
  expect(defaults).toEqual(expected)

})
