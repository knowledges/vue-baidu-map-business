<!--qiu.bl-->
<template>

</template>

<script>
  import commonMinxin from '../base/mixins/common'
  import {CreatePoint} from '../base/mixins/factory'
  export default {
    name: 'bm-driving',
    mixins: [commonMinxin('search')],
    props: {
      start: [String, Object], // 起点
      end: [String, Object], // 终点
      policy: String, // 'BMAP_DRIVING_POLICY_LEAST_TIME':最少时间  'BMAP_DRIVING_POLICY_LEAST_DISTANCE': 最短距离 'BMAP_DRIVING_POLICY_AVOID_HIGHWAYS' : 避开高速
      panel: Boolean,
      autoViewport: Boolean,
      selectFirstResult: Boolean,
      changeColor: Boolean,
      strokeColor: String,
      price: Number, // 1升汽油单价
      oilConsumption:Number // 油耗
    },
    components: {},
    data() {
      return {}
    },
    computed: {},
    created() {
    },
    mounted() {
    },
    watch: {},
    methods: {
      load () {
        const {BMap, map, start, end, policy, autoViewport, selectFirstResult, changeColor, strokeColor, price, oilConsumption} = this
        var [p1, p2, obj] = ['', '', {}]
        if (Object.prototype.toString.call(start) === '[object Object]') {
          p1 = CreatePoint(BMap, start)
        } else {
          p1 = start
        }
        if (Object.prototype.toString.call(end) === '[object Object]') {
          p2 = CreatePoint(BMap, end)
        } else {
          p2 = end
        }
        console.log('2')
        const route = this.initialInstance = new BMap.DrivingRoute(map, {
          renderOptions: {
            map,
            autoViewport,
            selectFirstResult
          },
          policy: global[policy],
        })
        route.search(p1, p2)
        // map.setViewport([p1, p2])
        /* 设置检索结束后的回调函数 */
        if (changeColor) {
          route.setSearchCompleteCallback(() => {
            var plan = route.getResults().getPlan(0)
            for (var i = 0; i < plan.getNumRoutes(); i++) {
              var pts = plan.getRoute(i).getPath()
              var polyline = new BMap.Polyline(pts,{ strokeColor: strokeColor || '#75c0f7', strokeWeight: 5, strokeOpacity: 1 })
              map.addOverlay(polyline)
              map.setViewport(pts);    //调整视野
            }
            var Cost = price * oilConsumption / 100
            obj.timer = plan.getDuration(true)
            obj.distance = plan.getDistance(true)
            obj.price = Math.round(plan.getDistance(true).split('公里')[0] * Cost) + '元'
            this.$emit('callback-info', obj)
          })
        }
      }
    }
  }
</script>
