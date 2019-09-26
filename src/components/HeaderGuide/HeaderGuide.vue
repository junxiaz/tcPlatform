<template>
  <div class="header-guide">
    <span class="header-logo">
      <img src="./imgs/logo.png" alt />
    </span>
    <span class="header-nav">
      <!-- <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="rgba(46, 46, 46, 0)"
        text-color="#fff"
        active-text-color="rgb(29,137,228)">
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu background-color="rgba(46, 46, 46, 0)" index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4">
          <a href="https://www.ele.me" target="_blank">订单管理</a>
        </el-menu-item>
      </el-menu>-->
      <ul>
        <li class="header-nav-item"  @click="goTo('/home')">
          <a href="javascript:" :class="{on: '/home'===$route.path}">首页</a>
        </li>
        <li class="header-nav-item">
          <a href="javascript:"  :class="{on: '/xx'===$route.path}">首页</a>
        </li>
        <li class="header-nav-item">
          <a href="javascript:">设计服务</a>
          <ul>
            <li class="header-nav-sub">
              <a href="javascript:0">logo设计</a>
            </li>
            <li class="header-nav-sub">
              <a href="javascript:0">VI设计</a>
            </li>
            <li class="header-nav-sub">
              <a href="javascript:0">包装设计</a>
            </li>
            <li class="header-nav-sub">
              <a href="javascript:0">结构设计</a>
            </li>
            <li class="header-nav-sub">
              <a href="javascript:0">产品效果图</a>
            </li>
          </ul>
        </li>
        <li class="header-nav-item">
          <a href="javascript:">首页</a>
        </li>
        <li class="header-nav-item">
          <a href="javascript:">首页</a>
        </li>
        <li class="header-nav-item">
          <a href="javascript:">首页</a>
        </li>
      </ul>
    </span>
  </div>
</template>

<script>
  export default {
      methods: {
          goTo (path) {
              this.$router.replace(path);
          }
      }
  }
</script>

<style lang="scss" scoped>
.header-guide {
  width: 100%;
  height: 60px;
  font-size: 12px;
  color: #fff;
  line-height: 60px;
  background-color: rgba(46, 46, 46, 0.9);
  .header-logo {
    width: 240px;
    display: inline-block;
    vertical-align: top;
    background: rgb(255, 249, 250);
    text-align: center;
    img {
      vertical-align: middle;
    }
  }
  .header-nav {
    display: inline-block;
    .header-nav-item {
      float: left;
      padding: 0 40px;
      position: relative;
      a {
        color: #fff;
        padding: 0 14px;
        &.on {
          color: rgb(29, 137, 228);
          border-bottom: solid 4px rgb(29, 137, 228);
          height: 56px;
          display: inline-block;
        }
        &:hover {
          display: inline-block;
          background-color: rgb(84, 92, 100);
        }
      }
      ul {
        background-color: rgba(46, 46, 46, 0.9);
        width: 140px;
        position: absolute;
        text-align: center;
        margin-left: -20px;
      }
    }
  }
}
</style>