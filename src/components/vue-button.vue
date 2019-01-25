<template>
    <div class="button">
        <div class="vButton" :style="{width:width+'px',height:height+'px'}" @click="onClick">
            <div>{{title}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vue-button',
    data () {
        return {
            
        }
    },
    props: {
        width: {
            type: Number,
            default: 80
        },
        height: {
            type: Number,
            default: 40
        },
        title: {
            type: String,
            default:''
        }
    },
    computed:{
        
    },
    created () {
        
    },
    methods: {
        onClick(event){
            this.$emit('onClicked',{
                event:event
            });
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .vButton{
        line-height: 40px;
        background: #333;
        color: #ffffff;
        border-radius: 5px;
        border: 1px solid black;
        cursor: pointer;
    }
</style>
