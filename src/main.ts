/*
 * @Author: xionghiaying 1163702239@qq.com
 * @Date: 2025-11-04 10:23:47
 * @LastEditors: xionghiaying 
 * @LastEditTime: 2025-11-04 17:58:04
 * @Description: 
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 导入插件和样式
// import CesiumComponent from 'cesium-component'
// import 'cesium-component/dist/style.css'

import CesiumComponent from '../../cesium-component/src/plugin.js'
import '../../cesium-component/dist/style.css'


createApp(App)
  .use(CesiumComponent)
  .mount('#app')
