<template>
    <div class="recursion"></div>
</template>

<script>
export default {
    data() {
        return {
            files: {
                title: "我的文件",
                children: [
                    {
                        title: "学习",
                        children: [
                            {
                                title: "大学英语"
                            }, {
                                title: "高等数学"
                            }, {
                                title: "计算机",
                                children: [{
                                    title: "计算机操作系统"
                                }, {
                                    title: "计算机网络"
                                }, {
                                    title: "计算机组成原理"
                                }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
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
</style>