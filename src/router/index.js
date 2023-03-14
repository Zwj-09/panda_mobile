import { createRouter, createWebHashHistory } from 'vue-router'

import Index from '@/views/Home/Index.vue'

import storage from '@/utils/storage'

const localRoutes = [
  {
    path: '/home',
    name: 'Home',
    meta: {
      name: '首页'
    },
    component: () => import('@/views/Home/Children/Home.vue')
  },
  {
    path: '/scientific',
    name: 'Scientific',
    meta: {
      name: '科研项目'
    },
    component: () => import('@/views/Home/Children/Scientific.vue')
  },
  {
    path: '/achievement',
    name: 'Achievement',
    meta: {
      name: '成果管理'
    },
    component: () => import('@/views/Home/Children/Achievement.vue')
  },
  {
    path: '/audit',
    name: 'Audit',
    meta: {
      name: '审核管理'
    },
    component: () => import('@/views/Home/Children/Audit.vue')
  }
]

const routes = [
  { path: '/', redirect: '/index' },
  {
    path: '/index',
    name: 'Index',
    meta: {
      name: '首页'
    },
    component: Index,
    redirect: '/home',
    children: localRoutes
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      name: '登录'
    },
    component: () => import('@/views/Login/Login.vue')
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    meta: {
      name: '页面丢失了~~'
    },
    component: () => import('@/views/404/404.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.name || '中国大熊猫研究基地'
  const token = storage.get('Token')
  // let cookieList = document.cookie.split('"token"=')
  // let token = cookieList[1]
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
