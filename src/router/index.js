import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import class10A from '../components/Class10A.vue'
import class10B from '../components/Class10B.vue'
import Layout from '../components/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    meta: { requiredLayout: Layout }
  },
  {
    path: '/class10A',
    component: class10A,
    meta: { requiredLayout: Layout }
  },
  {
    path: '/class10B',
    component: class10B,
    meta: { requiredLayout: Layout }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
