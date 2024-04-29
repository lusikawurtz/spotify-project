<template>
  <v-app>
    <v-main>
      <LoginPage/>
      <MainPage/>
    </v-main>
  </v-app>
</template>

<script>
import LoginPage from './components/LoginPage.vue'
import MainPage from './components/MainPage.vue'

export default {
  name: 'App',

  components: {
    LoginPage,
    MainPage
  },

  data: () => ({
    //
  }),
}
</script>
