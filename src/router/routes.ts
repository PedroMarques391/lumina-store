import Layout from '@/components/shared/Layout.vue'
import HomePage from '@/pages/HomePage.vue'
import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: '',
        name: 'HomePage',
        component: HomePage,
      },
    ],
  },
]
