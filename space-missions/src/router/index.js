import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import Mission from "../views/Mission.vue"

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Main",
        component: Main,
    },
    {
        path: "/mission/:slug",
        name: "Mission",
        component: Mission
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
