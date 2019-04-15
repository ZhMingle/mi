<template>
  <div id="app">
    <router-view></router-view>
    <nav-bar :tabs='tabs'></nav-bar>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  name: 'app',
  data () {
    return {
      tabs: [
        { name: '首页', href: '/' },
        { name: '分类', href: '/category' },
        { name: '购物车', href: '/cart' },
        { name: '我的', href: '/user' }
      ] }
  },
  components: {
    NavBar
  }
}
</script>

<style lang='sass'>

</style>
