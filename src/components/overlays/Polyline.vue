<!--qiu.bl-->
<template>
</template>
<script>
import commonMinxin from '../base/mixins/common'
import {CreatePoint} from '../base/mixins/factory'
export default {
  name: 'bm-polyine',
  mixins: [commonMinxin('overlay')],
  props: {
    path: {
      type: Array
    },
    strokeColor: {
      type: String
    },
    strokeWeight: {
      type: Number
    },
    strokeOpacity: {
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
  data() {
    return {}
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
    strokeWeight (val) {
      this.initialInstance.setStrokeWeight(val)
    },
    strokeOpacity (val) {
      this.initialInstance.setStrokeOpacity(val)
    },
    strokeStyle (val) {
      this.initialInstance.setStrokeStyle(val)
    },
    editing (val) {
      val ? this.initialInstance.enableEditing() : this.initialInstance.disableEditing()
    },
    massClear (val) {
      val ? this.initialInstance.enableMassClear() : this.initialInstance.disableMassClear()
    },
    clicking () {
      this.reload()
    }
  },
  methods: {
    load () {
      const {BMap, map, path, strokeColor, strokeWeight, strokeOpacity, strokeStyle, massClear, editing, clicking} = this
      const overlay = new BMap.Polyline(path.map(item => CreatePoint(BMap, {lng: item.lng, lat: item.lat})), {
        strokeColor: strokeColor,
        strokeWeight: strokeWeight,
        strokeOpacity: strokeOpacity,
        strokeStyle: strokeStyle,
        enableMassClear: massClear,
        enableEditing: editing,
        enableClicking: clicking
      })
      this.initialInstance = overlay
      map.addOverlay(overlay)
    }
  }
}
</script>
