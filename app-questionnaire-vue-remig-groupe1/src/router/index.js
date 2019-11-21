import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    // Page d'accueil affichant le formulaire
    path: '/',
    name: 'home',
    component: Home
  },
  {
    // Page des questionnaires. Une seule page est utilisée pour toutes les questions
    path: '/questionnaire/:firstname/:lastname/:society/:question',
    name: 'questions',
    component: () => import(/* webpackChunkName: "about" */ '../views/Questionnaire.vue'),
    props: true
  },
  {
    // Page des résultats lorsque nous répondons à la dernière question
    path: '/resultats/:firstname/:lastname/:society/:question',
    name: 'resultats',
    component: () => import(/* webpackChunkName: "about" */ '../views/Resultats.vue'),
    props: true
  },
  {
    // Page des résultats lorsque nous répondons à la dernière question
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
    props: true
  }
  /*
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ /* '../views/About.vue') */
  /* } */
]

const router = new VueRouter({
  routes
})

export default router
