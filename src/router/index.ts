import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "login",
    component: () => import("../views/Login/Login.vue")
  },
  {
    path: "/table",
    name: "Table",
    component: () => import("../views/Table.vue")
  },
  {
    path: "/Interface",
    name: "Interface",
    component: () => import("../views/Interface.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
