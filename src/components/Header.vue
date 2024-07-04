<template>
    <AnnouncementBar/>
    <div class="header-container">
        <header class="header">
            <div class="logo">
                <a href="/">
                    <img :src="viteImg" alt="">
                </a>
            </div>
            <nav>
                <div class="sticky-menu"></div>
                <ul class="main-menu">
                    <li><router-link to="/">Trang chủ</router-link></li>
                    <li><router-link to="/about">Giới thiệu</router-link></li>
                    <li><router-link to="/about">Sản phẩm</router-link></li>
                    <li><router-link to="/about">Liên hệ</router-link></li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script>
import AnnouncementBar from './AnnouncementBar.vue';
import viteImg from '@/assets/vite.svg';

export default {
    name: "Header",
    components: {
        AnnouncementBar
    },
    data() {
        return {
            viteImg: viteImg
        }
    },
};
</script>

<style lang="scss" scoped>
    .header-container {
        background: white;
        height: var(--header-height);

        header {
            margin: 0 auto;
            max-width: var(--container-max-width);
            height: 100%;
            display: flex;
            align-items: center;

            .logo {
                flex: 1;
            }

            nav {
                flex: 4;

                .main-menu {
                    display: flex;
                    align-items: center;
                    gap: 30px;

                    li {
                        a {
                            
                        }
                    }
                }
            }
        }
    }
</style>
