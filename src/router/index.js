import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/Nosotros.vue'
import Services from '../components/Servicios.vue'
import Contacto from '../components/Contacto.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: About
  },
  {
    path: '/servicios',
    name: 'Services',
    component: Services
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router