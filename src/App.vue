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

export default {
    name: "App",
    components: {
        Header,
        Footer
    },
    watch: {
        $route (to, _from) {
            switch (to.path) {
                case '/about':
                    document.title = 'Giới thiệu - ' + 'Việt Hưng - Thuốc Đông Y';
                    break;
                
                case '/contact':
                    document.title = 'Liên hệ - ' + 'Việt Hưng - Thuốc Đông Y';
                    break;

                default:
                    document.title = 'Việt Hưng - Thuốc Đông Y';
                    break;
            }
        }
    }     
};
</script>

<style>
/* Styles */
</style>
