import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/login'
import Home from '../components/home/home'
import EssayList from '../components/essayManage/essayList'
import PublicArtical from '../components/essayManage/publishArtical'
import UserManger from '../components/users/usersManger'
import ColumnManager from '../components/column/column'
import DataStatiscs from '../components/data/dataStatiscs'
import RightList from '../components/users/rightList'


// 解决vue3中导航栏点击报错问题：Avoided redundant navigation to current location
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login
    }, {
      name: 'home',
      path: '/home',
      component: Home,
      //注意子组件的使用格式
      children:[{
        name:'essayList',
        path:'/essayList',
        component:EssayList
      }, {
        name:'publishArtical',
        path:'/publishArtical',
        component:PublicArtical
      },{
        name:'usersManger',
        path:'/usersManger',
        component:UserManger
      },{
        name:'column',
        path: '/column',
        component:ColumnManager
      },{
        name: 'dataStatiscs',
        path: '/dataStatiscs',
        component: DataStatiscs
      },{
        name:'rightList',
        path: '/rightList',
        component: RightList
      }]
    }
  ]
})
