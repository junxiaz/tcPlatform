<template>
  <el-header>
    <!-- logo -->
    <router-link class="header-logo" to="/home">
      <img src="../../assets/images/logo.png" alt />
    </router-link>
    <!-- 顶部菜单 -->
    <div class="header-menus">
      <!--导航菜单-->
      <el-menu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#424242"
        text-color="#fff"
        active-text-color="rgb(29, 137, 228)"
        router
      >
        <template v-for="(menu,index) in menuData">
          <template v-if="menu.children">
            <el-submenu :key="index" :index="menu.path">
              <template slot="title">{{menu.name}}</template>
              <el-menu-item v-for="(subMenu, i) in menu.children" :key="i" :index="subMenu.path">
                {{subMenu.name}}
              </el-menu-item>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :index="menu.path" :key="index">{{menu.name}}</el-menu-item>
          </template>
        </template>
      </el-menu>
    </div>

    <div class="header-operates">
      <el-button type="text" size="small" style="color:#fff;">登录</el-button>
      <el-button type="text" size="small" style="color:#fff;">注册</el-button>
      <el-button size="small" type="primary">立即发布</el-button>
    </div>
    <!-- 操作按钮 -->
  <router-view></router-view>
  </el-header>
</template>

<script>
import Vue from 'vue';
import instance from '@/api';
import {headerMenus} from '@/router/userTerminal.js'
export default {
  name: 'HeanderGuide',
  data() {
    return {
      menuData: []
    }
  },
  computed: {
    activeMenu: function () {
      return this.$route.name
    }
  },
  methods : {
    initMenu() {
      for(let i in headerMenus) {
        this.menuData.push(headerMenus[i])
      }
    }
  },
  created: function() {
    this.initMenu()
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