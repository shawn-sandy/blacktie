import Vue from 'vue'

console.log('path name', window.location.pathname)
const Home = require('./index.vue').default
const NotFound =

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

//console.log('page', pg)

new Vue({
  el: '#app',
  data() {
    return {
      currentRoute: window.location.pathname,
    }
  },
  computed: {
    ViewComponent () {
     console.log('pg', page)
      return routes[page] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
