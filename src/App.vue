<template>
  <v-app>
    <app-header>
    </app-header>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',

  components: {
    AppHeader,
  },
}
</script>
