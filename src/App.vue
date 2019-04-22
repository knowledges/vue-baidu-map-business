<template>
  <div id="app">
    <baidu-map class="bm-view" :center="{lng: '118.779142', lat: '31.981107'}" :zoom="11">
      <!-- map -->
      <bm-view style="width: 100%; height: 100%; flex: 1;"></bm-view>
      <bm-scale :anchor="'BMAP_ANCHOR_BOTTOM_LEFT'" :offset="{width: 0, height: 50}"></bm-scale>
      <bm-navigation :anchor="'BMAP_ANCHOR_BOTTOM_RIGHT'" :type="'BMAP_NAVIGATION_CONTROL_ZOOM'" :offset="{width: 8, height: 65}"></bm-navigation>
      <!--<template v-for="item in coords">-->
        <!--<bm-marker :position="item"-->
                   <!--:loffset="{width: 15, height: -15}"-->
                   <!--:labelStyle="labelStyle"-->
                   <!--:animation="'BMAP_ANIMATION_DROP'"-->
                   <!--@click="markerInfo"-->
        <!--&gt;</bm-marker>-->
      <!--</template>-->

      <!--<bm-polyine :path="coords" :strokeColor="'red'" :strokeWeight="2" :strokeOpacity="0.7"></bm-polyine>-->
      <!--<bm-polygon :path="coords" :strokeColor="'blue'" :strokeWeight="2" :strokeOpacity="0.5"></bm-polygon>-->
      <!--<bm-circle :center="{lng: '118.779142', lat: '31.981107'}" :radius="50" :strokeColor="'blue'" :strokeWeight="1" :strokeOpacity="0.4"></bm-circle>-->
      <!--<bm-point-collection :points="points"-->
                         <!--:shape="'BMAP_POINT_SHAPE_CIRCLE'"-->
                         <!--:size="'BMAP_POINT_SIZE_SMALL'"-->
                         <!--:color="'#d340c3'"-->
                         <!--@click="markerInfo"-->
      <!--&gt;</bm-point-collection>-->
      <!--<bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>-->
      <bm-driving
        :start="'南京市东软大楼'"
        :end="{lng: '119.202889', lat: '32.285367'}"
        :policy="'BMAP_DRIVING_POLICY_LEAST_TIME'"
        :changeColor="true"
        :strokeColor="'#75c0f7'"
        :price="7.1"
        :oil-consumption="8"
        @callback-info="computedInfo"
      >
        <!-- start：起点  坐标点或文字 -->
        <!-- end: 目的地 坐标点或文字 -->
        <!-- policy 设置路线规划策略 BMAP_DRIVING_POLICY_LEAST_TIME | BMAP_DRIVING_POLICY_LEAST_DISTANCE | BMAP_DRIVING_POLICY_AVOID_HIGHWAYS -->
        <!-- changeColor 是否修改线条颜色 -->
        <!-- strokeColor 线路颜色 -->
      </bm-driving>
      <!--<bm-boundary :name="'南京市'" >-->
        <!--&lt;!&ndash; name &ndash;&gt;-->
        <!--&lt;!&ndash;strokeWeight&ndash;&gt;-->
        <!--&lt;!&ndash;strokeColor&ndash;&gt;-->
      <!--</bm-boundary>-->
      <!--<bm-boundary :name="'扬州市'" >-->
        <!--&lt;!&ndash; name &ndash;&gt;-->
        <!--&lt;!&ndash;strokeWeight&ndash;&gt;-->
        <!--&lt;!&ndash;strokeColor&ndash;&gt;-->
      <!--</bm-boundary>-->
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
    },
    computedInfo (obj) {
       console.log(obj)
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
