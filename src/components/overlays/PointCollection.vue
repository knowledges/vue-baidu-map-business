<!--qiu.bl-->
<template> </template>
<script>
import commonMinxin from '../base/mixins/common'
import {CreatePoint} from '../base/mixins/factory'
import bindEvents from '../base/bindEvent'
export default {
  name: 'bm-point-collection',
  mixins: [commonMinxin('overlay')],
  props: {
    points: {
      type: Array
    },
    shape: {
      type: String,
      default: 'BMAP_POINT_SHAPE_STAR'
    },
    color: {
      type: String,
      default: '#fa937e'
    },
    size: {
      type: String,
      default: 'BMAP_POINT_SIZE_SMALLER'
    }
  },
  watch: {
    shape (val) {
      const { initialInstance, color, size } = this
      initialInstance.setStyles({
        shape: global[val],
        color,
        size: global[size]
      })
    },
    size (val) {
      const { initialInstance, shape, color } = this
      initialInstance.setStyles({
        shape: global[shape],
        color,
        size: global[val]
      })
    },
    color (val) {
      const { initialInstance, shape, size } = this
      initialInstance.setStyles({
        shape: global[shape],
        color: val,
        size: global[size]
      })
    },
    points: {
      deep: true,
      handler: function (val) { // TASK: 这里不能使用箭头函数，不然clear 、 setPoints 找不到
        this.initialInstance.clear()
        this.initialInstance.setPoints(val)
      }
    }
  },
  methods: {
    load () {
      const {BMap, map, points, shape, color, size} = this
      const overlay = new BMap.PointCollection(points.map(p => CreatePoint(BMap, p)), {
        shape: global[shape],
        color,
        size: global[size]
      })
      this.initialInstance = overlay
      bindEvents.call(this, overlay)
      map.addOverlay(overlay)
    }
  }
}
</script>
