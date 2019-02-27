const types = {
  control: {
    unload: 'removeControl' // 从地图中移除控件。如果控件从未被添加到地图中，则该移除不起任何作用
  },
  layer: {
    unload: 'removeTileLayer' // 移除一个自定义地图图层
  },
  overlay: {
    unload: 'removeOverlay' // 当使用Map.removeOverlay()方法移除单个覆盖物时会触发此事件
  },
  contextMenu: {
    unload: 'removeContextMenu' // 移除右键菜单
  }
}

const getParent = $component => ($component.abstract || $component.$el === $component.$children[0].$el) ? getParent($component.$parent) : $component

function destroyInstance() {
  const {unload, renderByParent, $parent} = this
  if (renderByParent) {
    $parent.reload()
  }
  unload()
}

class Mixin {
  constructor (prop) {
    this.methods ={
      ready () {
        const $parent = getParent(this.$parent)
        const BMap = this.BMap = $parent.BMap
        const map = this.map = $parent.map
        // this.load()
        this.$emit('ready', {
          BMap,
          map
        })
      },
      transmitEvent (e) {
        this.$emit(e.type.replace(/^on/, ''), e) // TOOD 还不明白这个是什么意思
      },
      reload () {
        this && this.BMap && this.$nextTick(() => {
          this.unload()
          // this.$nextTick(this.load)
        })
      },
      unload () { console.log('我要清除一些东西') }
    }
    this.computed = {}
    this.mounted = function () {
      const $parent = getParent(this.$parent)
      const map = $parent.map
      const {ready} = this
      map ? ready() : $parent.$on('ready', ready) // 如果没有map对象自动触发 ready
    }
    this.destroyed = destroyInstance
    this.beforeDestroyed = destroyInstance
  }
}

export default types => new Mixin({types})
