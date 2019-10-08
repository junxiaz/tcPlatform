<template>
  <el-header>
    <!-- logo -->
    <span class="header-logo">
      <img src="../../assets/images/logo.png" alt />
    </span>
    <!-- 顶部菜单 -->
    <div class="header-menus">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#424242"
        text-color="#fff"
        active-text-color="rgb(29, 137, 228)"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">关于</el-menu-item>
        <el-submenu index="3">
          <template slot="title">设计服务</template>
          <el-menu-item index="3-1">logo设计</el-menu-item>
          <el-menu-item index="3-2">VI设计</el-menu-item>
          <el-menu-item index="3-3">结构设计</el-menu-item>
          <el-menu-item index="3-4">产品效果图</el-menu-item>
        </el-submenu>
        <el-menu-item index="4">包装印刷</el-menu-item>
        <el-submenu index="5">
          <template slot="title">特种材料</template>
          <el-menu-item index="5-1">云膜材料</el-menu-item>
          <el-menu-item index="5-2">全印模</el-menu-item>
          <el-menu-item index="5-3">镭射</el-menu-item>
          <el-menu-item index="5-4">猫眼</el-menu-item>
        </el-submenu>
        <el-menu-item index="6">需求大厅</el-menu-item>
      </el-menu>
    </div>
    <div class="header-operates">
      <el-button type="text" size="small" style="color:#fff;">登录</el-button>
      <el-button type="text" size="small" style="color:#fff;">注册</el-button>
      <el-button size="small" type="primary">立即发布</el-button>
    </div>
    <!-- 操作按钮 -->
  </el-header>
</template>

<script>
export default {
  name: 'HeanderGuide',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      activeName: 'first'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style lang="scss" scoped>
// 顶部导航
.el-header {
  z-index:999;
  width:100%;
  overflow: hidden;
  background-color: #424242;
  opacity: .9;
  line-height: 60px;
  .header-logo {
    width: auto;
    float: left;
    height: 100%;
    display: inline-block;
    padding: 0 20px;
    background-color: rgb(255, 249, 250);
    img {
      vertical-align: middle;
    }
  }
  .header-menus {
    float: left;
  }
  .header-operates {
    float: right;
    padding-right: 55px;
  }
}
</style>