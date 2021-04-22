<template>
    <div class="nestedRoute">
        <h3>嵌套路由</h3>
        <div class="content">
            <div class="nav">
                <ul>
                    <!--this inspection reports XML/HTML tags with missing mandatory attrbutes ,you can specify attrbute name that should not  be reported-->
                    <!--home被点击后，一直处于激活状态，因此需要使用精确匹配模式，在router-link中添加exact属性-->
                    <router-link :to="{name:'item1'}" tag="li" exact>
                        <div>精选</div>
                    </router-link>
                    <router-link :to="{name:'item2'}" tag="li">
                        <div>品牌</div>
                    </router-link>
                    <router-link :to="{name:'item3'}" tag="li">
                        <div>会员</div>
                    </router-link>
                    <router-link :to="{name:'item4'}" tag="li">
                        <div>购物车</div>
                    </router-link>
                    <router-link :to="{name:'item5',params:{user:'xu'}}" tag="li">
                        <div>我</div>
                    </router-link>
                </ul>
            </div>
            <div class="cont">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
}
</script>

<style lang='scss' scoped>
.nestedRoute {
    width: 100%;
    height: 100%;
    background: #f2eada;
}
h3 {
    line-height: 40px;
    text-align: center;
}
.content {
    height: calc(100% - 40px);
    display: flex;
    .nav {
        width: 150px;
        height: 100%;
    }
    .cont {
        width: calc(100% - 150px);
        height: 100%;
    }

    .nav ul li {
        width: 100%;
        line-height: 40px;
        text-align: center;
    }
}
</style>