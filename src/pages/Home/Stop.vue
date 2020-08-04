<template>
    <div class="Stop">
        <div style="width:200px;height:200px;border:1px solid #333;" @click="btnPrevent">
            <div style="width:100px;height:100px;border:1px solid #333;margin: 50px auto;" @click.stop="btn2Prevent">
                <span>阻止事件冒泡</span>
            </div>
        </div>
        <input type="text" v-model.number="input1" /> +
        <input type="text" v-model.number="input2" /> =
        <span>{{ getSum }}</span>
        <!-- set 函数可以接收这里传递过来的值 -->
        <button @click="getSum = ''">修改 getSum</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input1: '',
            input2: ''
        };
    },
    computed: {
        getSum: {
            get() {
                return this.input1 + this.input2;
            },
            // 接收 getSum 这个属性改变后的值
            set(val) {
                console.log(val);
                this.input1 = 20;
                this.input2 = 30;
            },
        },
    },
    created() {},
    mounted() {},
    methods: {
        btnPrevent() {
            console.log("阻止事件冒泡111!!!");
        },
        btn2Prevent() {
            console.log("阻止事件冒泡222!!!");
        },
    },
};
</script>

<style scoped>
</style>