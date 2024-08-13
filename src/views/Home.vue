<template>
    <HomeSlider/>

    <div class="general-introduction">
        <div class="title-container">
            <h3 class="title">Giới Thiệu Chung</h3>
        </div>
        <div class="description">Công ty Dược liệu Việt Hưng là một đơn vị uy tín chuyên cung cấp các sản phẩm dược liệu tự nhiên chất lượng cao, bao gồm thuốc đông y, dược liệu và trà thảo mộc. Với sứ mệnh mang đến cho cộng đồng những giải pháp chăm sóc sức khỏe an toàn, hiệu quả từ thiên nhiên, Việt Hưng luôn cam kết tuyển chọn nguyên liệu tinh túy nhất từ các vùng trồng dược liệu truyền thống, kết hợp với quy trình sản xuất hiện đại đạt chuẩn. Công ty tự hào mang đến cho khách hàng những sản phẩm dược liệu an toàn, lành tính, giúp phòng ngừa và điều trị bệnh tật, nâng cao sức khỏe và cải thiện chất lượng cuộc sống.</div>
        <router-link to="/about">
            <button class="show-more">
                Xem Thêm
            </button>
        </router-link>
    </div>

    <ProductsList />
</template>

<script>
import HomeSlider from '../components/HomeSlider.vue';
import ProductsList from '../components/ProductsList.vue';

export default {
    name: "Home",
    components: { HomeSlider, ProductsList }
};
</script>

<style lang="scss" scoped>
    .general-introduction {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--gap-20);
        max-width: var(--container-max-width);
        margin: 30px auto;

        @media only screen and (max-width: 400px) {
            flex-direction: column;
            margin: 15px auto;
        }                    

        @media only screen and (max-width: 300px) {
            display: none;
        }                    

        .title-container {
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

            h3.title {
                display: inline-block;
                padding: 0 20px !important;
                background-color: #fff;
                color: var(--main-green);
                margin: 0 !important;
                font-size: 2rem;
                text-transform: capitalize;
                font-weight: 700;
                line-height: 1.2;
            }
        }

        .description {
            font-weight: 700;
            line-height: 28px;

            @media only screen and (max-width: 575px) {
                padding: 0 10px;
            }             
            
            @media only screen and (max-width: 350px) {
                line-height: 24px;
            }             
        }

        button.show-more {
            color: #fff;
            background-color: var(--fourth-green);
            font-size: 14px;
            padding: 14px 20px;
            border-radius: 5px;
            border-color: rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.1);
            transition: background-color ease 0.4s;

            @media only screen and (max-width: 400px) {
                padding: 7px 10px;
            }            

            &:hover {
                color: var(--main-white);
                background-color: var(--fifth-green);
            }
        }
    }
</style>
