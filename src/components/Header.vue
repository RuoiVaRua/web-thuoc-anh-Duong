<template>
    <AnnouncementBar/>
    <div ref="headerRef" class="header-container">
        <div class="header-wrapper">
            <header class="header">
                <div class="logo">
                    <router-link to="/">
                        <img :src="base_URL + '/images/logo-square.png'" alt="">
                    </router-link>
                </div>
                <nav>
                    <ul class="main-menu">
                        <li><router-link active-class="active" to="/">Trang chủ</router-link></li>
                        <li><router-link active-class="active" to="/about">Giới thiệu</router-link></li>
                        <!-- <li><router-link active-class="active" to="/products">Sản phẩm</router-link></li> -->
                        <li><router-link active-class="active" to="/contact">Liên hệ</router-link></li>
                    </ul>
                </nav>
            </header>
        </div>
    </div>
</template>

<script>
import AnnouncementBar from './AnnouncementBar.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';
// import debounce from '../utils/debounce';

export default {
    components: {
        AnnouncementBar
    },

    setup() {
        const headerRef = ref(null);
        let observer = null;
        const base_URL = import.meta.env.VITE_BASE_URL || '/';

        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                const imgLogo = headerRef.value.querySelector('.header .logo img');
                if (
                    (window.innerWidth > 575 &&
                    entry.boundingClientRect.top < -120)
                    ||
                    (window.innerWidth <= 575 &&
                    entry.boundingClientRect.top < -180)
                ) {
                    headerRef.value.classList.add('sticky-menu');
                    if (imgLogo) {
                        imgLogo.setAttribute('src', base_URL + '/images/logo-landscape-removebg.png');
                    }
                } else {
                    headerRef.value.classList.remove('sticky-menu');
                    if (imgLogo) {
                        imgLogo.setAttribute('src', base_URL + '/images/logo-square.png');
                    }
                }
            });
        };      

        function handleStickyMenu () {
            var scrollTop = (document.documentElement || document.body.parentNode || document.body).scrollTop;
            if (scrollTop && scrollTop > (56 + 120) && headerRef.value) {
                headerRef.value.classList.add('sticky-menu');
            } else if (headerRef.value) {
                headerRef.value.classList.remove('sticky-menu');
            }
        }

        onMounted(() => {
            // window.addEventListener('scroll', debounce(handleStickyMenu, 1000));
            if (headerRef.value) {
                observer = new IntersectionObserver(handleIntersection, {
                    root: null, // sử dụng viewport như root
                    threshold: 0 // trigger ngay khi header trượt khỏi 200px viewport
                });

                observer.observe(headerRef.value);
            }
        });

        onBeforeUnmount(() => {
            if (observer && headerRef.value) {
                observer.unobserve(headerRef.value);
            }
        });        

        return {
            headerRef,
            base_URL
        };
    }
};
</script>

<style lang="scss" scoped>
    @keyframes header-show-down {
        from {
            transform: translateY(-100%);
        }
        to {
            transform: translateY(0%);
        }
    }
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

        &.sticky-menu {
            .header-wrapper {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                width: 100vw;
                max-width:unset;
                height: var(--fixed-header-height);
                z-index: 1000;
                background: rgba(247,245,243,.9) !important;
                box-shadow: 0 0 5px 0 rgba(0,0,0,.2);
                transition: .5s ease;     
                animation: 0.5s ease 0s 1 normal both running header-show-down;

                img {
                    object-fit: contain;

                    @media only screen and (max-width: 575px) {
                        display: none;
                    }
                }
            }
        }        

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
            animation: 20s ease 2s infinite normal both running loadingBar;
        }

        .header-wrapper {
            height: var(--header-height);
            max-width: var(--container-max-width);
            margin: 0 auto;

            @media only screen and (max-width: 767px) {
                max-width: 100%;
            }            
        }

        header {
            height: 100%;
            max-width: var(--container-max-width);
            margin: 0 auto;
            display: flex;
            align-items: center;

            @media only screen and (max-width: 767px) {
                max-width: 100%;
            }

            @media only screen and (max-width: 575px) {
                flex-direction: column;
            }                

            .logo {
                flex: 1;
                height: 100%;

                @media only screen and (max-width: 575px) {
                    height: 90px;
                    width: 55%;

                    & img {
                        object-position: center;
                    }
                }      
                
                @mixin responsive-width($max-width, $width) {
                    @media only screen and (max-width: $max-width) {
                        width: $width;
                    }
                }                

                @include responsive-width(500px, 60%);
                @include responsive-width(450px, 65%);
                @include responsive-width(400px, 70%);
                @include responsive-width(350px, 80%);
                @include responsive-width(300px, 100%);                

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
                flex: 1;

                @media only screen and (max-width: 575px) {
                    // flex: 2;
                    height: 60px;
                }                 

                .main-menu {
                    display: flex;
                    align-items: center;
                    gap: var(--gap-30);

                    @media only screen and (max-width: 650px) {
                        gap: var(--gap-20);
                    }                       

                    @media only screen and (max-width: 300px) {
                        gap: 10px;
                    }                    

                    li {
                        & * {
                            transition: all 1s ease;
                        }

                        a {
                            height: 60px;
                            display: block;
                            padding: 15px 0 20px;
                            font-weight: 700;
                            text-transform: uppercase; 
                            color: black;
                            position: unset;

                            @media only screen and (max-width: 300px) {
                                font-size: 14px;
                            }         

                            &::before {
                                width: 0px;
                                height: 2px;
                                content: '';
                                // position: absolute;
                                // left: 0;
                                // top: 45px;
                                // display: block;
                                // background: var(--main-green);
                                transition: width 0.4s ease;
                            }

                            &.active.router-link-exact-active,
                            &:hover {
                                color: var(--main-green);
                                position: relative;

                                &::before {
                                    width: 80%;
                                    height: 2px;
                                    content: '';
                                    position: absolute;
                                    left: 0;
                                    top: 40px;
                                    display: block;
                                    background: var(--main-green);
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
