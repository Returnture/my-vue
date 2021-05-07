<template>
   <div class="timer-button">
       <button :disabled="isClick" @click="handler">
           <slot></slot>
       </button>
   </div>
</template>

<script>

export default {
name: "timer-button",
data() {
   return {
       isClick: false
   };
},
props: {
    time: {
        type: Number,
        default: 0
    }
},
components: {},
computed: {},
watch: {},
methods: {
    handler() {
        this.isClick = true
        this.$emit("click",this.isClick)
        setTimeout(()=>{
            this.isClick = false
        },this.time*1000)
    }
},
created() {

},
mounted() {

},
}
</script>
<style scoped>
    button {
        width: 80px;
        height: 40px;
        background: #999;
        color: #FFF;
        text-align: center;
        line-height: 40px;
    }
</style>