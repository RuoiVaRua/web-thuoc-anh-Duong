import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Services from "@/views/Services.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import ServiceDetail from "../views/ServiceDetail.vue";

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
        path: "/services",
        name: "Khám bệnh",
        component: Services,
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
        path: "/service/:id",
        name: "ServiceDetail",
        component: ServiceDetail,
    },    
    {
        path: "/:restPaths(.*)", // Route bắt tất cả các đường dẫn không xác định
        redirect: "/"
    }    
];

const base_URL = import.meta.env.VITE_BASE_URL || "";

const router = createRouter({
    history: createWebHistory(base_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // Nếu có vị trí cuộn đã lưu, chuyển đến vị trí đó
        if (savedPosition) {
            return savedPosition;
        } else {
            // Nếu không, cuộn đến đầu trang
            return { top: 0 };
        }
    },    
});

export default router;
