<template>
    <div class="">
        <timer-button :time="3" @click="clickHandler">发送</timer-button>
        <!-- <TimerButton>发送</TimerButton> -->
    </div>
    
    
</template>

<script>
import TimerButton from './timer-button.vue';
export default {
    data() {
        return {

        };
    },
    props: {},
    components: {
        TimerButton
    },
    computed: {},
    watch: {},
    methods: {
        clickHandler(data) {
            console.log(data);
        }
    },
    created() {

    },
    mounted() {

    },
}
</script>
<style scoped>
</style>