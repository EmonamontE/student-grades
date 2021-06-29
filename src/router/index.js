import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import FirstJournal from '../components/FirstJournal.vue'
import SecondJournal from '../components/SecondJournal.vue'
import Layout from '../components/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    meta: { requiredLayout: Layout }
  },
  {
    path: '/firstjournal',
    component: FirstJournal,
    meta: { requiredLayout: Layout }
  },
  {
    path: '/secondjournal',
    component: SecondJournal,
    meta: { requiredLayout: Layout }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
