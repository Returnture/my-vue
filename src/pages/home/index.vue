<template>
    <div class="home">
        <search-box>
            <div slot="search-input"><input class="input-contain" type="text" value="搜索"></div>
        </search-box>
    </div>
</template>

<script>
import searchBox from '@/components/search-box'
export default {
    name: 'home',
    data () {
        return {

        }
    },
    props: {

    },
    components:{
        searchBox
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

<style scoped>
    .input-contain{
        width: 100%;
        height: 46px;
        border: 1px solid #999;
    }
</style>
