<template>
    <div class="Swiper">
        <p>轮播图</p>
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>
            <swiper-slide>Slide 5</swiper-slide>
            <swiper-slide>Slide 6</swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: "mySwiper",
    data() {
        return {
            swiperOptions: {
                loop: true,
                // 如果需要分页器
                pagination: {
                    el: ".swiper-pagination",
                    // clickable: true,
                },
                // pagination:'.swiper-pagination',
                autoplay: {
                    delay: 1000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                direction: "horizontal",
            },
        };
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper;
        },
    },
    created() {},
    mounted() {
        console.log("Current Swiper instance object", this.swiper);
        // this.swiper.slideTo(3, 1000, true);
    },
    methods: {},
};
</script>

<style scoped>
.swiper-slide {
    height: 400px;
    background: pink;
    font-size: 50px;
    text-align: center;
    line-height: 400px;
}
</style>