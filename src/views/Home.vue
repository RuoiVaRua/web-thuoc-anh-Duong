<template>
    <HomeSlider/>

    <div class="general-introduction">
        <div class="title-container">
            <h3 class="title">Giới Thiệu Chung</h3>
        </div>
        <div class="description">Đại Long là đơn vị sản xuất Cơm cháy đầu tiên và lớn nhất tại Ninh Bình. Với tâm huyết của những con người Đại Long, một tập thể đoàn kết, trách nhiệm, sáng tạo, cùng sự khéo léo chỉn chu trong mỗi công đoạn, khắt khe trong quá trình chọn lọc các nguyên vật liệu đầu vào. Trải qua hơn Mười năm xây dựng và phát triển đã được khách hàng tin tưởng, lựa chọn và mệnh danh là “Vua cơm cháy” như ngày hôm nay.</div>
        <router-link active-class="active" to="/about">
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
        gap: 20px;
        max-width: var(--container-max-width);
        margin: 30px auto;


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
                background: linear-gradient(to right,rgba(255,255,255,.14) 0%,#007338 50%,#007338 53%,rgba(255,255,255,0) 100%);
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
                color: #007338;
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
        }

        button.show-more {
            color: #fff;
            background-color: #6dab3c;
            font-size: 14px;
            padding-top: 14px;
            padding-bottom: 14px;
            padding-left: 20px;
            padding-right: 20px;
            border-radius: 5px;
            border-color: rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.1);
            transition: background-color ease 0.4s;

            &:hover {
                color: #f7f7f7;
                background-color: #5f9434;
            }
        }
    }
</style>
