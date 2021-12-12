import { createApp } from 'vue'
import App from './App.vue'
import HelperMixin from "./mixins/HelperMixin"
import './assets/tailwind.css'

createApp(App).mixin(HelperMixin).mount('#app')
