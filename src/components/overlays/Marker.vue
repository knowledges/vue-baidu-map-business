<!--qiu.bl-->
<style></style>
<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import commonMinxin from '../base/mixins/common'
import {checkType} from '../base/utils'
export default {
  name: 'bm-marker',
  components: {},
  mixins: [commonMinxin('overlay')],
  props: {
    position: {
      type: [Object, Array]
    },
    offset: { },
    icon: { },
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
    }
  },
  data() {
    return {}
  },
  watch: {
    'position.title' () {
      this.reload()
    },
    massClear (val) {
//      val ? this.initialInstance.
    }
  },
  mounted() {
  },
  methods: {
    load () {
      const {BMap, map, position, offset, icon, massClear, dragging, clicking, raiseOnDrag, draggingCursor, rotation, shadow, animation} = this

      if (checkType(position) === 'Array') {
        position.forEach((item, key) => {
          this.initialInstance = new BMap.Marker(new BMap.Point(item.lng, item.lat), {
            offset: offset,
            icon: icon,
            enableMassClear: massClear,
            enableDragging: dragging,
            enableClicking: clicking,
            raiseOnDrag: raiseOnDrag,
            draggingCursor: draggingCursor,
            rotation: rotation,
            shadow: shadow,
            title: item.title
          })
          map.addOverlay(this.initialInstance)
        })
      } else {
        this.initialInstance = new BMap.Marker(new BMap.Point(position.lng, position.lat), {
          offset: offset,
          icon: icon,
          enableMassClear: massClear,
          enableDragging: dragging,
          enableClicking: clicking,
          raiseOnDrag: raiseOnDrag,
          draggingCursor: draggingCursor,
          rotation: rotation,
          shadow: shadow,
          title: position.title
        })
        map.addOverlay(this.initialInstance)
      }
    }
  }
}
</script>
