<template>
    <div class="CheckAll">
        <h1>全选反选</h1>
        <div id="vm1">
            <label>
                <input type="checkbox" v-model="allData.parCheck" @change="allSelect()" />
                {{allData.text}}
            </label>
            <ul>
                <li v-for="(item,index) in checkData" :key="index">
                    <label>
                        <input type="checkbox" v-model="item.isCheck" @change="singleSelect()" />
                        {{item.text}}
                    </label>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            allData: { text: "全选", parCheck: false },
            checkData: [
                { text: "苹果", isCheck: false },
                { text: "香蕉", isCheck: false },
                { text: "西瓜", isCheck: false },
            ],
        };
    },
    created() {},
    mounted() {},
    methods: {
        //全选
        allSelect: function () {
            var vm1 = this;
            vm1.checkData.forEach(function (item) {
                item.isCheck = vm1.allData.parCheck;
            });
        },
        //单选
        singleSelect: function () {
            var vm1 = this;
            var selectData = vm1.checkData.filter(function (item) {
                return item.isCheck == true;
            });
            selectData.length == vm1.checkData.length
                ? (vm1.allData.parCheck = true)
                : (vm1.allData.parCheck = false);
        },
    },
};
</script>

<style scoped>
</style>