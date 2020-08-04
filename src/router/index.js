import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import Home from '@/pages/Home'
import Stop from '@/pages/Home/Stop'
import Attrs from '@/pages/Attrs'
import Slot from '@/pages/Slot'
import Focus from '@/pages/Directives/Focus'
import Vuex from '@/pages/Vuex'

Vue.use(Router)

const router = new Router({
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
    }
  ]
})

export default router
