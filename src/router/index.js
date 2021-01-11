import Vue from 'vue'
import Router from 'vue-router'
import {
    utils
} from "../utils"

Vue.use(Router)

const router = new Router({
    // mode: 'history',
    routes: [{
        path: '/login',
        name: 'login',
        component: () => import('@/pages/login')
    },
    {
        path: '/Stop',
        name: 'Stop',
        component: () => import('@/pages/Home/Stop')
    },
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/Home')
    },
    {
        path: '/Attrs',
        name: 'Attrs',
        component: () => import('@/pages/Attrs')
    },
    {
        path: '/Slot',
        name: 'Slot',
        component: () => import('@/pages/Slot')
    },
    {
        path: '/Focus',
        name: 'Focus',
        component: () => import('@/pages/Directives/Focus')
    },
    {
        path: '/Vuex',
        name: 'Vuex',
        component: () => import('@/pages/Vuex'),
        // redirect: { name: 'Focus' }
    },
    {
        path: '/Refs',
        name: 'Refs',
        component: () => import('@/pages/Refs')
    },
    {
        path: '/CheckBox',
        name: 'CheckBox',
        component: () => import('@/pages/CheckBox')
    },
    {
        path: '/ScriptStyle',
        name: 'ScriptStyle',
        component: () => import('@/pages/ScriptStyle')
    },
    {
        path: '/Swiper',
        name: 'Swiper',
        component: () => import('@/pages/Swiper')
    },
    {
        path: '/Form',
        name: 'Form',
        component: () => import('@/pages/Form')
    },
    {
        path: '/CheckAll',
        name: 'CheckAll',
        component: () => import('@/pages/CheckAll')
    },
    {
        path: '/Computed',
        name: 'Computed',
        component: () => import('@/pages/Computed')
    },
    {
        path: '/Key',
        name: 'Key',
        component: () => import('@/pages/Key')
    },
    {
        path: '/Loading',
        name: 'Loading',
        component: () => import('@/pages/Loading')
    }
    ]
})

// router.beforeEach((to, from, next) => {
//     if (to.path != "/login") {
//         const account = utils.getParams('account')
//         if (account) {
//             next()
//         } else {
//             next({
//                 path: '/login'
//             })
//         }
//     } else {
//         next()
//     }
// })

export default router
