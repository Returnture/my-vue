<template>
    <div class="GrandSon">
        {{$attrs.name}}{{$attrs.data}}
        <!-- {{age}}{{love}}{{address}} -->
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {};
    },
    props: {
        age: {
            type: String,
            default: ''
        },
        love: {
            type: String,
            default: ''
        },
        address: {
            type: String,
            default: ''
        }
    },
    computed: {},
    watch: {},
    methods: {},
    created() {
        
    },
    mounted() {
        console.log(this.$attrs);
    }
};
</script>
<style scoped>
</style>