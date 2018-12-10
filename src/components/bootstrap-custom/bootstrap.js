import Vue from 'vue'
import App from './Bootstrap.vue'
import 'blacktie-styles/app.scss'
import './../../app'
import './app'

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