import Vue from 'vue'
import VueResource from 'vue-resource'
import VideoBg from 'vue-videobg'
import App from './App.vue'
import router from './router'
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import Web3 from 'aion-web3'
Vue.use(VueFormWizard)
Vue.use(VueResource)

// Initializing Variables
let web3;
let aiwa;
let aiwaInjected = false;
let myContract;
let contractAddress = "0xYourContractAddressHere";
let account = "Not Detected - Please download AIWA to play this game";

// On load, inject AIWA
window.onload = () => {
  if (aionweb3){
    aiwa = aionweb3;
    aiwaInjected = true
    console.log("✓ AIWA injected successfully");
  }
}

Vue.config.productionTip = false
Vue.component('video-bg', VideoBg)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
