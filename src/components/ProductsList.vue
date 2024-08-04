<template>
    <div class="products-list">
        <div
            class="product-image"
            v-for="product in products"
            :key="product.id"
        >
            <a class="name" :href="'/product/' + product.id">
                <img :src="product.images[0]" :alt="product.name" />
            </a>

            <div class="name-price-contact">
                <a class="name" :href="'/product/' + product.id">
                    {{ product.name }}
                </a>

                <!-- <span class="price">
                    {{ formatCurrencyVND(product.price) + " / " + product.unit }}
                </span> -->

                <a
                    class="contact"
                    href="https://zalo.me/0817790401"
                    target="_blank"
                    >Liên Hệ Mua Hàng</a
                >
            </div>
        </div>
    </div>
</template>

<script>
import { formatCurrencyVND } from "../utils/price";
import { mapGetters } from "vuex";

export default {
    name: "ProductsList",
    name: "ProductsList",
    computed: {
        ...mapGetters(["allProducts"]), // Map getter to get products
        products() {
            return this.allProducts; // Use getter to get products
        }
    },
    methods: {
        formatCurrencyVND,
    }
};
</script>

<style lang="scss" scoped>
.products-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 30px;
    max-width: var(--container-max-width);
    margin: 30px auto;

    .product-image {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: calc((100% - (30px * 2)) / 3);
        background-color: #eee;

        img {
            object-fit: cover;
            width: 100%;
            height: 370px;
        }

        .name-price-contact {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            padding: 15px 0;
            width: 100%;

            .name {
                display: block;
                text-transform: capitalize;
                font-size: 1.2rem;
                outline: 0;
                color: #1d5720;
                font-weight: 400;

                &:hover {
                    text-decoration: underline;
                }
            }

            .price {
                display: block;
                text-transform: capitalize;
                font-size: 1.2rem;
            }

            .contact {
                height: 42px;
                min-width: 9.14em;
                border-radius: 30px;
                font-weight: 500;
                padding: 10px 15px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                text-align: center;
                border: 1px solid #2a7d2e;
                color: #2a7d2e;
                transition: all ease 0.4s;

                &:hover {
                    background: #2a7d2e;
                    color: #fff;
                    transition: all ease 0.4s;
                }
            }
        }
    }
}
</style>
