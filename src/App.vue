<template>
  <div id="app">
    <router-view></router-view>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style lang='sass'>
  @import './styles/reset.css'
</style>
