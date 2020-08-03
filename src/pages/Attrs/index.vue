<template>
    <div class="Attrs">
        <ChildNode :age="age" :love="love" :address="address" name="aaa" data="1"></ChildNode>
    </div>
</template>

<script>
import ChildNode from "./ChildNode";
export default {
    name: "Attrs",
    data() {
        return {
            age: "21",
            love: "Chen",
            address: "xinan"
        };
    },
    props: {},
    components: {
        ChildNode
    },
    computed: {},
    created() {},
    methods: {
        onClick(event) {
            this.$emit("onClicked", {
                event: event
            });
        }
    }
};
</script>

<style scoped>
.input-contain {
    width: 100%;
    height: 46px;
    border: 1px solid #999;
}
</style>
