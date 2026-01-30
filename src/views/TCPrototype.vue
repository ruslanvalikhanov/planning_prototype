<template>
  <div>
    <LoginPage v-if="!showProjects" variant="TC" />
    <RouterView v-else />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import LoginPage from '../components/LoginPage.vue'

const route = useRoute()
const showProjects = ref(false)

// Show projects if we're on a nested route
watch(() => route.path, (path) => {
  showProjects.value = path.includes('/projects')
}, { immediate: true })
</script>

<style scoped>
/* TC variant specific styles if needed */
</style>
