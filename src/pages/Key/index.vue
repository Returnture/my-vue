<template>
    <div class="key">
        <div class="list">
            <p>列表中Key的作用</p>
            <ul>
                <li v-for="item in list" :key="item.ID">{{item.name}}</li>
            </ul>
            <button @click="add">添加元素</button>
        </div>
        <div class="list">
            <p>其他标签中Key的作用</p>
            <div class="tab">
                <div class="account" @click="ChangeLoginType('account')">账号登录</div>
                <div class="email" @click="ChangeLoginType('email')">邮箱登录</div>
            </div>
            <div v-if="loginType==='account'" key="account">
                <input type="text">
            </div>
            <div v-if="loginType==='email'" key="email">
                <input type="text">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                { name: "ZHANGSAN", ID: 1 },
                { name: "LISI", ID: 2 },
                { name: "WANGWU", ID: 3 },
                { name: "ZHAOER", ID: 4 },
                { name: "SUNSAN", ID: 5 },
                { name: "YANGLIU", ID: 6 },
            ],
            loginType: 'account'
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        add() {

        },
        ChangeLoginType(val) {
            this.loginType = val
        }
    }
}
</script>

<style scoped>
.list {
    width: 100%;
    line-height: 30px;
    padding: 10px 30px;
}
button {
    width: 120px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background: rgba(66, 139, 254, 1);
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
}
.account, .email {
    float: left;
    width: 100px;
    height: 40px;
    background: rgba(66, 139, 254, 1);
    text-align: center;
    line-height: 40px;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 20px;
}
</style>