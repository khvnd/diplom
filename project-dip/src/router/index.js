import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import ServicePage from '@/pages/ServicePage.vue'
import DetailService from '@/pages/DetailService.vue'
import PricePage from '@/pages/PricePage.vue'
import BlogPage from '@/pages/BlogPage.vue'
import BlogDetail from '@/pages/BlogDetail.vue'
import OurTeam from '@/pages/OurTeam.vue'

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
  },
  {
    path: '/price',
    name: 'price',
    component: PricePage
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogPage
  },
  { path: '/article/:id', 
    component: BlogDetail, 
    props: true 
  },
  {
    path: '/team',
    name: 'team',
    component: OurTeam
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
