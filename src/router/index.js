import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import Home from '@/pages/Home'
import Stop from '@/pages/Home/Stop'
import Attrs from '@/pages/Attrs'
import Slot from '@/pages/Slot'
import Focus from '@/pages/Directives/Focus'
import Vuex from '@/pages/Vuex'
import Refs from '@/pages/Refs'
import CheckBox from '@/pages/CheckBox'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [{
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/Stop',
      name: 'Stop',
      component: Stop
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Attrs',
      name: 'Attrs',
      component: Attrs
    },
    {
      path: '/Slot',
      name: 'Slot',
      component: Slot
    },
    {
      path: '/Focus',
      name: 'Focus',
      component: Focus
    },
    {
      path: '/Vuex',
      name: 'Vuex',
      component: Vuex
    },
    {
      path: '/Refs',
      name: 'Refs',
      component: Refs
    },
    {
      path: '/CheckBox',
      name: 'CheckBox',
      component: CheckBox
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
    }
  ]
})

export default router
