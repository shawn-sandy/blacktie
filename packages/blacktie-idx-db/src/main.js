import Vue from 'vue'
import App from './App.vue'

// import idb from 'dexie'
// Object.defineProperty(Vue.prototype, '$idb', { value: idb })

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
