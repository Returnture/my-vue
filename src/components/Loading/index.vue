<template>
    <transition name="custom-loading-fade">
        <!--loading蒙版-->
        <div v-show="visible" class="custom-loading-mask">
            <!--loading中间的图标-->
            <div class="custom-loading-spinner">
                <i class="custom-spinner-icon"></i>
                <!--loading上面显示的文字-->
                <p class="custom-loading-text">{{ text }}</p>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            // 是否显示loading
            visible: false,
            // loading上面的显示文字
            text: ""
        }
    },
    props: {

    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
}
</script>

<style scoped>
.custom-loading-mask {
    width: 100%;
    height: 100%;
    background: #999;
}
</style>