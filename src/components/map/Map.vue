<!--qiu.bl-->
<template>
  <div>
    <div v-if="!hasBmView" ref="view" style="width: 100%; height: 100%;"></div>
    <slot></slot>
  </div>
</template>
<script>
import {checkType} from '../base/utils'
export default {
  name: 'bm-map',
  components: {},
  props: {
    ak: {
      type: String
    },
    center: {
      type: [Object, String]
    },
    zoom: {
      type: Number
    },
    minZoom: {
      type: Number
    },
    maxZoom: {
      type: Number
    },
    highResolution: {
      type: Boolean,
      default: true
    },
    mapClick: {
      type: Boolean,
      default: true
    },
    mapType: {
      type: String
    },
    dragging: { // 拖拽
      type: Boolean,
      default: true
    },
    scrollWheelZoom: { // 滚轮缩放
      type: Boolean,
      default: true
    },
    doubleClickZoom: { // 双击放大
      type: Boolean,
      default: true
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    theme: {
      type: Array
    },
    mapStyle: {
      type: Object
    }
  },
  data() {
    return {
      hasBmView: false
    }
  },
  watch: {},
  mounted() {
    this.reset()
  },
  methods: {
    setMapOptions () {
      const {map, minZoom, maxZoom, mapType, dragging, scrollWheelZoom, doubleClickZoom, autoResize} = this
      minZoom && map.setMinZoom(minZoom)
      maxZoom && map.setMaxZoom(maxZoom)
      mapType && map.setMapType(global[mapType]) // 设置地图类型
      dragging ? map.enableDragging() : map.disableDragging() // 开启 或者 关闭批注拖拽功能
      scrollWheelZoom ? map.enableScrollWheelZoom() : map.disableScrollWheelZoom() // 开启 或 关闭鼠标滚轮缩放功能
      doubleClickZoom ? map.enableDoubleClickZoom() : map.disableDoubleClickZoom() // 启用 或 关闭双击放大
      autoResize ? map.enableAutoResize() : map.disableAutoResize() // 启用 或 自动适应容器尺寸变化
    },
    init (BMap) {
      if (this.map) {
        return
      }
      let $el = this.$refs.view // 类似ID
      for (let $node of this.$slots.default || []) {
        if ($node.componentOptions && $node.componentOptions.tag === 'bm-view') {
          this.hasBmView = true // 显示地图
          $el = $node.elm
        }
      }
      const map = new BMap.Map($el, {enableHighResolution: this.highResolution, enableMapClick: this.mapClick})
      this.map = map
      const {setMapOptions, zoom, getCenterPoint} = this
//      theme ? map.setMapStyle({styleJson: theme}) : map.setMapStyle(mapStyle) // 地图样式
      setMapOptions()
      // 此处强行初始化一次地图 回避一个由于错误的 center 字符串导致初始化失败抛出的错误
      map.reset()
      map.centerAndZoom(getCenterPoint(), zoom)
      this.$emit('ready', {BMap, map})
    },
    getCenterPoint () {
      const {center, BMap} = this
      switch (checkType(center)) {
        case 'Object':
          return new BMap.Point(center.lng, center.lat)
        case 'String':
          return center
        default: return new BMap.Point()
      }
    },
    initMap (BMap) {
      this.BMap = BMap
      this.init(BMap)
    },
    getBMapScript () {
      if (!global.BMap) {
        const ak = this.ak || this._BMap().ak
        global.BMap = {}
        global.BMap._preloader = new Promise((resolve, reject) => {
          global._initBaiduMap = function () {
            console.log(global)
            resolve(global.BMap)
            global.document.body.removeChild($script)
            global.BMap._preloader = null
            global._initBaiduMap = null
          }
          const $script = document.createElement('script')
          global.document.body.appendChild($script)
          $script.src = `http://api.map.baidu.com/api?v=2.0&ak=${ak}&callback=_initBaiduMap`
        })
        return global.BMap._preloader
      } else if (!global.BMap._preloader) {
        return Promise.reject(global.BMap)
      } else {
        return global.BMap._preloader
      }
    }, // 异步加载Script
    reset () {
      const { getBMapScript, initMap } = this
      getBMapScript()
        .then(initMap)
    }
  }
}
</script>
