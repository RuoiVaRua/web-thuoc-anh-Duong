<template>
    <div class="google-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.3612186505275!2d106.03743179707523!3d20.857485929843076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135bb0c6227da85%3A0x4f0d975fdc74f45d!2zVHLCrcaw4budbmcgVGnhu4N1IGjhu41jIHbDoCBUSENTIEzDvSBUaMaw4budbmcgS2nhu4d0!5e0!3m2!1svi!2s!4v1720434155012!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>        
    </div>
    <div class="contact-container">
        <div class="contact-us">
            <div class="title">Liên hệ chúng tôi</div>

            <div class="address">
                <font-awesome-icon :icon="['fas', 'map-location-dot']" />
                <span>Địa chỉ</span>
                <span>xã Lý Thường Kiệt - huyện Yên Mỹ - tỉnh Hưng Yên</span>
            </div>
            <div class="phone">
                <font-awesome-icon :icon="['fas', 'phone']" />
                <span>Điện thoại</span>
                <span>0972086234</span>
            </div>
            <div class="email">
                <font-awesome-icon :icon="['fas', 'envelope']" />
                <span>Email</span>
                <span>dailongjsc.vn@gmail.com</span>
            </div>
        </div>

        <div class="email-us"></div>
    </div>
</template>

<script>
export default {
    name: "Contact",
};
</script>

<style>
/* Styles */
</style>
