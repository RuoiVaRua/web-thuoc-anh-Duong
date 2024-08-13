<template>
    <div id="app">
        <Header />
        <router-view></router-view>
        <Footer />
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { mapActions } from "vuex";

export default {
    name: "App",
    components: {
        Header,
        Footer,
    },
    created() {
        this.fetchProducts(); // Fetch products data on created hook
    },
    methods: {
        ...mapActions(["fetchProducts"]), // Map fetchProducts action
    },
    watch: {
        $route(to, _from) {
            switch (to.path) {
                case "/about":
                    document.title =
                        "Giới thiệu - " + "Việt Hưng - Dược Liệu";
                    break;

                case "/contact":
                    document.title = "Liên hệ - " + "Việt Hưng - Dược Liệu";
                    break;

                default:
                    document.title = "Việt Hưng - Dược Liệu";
                    break;
            }
        },
    },
};
</script>

<style>
/* Styles */
</style>
