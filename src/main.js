import './assets/main.css'
// Supports weights 200-800
import '@fontsource-variable/manrope'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { createApp } from 'vue'
import { FaBriefcaseMedical } from 'oh-vue-icons/icons'
addIcons(FaBriefcaseMedical)
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('v-icon', OhVueIcon)
app.mount('#app')
