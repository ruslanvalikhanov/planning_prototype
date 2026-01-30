<template>
  <div>
    <LoginPage v-if="!hasChildRoute" variant="EC" />
    <RouterView v-else />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import LoginPage from '../components/LoginPage.vue'

const route = useRoute()

// Check if we're on a child route (projects or project detail)
// route.matched.length > 1 means we have a child route matched
const hasChildRoute = computed(() => {
  return route.matched.length > 1 || route.name === 'ECProjects' || route.name === 'ECProjectDetail'
})
</script>

<style scoped>
/* EC variant specific styles if needed */
</style>
