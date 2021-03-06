import Vue from 'vue'
import App from 'blacktie-idx-db/src/App.vue'
import './registerServiceWorker'
import './app.js'

// import idb from 'dexie'
// Object.defineProperty(Vue.prototype, '$idb', { value: idb })

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
