<!--qiu.bl-->
<template></template>
<script>
import commonMixin from '../base/mixins/common'
import bindEvents from '../base/bindEvent'
import {CreateSize} from '../base/mixins/factory'
export default {
  name: 'bm-geolocation',
  mixins: [commonMixin('control')],
  props: {
    anchor: {
      type: String,
      default: () => 'BMAP_ANCHOR_BOTTOM_RIGHT'
    },
    offset: {
      type: Object
    },
    showAddressBar: {
      type: Boolean
    },
    locationIcon: {
      type: Number
    },
    autoLocation: {
      type: Boolean
    }
  },
  watch: {},
  methods: {
    load () {
      const {BMap, map, anchor, offset, showAddressBar, locationIcon, autoLocation} = this
      this.initialInstance = new BMap.GeolocationControl({
        anchor: global[anchor],
        offset: offset && CreateSize(BMap, offset),
        showAddressBar,
        enableAutoLocation: autoLocation,
        locationIcon: locationIcon
      })
      bindEvents.call(this, this.initialInstance)
      map.addControl(this.initialInstance)
    }
  }
}
</script>
