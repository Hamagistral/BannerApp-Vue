import Vue from 'vue'
import VueRouter from 'vue-router'
import DynamicPage from '../components/DynamicPage'
import Home from "../components/Home";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/dynamicPage',
    name: 'dynamicPage',
    component: DynamicPage
  },

]
const router = new VueRouter({
  routes
})

export default router
