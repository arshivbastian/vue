import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/castel',
      name: 'castel',
      component: () => import('./views/castel.vue')
    },
    {
      path: '/Allies',
      name: 'allies',
      component: () => import('./views/allies.vue')
    },
    {
      path: '/War',
      name: 'war',
      component: () => import('./views/war.vue')
    }
  ]
})
