import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../components/home'
import Index from '../components/index'
import Search from '../components/search'
import Vip from '../components/vip'
import Car from '../page/car'
import Main from '../main'


Vue.use(Router)

export default new Router({
  routes: [
     {
        path:'/',
        name:'home',
        redirect:"/home"
    },   
    {
        path:'/home',
        component:Main,
        children:[
            {
                path:'/',
                redirect:"/index"
            },
            {
                path:'/index',
                component:Index
            },
            {
                path:'/search',
                component:Search
            },         
            {
                path:'/vip',
                component:Vip
            }
        ]
    },
    {
        path:'/car',
        component:Car
    }
  ]
})
