# vue-baidu-map-business
百度地图业务组件
Installation
yarn
```bash
yarn add vue-baidu-map-business
```
npm
```bash
npm i vue-baidu-map-business --save
```
全局注册
全局注册将一次性引入百度地图组件库的所有组件
```bash
import BaiduMap from 'vue-baidu-map-business'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'YOUR_APP_KEY'
})
```
#地图
```bash
#baidu-map
<baidu-map class="bm-view" :center="'南京'" :zoom="15"></baidu-map>
#MapOptions
此类表示Map构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
------------------------------------------------------
|   属性 	|  类型	| 描述                              |
|minZoom | Number	| 地图允许展示的最小级别             |
|maxZoom | Number	| 地图允许展示的最大级别             |
|mapType | MapType| 地图类型，默认为BMAP_NORMAL_MAP   |
------------------------------------------------------
Viewport
此类代表视野，不可实例化，通过对象字面量形式表示。
----------------------------------------------
|属性   | 类型	                |  描述      |
|center |	Object 或者 String	  | 视野中心点 |
|zoom   |	Number	             |  视野级别   |
---------------------------------------------
```
#控件
比例尺
```bash
<template>
  <baidu-map class="map" center="北京">
    <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
  </baidu-map>
</template>
```
缩放
```bash
<template>
  <baidu-map class="map" center="北京">
    <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
  </baidu-map>
</template>
```
