import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../../src/components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'About',
    component: () => import('../../src/components/portfolio/Portfolio.vue')
  },
  {
    path: '/stocks',
    name: 'Stocks',
    component: () => import('../../src/components/stocks/Stocks.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
