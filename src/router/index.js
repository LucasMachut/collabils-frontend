import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoriesView from '../views/CategoriesView.vue'
import SignsView from '../views/SignsView.vue'
//import SignsByCategView from '../views/SignsByCategView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/category',
    name: 'category',
    component: CategoriesView
  },
  {
    path: '/signs',
    name: 'signs',
    component: SignsView
  },
  {
    path: '/sign/:id',
    name: 'sign',
    component: () => import(/* webpackChunkName: "recipe" */ '../views/SignDetailedView.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import(/* webpackChunkName: "registration" */ '../views/RegistrationView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


