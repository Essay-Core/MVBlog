// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import http from '../src/plugins/http'
import subBread from "./subcom/subBread";

//时间格式方法
import moment from 'moment'

//add 2020年7月23日16:20:14
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

// Vue.use(MyHttpServer)
Vue.use(ElementUI);
Vue.prototype.$http = http
Vue.config.productionTip = false
Vue.component(subBread.name,subBread)
Vue.prototype.$moment = moment
Vue.use(mavonEditor)

// 注册组件后即可使用
// Vue.component('v-chart', ECharts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
