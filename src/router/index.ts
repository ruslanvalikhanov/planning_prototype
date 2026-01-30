import { createRouter, createWebHashHistory } from 'vue-router'
import TCPrototype from '../views/TCPrototype.vue'
import ECPrototype from '../views/ECPrototype.vue'
import ProjectsList from '../components/ProjectsList.vue'

const router = createRouter({
  history: createWebHashHistory(),
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

// Hash mode routing works on GitHub Pages without requiring 404.html
// URLs will use hash fragments (e.g., /planning_prototype/#/TC)

export default router
