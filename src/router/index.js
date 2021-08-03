import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/crear',
    name: 'Crear',
    component: () => import('../components/Crear/Crear.vue')
  },
  {
    path: '/listar',
    name: 'Listar',
    component: () => import('../components/Listar/Listar.vue')
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: () => import('../components/Editar/Editar.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
