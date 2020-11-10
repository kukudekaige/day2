import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home")
  }, {
    path: "/list",
    name: "List",
    component: () => import("../views/List")
  }, {
    path: "/car",
    name: "Car",
    component: () => import("../views/Car")
  }, {
    path: "/my",
    name: "My",
    component: () => import("../views/My")
  }, {
    path: "/dotail/:id",
    name: "Dotail",
    component: () => import("../views/Dotail")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
