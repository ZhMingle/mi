<template>
  <div>
     <ul class="nav-bar">
        <li
          v-for='(tab, index) in tabs'
          :key='index'
        ><router-link :to="tab.href" active-class='active' exact>{{tab.name}}</router-link></li>
     </ul>
  </div>
</template>
<script>
export default {
  props: {
    tabs: {
      type: Array
    }

  }
}
</script>
<style lang="scss">
.nav-bar{
  position: fixed;
  bottom:0;
  left: 0;
  li{
    float:left;
    padding-left: 20px;
    list-style: none;
    height: 50px;
    cursor: pointer;
    .active {
      color:#ff6700;
    }
  }
}
</style>
