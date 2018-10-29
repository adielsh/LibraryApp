<template>
  <div id="app">
    <Library></Library>
  </div>
</template>

<script>
import Library from './components/Library.vue'

export default {
  name: 'app',
  components: {
      Library
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
