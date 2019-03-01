// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BaiduMap from './index'

Vue.config.productionTip = false
Vue.use(BaiduMap, {
  ak: 'sFGGCnZu8HcewIdGMFGGaGypsfILG36G'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
