import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Guardia de navegación para actualizar el título
router.afterEach((to) => {
    const defaultTitle = 'Nubetec'; // Título por defecto
    document.title =  to.meta.title + ' | Nubetec' || defaultTitle;
  });

createApp(App)
.use(router)
.mount('#app')
