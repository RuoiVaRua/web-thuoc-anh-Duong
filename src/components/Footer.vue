<template>
    <div class="footer-container">
        <footer class="footer">
            <div class="top-section">
                <div class="company-information">
                    <h3 class="title">Thông tin công ty</h3>
                    <div class="content">
                        <p>Công ty Việt Hưng</p>
                        <p>Địa chỉ: xã Thường Kiệt - huyện Yên Mỹ - tỉnh Hưng Yên</p>
                        <!-- <p>GPDKKD: 2700588366&nbsp; do Cục cảnh sát quản lý hành chính về trật tự xã hội&nbsp;cấp ngày 13/04/2021</p> -->
                        <p>Điện thoại: 033.358.1878 - 081.779.0401</p>
                        <p>Email : nhanqua839@gmail.com</p>
                    </div>
                </div>
                <div class="products">
                    <h3 class="title">Sản phẩm</h3>
                    <div class="content">
                        <ul>
                            <li>
                                <router-link class="name" :to="'/product/bo-cong-anh'">
                                    Bồ Công Anh
                                </router-link>                                
                            </li>
                            <li>
                                <router-link class="name" :to="'/product/la-sen'">
                                    Lá Sen
                                </router-link>                                
                            </li>
                            <li>
                                <router-link class="name" :to="'/product/tam-that-bac'">
                                    Tam Thất Bắc
                                </router-link>                                
                            </li>
                            <li>
                                <router-link class="name" :to="'/product/xa-den'">
                                    Xạ Đen
                                </router-link>                                
                            </li>
                            <li>
                                <router-link class="name" :to="'/product/hat-sen'">
                                    Hạt Sen
                                </router-link>                                
                            </li>
                        </ul>                      
                    </div>
                </div>
                <div class="facebook">
                    <h3 class="title">@Facebook</h3>
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61559208080017&tabs&width=300&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=229258992396994&lazy=true" width="300" height="130" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" ></iframe>
                </div>
            </div>
            <div class="bottom-section">
                <div class="mail">
                    <div class="icon">
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                    <div class="detail">
                        <a :href="'mailto:' + mail">{{ mail }}</a>
                        <span class="description">Gửi mail cho chúng tôi</span>
                    </div>
                </div>
                <div class="phone">
                    <div class="icon">
                        <i class="fa-solid fa-phone"></i>
                    </div>
                    <div class="detail">
                        <a :href="'tel:' + phone">{{ formatPhone(phone) }}</a>
                        <span class="description">Gọi cho chúng tôi ngay</span>
                    </div>
                </div>
                <div class="address">
                    <div class="icon">
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div class="detail">
                        <router-link to="/contact">Tổ Hoả, Lý Thường Kiệt, Yên Mỹ, Hưng Yên</router-link>
                        <span class="description">Nhận chỉ đường</span>
                    </div>
                </div>
            </div>
            <span class="copy-right">Copyright ©2025 VIET HUNG. All Rights Reserved.</span>
        </footer>
    </div>
</template>

<script>
import { formatPhone } from '../utils/format-phone';

export default {
    name: "Footer",
    data() {
        return {
            phone: import.meta.env.VITE_PHONE,
            zalo: import.meta.env.VITE_ZALO,
            mail: import.meta.env.VITE_MAIL
        }
    },
    methods: {
        formatPhone
    }        
};
</script>

<style lang="scss" scoped>
.footer-container {
    background-color: var(--main-dark);
    color: var(--main-grey);

    .footer {
        max-width: var(--container-max-width);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.42em;
        padding: 5.7rem 0 1.42rem;

        @media only screen and (max-width: 991px) {
            padding-top: 1.42rem;
        }                    

        .top-section {
            display: flex;
            align-items: flex-start;
            gap: var(--gap-30);
            width: 100%;

            @media only screen and (max-width: 991px) {
                flex-direction: column;
            }            

            & > div {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 2.14rem;
                margin-bottom: 2.85rem;

                @media only screen and (max-width: 991px) {
                    margin-bottom: 0;
                    gap: unset;
                } 

                h3.title {
                    text-transform: capitalize;
                    color: #fff;
                    font-size: 1.7142rem;
                    font-weight: 700;
                    line-height: 1.2;
                }

                .content {
                    p {
                        margin-bottom: 10px;

                        @media only screen and (max-width: 991px) {
                            margin-bottom: 0;
                        }                         
                    }

                    ul {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;

                        @media only screen and (max-width: 991px) {
                            flex-direction: row;
                            flex-wrap: wrap;
                        }
                    }
                    li {
                        line-height: 30px;
                        padding-left: 0;
                        transition: all ease 0.4s;
                        cursor: pointer;

                        @media only screen and (max-width: 991px) {
                            line-height: 1.7;

                            &:not(:last-child) {
                                border-right: 1px solid var(--main-grey);
                            }
                        }                        

                        &:hover {
                            color: var(--second-green);
                            padding-left: 10px;
                            transition: all ease 0.4s;
                        }

                        a {
                            color: var(--main-grey);

                            @media only screen and (max-width: 991px) {
                                padding: 0 10px;
                            }                         
                        }
                    }
                }
            }

            .company-information {
                flex: 4;
            }

            .products {
                flex: 3;
            }

            .facebook {
                flex: 5;

                iframe {
                    max-width: 100%;
                }
            }

            @media only screen and (max-width: 1199px) {
                .company-information {
                    flex: 6;
                }

                .products {
                    flex: 2;
                }

                .facebook {
                    flex: 4;
                }
            }            
        }

        .bottom-section {
            display: flex;
            align-items: center;
            width: 100%;
            flex-wrap: wrap;

            & > div {
                flex: 1;
                display: flex;
                align-items: center;
                gap: var(--gap-15);
                padding: 15px;
                background: #000;

                @media only screen and (max-width: 300px) {
                    padding: 5px;
                }

                // &:last-child .icon {
                //     @media only screen and (max-width: 450px) {
                //         display: none;
                //     }
                // }

                .icon {
                    width: 48px;
                    height: 48px;
                    background: rgba(255,255,255,.1);
                    border-radius: 50%;
                    text-align: center;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    @media only screen and (max-width: 450px) {
                        display: none;
                    }                    
                }

                .detail {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;

                    a {
                        color: #fff !important;
                        font-weight: 700;
                        font-size: 1.2rem;
                        white-space: nowrap;

                        @media only screen and (max-width: 450px) {
                            font-size: 1rem;
                        }

                        @media only screen and (max-width: 350px) {
                            white-space: wrap;
                        }                        

                        &:hover {
                            text-decoration: underline;
                        }
                    }

                    .description {
                        line-height: 1.6rem;
                        white-space: nowrap;
                    }
                }
            }

            .phone {
                background-color: var(--main-green);
            }
        }
    }
}
</style>
