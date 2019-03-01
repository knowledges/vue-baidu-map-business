<template>
  <div id="app">
    <baidu-map class="bm-view" :center="'南京'" :zoom="15">
      <!-- map -->
      <bm-view style="width: 100%; height: 100%; flex: 1;"></bm-view>
      <bm-scale :anchor="'BMAP_ANCHOR_BOTTOM_LEFT'" :offset="{width: 0, height: 50}"></bm-scale>
      <bm-navigation :anchor="'BMAP_ANCHOR_TOP_LEFT'" :type="'BMAP_NAVIGATION_CONTROL_LARGE'"></bm-navigation>
    </baidu-map>
  </div>
</template>

<script>
import BaiduMap from './components/map/Map.vue'
import BmView from './components/map/MapView.vue'
import BmScale from './components/controls/Scale.vue'
import BmNavigation from './components/controls/Navigation.vue'
export default {
  name: 'App',
  components: {
    BaiduMap, BmView, BmScale, BmNavigation
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
