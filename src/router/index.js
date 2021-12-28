import {createRouter, createWebHashHistory} from 'vue-router'
import {
  Home,
  Detailed
} from '../pages'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detailed/:launchId',
    name: 'Detailed',
    component: Detailed
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
