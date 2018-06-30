import Vue from 'vue'

console.log('path name', window.location.pathname)
const Home = require('./vue/pages/index.vue').default
const NotFound = require('./vue/pages/404.vue').default

const routes  = {
  '/': Home
}

const getQueryString = function (field, url) {
	var href = url ? url : window.location.href;
	var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
	var string = reg.exec(href);
	return string ? string[1] : null;
}

const page =  getQueryString('pg');
console.log('page', page);

new Vue({
  el: '#routes',
  data() {
    return {
      currentRoute: window.location.pathname,
    }
  },
  computed: {
    ViewComponent () {
     console.log('pg', page)
      return routes[page] || Home
    }
  },
  render (h) { return h(this.ViewComponent) }
})
