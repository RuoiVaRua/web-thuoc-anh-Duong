<template>
    <div class="footer-container">
        <footer class="footer">
            <div class="top-section">
                <div class="company-information">
                    <h3 class="title">Thông tin công ty</h3>
                    <div class="content">
                        <p>Công ty Việt Hưng</p>
                        <p>Địa chỉ: xã Thường Kiệt - huyện Yên Mỹ - tỉnh Hưng Yên</p>
                        <p>GPDKKD: 2700588366&nbsp; do Cục cảnh sát quản lý hành chính về trật tự xã hội&nbsp;cấp ngày 13/04/2021</p>
                        <p>Điện thoại: 02293673999 – Di động : 0972086234</p>
                        <p>Email : dailongjsc.vn@gmail.com</p>
                    </div>
                </div>
                <div class="products">
                    <h3 class="title">Sản phẩm</h3>
                    <div class="content">
                        <ul>
                            <li>Bồ Công Anh</li>
                            <li>Hạt Sen</li>
                            <li>Lá Sen</li>
                            <li>Tam Thất Bắc</li>
                            <li>Xạ Đen</li>
                        </ul>                      
                    </div>
                </div>
                <div class="facebook">
                    <h3 class="title">@Facebook</h3>
                </div>
            </div>
            <div class="bottom-section">
                <div class="mail">
                    <div class="icon">
                        <font-awesome-icon :icon="['fas', 'envelope']" />
                    </div>
                    <div class="detail">
                        <a href="mailto:dailongjsc.vn@gmail.com">dailongjsc.vn@gmail.com</a>
                        <span class="description">Gửi mail cho chúng tôi</span>
                    </div>
                </div>
                <div class="phone">
                    <div class="icon">
                        <font-awesome-icon :icon="['fas', 'phone']" />
                    </div>
                    <div class="detail">
                        <a href="tel:0972086234">0972086234</a>
                        <span class="description">Gọi cho chúng tôi ngay</span>
                    </div>
                </div>
                <div class="address">
                    <div class="icon">
                        <font-awesome-icon :icon="['fas', 'location-dot']" />
                    </div>
                    <div class="detail">
                        <router-link to="/contact">Thường Kiệt - Yên Mỹ - Hưng Yên</router-link>
                        <span class="description">Nhận chỉ đường</span>
                    </div>
                </div>
            </div>
            <span class="copy-right">Copyright ©2024 VIET HUNG. All Rights Reserved.</span>
        </footer>
    </div>
</template>

<script>

export default {
    name: "Footer"
    
};
</script>

<style lang="scss" scoped>
.footer-container {
    background-color: #252628;
    color: #bbb;

    .footer {
        max-width: var(--container-max-width);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.42em;
        padding: 5.7rem 0 1.42rem;

        .top-section {
            display: flex;
            align-items: flex-start;
            gap: 30px;
            width: 100%;

            & > div {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 2.14rem;
                margin-bottom: 2.85rem;
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
                    }

                    ul {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    li {
                        line-height: 30px;
                        padding-left: 0;
                        transition: all ease 0.4s;

                        &:hover {
                            color: #2a7d2e;
                            padding-left: 10px;
                            transition: all ease 0.4s;
                        }

                        a {
                            color: #bbb;
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
            }
        }

        .bottom-section {
            display: flex;
            align-items: center;
            width: 100%;

            & > div {
                flex: 1;
                display: flex;
                align-items: center;
                gap: 15px;
                padding: 15px;
                background: #000;

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
                }

                .detail {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;

                    a {
                        color: #fff !important;
                        font-weight: 700;
                        font-size: 1.2rem;

                        &:hover {
                            text-decoration: underline;
                        }
                    }

                    .description {
                        line-height: 1.6rem;
                    }
                }
            }

            .phone {
                background-color: #007338;
            }
        }
    }
}
</style>
