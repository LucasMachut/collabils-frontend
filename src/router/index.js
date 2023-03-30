import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategListView from "../views/CategListView.vue";
import SigneDetailView from "../views/SigneDetailView.vue";
import CategDetailView from "../views/CategDetailView.vue";
import SignesAllView from "../views/SignesAllView.vue";
import RegistrationView from "../views/RegistrationView.vue";

const routes = [
{
path: "/",
name: "home",
component: HomeView,
},
{
path: "/category",
name: "category",
component: CategListView,
},
{
path: "/category/:id",
name: "categorydetail",
component: CategDetailView,
props: true,
},
{
path: "/signedetail/:signId",
name: "signedetail",
component: SigneDetailView,
props: true,
},
{
path: "/signes",
name: "signes",
component: SignesAllView,
props: true,
},
{
  path: '/registration',
  name: 'registration',
  component: RegistrationView,
  props: true
},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


