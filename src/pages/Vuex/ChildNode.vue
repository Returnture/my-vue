<template>
    <div class="ChildNode">
        <el-input type="text" v-model="parentValue"></el-input>
    </div>
</template>

<script>
export default {
    data() {
        return {
            str: "",
        };
    },
    props: {
        parentValue: {
            type: String,
            default: "",
        },
    },
    created() {
        console.log(this.$parent.parentMethod);
    },
    mounted() {},
    methods: {},
    watch: {
        parentValue: function (newValue, oldValue) {
            this.$emit("update:parentValue", newValue);
        },
    },
};
</script>

<style scoped>
</style>