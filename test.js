import 'URL'
import Vue from 'vue'
import { mount } from '@vue/test-utils'
import install from './src/main'
import { propsDefaults, propsBinder } from './src/utils/propsBinder'
import VMapbox from './src/components/VMapbox'


test('install', () => {

  Vue.use(install)
  // get the component
  // Testing is not working in node, consider testing in a browser component
  // https://github.com/mapbox/mapbox-gl-js/issues/4593
  let VMapbox = Vue.component('v-mapbox')
	expect(VMapbox).toBeDefined()
})

test('default properties', () => {
  // get the default properties
  let defaults = propsDefaults(VMapbox.props)
  let expected = {
   "antialias": true,
   "preserveDrawingBuffer": false,
  }
  expect(defaults).toEqual(expected)
})

test('default properties override', () => {
  // override some of the defalt properties
  let props = {
    interactive: {
      type: Boolean,
      default: true
    },
    minZoom: {
      type: Number
    },
    bearing: undefined
  }
  let defaults = propsDefaults(props)
  let expected = {interactive: true}
  expect(defaults).toEqual(expected)
})

test('bind properties', () => {
  let defaults = {
    minZoom: {
      type: Number
    }
  }

  let vueElement = {$watch: jest.fn()}
  let mapboxMap = {setMinZoom: jest.fn()}
  propsBinder(vueElement, mapboxMap, defaults)
  expect(vueElement.$watch.mock.calls.length).toBe(1)
})
