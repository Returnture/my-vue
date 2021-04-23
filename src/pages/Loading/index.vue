<template>
    <div class="loading-box">
        <el-button type="primary" @click="openLoading($event)">点击弹出Loading</el-button>
        <!-- <Loading :visible="visible" text="加载中" /> -->
    </div>
</template>

<script>
// import Loading from "@/components/Loading"
import Loading from '@/components/Loading/index.js'
export default {
    data() {
        return {
            visible: false
        }
    },
    components: {
        Loading
    },
    created() {
        // const loading = Loading({ text: '正在加载。。。' })
        // // 三秒钟后关闭
        // setTimeout(() => {
        //     loading.close()
        // }, 3000)
    },
    mounted() {

    },
    methods: {
        openLoading() {
            this.$toast('哈哈哈哈')
            // const loading = Loading({ text: '正在加载。。。' })
            // setTimeout(() => {
            //     loading.close()
            // }, 30000)
        }
    }
}
</script>

<style scoped>
.loading-box {
    width: 100%;
    height: 100%;
}
.button {
    width: 100px;
    height: 40px;
}
</style>