<template>
  <div class="main">
    <p>
      Want to shuffle your playlist true randomly? <br />
      Check this out!
    </p>
    <h3>Click this button</h3>
    <ul>
      <v-btn href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank">
        button
      </v-btn>
      <playlist>

      </playlist>
    </ul>
  </div>
</template>

<script>
import Playlist from '../components/PlaylistList.vue';

export default {
  components: {
    Playlist,
  }
}
</script>