import CityPicker from './components/CityPicker.vue';
import Vue from 'vue'
console.log(Vue)
export default function install (Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('city-picker', CityPicker);  
}

export { CityPicker };