<template>
  <div id="app">
    <baidu-map class="bm-view" :center="{lng: '118.779142', lat: '31.981107'}" :zoom="15">
      <!-- map -->
      <bm-view style="width: 100%; height: 100%; flex: 1;"></bm-view>
      <bm-scale :anchor="'BMAP_ANCHOR_BOTTOM_LEFT'" :offset="{width: 0, height: 50}"></bm-scale>
      <bm-navigation :anchor="'BMAP_ANCHOR_TOP_LEFT'" :type="'BMAP_NAVIGATION_CONTROL_LARGE'"></bm-navigation>
      <bm-marker :position="coords"
                 :Loffset="{width: 15, height: -15}"
                 :labelStyle="labelStyle"
                 :animation="'BMAP_ANIMATION_DROP'"
                 @click="markerInfo"
      ></bm-marker>
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
      labelStyle: {
        'box-shadow': '0 0 5px #000',
        'border': '0px solid #000',
        'border-radius': '2px',
        'backgroundColor': 'rgba(0, 0, 0, 0.9)',
        'color': '#FFF',
        'padding': '6px',
      },
//      coords: {
//        lng: '118.779142',
//        lat: '31.981107',
//        title: '东软大楼'
//      }
      coords: [
        {
          lng: '118.779142',
          lat: '31.981107',
          title: '东软大楼'
        },
        {
          lng: '118.783549',
          lat: '31.990869',
          title: '阅城国际花园'
        },
        {
          lng: '118.79197',
          lat: '31.986325',
          title: '江苏舜天凯信贸易有限公司'
        },
        {
          lng: '118.77444',
          lat: '31.981409',
          title: '新华汇'
        },
        {
          lng: '118.775859',
          lat: '31.971451',
          title: '南京徐工汽车制造有限公司'
        },
        {
          lng: '118.792675',
          lat: '31.981804',
          title: '中兴通讯'
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
     markerInfo (item) {
      console.log('123')
      console.log(item)
      console.log(item.target.item)
    }
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
