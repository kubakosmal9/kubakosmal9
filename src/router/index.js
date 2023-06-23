import { createRouter, createWebHistory } from 'vue-router'
import homeView from '../views/homeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: homeView
    },
    {
      path: '/about',
      redirect: '/#about'
    },
    {
      path: '/kontakt',
      redirect: '/#kontakt'
    },
  ],
  scrollBehavior (to) {
    if (to.hash) {
      return {
        behavior: 'smooth',
        el: to.hash, 
      }
    }
  }
})

export default router
