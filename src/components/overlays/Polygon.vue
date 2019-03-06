<!--qiu.bl-->
<template>
</template>
<script>
import commonMinxin from '../base/mixins/common'
import {CreatePoint} from '../base/mixins/factory'
export default {
  name: 'bm-polygon',
  mixins: [commonMinxin('overlay')],
  props: {
    path: {
      type: Array
    },
    strokeColor: {
      type: String
    },
    fillColor: {
      type: String
    },
    strokeWeight: {
      type: Number
    },
    strokeOpacity: {
      type: Number
    },
    fillOpacity: {
      type: Number
    },
    strokeStyle: {
      type: String
    },
    massClear: {
      type: Boolean,
      default: true
    },
    editing: {
      type: Boolean,
      default: false
    },
    clicking: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    path: {
      handler (val, old) {
        this.reload()
      },
      deep: true
    },
    strokeColor (val) {
      this.initialInstance.setStrokeColor(val)
    },
    fillColor (val) {
      this.initialInstance.setFillColor(val)
    },
    strokeWeight (val) {
      this.initialInstance.setStrokeWeight(val)
    },
    strokeOpacity (val) {
      this.initialInstance.setStrokeOpacity(val)
    },
    fillOpacity (val) {
      this.initialInstance.setFillOpacity(val)
    },
    strokeStyle (val) {
      this.initialInstance.setStrokeStyle(val)
    },
    massClear (val) {
      val ? this.initialInstance.enableMassClear() : this.initialInstance.disableMassClear()
    },
    editing (val) {
      val ? this.initialInstance.enableEditing() : this.initialInstance.disableEditing()
    },
    clicking () {
      this.reload()
    }
  },
  methods: {
    load () {
      const {BMap, map, path, strokeColor, fillColor, strokeWeight, strokeOpacity, fillOpacity, strokeStyle, massClear, editing, clicking} = this
      const overlay = new BMap.Polygon(path.map(item => CreatePoint(BMap, {lng: item.lng, lat: item.lat})), {
        strokeColor: strokeColor,
        fillColor: fillColor,
        strokeWeight: strokeWeight,
        strokeOpacity: strokeOpacity,
        fillOpacity: fillOpacity,
        strokeStyle: strokeStyle,
        enabledMassClear: massClear,
        enabledEditing: editing,
        enableClicking: clicking
      })
      this.initialInstance = overlay
      map.addOverlay(overlay)
//      // 这里有一个诡异的bug，直接给 editing 赋值时会出现未知错误，因为使用下面的方法抹平。
//      editing ? overlay.enableEditing() : overlay.disableEditing()
    }
  }
}
</script>
