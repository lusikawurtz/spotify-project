import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import { createMemoryHistory, createRouter } from 'vue-router'
import MainPage from './views/MainPage.vue'
import LoginPage from './views/LoginPage.vue'
import ContactsPage from './views/ContactsPage.vue'

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
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsPage
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
