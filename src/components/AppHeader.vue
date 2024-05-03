<template>
    <div class="header">
        <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
            <v-list-item v-for="(item, i) in menubar" flat :key="`navigationdrawer${i}`">
                <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item>
        </v-navigation-drawer>

        <v-toolbar app dark color="black">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
            <v-toolbar-title v-text="'Spotify Shuffler'"> </v-toolbar-title>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn v-for="item in menubar" flat :key="item.name" router :to="item.route">
                    {{ item.title }}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>
  
<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            drawer: false,
            menubar: [
                {
                    title: 'Home',
                    route: '/main',
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
        }
    },
}
</script>