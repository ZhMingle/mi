<template>
    <van-tabbar v-model="active" active-color="#ff6700">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="bars" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart" info="0" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager"  to="/user">我的</van-tabbar-item>
    </van-tabbar>

</template>
<script>
import Vue from 'vue'
import { Tabbar, TabbarItem, Icon } from 'vant'
Vue.use(Tabbar).use(TabbarItem).use(Icon)
export default {
  data () {
    let tabNumber = this.$route.meta.tabNumber
    return {
      active: tabNumber
    }
  }
}
</script>
