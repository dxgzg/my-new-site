import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    { path: '/', component: Home },
    {
        path: "/article/:articleUid",
        props: true,
        component: () => import ("../views/Article.vue")
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router;