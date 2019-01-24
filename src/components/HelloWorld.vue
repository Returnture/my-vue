<template>
    <div class="hello">
        <!-- <input type="text" name="" value="" v-focus> -->
        <anchored-heading :level="1">
            <div slot="h1">
                aaaaaaaa
            </div>
        </anchored-heading>
    </div>
</template>

<script>
import Vue from 'vue';
import anchoredHeading from '@/components/anchored-heading';
// Vue.directive('focus', {
//     // 当被绑定的元素插入到 DOM 中时……
//     inserted: function (el) {
//         // 聚焦元素
//         el.focus()
//     }
// });
// Vue.component('anchored-heading', {
//     render: function (createElement) {
//         return createElement(
//             'h' + this.level,   // tag name 标签名称
//             this.$slots.default // 子组件中的阵列
//         )
//     },
//     props: {
//         level: {
//             type: Number,
//             required: true
//         }
//     }
// })
export default {
    name: 'HelloWorld',
    data () {
        return {

        }
    },
    components: {
        anchoredHeading
    },
    created () {
    },
    methods: {
        formatDateTime(date){
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            m = m < 10 ? ('0' + m) : m;
            var d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            var h = date.getHours();
            var minute = date.getMinutes();
            var seconds = date.getSeconds();
            minute = minute < 10 ? ('0' + minute) : minute;
            return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + seconds;
        }
    },
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
