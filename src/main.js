import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
// import VueSocketIO from 'vue-socket.io'
import VueSocketIO from 'vue-socket.io-extended'
import io from 'socket.io-client'
import 'vuetify/dist/vuetify.min.css'

import { store } from './store'

Vue.use(Vuetify);
// Vue.use(VueSocketIO, 'http://localhost:5000');
Vue.use(require('vue-moment'));

Vue.use(VueSocketIO, io('http://localhost:5000'), { store })

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
