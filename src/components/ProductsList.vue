<template>
    <div class="products-list">
        <div
            class="product-image"
            v-for="product in products"
            :key="product.id"
        >
            <img :src="product.image[0]" :alt="product.name" />

            <div class="name-price-contact">
                <h3 class="name">
                    {{ product.name }}
                </h3>

                <span class="price">
                    {{ formatCurrencyVND(product.price) + " / " + product.unit }}
                </span>

                <a class="contact" href="https://zalo.me/0817790401" target="_blank"
                    >Liên Hệ Mua Hàng</a
                >
            </div>
        </div>
    </div>
</template>

<script>
import { formatCurrencyVND } from '../utils/price';

export default {
    name: "ProductsList",
    data() {
        return {
            products: [],
            formatCurrencyVND
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                const response = await fetch("/data.json");
                this.products = await response.json();
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        },
    },
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
    margin: 0 auto;

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
