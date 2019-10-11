import Vue from 'vue'
import Router from 'vue-router'
import App from './views/App.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'app',
      component: App,
    },
    {
      path: '/na_everest_liyboi_tsenoi',
      name: 'app',
      component: App,
    },
    {
      path: '*',
      component: () => import(/* webpackChunkName: "about" */ './views/Error.vue'),
    },
  ],
})
