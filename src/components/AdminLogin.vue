<!-- resources/js/components/AdminLogin.vue -->
<template>
    <div class="admin-login">
        <h2>Administrador - Iniciar Sesión</h2>
        <form @submit.prevent="login">
            <div>
                <label for="email">Correo Electrónico:</label>
                <input type="email" v-model="form.email" id="email1" required autofocus />
                <span v-if="errors.email" class="error">{{ errors.email }}</span>
            </div>
            <div>
                <label for="password">Contraseña:</label>
                <input type="password" v-model="form.password" id="password" required />
                <span v-if="errors.password" class="error">{{ errors.password }}</span>
            </div>
            <div>
                <input type="checkbox" v-model="form.remember" id="remember" />
                <label for="remember">Recordar sesión</label>
            </div>
            <button type="submit">Iniciar Sesión</button>
            <div v-if="generalError" class="error">
                {{ generalError }}
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
    email: '',
    password: '',
    remember: false
});

const errors = ref({});
const generalError = ref('');

const login = async () => {
    try {
        const response = await fetch('/admin/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify(form.value),
            credentials: 'include' // Importante para manejar cookies de sesión
        });

        if (response.ok) {
            // Redirigir al dashboard
            window.location.href = '/admin/dashboard';
        } else {
            const errorData = await response.json();
            if (errorData.errors) {
                errors.value = errorData.errors;
            }
            if (errorData.message) {
                generalError.value = errorData.message;
            }
        }
    } catch (error) {
        generalError.value = 'Hubo un error al intentar iniciar sesión.';
        console.error(error);
    }
};
</script>

<style scoped>
.admin-login {
    max-width: 400px;
    margin: auto;
}
.admin-login div {
    margin-bottom: 15px;
}
.admin-login label {
    display: block;
    margin-bottom: 5px;
}
.admin-login input[type="email"],
.admin-login input[type="password"] {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}
.admin-login button {
    padding: 10px 20px;
    background-color: #35495e;
    color: white;
    border: none;
    cursor: pointer;
}
.admin-login .error {
    color: red;
    font-size: 0.9em;
}
</style>
