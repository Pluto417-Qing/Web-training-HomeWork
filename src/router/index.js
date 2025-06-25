// 引入 vue-router 的相关方法和页面组件
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue' // 登录页面组件
import Connected from '@/views/Connected.vue' // 连接成功页面组件

// 定义路由表，每个对象代表一个路由规则
const routes = [
  { path: '/', component: Login }, // 访问根路径时显示 Login 组件
  { path: '/connected', component: Connected } // 访问 /connected 时显示 Connected 组件
]

// 创建路由实例，配置路由模式和路由表
const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 history 模式（地址栏无 #）
  routes // 路由表
})

// 导出路由实例，供 main.js 挂载到应用
export default router