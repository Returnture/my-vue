<template>
    <div class="Vuex">
        {{$store.state.name}}
        <el-button type="primary" @click="Edit()">修改Vuex的值</el-button>
        <el-button type="primary" @click="eventClick($event)">event</el-button>
        <div @click="eventClick($event)">event</div>
        <el-input type="text" v-model="parentValue"></el-input>
        <ChildNode :parentValue.sync="parentValue"></ChildNode>
        <br>
        <!-- <input v-model.lazy="lazyValue" /> -->
        <!-- <input v-model.number="lazyValue" /> -->
        <input v-model.trim="lazyValue" />
        <!-- <el-input type="text" v-model.lazy="lazyValue"></el-input> -->
        {{lazyValue}}
    </div>
</template>

<script>
import ChildNode from "./ChildNode";
export default {
    data() {
        return {
            parentValue: "",
            $value: "这个会报错吗",
            value: "这个不会报错",
            lazyValue: ""
        };
    },
    components: {
        ChildNode,
    },
    created() {
        console.log('------>>>', this.$store);
    },
    mounted() {
        window.addEventListener('resize', this.handleChange);
        this.$once('hook:beforeDestroy', () => {
            console.log(111);
            window.removeEventListener('resize', this.handleChange)
        })
    },
    methods: {
        handleChange() {
            console.log("窗口变化");
        },
        Edit() {
            this.$store.commit("edit", "这是修改后的值");
        },
        parentMethod() {
            console.log("获取父组件实例");
        },
        change() {
            console.log("多个点击事件");
        },
        eventClick(e) {
            console.log(e.target);
            console.log(e.currentTarget);
            console.log(this.$value);
            console.log(this.value);
        },
    },
    watch: {
        parentValue(newValue) {
            console.log(newValue);
        }
    }
};
</script>

<style scoped>
</style>