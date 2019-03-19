<template>
    <div class="search-box">
        <div class="input"><slot name="search-input"></slot></div>
        <div class="btn"><slot name="search-button"></slot></div>
    </div>
</template>

<script>
export default {
    name: 'search-box',
    data () {
        return {

        }
    },
    props: {

    },
    computed:{

    },
    created () {
        console.log(111111111111);
    },
    methods: {
        // onClick(event){
        //     this.$emit('onClicked',{
        //         event:event
        //     });
        // }
    },
}
</script>

<style scoped>
    .search-box{
        width: 500px;
        height: 50px;
        margin: 10px auto;
        display: flex;
        justify-content: center;   /*水平居中*/
        align-items: center;
    }
    .input{
        flex: 4;
        height: 100%;
    }
    .btn{
        flex: 1;
        height: 100%;
    }
</style>
