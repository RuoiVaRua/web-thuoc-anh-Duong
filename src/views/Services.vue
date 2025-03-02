<template>
    <div class="services-list">
        <h1 class="service-header">Dịch vụ khám chữa bệnh</h1>
        <div class="service-item">
            <div
                class="service-image"
                v-for="service in services"
                :key="service.id"
            >
                <router-link class="name" :to="'/service/' + service.id">
                    <img :src="base_URL + service.images[0]" :alt="service.name" />
                    <div class="name-price-contact">
                        <a class="name" :to="'/service/' + service.id">
                            {{ service.name }}
                        </a>
                        <!-- <a class="name" :href="'/service/' + service.id">
                            {{ service.name }}
                        </a> -->

                        <!-- <span class="price">
                            {{ formatCurrencyVND(service.price) + " / " + service.unit }}
                        </span> -->

                        <a
                            class="contact"
                            >Xem chi tiết</a
                        >
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { formatCurrencyVND } from "../utils/price";
import { mapGetters } from "vuex";

export default {
    name: "Services",
    data() {
        return {
            base_URL: import.meta.env.VITE_BASE_URL || ""
        }
    },
    computed: {
        ...mapGetters(["allServices"]), // Map getter to get services
        services() {
            return this.allServices; // Use getter to get services
        }
    },
    methods: {
        formatCurrencyVND,
    }
};
</script>

<style lang="scss" scoped>
.services-list {
    max-width: var(--container-max-width);
    margin: 30px auto;
    
    .service-item {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: var(--gap-30);        

        @media only screen and (max-width: 767px) {
            gap: var(--gap-20);
        }          
    }
    
    .service-header{
        display: block;
        // margin: 20px 0;
        margin: 20px auto 30px;
        width: fit-content;
        color: var(--main-green);
    }
    
    .service-image {
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
