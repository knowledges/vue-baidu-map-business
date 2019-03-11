<template>
  <div id="app">
    <baidu-map class="bm-view" :center="{lng: '118.779142', lat: '31.981107'}" :zoom="15">
      <!-- map -->
      <bm-view style="width: 100%; height: 100%; flex: 1;"></bm-view>
      <bm-scale :anchor="'BMAP_ANCHOR_BOTTOM_LEFT'" :offset="{width: 0, height: 50}"></bm-scale>
      <bm-navigation :anchor="'BMAP_ANCHOR_TOP_LEFT'" :type="'BMAP_NAVIGATION_CONTROL_LARGE'"></bm-navigation>
      <template v-for="item in coords">
        <bm-marker :position="item"
                   :Loffset="{width: 15, height: -15}"
                   :labelStyle="labelStyle"
                   :animation="'BMAP_ANIMATION_DROP'"
                   @click="markerInfo"
        ></bm-marker>
      </template>

      <bm-polyine :path="coords" :strokeColor="'red'" :strokeWeight="2" :strokeOpacity="0.7"></bm-polyine>
      <bm-polygon :path="coords" :strokeColor="'blue'" :strokeWeight="2" :strokeOpacity="0.5"></bm-polygon>
      <bm-circle :center="{lng: '118.779142', lat: '31.981107'}" :radius="50" :strokeColor="'blue'" :strokeWeight="1" :strokeOpacity="0.4"></bm-circle>
      <bm-point-collection :points="points"
                         :shape="'BMAP_POINT_SHAPE_CIRCLE'"
                         :size="'BMAP_POINT_SIZE_SMALL'"
                         :color="'#d340c3'"
                         @click="markerInfo"
      ></bm-point-collection>
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
    </baidu-map>
  </div>
</template>

<script>
export default {
  name: 'App',
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
      MyLocation: [{
        lng: '118.759319',
        lat: '31.969347',
        title: '牛首坊'
      }],
      coords: [
        {
          lng: '118.783549',
          lat: '31.990869',
          title: '阅城国际花园'
        },
        {
          lng: '118.779142',
          lat: '31.981107',
          title: '东软大楼'
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
        },
        {
          lng: '118.79197',
          lat: '31.986325',
          title: '江苏舜天凯信贸易有限公司'
        }
      ],
      points: []
    }
  },
  mounted () {
    setTimeout(() => {
      this.addPoints()
    }, 1000)
  },
  methods: {
     markerInfo (item) {
      console.log(item)
      console.log(item.target.item)
    },
    addPoints () {
      const points = [];
      for (var i = 0; i < 1000; i++) {
        const position = {lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21}
        points.push(position)
      }
      this.points = points
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
  height: 100%;
}
</style>
