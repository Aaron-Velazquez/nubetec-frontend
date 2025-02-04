<template>
    <main class="login-container">
        <div class="login">
            <img src="/img/conversa-logo.svg" alt="Logo" />
            <h1>Inicio de Sesión del Panel de Control</h1>
            <form @submit.prevent="login">
                <input type="text" placeholder="Username" id="email" v-model="email" required/>
                <input type="password" placeholder="Password" id="password" v-model="password" required/>
                <button type="submit">Ingresar</button>
            </form>
            <p v-if="errorMessage">{{ errorMessage }}</p>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../composables/useSupabase'

const email = ref('')
const password = ref('')
const errorMessage = ref('')

const router = useRouter()

const login = async () => {
    console.log('Entró a login method')
  errorMessage.value = ''
  try {
    // Llamada a supabase auth
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })
    if (error) {
      // Maneja error (credenciales inválidas, etc.)
      errorMessage.value = error.message
      return
    }

    // ¡Éxito! data contendrá info del usuario / sesión
    router.push('/dashboard/contacts')
  } catch (err) {
    // Otros errores inesperados (problemas de red, etc.)
    errorMessage.value = 'Error al iniciar sesión'
    console.error(err)
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Murecho:wght@100..900&display=swap');

* {
    font-family: 'Murecho', sans-serif;
}

.login-container {
    width: 100%;
    min-height: 100vh;
    background-color: #161935;
    display: flex;
    align-items: center;
    justify-content: center;
}

.login {
    width: 100%;
    max-width: 400px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.login img {
    width: 300px;
    margin-bottom: 20px;
}

.login h1 {
    color: white;
    font-size: 1.2rem;
    margin-bottom: 40px;
    font-weight: normal;
}

.login form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.login input {
    width: 100%;
    padding: 10px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.05);
    color: white;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.login input::placeholder {
    color: rgba(255, 255, 255, 0.5);
}

.login input:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.3);
    background-color: rgba(255, 255, 255, 0.1);
}

.login button {
    width: 100%;
    padding: 10px;
    background-color: white;
    color: #1a1f3d;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1rem;
}

.login button:hover {
    background-color: rgba(255, 255, 255, 0.9);
    transform: translateY(-2px);
}

.login button:active {
    transform: translateY(0);
}

.forgot-password {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    font-size: 0.9rem;
    margin-top: 1rem;
    display: inline-block;
    transition: color 0.3s ease;
}

.forgot-password:hover {
    color: white;
}

/* Responsive */
@media (max-width: 480px) {
    .login {
        padding: 1.5rem;
    }

    .login img {
        width: 150px;
    }

    .login h1 {
        font-size: 1.5rem;
    }

    .login p {
        font-size: 0.9rem;
    }
}
</style>