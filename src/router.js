import VueRouter from 'vue-router'

import HomeContainer from './components/tabnav/HomeContainer.vue'
import MemberContainer from './components/tabnav/MemberContainer.vue'
import ShopCartContainer from './components/tabnav/ShopCartContainer.vue'
import SearchContainer from './components/tabnav/SearchContainer.vue'
import NewsListContainer from './components/news/NewsListContainer.vue'
import photoContainer from './components/photo/photoContainer.vue'
var router= new VueRouter({

    routes: [
       {path:"/",redirect:"/home"},
       {path:"/home",component:HomeContainer},
       {path:"/member",component:MemberContainer},
       {path:"/shopcart",component:ShopCartContainer},
       {path:"/search",component:SearchContainer},
       {path:"/home/newslist",component:NewsListContainer},
       {path:"/home/photolist",component:photoContainer}
    ],
    linkActiveClass:'mui-active'
 
 })

 export default router