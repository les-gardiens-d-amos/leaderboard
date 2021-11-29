import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './router.js';

import axios from "axios";
import moment from "moment";

import App from './App.vue'
import vuetify from './plugins/vuetify'

import 'leaflet/dist/leaflet.css';
import store from './store'

Vue.use(VueRouter);

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;
Vue.prototype.$moment = moment;

const router = new VueRouter({ routes })

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
