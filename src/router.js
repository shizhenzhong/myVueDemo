import VueRouter from 'vue-router'

import HomeContainer from './components/tabnav/HomeContainer.vue'
import MemberContainer from './components/tabnav/MemberContainer.vue'
import ShopCartContainer from './components/tabnav/ShopCartContainer.vue'
import SearchContainer from './components/tabnav/SearchContainer.vue'

var router= new VueRouter({

    routes: [
       {path:"/home",component:HomeContainer},
       {path:"/member",component:MemberContainer},
       {path:"/shopcart",component:ShopCartContainer},
       {path:"/search",component:SearchContainer}
    ],
    linkActiveClass:'mui-active'
 
 })

 export default router