import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Lianxi from '@/components/Lianxi'
import Lianxia from '@/components/Lianxia'
import Zhuzhuang from '@/components/Zhuzhuang'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/lianxi',
      name: 'lianxi',
      component: Lianxi
    }, {
      path: '/lianxia',
      name: 'lianxia',
      component: Lianxia
    }, 
    {
      path: '/zhuzhuang',
      name: 'zhuangzhuang',
      component: Zhuzhuang
    }
  ]
})
