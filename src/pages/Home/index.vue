<template>
    <div class="Home">
        <!-- <ItemRef ref="refItem"></ItemRef> -->
        {{$store.state.name}}
        <ul class="list">
            <li v-for="item in list" :key="item.name" @click="routerTo(item)">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
import ItemRef from "./RefItem";
export default {
    data() {
        return {
            list: [
                { name: "Vuex", to: "Vuex" },
                { name: "Directive", to: "Focus" },
            ],
        };
    },
    components: {
        ItemRef,
    },
    created() {},
    mounted() {},
    methods: {
        routerTo(item) {
            this.$router.push({
                path: `/${item.to}`,
            });
        },
    },
};
</script>

<style scoped>
.Home ul {
    padding: 0;
}
.list li {
    list-style: none;
    width: 100px;
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