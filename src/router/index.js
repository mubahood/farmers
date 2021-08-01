import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("../pages/Login.vue"),
    },
    
    {
      path: "/farmers",
      name: "farmers",
      component: () => import("../pages/Farmers.vue"),
    },
    
    {
      path: "/visits",
      name: "visits",
      component: () => import("../pages/Visits.vue"),
    },

    {
      path: "/visit/:id",
      name: "visit",
      component: () => import("../pages/Visit.vue"),
    },

    {
      path: "/forms",
      name: "forms",
      component: () => import("../pages/Forms.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../pages/Farmers.vue"),
    },
    {
      path: "/addform",
      name: "addform",
      component: () => import("../pages/AddForm.vue"),
    },
    {
      path: "/addcandidate",
      name: "addcandidate",
      component: () => import("../pages/AddCandidate.vue"),
    },
    {
      path: "*",
      redirect: "error-404",
    },
  ],
});

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById("loading-bg");
  if (appLoading) {
    appLoading.style.display = "none";
  }
});

export default router;
