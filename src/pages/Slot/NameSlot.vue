<template>
    <div class="NameSlot">
        <div class="header">
            <slot name="haveName"></slot>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    created() {},
    mounted() {},
    methods: {},
};
</script>

<style scoped>
.header {
    width: 100%;
    height: 50px;
    background: #428bfe;
    position: relative;
}
</style>