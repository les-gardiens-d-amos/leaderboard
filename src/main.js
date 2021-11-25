import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './router.js';

import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({ routes })

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
