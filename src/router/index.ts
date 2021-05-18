import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'todos',
        component: () => import(/* webpackChunkName: 'todos' */'@/views/todos/index.vue')
      },
      {
        path: 'home',
        name: 'home',
        component: () => import(/* webpackChunkName: 'github' */'@/views/home/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
