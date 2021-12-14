import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/Home.vue')
  }, {
    path: '/video',
    name: 'Video',
    component: () => import('@/views/video/video.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
