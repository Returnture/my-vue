<template>
    <div class="refs">
        <ItemRef ref="refItem"></ItemRef>
    </div>
</template>

<script>
import ItemRef from "./RefItem";
export default {
    data() {
        return {};
    },
    components: {
        ItemRef
    },
    created() {
        
    },
    mounted() {
        console.log(this.$refs.refItem.info);
    },
    methods: {},
};
</script>

<style scoped>
</style>