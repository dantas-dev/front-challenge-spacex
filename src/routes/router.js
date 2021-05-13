import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Dashboard from "../pages/Dashboard";
import Mission from "../pages/Mission";

const routes = [
  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "/mission",
    component: Mission,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
