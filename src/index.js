import BaiduMap from './components/map/Map.vue'
import BmView from './components/map/MapView.vue'
import BmScale from './components/controls/Scale.vue'
import BmNavigation from './components/controls/Navigation.vue'
import BmMarker from './components/overlays/Marker.vue'
import BmPolyine from './components/overlays/Polyline.vue'

export default {
  install (Vue, opt) {
    const { ak } = opt
    Vue.prototype._BMap = () => ({ak})
    Vue.component('baidu-map', BaiduMap)
    Vue.component('bm-view', BmView)
    Vue.component('bm-scale', BmScale)
    Vue.component('bm-navigation', BmNavigation)
    Vue.component('bm-marker', BmMarker)
    Vue.component('bm-polyine', BmPolyine)
  }
}

export { BaiduMap, BmView, BmScale, BmNavigation, BmMarker, BmPolyine }
