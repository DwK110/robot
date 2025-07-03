import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App.vue'
import Home from './views/Home.vue'
import ProjectOverview from './views/ProjectOverview.vue'
import TechnicalDetails from './views/TechnicalDetails.vue'
import Innovation from './views/Innovation.vue'
import Progress from './views/Progress.vue'
import Results from './views/Results.vue'
import './style.css'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/overview', name: 'ProjectOverview', component: ProjectOverview },
  { path: '/technical', name: 'TechnicalDetails', component: TechnicalDetails },
  { path: '/innovation', name: 'Innovation', component: Innovation },
  { path: '/progress', name: 'Progress', component: Progress },
  { path: '/results', name: 'Results', component: Results }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
})