import Vue from 'vue'
import App from './components/App.vue'

import store from './store'

store.commit('INIT_JOKES',[{test: 'test_joke'}])

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
