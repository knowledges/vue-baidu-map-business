<!--qiu.bl-->
<style></style>
<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import commonMinxin from '../base/mixins/common'
import {CreateSize, CreateLable} from '../base/mixins/factory'
import {checkType} from '../base/utils'
import bindEvents from '../base/bindEvent'
export default {
  name: 'bm-marker',
  components: {},
  mixins: [commonMinxin('overlay')],
  props: {
    position: {
      type: [Object, Array]
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
      const { position } = this
      if (checkType(position) === 'Array') {
        position.forEach((item, key) => {
          this.createdMarkers(item)
        })
      } else {
        this.createdMarkers(position)
      }
    },
    createdMarkers (item) {
      const {BMap, map, Moffset, Micon, massClear, dragging, clicking, raiseOnDrag, draggingCursor, rotation, shadow, labelStyle, Loffset} = this
      const overlay = new BMap.Marker(new BMap.Point(item.lng, item.lat), {
        offset: Moffset,
        icon: Micon,
        enableMassClear: massClear,
        enableDragging: dragging,
        enableClicking: clicking,
        raiseOnDrag: raiseOnDrag,
        draggingCursor: draggingCursor,
        rotation: rotation,
        shadow: shadow,
        title: item.title
      })
      this.$set(overlay, 'item', item)
      this.initialInstance = overlay
      var content = item.title
      const params = { content, Loffset, labelStyle }
      item.title && overlay && overlay.setLabel(CreateLable(BMap, params))
      bindEvents.call(this, overlay)
      map.addOverlay(overlay)
    }
  }
}
</script>
