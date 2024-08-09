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
        background: #252628;
        color: #fff;

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
            max-width: 1200px;  

            &::before {
                background: #007338;
                content: '';
                position: absolute;
                top: 0;
                left: -95%;
                display: block;
                z-index: 0;
                height: 100%;
                width: 100%;                
            }
            
            & > div {
                position: relative;
                min-height: 1px;
                padding: 11px 15px;
                float: left;
                z-index: 1;
            }
            
            .left-section {
                width: 33.33333333%;
                display: flex;
                align-items: center;
                justify-content: center;
                height: var(--announcement-bar-height);

                &::before, &::after {
                    background: #007338;
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
                    text-transform: uppercase;
                    font-weight: 700;
                }
            }
        
            .right-section {
                width: 66.66666667%;
                text-align: right;

                aside {
                    clear: both;
                    word-wrap: break-word;
                    display: inline-block;
                }

                aside:first-child {
                    margin-right: 30px;
                    position: relative;

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
                    }

                    a {
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

                    li {
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
