import Vue from 'vue'
import App from './App.vue'
import Cloudinary from 'cloudinary-vue';
import router from './router'
import 'bootstrap'
import '../src/assets/styles/importer.css'

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})

Vue.use(Cloudinary, {
  configuration: {
    cloudName: "hyavxktsb"
  }
});