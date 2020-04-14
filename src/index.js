import CityPicker from './components/CityPicker.vue';

export default function install (Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('city-picker', CityPicker);  
}

export { CityPicker };