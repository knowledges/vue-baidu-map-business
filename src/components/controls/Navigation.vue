<!--qiu.bl-->
<template></template>
<script>
import CommonMixins from '../base/mixins/common'
import {CreateSize} from '../base/mixins/factory'
export default {
  name: 'bg-navigation',
  props: {
    anchor: {
      type: String
    },
    offset: {
      type: Object
    },
    type: {
      type: String
    },
    showZoomInfo: {
      type: Boolean
    },
    enableGeolocation: {
      type: Boolean,
      default: false
    }
  },
  mixins: [CommonMixins('control')],
  data() {
    return {}
  },
  watch: {
    anchor () {
      this.reload()
    },
    offset () {
      this.reload()
    },
    type () {
      this.reload()
    },
    showZoomInfo () {
      this.reload()
    }
  },
  methods: {
    load () {
      const {BMap, map, anchor, offset, type, showZoomInfo, enableGeolocation} = this
      this.SCALE_DIRECTION = new BMap.NavigationControl({
        anchor: global[anchor],
        offset: offset && CreateSize(BMap, offset),
        type: global[type],
        showZoomInfo: showZoomInfo,
        enableGeolocation: enableGeolocation
      })
      map.addControl(this.SCALE_DIRECTION)
    }
  }
}
</script>
