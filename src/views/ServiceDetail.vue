<template>
    <div class="service-detail-container" v-if="service">
        <div class="service-infor">
            <div class="main-image">
                <img alt="" :src="base_URL + service.images[0]" />
            </div>
            <div class="service-general-infor">
                <h1 class="name">{{ service.name }}</h1>
                <ul>
                    <li v-for="info in service.generalInfor" :key="info">{{ info }}</li>
                </ul>
                <a
                    class="contact"
                    :href="'https://zalo.me/' + zalo"
                    target="_blank"
                >
                    Liên Hệ Tư Vấn
                </a>
                <div class="social-media-sharing"></div>
            </div>
        </div>
        <ol class="treatment-description" ref="treatmentDescription"></ol>
        <div class="service-description">
            <div class="describe"><h3>Mô Tả Bệnh</h3></div>
            <!-- <p class="about-viet-hung">
                <strong>
                    Công ty Dược liệu Việt Hưng là một đơn vị uy tín chuyên cung cấp các sản phẩm dược liệu tự nhiên chất lượng cao, bao gồm thuốc đông y, dược liệu và trà thảo mộc. Với sứ mệnh mang đến cho cộng đồng những giải pháp chăm sóc sức khỏe an toàn, hiệu quả từ thiên nhiên, Việt Hưng luôn cam kết tuyển chọn nguyên liệu tinh túy nhất từ các vùng trồng dược liệu truyền thống, kết hợp với quy trình sản xuất hiện đại đạt chuẩn. Công ty tự hào mang đến cho khách hàng những sản phẩm dược liệu an toàn, lành tính, giúp phòng ngừa và điều trị bệnh tật, nâng cao sức khỏe và cải thiện chất lượng cuộc sống.
                </strong>
            </p> -->
            <div class="images-and-descriptions" ref="imageAndDescription"></div>
        </div>
        <div class="similar-services"></div>
    </div>
</template>

<script>
import { onMounted, ref, computed, watch, nextTick } from "vue";
import { useStore } from "vuex"; // Import useStore from vuex
import { useRoute, useRouter } from 'vue-router'; // Import useRoute từ vue-router

export default {
    name: "ServiceDetail",
    setup () {
        const store = useStore(); // Initialize store
        const route = useRoute(); // Khởi tạo route
        const router = useRouter(); // Initialize router

        const base_URL = import.meta.env.VITE_BASE_URL || "";
        const zalo = import.meta.env.VITE_ZALO;

        // Lấy id từ route
        const serviceId = ref(route.params.id); // Get id from route params

        // Sử dụng computed để lấy service theo id
        const service = computed(() => store.getters.getServiceById(serviceId.value));

        const serviceIds = ['benh-tri'];

        const imageAndDescription = ref(null);
        const treatmentDescription = ref(null);

        const updateImageAndDescription = () => {    
            nextTick(() => { 
                if (
                    imageAndDescription.value && 
                    treatmentDescription.value && 
                    service.value?.descriptions?.length && 
                    service.value?.treatments?.length
                ) {
                    let imgInd = 0;

                    imageAndDescription.value.innerHTML = '';
                    treatmentDescription.value.innerHTML = '<h4>Phương pháp điều trị bằng y học cổ truyền</h4>';

                    service.value.descriptions.forEach(value => {
                        if (value === 'img') {
                            imageAndDescription.value.innerHTML += `<img alt="" src="${base_URL + service.value.images[imgInd+1]}" />`;
                            imgInd++;
                        } else {
                            imageAndDescription.value.innerHTML += `<p>${value}</p>`;
                        }
                    });
                    
                    service.value.treatments.forEach(value => {
                        treatmentDescription.value.innerHTML += `<li>${value}</li>`;
                    });
                } else if (!serviceIds.includes(serviceId.value)) {
                    // Use router.push to navigate to the home page
                    router.push({ path: '/' });
                }
            })
        }

        // Optionally, use onMounted to initialize the rendering when component is mounted
        onMounted(updateImageAndDescription);

        // Use watch to monitor changes to the service
        watch(service, updateImageAndDescription);

        // Watch for changes in the route's id parameter
        watch(() => route.params.id, (newId) => {
            serviceId.value = newId;
            updateImageAndDescription(); // Re-run the logic when the id changes
        });        

        return {
            service,
            imageAndDescription,
            treatmentDescription,
            base_URL,
            zalo
        };
    }
};
</script>

<style lang="scss">
.service-detail-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    max-width: var(--container-max-width);
    margin: 60px auto;    

    @media only screen and (max-width: 991px) {
        gap: 0;
    } 

    @media only screen and (max-width: 650px) {
        margin: 20px auto;
    }                             

    .service-infor {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: var(--gap-30);

        @media only screen and (max-width: 991px) {
            flex-direction: column;
            align-items: center;
        }        

        .main-image {
            flex: 1;
        }

        .service-general-infor {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: var(--gap-20);

            @media only screen and (max-width: 991px) {
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }                    

            h1.name {
                font-size: 1.8rem;
                line-height: 1.2;
                font-weight: 700;
                text-transform: capitalize;
                text-align: left;
                color: var(--second-green);
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
                border: 1px solid var(--second-green);
                color: var(--second-green);
                display: block;
                max-width: 200px;   
                transition: all 0.4s ease;  

                @media only screen and (max-width: 500px) {
                    margin: 0;
                }                        
                
                &:hover {
                    background-color: var(--second-green);
                    color: #fff;
                }
            }
        }

    }

    .treatment-description {
        display: flex;
        flex-direction: column;
        gap: 10px;

        background: #e0f1e9;
        border: 1px solid #e0f1e9;
        border-radius: 6px;
        display: block;
        padding: 8px 15px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
        width: 100%;

        li {
            margin-left: 30px;
        }
    }            

    .service-description {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--gap-30);

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
                border-bottom: 1px solid var(--third-grey);
                z-index: 1;                
            }

            h3 {
                width: fit-content;
                color: var(--second-green);
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
                    background: var(--second-green);
                    color: var(--second-green);
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
            gap: var(--gap-30);      
            
            & > img {
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

    @media only screen and (max-width: 450px) {
        line-height: 1.5;
    }    
}
</style>