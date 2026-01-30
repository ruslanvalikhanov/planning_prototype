import { createRouter, createWebHistory } from 'vue-router'
import TCPrototype from '../views/TCPrototype.vue'
import ECPrototype from '../views/ECPrototype.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/TC',
      name: 'TC',
      component: TCPrototype
    },
    {
      path: '/EC',
      name: 'EC',
      component: ECPrototype
    },
    {
      path: '/',
      redirect: '/TC' // Default to TC variant, or could show a selection page
    }
  ]
})

// Handle redirect from 404.html
router.beforeEach((to, from, next) => {
  // Check if we have a stored redirect path from 404.html
  const storedPath = sessionStorage.getItem('vue-router-redirect')
  if (storedPath) {
    sessionStorage.removeItem('vue-router-redirect')
    // Extract the route from the full path (e.g., /planning_prototype/TC -> /TC)
    const basePath = import.meta.env.BASE_URL
    const routePath = storedPath.replace(basePath, '') || '/TC'
    next(routePath)
  } else {
    next()
  }
})

export default router
