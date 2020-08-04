<template>
    <div class="RefItem">
        {{info}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            info: "这是ref子组件"
        };
    },
    created() {},
    mounted() {},
    methods: {
        change(){
            console.log("change");
        }
    },
};
</script>

<style scoped>
</style>