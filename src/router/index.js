import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Connected from '@/views/Connected.vue' // 你需要自己创建这个页面

const routes = [
  { path: '/', component: Login },
  { path: '/connected', component: Connected }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router