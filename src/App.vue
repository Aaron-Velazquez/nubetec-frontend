<script setup>

import BaseFooter from './components/BaseFooter.vue'
import { useRouter } from 'vue-router'
import { onMounted, watch } from 'vue'

const router = useRouter()
const updateTitle = () => {
  document.title = `Nubetec | ${router.currentRoute.value.meta.title}`
}

onMounted((updateTitle) => {
      watch(()=> router.currentRoute.meta.title, updateTitle)
}) 
</script>

<template>
  <router-view></router-view>
  <BaseFooter></BaseFooter>
</template>

<style scoped>

</style>
