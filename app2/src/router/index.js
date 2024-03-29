// import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routeName = 'app2'

const routes = [
  {
    path: '/home',
    name: `${routeName}-home`,
    component: Home
  },
  {
    path: '/about',
    name: `${routeName}-about`,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]


export default routes
