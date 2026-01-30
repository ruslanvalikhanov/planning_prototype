import { createRouter, createWebHistory } from 'vue-router'
import TCPrototype from '../views/TCPrototype.vue'
import ECPrototype from '../views/ECPrototype.vue'
import ProjectsList from '../components/ProjectsList.vue'

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
      path: '/projects',
      name: 'Projects',
      component: ProjectsList
    },
    {
      path: '/',
      redirect: '/TC' // Default to TC variant, or could show a selection page
    }
  ]
})

// Handle redirect from 404.html
router.beforeEach((to, from, next) => {
  // Check if we have a redirect query parameter from 404.html
  const redirectParam = to.query.redirect as string | undefined
  if (redirectParam) {
    // Validate route - must be /TC, /EC, or /projects, otherwise default to /TC
    let routePath = redirectParam
    if (!routePath.startsWith('/')) {
      routePath = '/' + routePath
    }
    // Allow valid routes: /TC, /EC, /projects
    if (routePath !== '/TC' && routePath !== '/EC' && routePath !== '/projects') {
      routePath = '/TC'
    }
    // Navigate to the route and remove the query parameter
    next({ path: routePath, replace: true })
  } else {
    next()
  }
})

export default router
