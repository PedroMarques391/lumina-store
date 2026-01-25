import AppLayout from '@/components/layout/AppLayout.vue'
import AboutUsPage from '@/pages/AboutUsPage.vue'
import ContactPage from '@/pages/ContactPage.vue'
import HomePage from '@/pages/HomePage.vue'
import ProductPage from '@/pages/ProductPage.vue'
import ProductPageByCategory from '@/pages/ProductPageByCategory.vue'
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
    name: 'Product',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'ProductPage',
        component: ProductPage,
      },
      {
        path: ':category',
        name: 'ProductPageCategory',
        component: ProductPageByCategory,
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
