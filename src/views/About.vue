<template>
<div class="about-container">
    <div class="title-container">
        <h2 class="title">Giới thiệu công ty</h2>
    </div>
    <!-- <hr/> -->
    <p style="text-align: justify;">Công ty Dược liệu Việt Hưng là một đơn vị uy tín chuyên cung cấp các sản phẩm dược liệu tự nhiên chất lượng cao, bao gồm thuốc đông y, dược liệu và trà thảo mộc. Với sứ mệnh mang đến cho cộng đồng những giải pháp chăm sóc sức khỏe an toàn, hiệu quả từ thiên nhiên, Việt Hưng luôn cam kết tuyển chọn nguyên liệu tinh túy nhất từ các vùng trồng dược liệu truyền thống, kết hợp với quy trình sản xuất hiện đại đạt chuẩn. Công ty tự hào mang đến cho khách hàng những sản phẩm dược liệu an toàn, lành tính, giúp phòng ngừa và điều trị bệnh tật, nâng cao sức khỏe và cải thiện chất lượng cuộc sống.</p>
    <div>
        <figure>
            <img fetchpriority="high" decoding="async" src="https://i0.wp.com/dailongjsc.com.vn/wp-content/uploads/2021/03/gioi-thieu-cong-ty-dai-long.jpeg?resize=512%2C242&amp;ssl=1" alt="" width="512" height="242" data-recalc-dims="1">
        </figure>
    </div>
    <p style="text-align: justify;">Nhờ có sự định vị rõ ràng trong mục tiêu và triết lý kinh doanh nêu trên, sản phẩm của Dược Liệu Việt Hưng không chỉ được bán trên địa bàn tỉnh mà còn được phân phối rộng rãi trên cả nước và đang hướng tới xuất khẩu ra thế giới. Từ đó, Dược Liệu Việt Hưng đã tạo công ăn việc làm cho nhiều người lao động, đóng góp nhiều cho ngân sách nhà nước mỗi năm. Với những nỗ lực và thành quả đạt được như đã nêu trên, Dược Liệu Việt Hưng đã vinh dự được các cơ quan quản lý nhà nước tặng nhiều danh hiệu cao quý trong chặng đường lịch sử hình thành và phát triển của Công ty.</p>
</div>
</template>

<script>
export default {
    name: "About",
};
</script>

<style scoped lang="scss">
    .about-container {
        max-width: var(--container-max-width);
        margin: 32px auto;
        padding: 0 16px;

        .title-container {
            position: relative;
            text-align: center;
            width: 100%;
            margin-bottom: 20px;

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
                text-transform: capitalize;
                font-weight: 700;
                line-height: 1.2;
            }
        }

        hr {
            height: 0;
            background-color: var(--about-section-blue);
            color: var(--about-section-blue);
            border: none;
            border-top: 2px solid;
            margin-top: 20px;
            margin-bottom: 20px;
        }

        p {
            text-align: justify;
            line-height: 2;
            margin: 0 0 10px;
        }

        figure {
            margin: 10px auto;
            width: fit-content;
        }
    }
</style>
