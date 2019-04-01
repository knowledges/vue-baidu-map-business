import BaiduMap from './components/map/Map.vue'
import BmView from './components/map/MapView.vue'
import BmScale from './components/controls/Scale.vue'
import BmNavigation from './components/controls/Navigation.vue'
import BmGeolocation from './components/controls/Geolocation .vue'
import BmMarker from './components/overlays/Marker.vue'
import BmPolygon from './components/overlays/Polygon.vue'
import BmPolyine from './components/overlays/Polyline.vue'
import BmCircle from './components/overlays/Circle.vue'
import BmPointCollection from './components/overlays/PointCollection.vue'
/* 热力图 */
/* 聚合 */

const components = [
  BaiduMap, BmView,
  BmScale, BmNavigation, BmGeolocation,
  BmMarker, BmPolygon, BmPolyine, BmCircle, BmPointCollection
]

const install = function (Vue, opt = {}) {
  const { ak } = opt
  Vue.prototype._BMap = () => ({ak})
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof Window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '1.0.9',
  install,
  BaiduMap, BmView,
  BmScale, BmNavigation, BmGeolocation,
  BmMarker, BmPolyine, BmPolygon, BmCircle, BmPointCollection
}

