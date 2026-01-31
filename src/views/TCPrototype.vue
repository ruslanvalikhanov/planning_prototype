<template>
  <div>
    <LoginPage v-if="!hasChildRoute" variant="TC" />
    <RouterView v-else />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import LoginPage from '../components/LoginPage.vue'

const route = useRoute()

// Check if we're on a child route by checking the path directly
// This is more reliable than route.matched.length during redirects
const hasChildRoute = computed(() => {
  const path = route.path.toLowerCase()
  return path.includes('/projects')
})
</script>

<style scoped>
/* TC variant specific styles if needed */
</style>
