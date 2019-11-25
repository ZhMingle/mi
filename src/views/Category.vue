<template>
  <div>
    <div id="header">
      <a href="#" class="iconfont icon-xuanzegequyoujianjiao-copy"></a>
      <span>分类</span>
      <a href="#" class="iconfont icon-fangdajing"></a>
    </div>
    <div id="main" class="clearfix">
      <div class="left-nav">
        <ul>
          <li v-for="item in leftList" :key="item.category_id">
            <a href="#">{{item.category_name}}</a>
          </li>
        </ul>
      </div>
      <div class="right-list">
        <a href="#">
          <img src="https://i8.mifile.cn/v1/a1/250eae49-3536-0d22-4f3a-5041affcb1f9!500x200.webp">
        </a>
        <h2 class="category-title">手机</h2>
        <div class="phone-box" >
          <div class="phone" v-for='item in leftList[0].category_list[2].body.items' :key="item.img_url">
            <a href="#">
              <img
                :src="item.img_url"/>
            </a>
            <h3>{{item.product_name}}</h3>
          </div>
        </div>
        <h2 class="category-title">电脑</h2>
        <div class="phone-box" >
          <div class="phone" v-for='item in 9' :key="item">
            <a href="#">
              <img
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fd53fdc35128c8d02db7f43d2c79ab74.png?thumb=1&w=120&h=120"/>
            </a>
            <h3>小米9</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>
<script>
import axios from "axios"

export default {
  data () {
    return{
      leftList : []
    }
  },
  methods: {
    getLeftList () {
      axios.get('json/category1.json').then(res => {
        this.leftList = res.data.data;
        //  console.log(res.data.data[0].category_list[2].body.items)
      })
    }
  },
  created () {
    this.getLeftList();
  }
}
</script>

<style>
  @import "http://at.alicdn.com/t/font_1008288_i7pqwosjka.css";
  @import "../styles/category.css";
</style>
