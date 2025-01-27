import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/Nosotros.vue'
import Services from '../components/Servicios.vue'
import Contacto from '../components/Contacto.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Inicio'
    }
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: About,
    meta: {
      title: 'Nosotros'
    }
  },
  {
    path: '/servicios',
    name: 'Services',
    component: Services,
    meta: {
      title: 'Servicios'
    }
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto,
    meta: {
      title: 'Contacto'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router