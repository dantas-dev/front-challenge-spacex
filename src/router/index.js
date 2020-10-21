import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard.vue'),
    children: [
      {
        path: '',
        name: 'MissaoAtiva',
        component: () => import('@/views/MissaoAtiva.vue'),
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
