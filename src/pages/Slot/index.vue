<template>
    <div class="home">
        <!-- 具名插槽 -->
        <search-box>
            <div slot="search-input"><input class="input-contain" placeholder="搜索" type="text" value="搜索"></div>
        </search-box>
        <!-- 不具名插槽 -->
        <NoName>
            <div class="btn1">返回</div>
        </NoName>
        <br>
        <NameSlot>
            <div class="btn2" slot="haveName">关闭</div>
        </NameSlot>
    </div>
</template>

<script>
import searchBox from '@/components/search-box'
import NoName from "./NoName"
import NameSlot from "./NameSlot"
export default {
    name: 'home',
    data () {
        return {

        }
    },
    props: {

    },
    components:{
        searchBox,
        NoName,
        NameSlot
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
    .btn1 {
        width: 30px;
        height: 30px;
        color: #FFF;
        font-size: 14px;
        position: absolute;
        line-height: 30px;
        left: 10px;
        top: 10px;
        cursor: pointer;
    }
    .btn2 {
        width: 30px;
        height: 30px;
        color: #FFF;
        font-size: 14px;
        position: absolute;
        line-height: 30px;
        right: 10px;
        top: 10px;
        cursor: pointer;
    }
</style>
