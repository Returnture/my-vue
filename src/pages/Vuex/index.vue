<template>
    <div class="Vuex">
        {{$store.state.info.name}}
        <el-button type="primary" @click="Edit()">修改Vuex的值</el-button>
        <el-button type="primary" @click="eventClick($event)">event</el-button>
        <div @click="eventClick($event)">event</div>
        <el-input type="text" v-model="parentValue"></el-input>
        <!-- <ChildNode :parentValue.sync="parentValue"></ChildNode> -->
        <br>
        <!-- <input v-model.lazy="lazyValue" /> -->
        <!-- <input v-model.number="lazyValue" /> -->
        <input v-model.trim="lazyValue" />
        <!-- <el-input type="text" v-model.lazy="lazyValue"></el-input> -->
        {{lazyValue}}
        <br>
        <button @click="dec">-</button>
        <span>{{count}}</span>
        <button @click="add">+</button>
        <br>
        <el-input type="text" v-model="sum.num1" placeholder="" @blur="GetAandB"></el-input>+
        <el-input type="text" v-model="sum.num2" placeholder="" @blur="GetAandB"></el-input>
        <el-button type="primary" @click="GetTotal">求和</el-button>
        <span>{{$store.state.nums}}</span>
    </div>
</template>

<script>
import ChildNode from "./ChildNode";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    data() {
        return {
            parentValue: "",
            $value: "这个会报错吗",
            value: "这个不会报错",
            lazyValue: "",
            sum: {
                num1: '',
                num2: '',
            },
            total: ''
        };
    },
    components: {
        ChildNode,
    },
    computed: {
        ...mapState(["count"]),
    },
    created() {

    },
    mounted() {
        window.addEventListener('resize', this.handleChange);
        this.$once('hook:beforeDestroy', () => {
            window.removeEventListener('resize', this.handleChange)
        })
        this.init();
    },
    methods: {
        GetAandB() {
            this.$store.commit("getaandb", this.sum)
        },
        GetTotal() {
            this.$store.commit('GetNums');
        },
        ...mapActions(["incrementAsync", "decrementAsync"]),
        ...mapMutations(["initInfo", "editInfo", "decrement", "increment", "GetNums"]),
        add() {
            this.incrementAsync().then(() => {
                // console.log("执行次数");
                // this.increment()
            })
        },
        dec() {
            this.decrementAsync().then(() => {
                this.decrement()
            })
        },
        init() {
            this.initInfo({ name: "hello world!" })
        },
        handleChange() {
            console.log("窗口变化");
        },
        Edit() {
            this.$store.commit("editInfo", { name: "这是修改后的值" });
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