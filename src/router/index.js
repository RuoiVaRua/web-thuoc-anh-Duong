import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import ProductDetail from "../views/ProductDetail.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/product/:id",
        name: "ProductDetail",
        component: ProductDetail,
    },    
    {
        path: "/:rest-paths(.*)", // Route bắt tất cả các đường dẫn không xác định
        redirect: "/"
    }    
];

const router = createRouter({
    history: createWebHistory("/"),
    routes,
});

export default router;
