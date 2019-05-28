

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);//安装路由
import app from './app.vue'
import router from './router.js'

import { Header } from 'mint-ui';
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';
import './lib/mui/fonts/mui-icons-extra.ttf'

Vue.component(Header.name, Header);

var vm=new Vue({
    el:"#app",
    render:c=>c(app),
    router  //挂载路由
})