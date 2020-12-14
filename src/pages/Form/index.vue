<template>
    <div class="Form">
        <el-input type="number" v-model="similarInput" placeholder="相似度"></el-input>
    </div>
</template>

<script>
export default {
    data() {
        return {
            disabled: false,
            similarInput: 0,
        };
    },
    created() {},
    mounted() {},
    methods: {
        checkNum() {},
    },
};
</script>

<style scoped>
/* element样式重置 start */
/* 去掉input尾部上下小箭头 start */
.el-input__inner::-webkit-outer-spin-button,
.el-input__inner::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    -o-appearance: none !important;
    -ms-appearance: none !important;
    appearance: none !important;
    margin: 0;
}
.el-input__inner[type="number"] {
    -webkit-appearance: "textfield";
    -moz-appearance: "textfield";
    -o-appearance: "textfield";
    -ms-appearance: "textfield";
    appearance: "textfield";
}
/* 去掉input尾部上下小箭头 end */
</style>