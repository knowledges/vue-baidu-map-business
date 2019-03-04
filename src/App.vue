<template>
  <div id="app">
    <baidu-map class="bm-view" :center="{lng: '118.779142', lat: '31.981107'}" :zoom="15">
      <!-- map -->
      <bm-view style="width: 100%; height: 100%; flex: 1;"></bm-view>
      <bm-scale :anchor="'BMAP_ANCHOR_BOTTOM_LEFT'" :offset="{width: 0, height: 50}"></bm-scale>
      <bm-navigation :anchor="'BMAP_ANCHOR_TOP_LEFT'" :type="'BMAP_NAVIGATION_CONTROL_LARGE'"></bm-navigation>
      <bm-marker :position="coords" :animation="'BMAP_ANIMATION_DROP'"></bm-marker>
    </baidu-map>
  </div>
</template>

<script>
import BaiduMap from './components/map/Map.vue'
import BmView from './components/map/MapView.vue'
import BmScale from './components/controls/Scale.vue'
import BmNavigation from './components/controls/Navigation.vue'
import BmMarker from './components/overlays/Marker.vue'
export default {
  name: 'App',
  components: {
    BaiduMap, BmView, BmScale, BmNavigation,
    BmMarker
  },
  data () {
    return {
      coords: [
        {
          lng: '118.779142',
          lat: '31.981107',
          title: '东软大楼'
        },
        {
          lng: '118.783549',
          lat: '31.990869'
        },
        {
          lng: '118.790879',
          lat: '31.986643'
        },
        {
          lng: '118.774278',
          lat: '31.981436'
        },
        {
          lng: '118.775859',
          lat: '31.971451'
        },
        {
          lng: '118.792675',
          lat: '31.981804'
        }
      ]
    }
  },
  mounted () {
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.bm-view {
  width: 100%;
  height: 620px;
}
</style>
