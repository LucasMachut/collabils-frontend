import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategListView from '../views/CategListView.vue'
import SignesListView from '../views/SignesListView.vue'
import SigneDetailView from '../views/SigneDetailView.vue'
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
    component: CategListView
  },
  {
    path: '/signes',
    name: 'signes',
    component: SignesListView
  },
  {
    path: '/signedetail/:id',
    name: 'signeDetail',
    component: SigneDetailView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


