import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/Nosotros.vue'
import Services from '../components/Servicios.vue'
import Contacto from '../components/Contacto.vue'
import DashboardView from '../views/DashboardView.vue'
import ContactsView from '../views/ContactsView.vue'
import { supabase } from '../composables/useSupabase'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue'),
    meta: {
      title: 'Iniciar sesión'
    }
  },
  {
    path: '/dashboard',
    component: () => import('../layouts/DashboardLayout.vue'),
    meta: { requiresAuth: true,
      title: 'Dashboard'
     },
    children: [
      {
        path: '/Dhome',
        name: 'DashboardHome',
        component: DashboardView
      },
      {
        path: 'contacts',
        name: 'DashboardContacts',
        component: ContactsView
      }
    ]
  },
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

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    const { data: { session } } = await supabase.auth.getSession()
    // si la sesión no existe, redirige a /login
    if (!session) {
      return next('/login')
    }
  }
  next()
})

export default router