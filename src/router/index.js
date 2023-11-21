import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layout/LayoutContainer.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/chat/ChatHomePage.vue')
        },
        {
          path: 'chat/:id',
          component: () => import('@/views/chat/ChatWindow.vue')
        }
      ]
    }, {
      path: '/login',
      component: () => import('@/views/login/LoginPage.vue'),
    }
  ]
})

export default router
