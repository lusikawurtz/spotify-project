
<template>
  <div class="login-page">
    <h1>{{ msg }}</h1>
    <p>
      Do you know that the algorythm for shuffleling that Spotify using make you listen to same 10 songs over and over?
      <br>
      Want to shuffle your playlist true randomly?
    </p>
    <p>
      <v-btn> Login with Spotify </v-btn>
      <b-button href="https://github.com/lusikawurtz" variant="primary">

      </b-button>
    </p>
  </div>
</template>

<script>

export default {
  name: 'LoginPage',
  props: {
    msg: String
  },
  links: [
    { name: "Login", href: "https://github.com/lusikawurtz", target: "_self" },
    { name: "Main", href: "/main", target: "_blank" },
  ]

}
</script>