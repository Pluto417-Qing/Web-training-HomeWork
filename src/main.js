import './assets/main.css'

import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import Connected from './views/Connected.vue'
import App from './App.vue'

const routes = [
  { path: '/connected', component: Connected },
  { path: '/index', component: App },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')

