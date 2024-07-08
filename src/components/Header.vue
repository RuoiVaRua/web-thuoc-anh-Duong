<template>
    <AnnouncementBar/>
    <div class="header-container">
        <header class="header">
            <div class="logo">
                <a href="/">
                    <img src="/images/VIỆT HƯNG (1).png" alt="">
                </a>
            </div>
            <nav>
                <div class="sticky-menu"></div>
                <ul class="main-menu">
                    <li><router-link active-class="active" to="/">Trang chủ</router-link></li>
                    <li><router-link active-class="active" to="/about">Giới thiệu</router-link></li>
                    <!-- <li><router-link active-class="active" to="/products">Sản phẩm</router-link></li> -->
                    <li><router-link active-class="active" to="/contact">Liên hệ</router-link></li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script>
import AnnouncementBar from './AnnouncementBar.vue';

export default {
    name: "Header",
    components: {
        AnnouncementBar
    },
    data() {
        return {
        }
    },
};
</script>

<style lang="scss" scoped>
    @keyframes loadingBar {
        from {
            width: 0%;
        }
        to {
            width: 100%;
        }
    }

    .header-container {
        background: white;
        height: var(--header-height);
        position: relative;

        &::after {
            content: '';
            position: absolute;
            z-index: 200;
            top: 100%;            
            height: 5px;
            width: 100%;
            background: rgba(0, 115, 56, 0.85);
            visibility: visible;
            transform: translate3d(0px, 0px, 0px);
            // animation property order
            // duration | easing-function or timing-function | delay | iteration-count | direction | fill-mode | play-state | name
            animation: 8s ease 2s infinite normal both running loadingBar;
        }

        header {
            margin: 0 auto;
            max-width: var(--container-max-width);
            height: 100%;
            display: flex;
            align-items: center;

            .logo {
                flex: 3;
                height: 100%;

                a {
                    display: block;
                    height: 100%;

                    img {
                        width: 100%;
                        max-width: 400px;
                        height: 100%;
                        display: block;
                        margin: 0 auto;
                        object-fit: cover;
                    }
                }
            }

            nav {
                flex: 5;

                .main-menu {
                    display: flex;
                    align-items: center;
                    gap: 30px;

                    li {
                        & * {
                            transition: all 1s ease;
                        }

                        a {
                            height: 60px;
                            display: block;
                            padding: 20px 0;
                            font-weight: 700;
                            text-transform: uppercase; 

                            color: black;
                            position: unset;

                            &::before {
                                width: 0px;
                                height: 2px;
                                content: '';
                                // position: absolute;
                                // left: 0;
                                // top: 45px;
                                // display: block;
                                // background: #007338;
                                transition: width 0.4s ease;
                            }

                            &.active.router-link-exact-active,
                            &:hover {
                                color: #007338;
                                position: relative;

                                &::before {
                                    width: 80%;
                                    height: 2px;
                                    content: '';
                                    position: absolute;
                                    left: 0;
                                    top: 45px;
                                    display: block;
                                    background: #007338;
                                    transition: width 0.4s ease;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
