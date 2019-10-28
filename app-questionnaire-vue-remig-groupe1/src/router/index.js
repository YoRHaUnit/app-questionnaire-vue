import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/questions/:firstname/:lastname/:society/:question',
    name: 'questions',
    component: () => import(/* webpackChunkName: "about" */ '../views/Questionnaire.vue'),
    props: true
  },
  {
    path: '/resultats/:firstname/:lastname/:society/:question',
    name: 'resultats',
    component: () => import(/* webpackChunkName: "about" */ '../views/Resultats.vue'),
    props: true
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
