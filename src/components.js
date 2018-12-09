import Vue from 'vue'
import App from 'blacktie-forms/src/App.vue'
import './registerServiceWorker'
import './app.js'

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App)
// }).$mount('#app')

new Vue({
  el: '#app',
  components: {
    App
  }
})
