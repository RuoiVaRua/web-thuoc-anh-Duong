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
                        <i class="fa-solid fa-location-dot"></i>
                        <span>Địa chỉ</span>
                    </div>
                    <span>thôn Tổ Hoả, xã Lý Thường Kiệt, huyện Yên Mỹ, tỉnh Hưng Yên</span>
                </div>
                <div class="phone">
                    <div class="sub-title">
                        <i class="fa-solid fa-phone"></i>
                        <span>Điện thoại</span>
                    </div>
                    <span>081.779.0401</span>
                </div>
                <div class="email">
                    <div class="sub-title">
                        <i class="fa-solid fa-envelope"></i>
                        <span>Email</span>
                    </div>
                    <span>nhanqua839@gmail.com</span>
                </div>
                <div class="social-media">
                    <div class="social-list">
                        <a
                            href="https://zalo.me/0817790401"
                            target="_blank"
                        >
                            <img :src="zaloImg" alt="Zalo" width="20" height="20"/>
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=61559208080017"
                            target="_blank"
                        >
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <i class="fa-brands fa-x-twitter"></i>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-google-plus-g"></i>
                    </div>
                </div>
            </div>

            <div class="email-us">
                <h2 class="title">Gửi Email Cho Chúng Tôi</h2>

                <p class="description">Hãy liên hệ qua email để chúng tôi có thể tư vấn trực tiếp cho bạn về sản phẩm và dịch vụ bạn quan tâm. 
                    <br>Chúng tôi luôn sẵn lòng lắng nghe và hỗ trợ bạn.
                </p>

                <div class="form">
                    <div class="form-input">
                        <label for="name">Họ và Tên</label>
                        <input type="text" id="name" required>
                    </div>
                    <div class="form-input">
                        <label for="email">Email</label>
                        <input type="email" id="email" required>
                    </div>
                    <div class="form-input">
                        <label for="title">Tiêu đề</label>
                        <input type="text" id="title">
                    </div>
                    <div class="form-input">
                        <label for="message">Nội dung</label>
                        <textarea id="message" cols="30" rows="10" required></textarea>
                    </div>

                    <button type="submit" @click="sendMail()">Gửi đi</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser';
import zaloImg from '@/assets/zalo-black.png';

export default {
    name: "Contact",
    data() {
        return {
            zaloImg: zaloImg
        }
    },    
    methods: {
        sendMail () {
            if (emailjs) {
                const publicKey = import.meta.env.VITE_PUBLIC_KEY_EMAILJS;
                const serviceID = import.meta.env.VITE_SERVICE_ID_EMAILJS;
                const templateReceiveID = import.meta.env.VITE_TEMPLATE_RECEIVE_ID_EMAILJS;
                // const templateReplyID = import.meta.env.VITE_TEMPLATE_REPLY_ID_EMAILJS;

                emailjs.init({
                    publicKey, // my public emailjs key
                });

                const params = {
                    from_name: document.getElementById("name").value,
                    to_name: document.getElementById("name").value,
                    email_id: document.getElementById("email").value,
                    title: document.getElementById("title").value,
                    message: document.getElementById("message").value,
                }

                emailjs.send(serviceID, templateReceiveID, params)
                    .then(response => {
                        if (response.status === 200) {
                            alert("Chân thành cảm ơn bạn đã góp ý cho chúng tôi.\nChúng tôi sẽ phản hồi trong thời gian sớm nhất");

                            // const paramsResponse = {
                            //     from_name: "Việt Hưng",
                            //     to_name: document.getElementById("name").value,
                            //     email_id: document.getElementById("email").value,
                            // };

                            // emailjs.send(serviceID, templateReplyID, paramsResponse);                            
                        }
                    })
            }
        }
    }
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

    @media only screen and (max-width: 767px) {
        flex-direction: column;
        gap: 20px;
        margin: 25px auto;
    }    

    .contact-us {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .title {
            text-transform: capitalize;
            margin: 0 0 2.14em;

            @media only screen and (max-width: 767px) {
                margin: 0;
            }  
            
            @media only screen and (max-width: 500px) {
                margin: 0;
                font-size: 1.5rem;
            }            
        }

        .address, .phone, .email, .social-media {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            padding: 20px 0;
            width: 100%;
            border-bottom: 1px solid var(--border-color);

            @media only screen and (max-width: 767px) {
                gap: 6px;
                padding: 10px 0;
            }            

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
                justify-content: space-between;
                width: 100%;
                max-width: 300px;

                a {
                    width: 25px;
                    height: 25px;
                    display: flex;
                    align-items: center;                    
                }                

                img, svg {
                    height: 25px;
                    width: 25px;
                }
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

            @media only screen and (max-width: 767px) {
                margin: 0;
            }               

            @media only screen and (max-width: 500px) {
                margin: 0;
                font-size: 1.5rem;
            }               
        }        

        .description {
            margin-bottom: 16px;
            padding: 20px 0;

            @media only screen and (max-width: 767px) {
                margin-bottom: 8px;
                padding: 10px 0;
                line-height: 1.2;
            }               
        }

        .form {
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
                    border: 1px solid var(--border-color);
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
                border: 1px solid var(--border-color);
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
                background: var(--second-green);
                color: #fff;
                text-transform: uppercase;        
                
                &:hover {
                    background: var(--second-green);
                    border-color: var(--second-green);
                    text-shadow: none;
                    color: #fff;
                }
            }
        }
    }
}
</style>
