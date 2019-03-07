import BaiduMap from './components/map/Map.vue'
import BmView from './components/map/MapView.vue'
import BmScale from './components/controls/Scale.vue'
import BmNavigation from './components/controls/Navigation.vue'
import BmGeolocation from './components/controls/Geolocation .vue'
import BmMarker from './components/overlays/Marker.vue'
import BmPolyine from './components/overlays/Polyline.vue'
import BmCircle from './components/overlays/Circle.vue'
import BmPointCollection from './components/overlays/PointCollection.vue'

export default {
  install (Vue, opt) {
    const { ak } = opt
    Vue.prototype._BMap = () => ({ak})
    Vue.component('baidu-map', BaiduMap)
    Vue.component('bm-view', BmView)
    Vue.component('bm-scale', BmScale)
    Vue.component('bm-navigation', BmNavigation)
    Vue.component('bg-geolocation', BmGeolocation)
    Vue.component('bm-marker', BmMarker)
    Vue.component('bm-polyine', BmPolyine)
    Vue.component('bm-circle', BmCircle)
    Vue.component('bm-point-collection', BmPointCollection)
  }
}

export { BaiduMap, BmView, BmScale, BmNavigation, BmMarker, BmPolyine, BmCircle, BmPointCollection }
