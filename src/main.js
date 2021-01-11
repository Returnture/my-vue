// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import Router from './router'
import store from './store'
import toastRegistry from './components/Toast/index.js'
Vue.use(toastRegistry)

Vue.use(ElementUI);

import swiper from 'vue-awesome-swiper'

// import style
import 'swiper/css/swiper.css'

// 全局注册组件
import './assets/css/base.css'

Vue.use(swiper, /* { default options with global component } */)
Vue.config.productionTip = false
Vue.config.silent = true

Vue.prototype.$appName = "这是APP的名字";

// console.log(Vue.config);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: Router,
    store,
    components: { App },
    data: {
        age: 12
    },
    template: '<App/>',
    // render: function (createElement) {
    //     // return createElement('h1', '我是render出来的HTML，年龄{{age}}');//不能使用“Mustache”语法 (双大括号)
    //     return createElement('h1', '我是render出来的HTML，年龄' + this.age);
    // }
})

// Vue.directive('focus', {
//     // 当被绑定的元素插入到 DOM 中时……
//     inserted: function (el) {
//         // 聚焦元素
//         el.focus()
//     }
// });
