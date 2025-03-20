import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import ServicePage from '@/pages/ServicePage.vue'
import DetailService from '@/pages/DetailService.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/service',
    name: 'service',
    component: ServicePage
  },
  {
    path: '/detailservice',
    name: 'detailservice',
    component: DetailService
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
