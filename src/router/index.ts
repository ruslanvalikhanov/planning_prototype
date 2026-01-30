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

export default router
