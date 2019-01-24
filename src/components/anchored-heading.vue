<template>
    <div class="anchored-heading">
        <!-- <h1>
            <a name="hello-world" href="#hello-world">Hello world!</a>
        </h1> -->
        <div class="a">{{aaa}}</div>
    </div>
</template>

<script>
export default {
    name: 'anchored-heading',
    data () {
        return {
            a:'ccc',
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
    computed:{
        aaa(){
            console.log(this.a);
            return this.a
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
