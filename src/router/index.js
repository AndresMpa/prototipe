import {
  createRouter,
  createWebHistory,
  isNavigationFailure,
  NavigationFailureType,
} from "vue-router";
import store from "@store/index.js";

import Home from "@pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true, transition: "slide-left" },
    children: [
      {
        name: "Recent",
        path: "/recent",
        meta: { requiresAuth: true, transition: "slide-left" },
        component: () => import("@pages/Recent.vue"),
      },
      {
        name: "Achievements",
        path: "/achievements",
        meta: { requiresAuth: true, transition: "slide-left" },
        component: () => import("@pages/Achievements.vue"),
      },
      {
        name: "Progress",
        path: "/progress",
        meta: { requiresAuth: true, transition: "slide-left" },
        component: () => import("@pages/Progress.vue"),
      },
      {
        name: "Patients",
        path: "/patients",
        meta: { requiresAuth: true, transition: "slide-left" },
        component: () => import("@pages/Patients.vue"),
      },
    ],
  },
  {
    name: "Login",
    path: "/login",
    meta: { requiresAuth: false, transition: "slide-left" },
    component: () => import("@pages/Login"),
    children: [
      {
        name: "Logout",
        path: "/logout",
        meta: { requiresAuth: false, transition: "slide-left" },
        component: () => import("@pages/Logout"),
      },
      {
        name: "Recovery",
        path: "/recovery",
        meta: { requiresAuth: false, transition: "slide-left" },
        component: () => import("@pages/Recovery"),
      },
      {
        name: "Create",
        path: "/create-account",
        meta: { requiresAuth: false, transition: "slide-left" },
        component: () => import("@pages/Create"),
      },
    ],
  },
  {
    name: "Landing",
    path: "/landing",
    meta: { requiresAuth: false, transition: "slide-left" },
    component: () => import("@pages/Home"),
    children: [
      {
        name: "Purchase",
        path: "/purchase",
        meta: { requiresAuth: false, transition: "slide-left" },
        component: () => import("@pages/Home"),
      },
      {
        name: "Bill",
        path: "/bill",
        meta: { requiresAuth: false, transition: "slide-left" },
        component: () => import("@pages/Home"),
      },
    ],
  },
  {
    name: "NotFound",
    path: "/:pathMatch(.*)*",
    meta: { requiresAuth: false, transition: "slide-left" },
    component: () => import("@components/NotFound"),
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
  if (to.meta.requiresAuth && !store.state.auth.session) {
    return {
      path: "/login",
    };
  }
});

export default router;
