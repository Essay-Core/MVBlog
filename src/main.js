// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import http from '../src/plugins/http'
import subBread from "./subcom/subBread";

// import MyHttpServer from "../static/http";
// import './utils/filter_utils.js'

// Vue.use(MyHttpServer)
Vue.use(ElementUI);
Vue.prototype.$http = http
Vue.config.productionTip = false
Vue.component(subBread.name,subBread)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
