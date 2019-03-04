<!--qiu.bl-->
<template></template>
<script>
import commonMixin from '../base/mixins/common'
import { CreateSize } from '../base/mixins/factory'
export default {
  name: 'bm-scale',
  mixins: [commonMixin('control')],
  props: {
    anchor: {
      type: String
    },
    offset: {
      type: Object
    }
  },
  watch: {
    anchor () {
      this.reload()
    },
    offset () {
      this.reload()
    }
  },
  methods: {
    load () {
      const {BMap, map, anchor, offset} = this
      this.initialInstance = new BMap.ScaleControl({
        anchor: global[anchor],
        offset: offset && CreateSize(BMap ,offset)
      })
      map.addControl(this.initialInstance)
    }
  }
}
</script>
