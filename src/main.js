

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import app from './app.vue'
import router from './router.js'

import { Header } from 'mint-ui';
import './lib/mui/css/mui.min.css';

Vue.component(Header.name, Header);

var vm=new Vue({
    el:"#app",
    render:c=>c(app),
    router
})