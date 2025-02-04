<script setup>
import BaseHeader from './BaseHeader.vue';
import BaseFooter from './BaseFooter.vue';
import ContactoBody from './ContactForm.vue';

</script>

<template>

    <BaseHeader
    header= "Contacto"
    descripcion="Estamos atentos a tu respuesta"
    imagen="img/contacto_principal.webp"
></BaseHeader>
    <ContactoBody></ContactoBody>
  <BaseFooter></BaseFooter>

</template>