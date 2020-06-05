<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created () {
    this.$router.push('/')
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  width: 480px;
  height: 565px;
  font-family: Microsoft YaHei;
  color: #2c3e50;
}
</style>
