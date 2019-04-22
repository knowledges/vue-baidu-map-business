<!--qiu.bl-->
<template>

</template>

<script>
  import commonMinxin from '../base/mixins/common'
  export default {
    name: 'bm-boundary',
    components: {},
    props: {
      name: String,
      strokeWeight: {
        type: Number,
        default: 2
      },
      strokeColor: {
        type: String,
        default: () => '#3a6bdb'
      }
    },
    mixins: [commonMinxin('overlay')],
    data() {
      return {}
    },
    computed: {},
    created() {
      console.log(this.name)
    },
    mounted() {
    },
    watch: {},
    methods: {
      load () {
        const { BMap, map, name, strokeWeight, strokeColor} = this
        const bdary = new BMap.Boundary()
        bdary.get(name, (respone) => {
          var data = respone.boundaries
          var count = data.length
          if (count <= 0) {
            alert('未能获取当前输入行政地区')
            return
          }
          var pointArray = []
          for (var i = 0; i < count; i++) {
            var poly = new BMap.Polygon(data[i], {
              strokeWeight: strokeWeight,
              strokeColor: strokeColor
              }
            )
            map.addOverlay(poly);  //添加覆盖物
            pointArray = pointArray.concat(poly.getPath())
          }
          map.setViewport(pointArray);    //调整视野
        })
        this.initialInstance = bdary
      }
    }
  }
</script>
