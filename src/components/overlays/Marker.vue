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
      const {BMap, map, position, Moffset, Micon, massClear, dragging, clicking, raiseOnDrag, draggingCursor, rotation, shadow, labelStyle, Loffset} = this

      if (checkType(position) === 'Array') {
        position.forEach((item, key) => {
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
          this.initialInstance = overlay
          var content = item.title
          const params = { content, Loffset, labelStyle }
          item.title && overlay && overlay.setLabel(CreateLable(BMap, params))
          map.addOverlay(overlay)
        })
      } else {
        const overlay = new BMap.Marker(new BMap.Point(position.lng, position.lat), {
          offset: Moffset,
          icon: Micon,
          enableMassClear: massClear,
          enableDragging: dragging,
          enableClicking: clicking,
          raiseOnDrag: raiseOnDrag,
          draggingCursor: draggingCursor,
          rotation: rotation,
          shadow: shadow,
          title: position.title
        })
        this.initialInstance = overlay
        var content = position.title
        const params = { content, Loffset, labelStyle }
        position.title && overlay && overlay.setLabel(CreateLable(BMap, params))
        map.addOverlay(this.initialInstance)
      }
    }
  }
}
</script>
