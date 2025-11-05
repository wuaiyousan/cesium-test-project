/*
 * @Author: xionghiaying
 * @Date: 2025-11-04 10:23:47
 * @LastEditors: xionghiaying 
 * @LastEditTime: 2025-11-04 15:27:32
 * @Description: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import cesium from 'vite-plugin-cesium'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    cesium(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    fs: {
      allow: [
        // 允许访问项目根目录
        '.',
        // 允许访问 cesium-component 目录
        '../cesium-component',
      ],
    },
  },
})
