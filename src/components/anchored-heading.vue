<template>
    <div class="anchored-heading">
        <!-- <h1>
            <a name="hello-world" href="#hello-world">Hello world!</a>
        </h1> -->
        <div class="a">qqqqqqqqqqqqq</div>
        <img :src="`${a}${b}`" alt="">
    </div>
</template>

<script>
export default {
    name: 'anchored-heading',
    data () {
        return {
            a:'aaa',
            b:'bbb'
        }
    },
    render: function (createElement) {
        return createElement(
            'h' + this.level,   // tag name 标签名称
            this.$slots.default // 子组件中的阵列
        )
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    },
    created () {
        console.log(this.level);
    }
    // directives: {
    //     focus: {
    //         // 指令的定义
    //         inserted: function (el) {
    //             el.focus()
    //         }
    //     }
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
