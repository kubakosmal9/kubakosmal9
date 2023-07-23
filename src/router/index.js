import { createRouter, createWebHistory } from 'vue-router'
import homeView from '../views/homeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: homeView
    },
    {
      path: '/socials',
      redirect: '/#socials'
    },
    {
      path: '/about',
      redirect: '/#about'
    },
  ],
})

router.afterEach((to) => {
  if (to.hash) {
    const element = document.querySelector(to.hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

export default router
