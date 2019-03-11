// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BaiduMap from './index'
Vue.use(BaiduMap, {
  ak: 'sFGGCnZu8HcewIdGMFGGaGypsfILG36G'
})

const errorHandler = (error, vm, info) => {
  console.error('抛出全局异常')
  console.error(error)
  console.error(info)
}
Vue.config.errorHandler = errorHandler
Vue.config.performance = false
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
