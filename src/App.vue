<template>
  <div id="app">
    <button @click="notify">
      notify
    </button>
  </div>
</template>

<script>
    export default {
        name: 'app',
        methods: {
            notify() {
                this.$notify.add('Hello world!')
            }
        }
    }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
