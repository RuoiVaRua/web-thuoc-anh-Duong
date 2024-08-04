<template>
    <div class="product-detail-container" v-if="product">
        <div class="product-infor">
            <div class="main-image">
                <img alt="" :src="product.images[0]" />
            </div>
            <div class="product-general-infor">
                <h1 class="name">{{ product.name }}</h1>
                <ul>
                    <li v-for="info in product.generalInfor" :key="info">{{ info }}</li>
                </ul>
                <button>Liên hệ mua hàng</button>
                <div class="social-media-sharing"></div>
            </div>
        </div>
        <div class="product-description">
            <h3>Mô Tả Sản Phẩm</h3>
            <p class="about-viet-hung"></p>
            <p class="images-and-descriptions">{{ product.description }}</p>
        </div>
        <div class="similar-products"></div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "ProductDetail",
    computed: {
        ...mapGetters(["getProductById"]),
        product() {
            return this.getProductById(this.$route.params.id);
        }        
    }
};
</script>

<style>

p, li {
    white-space: break-spaces;
}
</style>