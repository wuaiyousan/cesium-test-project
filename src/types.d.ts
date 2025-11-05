// 声明 cesium-component npm 包类型
declare module 'cesium-component' {
  import { Plugin } from 'vue'
  
  const CesiumComponent: Plugin
  export default CesiumComponent
}

// 声明 JS 模块的类型
declare module '*/cesium-test.data' {
  export const modulesList: any[];
}

declare module '*/cesium-component/src/plugin.js' {
  export function doEventSend(event: string, data?: any): void;
  export function doEventOn(event: string, callback: (data: any) => void): void;
  const plugin: any;
  export default plugin;
}
