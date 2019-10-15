import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import router from './router'
import Layout from './components/Layout.vue'

sync(store, router)

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router,
  render: h => h(Layout),
}).$mount('#app')
