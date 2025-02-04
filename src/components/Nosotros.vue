<script setup>
import BaseHeader from './BaseHeader.vue';
import BaseFooter from './BaseFooter.vue';
import NosotrosBody from './NosotrosBody.vue';

</script>

<template>

    <BaseHeader
        header= "Nosotros"
        descripcion="Nuestros Pilares Clave"
        imagen="img/nosotros.webp">
    </BaseHeader>
    <NosotrosBody></NosotrosBody>
    <BaseFooter></BaseFooter>
</template>