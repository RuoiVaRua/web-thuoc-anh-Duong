<template>
    <!-- <HomeSlider/> -->

    <div class="general-introduction">
        <div class="title-container">
            <h2 class="title">Chào mừng quý khách đến với Việt Hưng!</h2>
        </div>
        <p class="description">
Chúng tôi là đơn vị tiên phong trong lĩnh vực chữa bệnh bằng y học cổ truyền, chuyên sâu vào các liệu trình điều trị hiệu quả cho các bệnh: 
<br/>tai biến, trào ngược dạ dày, mồ hôi tay chân, liệt dây thần kinh số 7, và bệnh trĩ, ...
<br/>
Với kinh nghiệm lâu năm cùng đội ngũ chuyên gia tận tâm, chúng tôi cam kết mang đến những giải pháp an toàn và bền vững, giúp quý khách hàng phục hồi sức khỏe từ gốc rễ.
<br/>
Sự tin tưởng và hài lòng của khách hàng chính là minh chứng rõ ràng nhất cho uy tín và chất lượng của Việt Hưng. 
<br/>
Chúng tôi tự tin sẽ đồng hành cùng quý khách trên hành trình tìm lại cuộc sống khỏe mạnh, trọn vẹn.
        </p>
        <!-- <router-link to="/about">
            <button class="show-more">
                Xem Thêm
            </button>
        </router-link> -->
    </div>

    <!-- <ProductsList /> -->
    <TreatmentsList />
</template>

<script>
// import HomeSlider from '../components/HomeSlider.vue';
// import ProductsList from '../components/ProductsList.vue';
import TreatmentsList from '../components/TreatmentsList.vue';

export default {
    name: "Home",
    // components: { HomeSlider, ProductsList, TreatmentsList }
    components: { TreatmentsList }
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
                background: linear-gradient(to right,rgba(255,255,255,.14) 0%,var(--main-blue) 50%,var(--main-blue) 53%,rgba(255,255,255,0) 100%);
                background-size: auto;
                width: 100%;
                height: 2.5px;
                background-size: cover;
                z-index: -1;
            }

            h2.title {
                display: inline-block;
                padding: 0 20px !important;
                background-color: #fff;
                color: var(--main-blue);
                margin: 0 !important;
                text-transform: capitalize;
                font-weight: 700;
                line-height: 1.2;
            }
        }

        .description {
            font-weight: 700;
            line-height: 28px;
            text-align: left;
            max-width: 1024px;
            white-space: unset;

            @media only screen and (max-width: 575px) {
                padding: 0 10px;
            }             
            
            @media only screen and (max-width: 350px) {
                line-height: 24px;
            }             
        }

        button.show-more {
            color: #fff;
            background-color: var(--fourth-blue);
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
                background-color: var(--fifth-blue);
            }
        }
    }
</style>
