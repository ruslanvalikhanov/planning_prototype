import { createRouter, createWebHashHistory } from 'vue-router'
import TCPrototype from '../views/TCPrototype.vue'
import ECPrototype from '../views/ECPrototype.vue'
import ProjectsList from '../components/ProjectsList.vue'
import ProjectDetail from '../components/ProjectDetail.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // Lowercase redirects for case-insensitive routing
    {
      path: '/tc',
      redirect: '/TC'
    },
    {
      path: '/ec',
      redirect: '/EC'
    },
    {
      path: '/tc/projects',
      redirect: '/TC/projects'
    },
    {
      path: '/ec/projects',
      redirect: '/EC/projects'
    },
    {
      path: '/tc/projects/:id',
      redirect: (to) => `/TC/projects/${to.params.id}`
    },
    {
      path: '/ec/projects/:id',
      redirect: (to) => `/EC/projects/${to.params.id}`
    },
    // Main routes
    {
      path: '/TC',
      component: TCPrototype,
      children: [
        {
          path: 'projects',
          name: 'TCProjects',
          component: ProjectsList,
          props: { variant: 'TC' }
        },
        {
          path: 'projects/:id',
          name: 'TCProjectDetail',
          component: ProjectDetail,
          props: { variant: 'TC' }
        }
      ]
    },
    {
      path: '/EC',
      component: ECPrototype,
      children: [
        {
          path: 'projects',
          name: 'ECProjects',
          component: ProjectsList,
          props: { variant: 'EC' }
        },
        {
          path: 'projects/:id',
          name: 'ECProjectDetail',
          component: ProjectDetail,
          props: { variant: 'EC' }
        }
      ]
    },
    {
      path: '/projects',
      redirect: '/TC/projects' // Redirect old route to TC
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
