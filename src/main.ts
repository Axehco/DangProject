import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { LmgLoader } from './utils/imgUtil'

LmgLoader.storageAllImg()

createApp(App).mount('#app')

// console.log(import.meta.env)
// console.log(import.meta.env.VITE_username)
