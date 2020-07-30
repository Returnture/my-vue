<template>
    <div class="Child">
        <ul>
            <li>{{age}}</li>
            <li>{{love}}</li>
            <li>{{address}}</li>
        </ul>
        <GrandSon v-bind="$attrs"></GrandSon>
    </div>
</template>

<script>
import GrandSon from "./GrandSon";
export default {
    components: {},
    data() {
        return {};
    },
    props: {
        age: {
            type: String,
            default: ""
        },
        love: {
            type: String,
            default: ""
        },
        address: {
            type: String,
            default: ""
        }
    },
    computed: {},
    components: {
        GrandSon
    },
    watch: {},
    methods: {},
    created() {
        console.log(this.$attrs);
    },
    mounted() {}
};
</script>
<style scoped>
</style>