import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Dashboard from "../pages/Dashboard";
import Mission from "../pages/Mission";

const routes = [
  {
    path: "/",
    name: "index",
    component: Dashboard,
  },
  {
    path: "/mission/:id",
    name: "mission",
    component: Mission,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
