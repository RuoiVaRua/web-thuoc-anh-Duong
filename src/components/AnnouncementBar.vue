<template>
    <div class="announcement-bar">
        <div class="left">
            <span>Thành Tín - Thân Thiện - An Toàn</span>
        </div>
        <div class="right">
            <aside>
                <span><font-awesome-icon :icon="['fas', 'phone-volume']" /> 0972086234</span>
                <span><font-awesome-icon :icon="['fas', 'envelope']" /> dailongjsc.vn@gmail.com</span>
            </aside>
            <aside>
                <ul>
                    <li><img :src="zaloImg" alt="Zalo" width="20" height="20"/></li>
                    <li><font-awesome-icon :icon="['fab', 'facebook']" /></li>
                    <li><font-awesome-icon :icon="['fab', 'instagram']" /></li>
                    <li><font-awesome-icon :icon="['fab', 'square-x-twitter']" /></li>
                    <li><font-awesome-icon :icon="['fab', 'square-youtube']" /></li>
                    <li><font-awesome-icon :icon="['fab', 'square-whatsapp']" /></li>
                </ul>
            </aside>
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

<style scoped>
    .announcement-bar {
        display: flex;
        align-items: center;
        background: #252628;
        color: #fff;
        padding-right: 15px;
        padding-left: 15px;
        position: relative;
        margin: 0 auto;
        max-width: 1200px;        
    }
</style>
