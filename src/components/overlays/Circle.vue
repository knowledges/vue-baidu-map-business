<!--qiu.bl-->
<template></template>
<script>
import commonMinxin from '../base/mixins/common'
import {CreatePoint} from '../base/mixins/factory'
export default {
  name: 'bm-circle',
  mixins: [commonMinxin('overlay')],
  props: {
    center: {
      type: Object
    },
    radius: {
      type: Number
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
  mounted() {
  },
  methods: {
    load () {
      const {BMap, map, center, radius, strokeColor, fillColor, strokeWeight, strokeOpacity, fillOpacity, strokeStyle, massClear, editing, clicking} = this
      const overlay = new BMap.Circle(CreatePoint(BMap, {lng: center.lng, lat: center.lat}), radius, {
        strokeColor,
        fillColor,
        strokeWeight,
        strokeOpacity,
        fillOpacity,
        strokeStyle,
        enabledMassClear: massClear,
        enabledEditing: editing,
        enableClicking: clicking
      })
      this.initialInstance = overlay
      map.addOverlay(overlay)
    }
  }
}
</script>
