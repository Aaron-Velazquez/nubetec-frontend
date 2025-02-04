<script setup>
import BaseHeader from './BaseHeader.vue';
import BaseFooter from './BaseFooter.vue';
import ServicioBody from './ServicioBody.vue';

</script>

<template>

    <BaseHeader 
    header= "Nuestros Servicios"
    descripcion="Impulsamos la innovación en la agricultura y ganadería a través de la tecnología avanzada"
    imagen="img/servicios (1).webp"
    ></BaseHeader>
    <ServicioBody></ServicioBody>
  <BaseFooter></BaseFooter>

</template>