<template>
  <div>
    <section id="lo-header">
      <img src="../images/nav.png">
      <h1>小米账号登录</h1>
    </section>
    <section id="lo-wrop">
      <div class="wrop01" v-if="isShow">
        <form>
          <input type="text" placeholder="+86">
          <input type="text" placeholder="短信验证吗">
          <span>获取验证码</span>
          <router-link to="./User">
          <input class="sub" type="submit" value="立即登录、注册">
          </router-link>
        </form>
        <button @click="isShow = !isShow">用户名密码登录</button>
        <h5>其他方式登录</h5>
        <ul>
          <li>
            <a href="#">
              <i class="iconfont icon-xinlangweibo1"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="iconfont icon-zhifubao"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="iconfont icon-weixin1"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="wrop02" v-else>
        <form>
          <input type="text" placeholder="请输入用户名/账号">
          <input type="text" placeholder="请输入密码">
          <span>密码</span>
        <router-link to="./User">
          <input class="sub" type="submit" placeholder="立即登录、注册">
        </router-link>
        </form>
        <button  @click="isShow = !isShow">手机验证码登录</button>
        <h5>其他方式登录</h5>
        <ul>
          <li>
            <a href="#">
              <i class="iconfont icon-xinlangweibo1"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="iconfont icon-zhifubao"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="iconfont icon-weixin1"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
    <footer id="lo-foot">
      <ul>
        <li>
          <a href="#">简体</a>
        </li>
        <span>|</span>
        <li>
          <a href="#">繁体</a>
        </li>
        <span>|</span>
        <li>
          <a href="#">English</a>
        </li>
        <span>|</span>
        <li>
          <a href="#">常见问题</a>
        </li>
        <span>|</span>
        <li>
          <a href="#">隐私政策</a>
        </li>
      </ul>
    </footer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShow: true
    }
  }
}
</script>
<style>
@import url("../styles/login.css");
</style>
