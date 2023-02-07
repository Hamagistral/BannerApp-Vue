import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import DynamicPage from '../DynamicPage.vue'
import Home from "../Home";

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
