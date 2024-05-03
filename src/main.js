import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import { createMemoryHistory, createRouter } from 'vue-router'
import MainPage from './components/MainPage.vue'
import LoginPage from './components/LoginPage.vue'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/main',
        name: 'main',
        component: MainPage
    },
]

const router =
    createRouter({
        history: createMemoryHistory(),
        routes,
    })

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
