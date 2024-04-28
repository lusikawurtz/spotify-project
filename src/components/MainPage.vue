<template>
  <div class="main-page">
    <h1>{{ msg }}</h1>
    <p>
      Want to shuffle your playlist true randomly? <br/>
      Check this out!
    </p>
    <h3>Click this button</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">button</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  props: {
    msg: String
  }
}
</script>