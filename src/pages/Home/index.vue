<template>
    <div class="Home">
        <ul class="list">
            <li v-for="item in list" :key="item.name" @click="routerTo(item)">{{item.name}}</li>
        </ul>
        <div v-html="rawHtml"></div>
        <div @click="add">{{dataobj.a}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                { name: "login", to: "login" },
                { name: "Vuex", to: "Vuex" },
                { name: "Directive", to: "Focus" },
                { name: "Refs", to: "Refs" },
                { name: "Attrs", to: "Attrs" },
                { name: "Slot", to: "Slot" },
                { name: "CheckBox", to: "CheckBox" },
                { name: "验证Style和script是否是必须的", to: "ScriptStyle" },
                { name: "Swiper", to: "Swiper" },
                { name: "Form", to: "Form" },
                { name: "全选反选", to: "CheckAll" },
                { name: "Focus", to: "Focus" },
                { name: "Computed和watch的区别", to: "Computed" },
                { name: "Key的作用", to: "Key" },
                { name: "自定义全局组件-loading", to: "Loading" },
                { name: "富文本编辑器", to: "TinyMCE" },
                { name: "SVG用法", to: "SVG" },
                { name: "Transition", to: "Transition" },
                { name: "递归组件", to: "Recursion" },
                { name: "嵌套路由", to: "NestedRoute" },
            ],
            rawHtml: "<span>这是html</span>",
            dataobj: {
                a: 1
            },
            a: {
                n: 1
            },
            b: ""
        };
    },
    components: {},
    beforeRouteEnter(to, from, next) {
        // console.log(this);
        next(vm => {
            console.log(vm);
            // 通过 `vm` 访问组件实例
        })
    },
    created() {
        // console.log(this.$appName);
        // console.log(this.$root.age);

        this.b = this.a
        this.a.x = this.a = { n: 2 }
    },
    mounted() {

    },
    methods: {
        routerTo(item) {
            this.$router.push({
                path: `/${item.to}`,
            });
        },
        add() {
            this.dataobj.a = 2
        }
    },
    watch: {
        a(newVal, oldVal) {
            console.log('a旧值', oldVal);
            console.log('a新值', newVal);
            // console.log(this.a.x);
        },
        b(newVal, oldVal) {
            console.log('b旧值', oldVal);
            console.log('b新值', newVal);
        }
    }
};
</script>

<style scoped>
.Home ul {
    padding: 0;
}
.list li {
    list-style: none;
    width: 250px;
    height: 30px;
    line-height: 30px;
    background: #666;
    color: #fff;
    cursor: pointer;
    text-align: center;
    margin-bottom: 5px;
    border-radius: 5px;
}
</style>