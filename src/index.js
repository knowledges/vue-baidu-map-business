import BaiduMap from './components/map/Map.vue'
import BmView from './components/map/MapView.vue'
import BmScale from './components/controls/Scale.vue'
import BmNavigation from './components/controls/Navigation.vue'
import BmGeolocation from './components/controls/Geolocation .vue'
import BmMarker from './components/overlays/Marker.vue'
import BmPolyine from './components/overlays/Polyline.vue'
import BmCircle from './components/overlays/Circle.vue'
import BmPointCollection from './components/overlays/PointCollection.vue'

const components = [
  BaiduMap, BmView,
  BmScale, BmNavigation, BmGeolocation,
  BmMarker, BmPolyine, BmPolyine, BmCircle, BmPointCollection
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
  version: '1.0.4',
  install,
  BaiduMap, BmView,
  BmScale, BmNavigation, BmGeolocation,
  BmMarker, BmPolyine, BmPolyine, BmCircle, BmPointCollection
}

