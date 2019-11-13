import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/create',
    name: 'new-employee',
    component: () => import('../views/AddEmployee.vue')
  },
  {
    path: '/view/:id',
    name: 'view-employee',
    component: () => import('../views/ViewEmployee.vue')
  },
  {
    path: '/update/:id',
    name: 'edit-employee',
    component: () => import('../views/EditEmployee.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
