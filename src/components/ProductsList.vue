<template>
    <div class="products-list">
        <div
            class="product-image"
            v-for="product in products"
            :key="product.id"
        >
            <a class="name" :href="'/product/' + product.id">
                <img :src="base_URL + product.images[0]" :alt="product.name" />
            </a>

            <div class="name-price-contact">
                <router-link class="name" :to="'/product/' + product.id">
                    {{ product.name }}
                </router-link>
                <!-- <a class="name" :href="'/product/' + product.id">
                    {{ product.name }}
                </a> -->

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
    data() {
        return {
            base_URL: import.meta.env.VITE_BASE_URL || ""
        }
    },
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
    flex-wrap: wrap;
    gap: var(--gap-30);
    max-width: var(--container-max-width);
    margin: 30px auto;

    @media only screen and (max-width: 767px) {
        gap: var(--gap-20);
    }         

    .product-image {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: calc((100% - (30px * 2)) / 3);
        background-color: var(--second-grey);

        @media only screen and (max-width: 767px) {
            width: calc((100% - (30px * 2)) / 2);
        }         

        @media only screen and (max-width: 450px) {
            width: 90%;
        }         

        img {
            object-fit: cover;
            width: 100%;
            height: var(--product-image-height);

            @media only screen and (max-width: 450px) {
                height: unset;
            }                     
        }

        .name-price-contact {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: var(--gap-15);
            padding: 15px 15px;
            width: 100%;

            @media only screen and (max-width: 450px) {
                padding: 15px 0;
            }

            .name {
                display: block;
                text-align: center;
                text-transform: capitalize;
                font-size: 1.2rem;
                outline: 0;
                color: var(--third-green);
                font-weight: 400;

                @media only screen and (max-width: 450px) {
                    font-size: 1rem;
                }                

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
                border: 1px solid var(--second-green);
                color: var(--second-green);
                transition: all ease 0.4s;

                @media only screen and (max-width: 767px) {
                    min-width: unset;
                    height: unset;
                    padding: 8px 12px;
                    max-width: 80%;
                    text-overflow: ellipsis;                    
                } 
                
                @media only screen and (max-width: 300px) {
                    font-size: 14px;
                }

                &:hover {
                    background: var(--second-green);
                    color: #fff;
                    transition: all ease 0.4s;
                }
            }
        }
    }
}
</style>
