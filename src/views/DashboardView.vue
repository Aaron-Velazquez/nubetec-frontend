<template>
    <main class="dashboard-container">
        <h1>Dashboard</h1>
        <p>¡Bienvenido! Tu correo es: {{ userEmail }}</p>
    </main>
</template>

<script setup>

</script>

<style scoped>
.dashboard-container {
    width: 100%;
    min-height: 100vh;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #161935;
}
</style>