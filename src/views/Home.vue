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
      <div class="in-lists">
      <ul class='in-list'>
        <li>推荐</li>
        <li>推荐</li>
        <li>推荐</li>
        <li>推荐</li>
        <li>推荐</li>
        <li>推荐</li>
        <li>笔记</li>
        <li>推荐</li>
        <li>推荐</li>
        <li>笔记</li>
      </ul>
      </div>
      <i class='iconfont icon-xiala'></i>
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
            <li >
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
            <li v-for="item in phoneList" :key="item.id">
               <router-link to="/detail">
                <a href='#'>
                      <img :src='item.src'>
                </a>
                <h2>{{item.name}}</h2>
                <p>{{item.explain}}</p>
                <p style="color:red;font-size:.16rem;">{{item.money}}</p>
                </router-link>
            </li>
          </ul>
           <ul>               
            <li v-for="item in phoneList" :key="item.id">
               <router-link to="/detail">
                <a href='#'>
                      <img :src='item.src'>
                </a>
                <h2>{{item.name}}</h2>
                <p>{{item.explain}}</p>
                <p style="color:red;font-size:.16rem;">{{item.money}}</p>
                </router-link>
            </li>
          </ul>
          <div><button @click="loadmon">加载更多</button></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from 'axios'
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
      ],
      phoneList:[],
     
    }
  },
  methods: {
      home (){
        axios.get('/json/home.json').then(res=>{
          this.phoneList = res.data;
        })
      }
  },
    created (){
      this.home();
    },  
}
</script>
<style>
@import '../styles/index.css';
</style>
