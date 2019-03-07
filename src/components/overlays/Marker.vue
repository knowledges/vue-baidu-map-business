<!--qiu.bl-->
<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import commonMinxin from '../base/mixins/common'
import {CreateSize, CreateLable, CreatePoint} from '../base/mixins/factory'
import bindEvents from '../base/bindEvent'
export default {
  name: 'bm-marker',
  components: {},
  mixins: [commonMinxin('overlay')],
  props: {
    position: {
      type: Object
    },
    Moffset: { }, // 批注的 offset
    Micon: { },// 批注的 icon
    massClear: {
      type: Boolean,
      default: true
    },
    dragging: {
      type: Boolean,
      default: false
    },
    clicking: {
      type: Boolean,
      default: true
    },
    raiseOnDrag: {
      type: Boolean,
      default: false
    },
    draggingCursor: {
      type: String
    },
    rotation: {
      type: Number
    },
    shadow: {
      type: Object
    },
    animation: {
      type: String
    },
    Loffset: {}, // label 的 offset
    labelStyle: {}
  },
  data() {
    return {}
  },
  watch: {
    'position.lng' (val, oldVal) {
      const {BMap, initialInstance, position, renderByParent, $parent} = this
      if (val !== oldVal && val >= -180 && val <= 180) {
        initialInstance.setPosition(CreatePoint(BMap, {lng: val, lat: position.lat}))
      }
      renderByParent && $parent.reload()
    },
    'position.lat' (val, oldVal) {
      const {BMap, initialInstance, position, renderByParent, $parent} = this
      if (val !== oldVal && val >= -74 && val <= 74) {
        initialInstance.setPosition(CreatePoint(BMap, {lng: position.lng, lat: val}))
      }
      renderByParent && $parent.reload()
    },
    'position.title' () {
      this.reload()
    },
    massClear (val) {
      val ? this.initialInstance.enableMassClear() : this.initialInstance.disableMassClear()
    },
    labelStyle () {
      this.reload()
    }
  },
  mounted() {
  },
  methods: {
    load () {
      const { BMap, map, Moffset, Micon, massClear, dragging, clicking, raiseOnDrag, draggingCursor, rotation, shadow, labelStyle, Loffset, position } = this
      const overlay = new BMap.Marker(new BMap.Point(position.lng, position.lat), {
        offset: Moffset,
        icon: Micon,
        enableMassClear: massClear,
        enableDragging: dragging,
        enableClicking: clicking,
        raiseOnDrag: raiseOnDrag,
        draggingCursor,
        rotation,
        shadow,
        title: position.title
      })
      this.$set(overlay, 'item', position)
      this.initialInstance = overlay
      var content = position.title
      const params = { content, Loffset, labelStyle }
      position.title && overlay && overlay.setLabel(CreateLable(BMap, params))
      bindEvents.call(this, overlay)
      map.addOverlay(overlay)
    }
  }
}
</script>
