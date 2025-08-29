<template>
    <div class="treatments-list">
		<div class="treatment-header-container">
			<h2 class="treatment-header">Liệu trình khám chữa bệnh</h2>
		</div>
        <div class="treatment-items">
            <div
                class="treatment-image"
                v-for="treatment in treatments"
                :key="treatment.id"
            >
                <router-link class="name" :to="'/treatment/' + treatment.id">
                    <img :src="base_URL + treatment.images[0]" :alt="treatment.name" />
                    <div class="name-price-contact">
                        <a class="name" :to="'/treatment/' + treatment.id">
                            {{ treatment.name }}
                        </a>
                        <!-- <a class="name" :href="'/treatment/' + treatment.id">
                            {{ treatment.name }}
                        </a> -->

                        <!-- <span class="price">
                            {{ formatCurrencyVND(treatment.price) + " / " + treatment.unit }}
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
    name: "TreatmentsList",
    data() {
        return {
            base_URL: import.meta.env.VITE_BASE_URL || ""
        }
    },
    computed: {
        ...mapGetters(["allTreatments"]), // Map getter to get treatments
        treatments() {
            return this.allTreatments; // Use getter to get treatments
        }
    },
    methods: {
        formatCurrencyVND,
    }
};
</script>

<style lang="scss" scoped>
.treatments-list {
    max-width: var(--container-max-width);
    margin: 30px auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: var(--gap-20);
    
    .treatment-items {
		width: 100%;
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

    .treatment-header-container {
		position: relative;
		text-align: center;
		width: 100%;

		&::before {
			content: '';
			position: absolute;
			top: 50%;
			left: 0;
			transform: translateY(-50%);
			background: linear-gradient(to right,rgba(255,255,255,.14) 0%,var(--main-green) 50%,var(--main-green) 53%,rgba(255,255,255,0) 100%);
			background-size: auto;
			width: 100%;
			height: 2.5px;
			background-size: cover;
			z-index: -1;
		}

		.treatment-header{
			width: fit-content;
			display: inline-block;
			padding: 0 20px !important;
			background-color: #fff;
			color: var(--main-green);
			margin: 0 !important;
			text-transform: capitalize;
			font-weight: 700;
			line-height: 1.2;			
		}
    }

    .treatment-image {
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
                font-weight: 600;

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
