<template>
    <div class="CheckBox">
        <el-checkbox label="备选项1" border v-for="(item,index) in list" v-model="checked" :key="item" @change="ItemCheck(item,index)"></el-checkbox>
        <!-- <el-checkbox-group v-model="checkboxGroup6" size="mini" @change="changeCheck">
            <el-checkbox label="备选项1" border v-for="(item,index) in list" v-model="checked" :key="item" @change="ItemCheck(item,index)"></el-checkbox>
        </el-checkbox-group> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: true,
            checkboxGroup6: [],
            list: [
                {name:'选项1',isCheck: true}
            ]
        };
    },
    created() {},
    mounted() {},
    methods: {
        changeCheck(){
            console.log(this.list);
        },
        ItemCheck(data,i){
            console.log(this.checked);
            data.isCheck = !data.isCheck
        }
    },
};
</script>

<style scoped>
</style>