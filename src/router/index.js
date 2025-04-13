import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import ServicePage from '@/pages/ServicePage.vue'
import DetailService from '@/pages/DetailService.vue'
import PricePage from '@/pages/PricePage.vue'
import BlogPage from '@/pages/BlogPage.vue'
import BlogDetail from '@/pages/BlogDetail.vue'
import OurTeam from '@/pages/OurTeam.vue'
import ContactPage from '@/pages/ContactPage.vue'
import FAQ from '@/pages/FAQ.vue'
import ConditionsPage from '@/pages/ConditionsPage.vue'
import PrivacyPolicy from '@/pages/PrivacyPolicy.vue'
import NotFound from '@/pages/NotFound.vue'

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
    path: '/detailservice/:id',
    name: 'detailservice',
    component: DetailService,
    props: true
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
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage
  },
  {
    path: '/faq',
    name: 'faq',
    component: FAQ
  },
  {
    path: '/conditions',
    name: 'conditions',
    component: ConditionsPage
  },
  {
    path: '/policy',
    name: 'policy',
    component: PrivacyPolicy
  },
  {
    path: "/:pathMatch(.*)*", 
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 } // или { top: 0, behavior: 'smooth' }
  }
})

export default router
