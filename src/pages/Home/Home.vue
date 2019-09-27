<template>
  <el-container>
    <el-header>
      <!-- <HeaderGuide /> -->
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
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">消息</el-menu-item>
        </el-menu>
      </div>
      <div class="header-operates">
        <el-button type="text" size="small" style="color:#fff;">登录</el-button>
        <el-button type="text" size="small" style="color:#fff;">注册</el-button>
        <el-button size="small" type="primary">主要按钮</el-button>
      </div>
      <!-- 操作按钮 -->
    </el-header>
    <el-main>
      <!-- 轮播 -->
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      <!-- 材料介绍 -->
      <el-row type="flex" class="products" justify="center">
        <el-col :span="4">
          <div class="product">
            <a class="product-type" href="#">
              <img src="./images/material_icon.png" alt="">
              <p>特种材料 ></p>
            </a>
            <ul class="product-items">
              <li>云膜</li>
              <li>全印模</li>
              <li>镭射</li>
            </ul>
          </div>
        </el-col>
        <el-col :span="4">
          <a class="product-type" href="#">
            <img src="./images/material_icon.png" alt="">
            <p>特种材料 ></p>
          </a>
          <ul class="product-items">
            <li>云膜</li>
            <li>全印模</li>
            <li>镭射</li>
          </ul>
        </el-col>
        <el-col :span="4">
          <a class="product-type" href="#">
            <img src="./images/material_icon.png" alt="">
            <p>特种材料 ></p>
          </a>
          <ul class="product-items">
            <li>云膜</li>
            <li>全印模</li>
            <li>镭射</li>
          </ul>
        </el-col>
      </el-row>
      <!-- <ul class="products">
        <li class="product">
          <a class="product-type" href="#">
            <img src="./images/material_icon.png" alt="">
            <p>特种材料 ></p>
          </a>
          <ul class="product-items">
            <li>云膜</li>
            <li>全印模</li>
            <li>镭射</li>
          </ul>
        </li>
        <li class="product">
          <a class="product-type" href="#">
            <img src="./images/material_icon.png" alt="">
            <p>特种材料 ></p>
          </a>
          <ul class="product-items">
            <li>云膜</li>
            <li>全印模</li>
            <li>镭射</li>
          </ul>
        </li>
        <li class="product">
          <a class="product-type" href="#">
            <img src="./images/material_icon.png" alt="">
            <p>特种材料 ></p>
          </a>
          <ul class="product-items">
            <li>云膜</li>
            <li>全印模</li>
            <li>镭射</li>
          </ul>
        </li>
      </ul> -->
    </el-main>
    <el-footer height="87px">
      ddd
      <!-- <FooterGuide /> -->
    </el-footer>
  </el-container>
</template>

<script>
// import HeaderGuide from '@/components/HeaderGuide/HeaderGuide'
// import FooterGuide from '@/components/FooterGuide/FooterGuide'
export default {
  name: "Home",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
  // components: {
  //   HeaderGuide,
  //   FooterGuide
  // }
};
</script>

<style scoped lang="scss">
.el-container {
  padding: 0;
  // 顶部导航
  .el-header {
    padding: 0;
    background-color: #424242;
    line-height: 60px;
    .header-logo {
      float: left;
      width: auto;
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
  // 中间内容
  .el-main {
    padding: 0;
    // 轮播
    .el-carousel__item {
      background-color: #99a9bf;
      h3 {color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        text-align: center;
        margin: 0;
      }
    }
    // 产品介绍
    .products {
      // text-align: center;
      font-size: 30px;
      // color: $--color-primary;
      .product {
      }
    }
  }
  // 底部导航
  .el-footer {
    padding: 0;
  }
  .el-carousel__button {
    width: 10px;
    height: 10px;
  }
}
</style>

