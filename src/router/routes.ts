import AppLayout from '@/components/layout/AppLayout.vue'
import AboutUsPage from '@/pages/AboutUsPage.vue'
import ContactPage from '@/pages/ContactPage.vue'
import HomePage from '@/pages/HomePage.vue'
import ProductPage from '@/pages/ProductPage.vue'
import ProductsPage from '@/pages/ProductsPage.vue'
import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'HomePage',
        component: HomePage,
      },
    ],
  },
  {
    path: '/products',
    name: 'Products',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'ProductsPage',
        component: ProductsPage,
      },
    ],
  },
  {
    path: '/product',
    name: 'Product',
    component: AppLayout,
    children: [
      {
        path: ':id',
        name: 'ProductPage',
        component: ProductPage,
      },
    ],
  },
  {
    path: '/contacts',
    name: 'Contact',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'ContactPage',
        component: ContactPage,
      },
    ],
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'AboutUsPage',
        component: AboutUsPage,
      },
    ],
  },
]
