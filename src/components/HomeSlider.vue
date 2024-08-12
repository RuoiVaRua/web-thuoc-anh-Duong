<template>
    <div class="slider">
        <div
            class="slider-wrapper"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
            <div
                class="slider-slide"
                v-for="(image, index) in images"
                :key="index"
            >
                <img :src="base_URL + image" alt="" />
            </div>
        </div>
        <button class="nav prev" @click="prevSlide">
            <i class="fa-solid fa-angle-left"></i>
        </button>
        <button class="nav next" @click="nextSlide">
            <i class="fa-solid fa-angle-right"></i>
        </button>
        <div class="pagination">
            <button
                v-for="(_image, index) in images"
                :key="index"
                :class="{ active: index === currentIndex }"
                @click="goToSlide(index)"
            ></button>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeSlider",
    data() {
        return {
            currentIndex: 0,
            images: [
                '/images/Banner_01.webp',
                '/images/Banner_02.webp',
                '/images/Banner_03.webp',
                '/images/banner-new.webp',
                '/images/banner-tet-1.webp',
            ],
            base_URL: import.meta.env.VITE_BASE_URL || './'            
        };
    },
    methods: {
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        prevSlide() {
            this.currentIndex =
                (this.currentIndex - 1 + this.images.length) %
                this.images.length;
        },
        goToSlide(index) {
            this.currentIndex = index;
        },
    },
};
</script>

<style scoped lang="scss">
.slider {
    position: relative;
    width: 100%;
    overflow: hidden;

    @media only screen and (max-width: 400px) {
        display: none;
    }    
}

.slider-wrapper {
    display: flex;
    transition: transform 0.5s ease;
}

.slider-slide {
    min-width: 100%;
}

.slider-slide img {
    width: 100%;
    display: block;
}

.nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: var(--main-red);
    border: none;
    cursor: pointer;
    z-index: 10;
    width: 50px;
    height: 50px;

    svg {
        height: 100%;
    }
}

.nav.prev {
    left: 10px;
}

.nav.next {
    right: 10px;
}

.pagination {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
}

.pagination button {
    width: 15px;
    height: 15px;
    margin: 0 5px;
    background: rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color ease 0.4s;
}

.pagination button:hover,
.pagination button.active {
    background: white;
    transition: background-color ease 0.4s;
}
</style>
