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
                { name: "Vuex", to: "Vuex" },
<<<<<<< HEAD
                { name: "Directive", to: "Focus" },
                { name: "Refs", to: "Refs" },
                { name: "Attrs", to: "Attrs" },
                { name: "Slot", to: "Slot" },
                { name: "CheckBox", to: "CheckBox" },
                { name: "验证Style和script是否是必须的", to: "ScriptStyle" },
                { name: "Swiper", to: "Swiper" },
                { name: "Form", to: "Form" },
                { name: "全选反选", to: "CheckAll" }
=======
                { name: "Slot", to: "Slot" },
                { name: "Focus", to: "Focus" },
                { name: "Attrs", to: "Attrs" },
>>>>>>> 1b0a9a91bfd71b2e0a2caa031f6c2235e4e850a9
            ],
            rawHtml: "<span>这是html</span>",
            dataobj: {
                a: 1
            }
        };
    },
    components: {},
    created() {},
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