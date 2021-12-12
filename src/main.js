import { createApp } from 'vue'
import App from './App.vue'
import HelperMixin from "./mixins/HelperMixin"
import './assets/tailwind.css'

createApp(App)
    .provide('isDark', (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)))
    .mixin(HelperMixin)
    .mount('#app')
;
