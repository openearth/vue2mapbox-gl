import VMapbox from './components/VMapbox.vue';

function install(Vue, options) {
  console.log('Installing', Vue, options);
  Vue.component('v-mapbox', VMapbox);
};
export default install;
