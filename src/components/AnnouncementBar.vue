<template>
    <div class="announcement-bar-container">
        <div class="announcement-bar">
            <div class="left-section">
                <span>Thành Tín - Thân Thiện - An Toàn</span>
            </div>
            <div class="right-section">
                <aside>
                    <a href="tel:0972086234"><i class="fa-solid fa-phone-volume"></i> 0972086234</a>
                    <a href="mailto:dailongjsc.vn@gmail.com"><i class="fa-solid fa-envelope"></i> dailongjsc.vn@gmail.com</a>
                </aside>
                <aside>
                    <ul>
                        <li><img :src="zaloImg" alt="Zalo" width="20" height="20"/></li>
                        <li><i class="fa-brands fa-facebook"></i></li>
                        <li><i class="fa-brands fa-instagram"></i></li>
                        <li><i class="fa-brands fa-square-x-twitter"></i></li>
                        <li><i class="fa-brands fa-square-youtube"></i></li>
                        <li><i class="fa-brands fa-square-whatsapp"></i></li>
                    </ul>
                </aside>
            </div>
        </div>
    </div>
</template>

<script>
import zaloImg from '@/assets/zalo.png';

export default {
    name: "AnnouncementBar",
    data() {
        return {
            zaloImg: zaloImg
        }
    }
};
</script>

<style lang="scss" scoped>
    .announcement-bar-container {
        background: var(--main-dark);
        color: #fff;
        height: var(--announcement-bar-height);

        li {
            display: inline-block;
        }
        
        .announcement-bar {
            display: flex;
            align-items: center;
            padding-right: 15px;
            padding-left: 15px;
            position: relative;
            margin: 0 auto;
            max-width: var(--container-max-width);  
            height: 100%;

            @media only screen and (max-width: 991px) {
                max-width: 100%;
            }            

            @media only screen and (max-width: 950px) {
                padding: 0
            }            

            @media only screen and (max-width: 400px) {
                justify-content: center;
            }               

            &::before {
                background: var(--main-green);
                content: '';
                position: absolute;
                top: 0;
                left: -95%;
                display: block;
                z-index: 0;
                height: 100%;
                width: 100%;   
                
                @media only screen and (max-width: 400px) {
                    display: none;
                }                    
            }
            
            & > div {
                position: relative;
                min-height: 1px;
                padding: 11px 15px;
                float: left;
                z-index: 1;

                @media only screen and (max-width: 870px) {
                    padding: 11px 0px;
                }                
            }
            
            .left-section {
                width: 33.33333333%;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;

                @media only screen and (max-width: 575px) {
                    width: 45%;
                }               
                
                // @media only screen and (max-width: 475px) {
                //     width: 40%;
                // }                
                
                @media only screen and (max-width: 360px) {
                    display: none;
                }                

                &::before, &::after {
                    background: var(--main-green);
                    width: calc(100% + 15px);
                    left: -15px;
                    content: '';
                    position: absolute;
                    top: 0;
                    height: 100%;
                    z-index: -1;
                    transform: skew(-26deg);
                    padding-left: 20px;                    
                }

                &::after {
                    left: 0;
                    opacity: .2;
                    -ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=20)";
                    filter: alpha(opacity=20);
                }

                span {
                    text-align: center;
                    text-transform: uppercase;
                    font-weight: 700;

                    @media only screen and (max-width: 950px) {
                        font-size: 14px;
                    }                   
                    
                    @media only screen and (max-width: 767px) {
                        font-size: 12px;
                    }
                }
            }
        
            .right-section {
                width: 66.66666667%;
                text-align: right;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-end;    
                
                @media only screen and (max-width: 575px) {
                    width: 55%;
                }
                
                // @media only screen and (max-width: 475px) {
                //     width: 60%;
                // }
                    
                @media only screen and (max-width: 300px) {
                    justify-content: center;
                }

                aside {
                    clear: both;
                    word-wrap: break-word;
                    display: inline-block;

                    @media only screen and (min-width: 360px) and (max-width: 450px) {
                        svg {
                            display: none;
                        }                    
                    }
                }

                aside:first-child {
                    margin-right: 30px;
                    position: relative;
                    display: flex;
                    align-items: center;

                    @media only screen and (max-width: 1199px) and (min-width: 871px) {
                        // display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                    }                    

                    @media only screen and (max-width: 575px) {
                        // display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        
                    }                    

                    @media only screen and (max-width: 475px) {
                        margin-right: 10px;
                    }

                    &::after {
                        background: #fff;
                        content: '';
                        position: absolute;
                        right: -30px;
                        top: 50%;
                        margin-top: -11px;
                        width: 1px;
                        height: 24px;
                        display: block;
                        z-index: 1;
                        opacity: .6;

                        @media only screen and (max-width: 870px) {
                            content: none;
                        }                         
                    }

                    a {
                        display: flex;
                        align-items: center;
                        color: white;

                        &:first-child {
                            margin-right: 20px;
                        }

                        & > :first-child {
                            margin-right: 5px;
                        }
                    }
                }

                aside:last-child {
                    padding-left: 15px;

                    @media only screen and (max-width: 870px) {
                        display: none;
                    }                    

                    ul {
                        display: flex;
                        align-items: center;
                    }

                    li {
                        display: flex;
                        align-items: center;
                        vertical-align: middle;
                        margin: 5px 10px;
                        svg {
                            width: 20px;
                            height: 20px;
                        }
                    }
                }
            }
        }
    }

</style>
