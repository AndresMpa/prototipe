import {
  createRouter,
  createWebHistory,
  isNavigationFailure,
  NavigationFailureType,
} from "vue-router";
import store from "@store/index.js";

import Home from "@pages/Home";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true, transition: "slide-left" },
    children: [
      {
        name: "Achievements",
        path: "/achievements",
        meta: { requiresAuth: true, transition: "slide-left" },
        component: () => import(/* webpackChunkName: "Home" */ "@pages/Achievements"),
      },
      {
        name: "Progress",
        path: "/progress",
        meta: { requiresAuth: true, transition: "slide-left" },
        component: () => import(/* webpackChunkName: "Home" */ "@pages/Progress"),
      },
      {
        name: "Patients",
        path: "/patients",
        meta: { requiresAuth: true, transition: "slide-left" },
        component: () => import(/* webpackChunkName: "Home" */ "@pages/Patients"),
      },
    ],
  },
  {
    name: "Login",
    path: "/login",
    meta: { requiresAuth: false, transition: "slide-left" },
    component: () => import(/* webpackChunkName: "Home" */ "@pages/Login"),
    children: [
      {
        name: "Logout",
        path: "/logout",
        meta: { requiresAuth: false, transition: "slide-left" },
        component: () => import(/* webpackChunkName: "Home" */ "@pages/Logout"),
      },
      {
        name: "Recovery",
        path: "/recovery",
        meta: { requiresAuth: false, transition: "slide-left" },
        component: () => import(/* webpackChunkName: "Home" */ "@pages/Recovery"),
      },
      {
        name: "Create",
        path: "/create-account",
        meta: { requiresAuth: false, transition: "slide-left" },
        component: () => import(/* webpackChunkName: "Home" */ "@pages/Create"),
      },
    ],
  },
  {
    name: "Landing",
    path: "/landing",
    meta: { requiresAuth: false, transition: "slide-left" },
    component: () => import(/* webpackChunkName: "Home" */ "@pages/Home"),
    children: [
      {
        name: "Purchase",
        path: "/purchase",
        meta: { requiresAuth: false, transition: "slide-left" },
        component: () => import(/* webpackChunkName: "Home" */ "@pages/Home"),
      },
      {
        name: "Bill",
        path: "/bill",
        meta: { requiresAuth: false, transition: "slide-left" },
        component: () => import(/* webpackChunkName: "Home" */ "@pages/Home"),
      },
    ],
  },
  {
    name: "NotFound",
    path: "/:pathMatch(.*)*",
    meta: { requiresAuth: false, transition: "slide-left" },
    component: () => import(/* webpackChunkName: "Home" */ "@pages/NotFound"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from) => {
 /* if (to.meta.requiresAuth && !store.state.auth.isLoggedIn) {*/
    /*return {*/
      /*path: "/login",*/
    /*};*/
  /*}*/
});

export default router;
