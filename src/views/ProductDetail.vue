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
                <a
                    class="contact"
                    href="https://zalo.me/0817790401"
                    target="_blank"
                >
                    Liên Hệ Mua Hàng
                </a>
                <div class="social-media-sharing"></div>
            </div>
        </div>
        <div class="product-description">
            <div class="describe"><h3>Mô Tả Sản Phẩm</h3></div>
            <p class="about-viet-hung">
                <strong>
                    Đại Long là đơn vị sản xuất Cơm cháy đầu tiên và lớn nhất tại Ninh Bình. Với tâm huyết của những con người Đại Long, một tập thể đoàn kết, trách nhiệm, sáng tạo, cùng sự khéo léo chỉn chu trong mỗi công đoạn, khắt khe trong quá trình chọn lọc các nguyên vật liệu đầu vào. Trải qua hơn Mười năm xây dựng và phát triển đã được khách hàng tin tưởng, lựa chọn và mệnh danh là “Vua cơm cháy” như ngày hôm nay.
                </strong>
            </p>
            <div class="images-and-descriptions" ref="imageAndDescription"></div>
        </div>
        <div class="similar-products"></div>
    </div>
</template>

<script>
import { onUpdated, ref, computed  } from "vue";
import { useStore } from "vuex"; // Import useStore from vuex
import { useRoute } from 'vue-router'; // Import useRoute từ vue-router

export default {
    name: "ProductDetail",
    setup () {
        const store = useStore(); // Initialize store
        const route = useRoute(); // Khởi tạo route

        // Lấy id từ route
        const productId = ref(route.params.id); // Get id from route params

        // Sử dụng computed để lấy product theo id
        const product = computed(() => store.getters.getProductById(productId.value));

        const imageAndDescription = ref(null);

        onUpdated(() => {
            if (imageAndDescription.value && product.value?.descriptions?.length) {
                let imgInd = 0;
                product.value.descriptions.forEach(value => {
                    if (value === 'img') {
                        imageAndDescription.value.innerHTML += `<img alt="" src="${product.value.images[imgInd+1]}" />`;
                        imgInd++;
                    } else {
                        imageAndDescription.value.innerHTML += `<p>${value}</p>`;
                    }
                });
            }
        });

        return {
            product,
            imageAndDescription
        };
    }
};
</script>

<style>
.product-detail-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    max-width: var(--container-max-width);
    margin: 60px auto;

    .product-infor {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: 30px;

        .main-image {
            flex: 1;
        }

        .product-general-infor {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;

            h1.name {
                font-size: 1.8rem;
                line-height: 1.2;
                font-weight: 700;
                text-transform: capitalize;
                text-align: left;
                color: #2a7d2e;
            }

            ul {
                list-style: disc;
                padding-left: 1rem;
            }

            a {
                padding: 10px 30px;
                border-radius: 30px;
                font-weight: 500;
                min-width: 9.14em;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                text-align: center;
                border: 1px solid #2a7d2e;
                color: #2a7d2e;
                margin: 20px 0;
                display: block;
                max-width: 200px;   
                transition: all 0.4s ease;  
                
                &:hover {
                    background-color: #2a7d2e;
                    color: #fff;
                }
            }
        }
    }

    .product-description {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;

        .describe {
            text-align: center;
            overflow: visible;
            position: relative;  
            width: 100%;

            &::before {
                content: " ";
                display: table;
                bottom: 20px !important;
                position: absolute;
                content: " ";
                width: 100%;
                bottom: 0;
                left: 0;
                border-bottom: 1px solid #cfc8d8;
                z-index: 1;                
            }

            h3 {
                width: fit-content;
                color: #2a7d2e;
                font-size: 1.71rem;
                line-height: 1.7;
                padding: 5px 0;
                font-weight: 500;
                position: relative;
                margin: 0 auto;
                padding: 0 1em;
                z-index: 2;
                background-color: white;

                &::before {
                    background: #2a7d2e;
                    color: #2a7d2e;
                    content: "";
                    width: calc(100% - 2em);
                    height: 2px;
                    position: absolute;
                    left: 1em;
                    bottom: 0;
                    z-index: 11;
                }
            }
        }

        .images-and-descriptions {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;      
            
            img {
                max-height: 400px;
                object-fit: contain;
            }

            p {
                width: 100%;
            }
        }
    }
}

p, li {
    white-space: break-spaces;
    line-height: 1.7;
}
</style>