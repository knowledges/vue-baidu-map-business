import BaiduMap from './components/map/Map.vue'

export default {
  install (Vue, opt) {
    const { ak } = opt
    Vue.prototype._BMap = () => ({ak})

    Vue.component('baidu-map', BaiduMap)
  }
}

export { BaiduMap }
