<template>
  <div id="app">
    {{ this.$store.state.name }}
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  mounted() {
    this.$store.dispatch('asyncChangeName', 'vue3')
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
