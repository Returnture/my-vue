<template>
    <div class="Vuex">
        {{$store.state.name}}
        <el-button type="primary" @click="Edit">修改Vuex的值</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    created() {},
    mounted() {},
    methods: {
        Edit(){
            this.$store.commit('edit',"这是修改后的值")
        }
    },
};
</script>

<style scoped>
</style>