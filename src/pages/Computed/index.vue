<template>
    <div class="Computed">
        <div>
            <b>computed</b>
            <span>num: {{num}}</span>
            <span>num1: {{num1}}</span>
            <span>num2: {{num2}}</span>
            <span>num3: {{num3}}</span>
            <button @click="add">num1+1</button>
            <button @click="add1">num3*2</button>
        </div>
        <div>
            <b>watch</b>
            <span>{{message}}</span>
            <button @click="add2">message1</button>
            <button @click="add3">message2</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num1: 5,
            num3: 6,
            message: '这是第一次渲染的值'
        }
    },
    computed: {
        num() {
            return this.num1 + this.num2
        },
        num2() {
            return this.num3*2
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        add() {
            this.num1++
        },
        add1() {
            this.num3++
        },
        add2() {

        },
        add3() {

        }
    },
    watch: {
        
    }
}
</script>

<style scoped>
</style>