<template>
    <div class="Focus">
        <!-- <input type="text" v-model="inputText" placeholder="请输入" v-focus /> -->
        <div class="one" v-drag>拖拽one</div>
        <div class="two" v-drag>拖拽two</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // inputText: "",
        };
    },
    created() {},
    mounted() {},
    methods: {},
    directives: {
        // focus: {
        //     bind(el) {
        //         console.log(el);
        //     },
        //     inserted(el) {
        //         el.style["font-size"] = "24px";
        //         el.focus();
        //     },
        //     update(el) {},
        // },
        drag(el){
            let oDiv = el; //当前元素
            let self = this; //上下文
            //禁止选择网页上的文字
            document.onselectstart = function () {
                return false;
            };
            oDiv.onmousedown = function (e) {
                //鼠标按下，计算当前元素距离可视区的距离
                let disX = e.clientX - oDiv.offsetLeft;
                let disY = e.clientY - oDiv.offsetTop;
                document.onmousemove = function (e) {
                    //通过事件委托，计算移动的距离
                    let l = e.clientX - disX;
                    let t = e.clientY - disY;
                    //移动当前元素
                    oDiv.style.left = l + "px";
                    oDiv.style.top = t + "px";
                };
                document.onmouseup = function (e) {
                    document.onmousemove = null;
                    document.onmouseup = null;
                };
                //return false不加的话可能导致黏连，就是拖到一个地方时div粘在鼠标上不下来，相当于onmouseup失效
                return false;
            };
        }
    },
};
</script>

<style scoped>
.one,
.two {
    height: 100px;
    width: 100px;
    border: 1px solid #000;
    position: absolute;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    cursor: pointer;
}
.two {
    left: 200px;
}
</style>