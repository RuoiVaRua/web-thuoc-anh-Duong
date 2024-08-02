<template>
    <div class="google-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.3612186505275!2d106.03743179707523!3d20.857485929843076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135bb0c6227da85%3A0x4f0d975fdc74f45d!2zVHLCrcaw4budbmcgVGnhu4N1IGjhu41jIHbDoCBUSENTIEzDvSBUaMaw4budbmcgS2nhu4d0!5e0!3m2!1svi!2s!4v1720434155012!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>        
    </div>
    <div class="contact-container">
        <div class="contact">
            <div class="contact-us">
                <h2 class="title">Liên hệ chúng tôi</h2>

                <div class="address">
                    <div class="sub-title">
                        <font-awesome-icon :icon="['fas', 'map-location-dot']" />
                        <span>Địa chỉ</span>
                    </div>
                    <span>xã Lý Thường Kiệt - huyện Yên Mỹ - tỉnh Hưng Yên</span>
                </div>
                <div class="phone">
                    <div class="sub-title">
                        <font-awesome-icon :icon="['fas', 'phone']" />
                        <span>Điện thoại</span>
                    </div>
                    <span>0972086234</span>
                </div>
                <div class="email">
                    <div class="sub-title">
                        <font-awesome-icon :icon="['fas', 'envelope']" />
                        <span>Email</span>
                    </div>
                    <span>dailongjsc.vn@gmail.com</span>
                </div>
                <div class="social-media">
                    <div class="social-list">
                        <font-awesome-icon :icon="['fab', 'facebook-f']" size="lg" />
                        <font-awesome-icon :icon="['fab', 'x-twitter']" size="lg" />
                        <font-awesome-icon :icon="['fab', 'youtube']" size="lg" />
                        <font-awesome-icon :icon="['fab', 'google-plus-g']" size="lg" />
                    </div>
                </div>
            </div>

            <div class="email-us">
                <h2 class="title">Gửi Email Cho Chúng Tôi</h2>

                <p class="description">Hãy liên hệ qua email để chúng tôi có thể tư vấn trực tiếp cho bạn về sản phẩm và dịch vụ bạn quan tâm. 
                    <br>Chúng tôi luôn sẵn lòng lắng nghe và hỗ trợ bạn.
                </p>

                <form action="">
                    <div class="form-input">
                        <label for="name">Họ và Tên</label>
                        <input type="text" id="name">
                    </div>
                    <div class="form-input">
                        <label for="email">Email</label>
                        <input type="email" id="email">
                    </div>
                    <div class="form-input">
                        <label for="header">Tiêu đề</label>
                        <input type="text" id="header">
                    </div>
                    <div class="form-input">
                        <label for="content">Nội dung</label>
                        <textarea id="content" cols="30" rows="10"></textarea>
                    </div>

                    <button type="submit">Gửi đi</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Contact",
};
</script>

<style scoped lang="scss">
.google-map iframe {
    width: 100%;
}

.contact {
    max-width: var(--container-max-width);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 50px;
    margin: 50px auto;

    .contact-us {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .title {
            text-transform: capitalize;
            margin: 0 0 2.14em;
        }

        .address, .phone, .email, .social-media {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            padding: 20px 0;
            width: 100%;
            border-bottom: 1px solid #e1e1e1;

            &.social-media {
                border-bottom: unset;
            }

            .sub-title {
                display: flex;
                align-items: center;
                gap: 12px;

                span {
                    font-size: 20px;
                    font-weight: 700;
                    line-height: 1.2;
                }
            }

            .social-list {
                display: flex;
                align-items: center;
                gap: 36px;
            }
        }
    }

    .email-us {
        flex: 2;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .title {
            text-transform: capitalize;
            margin: 0 0 2.14em;
        }        

        .description {
            margin-bottom: 16px;
            padding: 20px 0;
        }

        form {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 16px;

            .form-input {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                gap: 8px;

                input, textarea {
                    width: 100%;
                    font-size: 14px;
                    border: 1px solid #e1e1e1;
                    background: #fff;
                    height: 40px;
                    padding: 5px;
                    box-shadow: none;
                    -webkit-transition: all .3s ease;
                    -moz-transition: all .3s ease;
                    -ms-transition: all .3s ease;
                    -o-transition: all .3s ease;

                    &:focus {
                        outline: 0;
                        border-color: rgba(0,0,0,.6);
                        transition: border-color .4s;
                        box-shadow: none;
                    }
                }

                textarea {
                    height: 100px;
                    border: 1px solid rgba(0,0,0,.3);
                    outline: 0;
                    overflow: auto;
                }
            }

            button {
                box-shadow: none;
                display: inline-block;
                font-family: Roboto,"Helvetica Neue",Helvetica,Arial,sans-serif;
                font-size: 1rem;
                border-radius: 2.14em;
                border: 1px solid #e1e1e1;
                background: 0 0;
                font-weight: 500;
                padding: 0 1.5em;
                line-height: 2.9em;
                height: 3em;
                text-shadow: none;
                text-transform: capitalize;
                white-space: nowrap;
                -webkit-transition: all .3s ease;
                -moz-transition: all .3s ease;
                -ms-transition: all .3s ease;
                -o-transition: all .3s ease;
                width: 200px;
                border-radius: 0;
                background: #2a7d2e;
                color: #fff;
                text-transform: uppercase;        
                
                &:hover {
                    background: #2a7d2e;
                    border-color: #2a7d2e;
                    text-shadow: none;
                    color: #fff;
                }
            }
        }
    }
}
</style>
