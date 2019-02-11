<template>
  <div id="app">
    <img alt="Vue logo" src="https://s3-ap-southeast-1.amazonaws.com/kidocodeweb/assets/images/KIDOCODE_LOGO_2.svg">
    <h1>This is Us @Kidocode!</h1>
    <HelloWorld msg="Stay Awesome"/>
    <hr>
    <p>Inception Mode</p>
    <emailer></emailer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Emailer from './components/Emailer.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Emailer
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
