<!-- resources/js/components/AdminDashboard.vue -->
<template>
    <div class="admin-dashboard">
        <h1>Dashboard del Administrador</h1>
        <button @click="logout">Cerrar Sesión</button>
        <h2>Mensajes de Contacto</h2>
        <ul>
            <li v-for="message in messages" :key="message.id">
                <strong>{{ message.name }}</strong> ({{ message.email }})<br>
                <em>{{ message.subject }}</em><br>
                {{ message.message }}<br>
                <small>Enviado el: {{ formatDate(message.created_at) }}</small>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const messages = ref([]);

const fetchMessages = async () => {
    try {
        const response = await fetch('/admin/messages', {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            credentials: 'include' // Importante para manejar cookies de sesión
        });

        if (response.ok) {
            const data = await response.json();
            messages.value = data;
        } else {
            console.error('Error al obtener los mensajes.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

const logout = async () => {
    try {
        const response = await fetch('/admin/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            credentials: 'include'
        });

        if (response.ok) {
            window.location.href = '/admin/login';
        } else {
            console.error('Error al cerrar sesión.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
};

// Cargar mensajes al montar el componente
onMounted(() => {
    fetchMessages();
});
</script>

<style scoped>
.admin-dashboard {
    max-width: 800px;
    margin: auto;
    padding: 20px;
}
.admin-dashboard h1 {
    margin-bottom: 20px;
}
.admin-dashboard button {
    padding: 8px 16px;
    background-color: #e3342f;
    color: white;
    border: none;
    cursor: pointer;
    margin-bottom: 20px;
}
.admin-dashboard h2 {
    margin-top: 30px;
}
.admin-dashboard ul {
    list-style-type: none;
    padding: 0;
}
.admin-dashboard li {
    border: 1px solid #ccc;
    padding: 15px;
    margin-bottom: 10px;
}
.admin-dashboard li small {
    color: #666;
}
</style>
