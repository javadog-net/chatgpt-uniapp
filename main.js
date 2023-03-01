import App from './App'
import Vue from 'vue'
import uView from 'uview-ui'
import moment from 'moment';
import api from "@/common/api"
import config from '@/common/config/env.js'

// 注册全局组件
import msg from '@/components/msg/msg.vue'
Vue.component("msg",msg)
Vue.config.productionTip = false
Vue.use(uView)
App.mpType = 'app'
moment.locale('zh-cn');
Vue.prototype.$moment = moment;
Vue.prototype.$api = api;
Vue.prototype.$config = config;

const app = new Vue({
    ...App
})

// uview-request
require('@/common/http/request.js')(app)

app.$mount();
