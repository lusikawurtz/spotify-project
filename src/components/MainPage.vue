<template>
  <v-app>
    <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
      <v-list-item v-for="(item, i) in menubar" flat :key="`navigationdrawer${i}`">
        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item>
    </v-navigation-drawer>

    <v-toolbar app dark color="black">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title v-text="'Spotify Shuffler'"> </v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="(item, i) in menubar" flat :key="`menubar${i}`" :to="item.route">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <div class="main-page">
      <p>
        Want to shuffle your playlist true randomly? <br />
        Check this out!
      </p>
      <h3>Click this button</h3>
      <ul>
        <v-btn href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank">
          button
        </v-btn>
      </ul>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'MainPage',
  props: {
    msg: String
  },

  data() {
    return {
      drawer: false
    }
  },

  computed: {
    menubar() {
      return [
        {
          title: 'Home',
          route: '/home',
        },
        {
          title: 'Contacts',
          route: '/contacts',
        },
        {
          title: 'Log out',
          route: '/login',
        },
      ]
    },
  }
}
</script>