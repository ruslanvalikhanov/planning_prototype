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
      redirect: '/TC' // Default to TC variant
    },
    {
      // Catch-all route for unknown paths - redirect to default
      path: '/:pathMatch(.*)*',
      redirect: '/TC'
    }
  ]
})

// No router guard needed - Vue Router automatically handles routing based on URL pathname
// Since 404.html is a copy of index.html, Vue Router will read the URL and route accordingly

export default router
