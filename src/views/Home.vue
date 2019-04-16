<template>
  <div>
    <header id='H-header'>
      <div class='header-top'>
        <span>
          <i class='iconfont icon-xiaomi'></i>
        </span>
        <a href='#'>
          <form>
            <i class='iconfont icon-sousuo'></i>
            <input type='text' placeholder='搜索商品名称'>
          </form>
        </a>
        <a href='#'>
          <i class='iconfont icon-wode'></i>
        </a>
      </div>
      <div class='in-list'>
        <li>推荐</li>
        <li>推荐</li>
        <li>推荐</li>
        <li>推荐</li>
        <li>推荐</li>
        <li>推荐</li>
        <li>笔记</li>
        <li>推荐</li>
        <i class='iconfont icon-xiala'></i>
      </div>
    </header>

    <section id='content'>
      <div class='in-box01'>
        <van-swipe :autoplay='2000' indicator-color='red'>
          <van-swipe-item
            v-for='(item, index) in banners'
            :key='index'>
            <img :src='item' style='width:100%;'>
          </van-swipe-item>
        </van-swipe>

        <div class='nav'>
          <ul>
            <li>
              <a href='#'>
                <img src='../images/nav01.webp'>
              </a>
            </li>
            <li>
              <a href='#'>
                <img src='../images/nav02.webp'>
              </a>
            </li>
            <li>
              <a href='#'>
                <img src='../images/nav03.webp'>
              </a>
            </li>
            <li>
              <a href='#'>
                <img src='../images/nav04.webp'>
              </a>
            </li>
            <li>
              <a href='#'>
                <img src='../images/nav05.webp'>
              </a>
            </li>
          </ul>
        </div>
        <div class='picture'>
          <ul>
            <li>
              <a href='#'>
                <img src='../images/icon111.webp'>
              </a>
            </li>
            <li>
              <a href='#'>
                <img src='../images/icon12.webp'>
              </a>
              <h2>&nbsp;&nbsp;小米8</h2>
              <p>&nbsp;&nbsp;潮流镜面渐变色，2400万自拍</p>
              <p>&nbsp;&nbsp;￥1299</p>
            </li>
            <li>
              <a href='#'>
                <img src='../images/icon13.png'>
              </a>
              <h2>&nbsp;&nbsp;小米8</h2>
              <p>&nbsp;&nbsp;潮流镜面渐变色，2400万自拍</p>
              <p>&nbsp;&nbsp;￥1299</p>
            </li>
            <li>
              <a href='#'>
                <img src='../images/icon12.webp'>
              </a>
              <h2>&nbsp;&nbsp;小米8</h2>
              <p>&nbsp;&nbsp;潮流镜面渐变色，2400万自拍</p>
              <p>&nbsp;&nbsp;￥1299</p>
            </li>
            <li>
              <a href='#'>
                <img src='../images/icon13.png'>
              </a>
              <h2>&nbsp;&nbsp;小米8</h2>
              <p>&nbsp;&nbsp;潮流镜面渐变色，2400万自拍</p>
              <p>&nbsp;&nbsp;￥1299</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script>

import Vue from 'vue'
import { Swipe, SwipeItem, Lazyload } from 'vant'
Vue.use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)

export default {
  data () {
    return {
      images: ['https://img.yzcdn.cn/1.jpg', 'https://img.yzcdn.cn/2.jpg'],
      banners: [
        require('../images/banner01.webp'),
        require('../images/banner02.webp'),
        require('../images/banner03.webp'),
        require('../images/banner01.webp')
      ]
    }
  }
}
</script>
<style>
@import 'http://at.alicdn.com/t/font_962111_ki0u9gfn0z.css';
@import '../styles/reset.css';
@import '../styles/index.css';
</style>
