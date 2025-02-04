<template>
    <div class="dashboard-layout">
      <div class="sidebar">
        <div class="sidebar-container">
            <figure>
                <img src="/img/conversa-logo.svg" alt="Logo de Conversa">
            </figure>
            <ul>
              <!-- <li><router-link to="/dashboard/DashboardHome">Inicio</router-link></li> -->
              <li><router-link to="/dashboard/contacts">Contactos</router-link></li>
            </ul>
        </div>
        <div>
          <p>{{ userEmail }}</p>
          <button @click="logout">Cerrar sesión</button>
        </div>
        </div>
      <div class="content">
        <div class="navbar">
            <div class="saludo">
                <h1>Dashboard</h1>
                <p>Bienvenido {{ userEmail }}</p>
            </div>
            <button onclick="window.location.href='/'" >Volver al inicio</button>
        </div>
        <div class="linea"></div>

        <!-- Las rutas hijas se mostrarán aquí -->
        <router-view />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from '../composables/useSupabase'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  
  // Ejemplo: mostrar correo del usuario
  const userEmail = ref('')
  
  onMounted(async () => {
    const { data: { session } } = await supabase.auth.getSession()
    if (session?.user) {
      userEmail.value = session.user.email
    }
  })

    const logout = async () => {
        await supabase.auth.signOut()
        // Redirigir a la página de inicio
        router.push('/login')
    }
  </script>
  
  <style scoped>
  .dashboard-layout {
    display: flex;
    min-height: 100vh;
  }

  .sidebar {
    display: flex;
    height: 100vh;
    position: fixed;
    flex-direction: column;
    justify-content: space-between;
    width: 250px;
    background: #161935;
    padding: 1rem;
    color: #fff;
}
.sidebar-container {
    display: flex;
    flex-direction: column;
    height: 60%;
  }
  .sidebar figure {
    text-align: center;
    margin-top: 10px;
  }
  .sidebar img {
    padding: 10px 0;
    width: 90%;
    margin-bottom: 1rem;
  }
  .sidebar a {
    display: block;
    padding: 0 10px;
    font-weight: 300;
    color: #fff;
    text-decoration: none;
  }
  .sidebar a:hover {
    color: #ddd;
  }
  .sidebar button {
    background: #f00;
    color: #fff;
    box-shadow: 0 0 20px rgb(255, 0, 0, 0.5);
    border: none;
    margin-top: 10px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 8px;
  }
  .sidebar button:hover {
        background: #f55;
    }
  .content {
    margin-left: 250px;
    width: 100%;
    padding: 1rem;
  }

.navbar {
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.saludo {
    color: #161935;
    display: flex;
    flex-direction: column;
}
.saludo h1 {
    font-size: 2rem;
    margin: 0;
}
.saludo p {
    font-size: 1.2rem;
    margin: 0;
}
button {
    background: #00295B;
    color: #fff;
    padding: 0.5rem 1rem;
    height: 40px;
    border: none;
    cursor: pointer;
    border-radius: 8px;
}
button:hover {
    background: #00357B;
}
.linea {
    width: 100%;
    height: 1px;
    background: #ddd;
    margin-top: 1rem;
}


  </style>
  