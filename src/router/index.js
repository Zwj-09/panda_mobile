import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home/Home.vue'

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'Home',
    meta: {
      name: '首页'
    },
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      name: '登录'
    },
    component: () => import('@/views/Login/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('Token')
  if (token) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
