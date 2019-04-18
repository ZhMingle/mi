<template>
  <div id="home">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <nav-bar></nav-bar>
  </div>
</template>
<script>
import NavBar from '../components/NavBar'
export default {
  name: 'home',
  components: {
    NavBar
  }
}
</script>
<style>
.van-hairline--top-bottom.van-tabbar.van-tabbar--fixed {
    box-shadow: 0px -5px 10px -5px rgba(0,0,0,.15);
}
</style>
