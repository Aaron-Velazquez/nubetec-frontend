<script setup>

import { useRouter } from 'vue-router'
import { onMounted, watch } from 'vue'

const router = useRouter()

// Función para actualizar el título
const updateTitle = () => {
  // Notar "router.currentRoute.value"
  const title = router.currentRoute.value.meta.title
  document.title = `Nubetec | ${title ?? ''}`
}

onMounted(() => {
  // O bien, hacer un updateTitle() inicial para que el título cambie de inmediato
  updateTitle()

  // Vigilar los cambios en el meta.title de la ruta
  watch(
    () => router.currentRoute.value.meta.title, // fuente a observar
    () => updateTitle()                         // callback
  )
})
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>

</style>
