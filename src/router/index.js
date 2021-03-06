import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/intro",
    name: "Intro",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Intro.vue"),
  },
  {
    path: "/make",
    name: "Make",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Make.vue"),
  },
  {
    path: "/confirm",
    name: "Confirm",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Confirm.vue"),
  },
  {
    path: "/facedetection",
    name: "facedetection",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/facedetection.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
