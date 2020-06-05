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
              <el-menu-item v-for="(subMenu, i) in menu.children" :key="i" :index="menu.path+'/'+subMenu.path">
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
      <template v-if="!this.account">
        <router-link to="/login/login" style="padding-right:24px;">
          <el-button type="text" size="small" class="login-register-btn">登录</el-button>
        </router-link>
        <router-link to="/login/register" style="padding-right: 38px;">
          <el-button type="text" size="small" class="login-register-btn">注册</el-button>
        </router-link>
      </template>
      <template v-else>
        <el-popover
          placement="bottom"
          width="200"
          trigger="click">
          <span class="account" slot="reference">{{account}}</span>
          <div class="userInfo">
            <h1>个人信息</h1>
            <router-link to="/release">
              <el-button size="small" type="primary">立即发布</el-button>
            </router-link>
            <el-row>
              <el-col :span="12">
                <router-link to="/seller/home">
                  <el-link>信息中心</el-link>
                </router-link>
              </el-col>
              <el-col :span="12">
                <el-link @click="logout">退出登录</el-link>
              </el-col>
            </el-row>
          </div>
        </el-popover>
      </template>
      <router-link to="/release">
        <el-button size="small" type="primary">立即发布</el-button>
      </router-link>
    </div>
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
      menuData: [],
      account: ''
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
        // if(headerMenus[i].children) {
        //   window.console.log(this.$router.options)
        //   window.console.log(1)
        // }
      }
      this.$router.options.routes = this.$router.options.routes.concat(this.menuData);

    },
    logout() {
      this.$confirm('是否退出登录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('userId')
        sessionStorage.removeItem('account')
        this.$router.push('/login');
      }).catch(() => {

      });
    }
  },
  mounted: function() {
    this.initMenu()
    if(sessionStorage.getItem('account')) {
      this.account = sessionStorage.getItem('account')
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
  // opacity: .9;
  line-height: 60px;
  position: fixed;
  top: 0;
  .header-logo {
    width: auto;
    float: left;
    height: 100%;
    display: inline-block;
    padding: 0 20px;
    // background-color: rgb(255, 249, 250);
    background-color: #fff;
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
    .login-register-btn {
      color: #fff;
      &:hover {
        color: #1e88e5;
      }
    }
    .account {
      font-size: 14px;
      color: #fff;
      margin-right: 10px;
      cursor: pointer;
    }
  }
}
.userInfo {
  text-align: center;
  h1 {
    text-align: left;
    font-size: 18px;
  }
  .el-row {
    margin-top: 20px;
  }
}
</style>