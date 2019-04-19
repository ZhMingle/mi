<template>
  <div>
    <div id="user-header">
      <div class="wrap">
        <img src="https://s1.mi.com/m/images/m/default.png" alt>
        <router-link to="./Login">登录/注册</router-link>
      </div>
    </div>
    <div class="order">
      <div class="my-order">我的订单</div>
      <div class="all-order">
        全部订单
        <i class="iconfont icon-iconfontjiantou6"></i>
      </div>
    </div>
    <div class="order-info">
      <a href="#">
        <i class="iconfont font icon-daifukuan"></i>
        <span>待付款</span>
      </a>
      <a href="#">
        <i class="iconfont font icon-daishouhuo"></i>
        <span>待付款</span> 
      </a>
      <a href="#">
        <i class="iconfont font icon-banshou"></i>
        <span>待付款</span>
      </a>
    </div>
    <div class="ui-line"></div>
    <div class="member">
      <div class="member-center">
        <i class="iconfont icon-huiyuanzhongxin"></i>
        <span>会员中心</span>
        <i class="iconfont icon-iconfontjiantou6"></i>
      </div>
      <div class="member-center">
        <i class="iconfont icon-wodeyouhuiquan"></i>
        <span>我的优惠</span>
        <i class="iconfont icon-iconfontjiantou6"></i>
      </div>
    </div>
    <div class="ui-line"></div>
    <div class="member">
      <div class="member-center">
        <i class="iconfont icon-fuwu"></i>
        <span>服务中心</span>
        <i class="iconfont icon-iconfontjiantou6"></i>
      </div>
      <div class="member-center">
        <i class="iconfont icon-huiyuanzhongxin"></i>
        <span>会员中心</span>
        <i class="iconfont icon-iconfontjiantou6"></i>
      </div>
    </div>
    <div class="ui-line"></div>
    <div class="member">
      <div class="member-center">
        <i class="iconfont icon-huiyuanzhongxin"></i>
        <span>会员中心</span>
        <i class="iconfont icon-iconfontjiantou6"></i>
      </div>
      <div class="ui-line"></div>
      <div class="member-center">
        <i class="iconfont icon-huiyuanzhongxin"></i>
        <span>会员中心</span>
        <i class="iconfont icon-iconfontjiantou6"></i>
      </div>
    </div>
    <div class="content"></div>
  </div>
</template>
export default ()

<style>
  @import 'http://at.alicdn.com/t/font_1008288_steni400igq.css';
  @import '../styles/user.css';
</style>
