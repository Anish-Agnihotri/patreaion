import Vue from 'vue'
import VueResource from 'vue-resource'
import VideoBg from 'vue-videobg'
import App from './App.vue'
import router from './router'
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
Vue.use(VueFormWizard)
Vue.use(VueResource)

Vue.config.productionTip = false
Vue.component('video-bg', VideoBg)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
