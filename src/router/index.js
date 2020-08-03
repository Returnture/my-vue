import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import Attrs from '@/pages/Attrs'
import Slot from '@/pages/Slot'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/Attrs',
      name: 'Attrs',
      component: Attrs
    },
    {
      path: '/',
      name: 'Slot',
      component: Slot
    }
  ]
})

export default router
