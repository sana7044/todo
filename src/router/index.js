import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'letsstart',
      component: () => import('../components/LetsStart.vue'),
    },
  ],
})

export default router
