<template>
  <el-container direction="vertical" class="wrap">
    <IndexHeader class="header-home">
      <router-link slot="home" to="/home">
        <i class="el-icon-house"></i>首页
      </router-link>
    </IndexHeader>
    <el-main class="content">
      <div class="login-main">
        <div class="w1220">
          <div class="login-register">
            
          </div>
        </div>
      </div>
    </el-main>
    <FooterGuide class="footer" />
  </el-container>
</template>

<script>
import IndexHeader from "@/components/HeaderGuide/IndexHeader";
import FooterGuide from "@/components/FooterGuide/FooterGuide";
export default {
  name: "Login",
  components: {
    IndexHeader,
    FooterGuide
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/vars.scss";
.wrap {
  height: 100% !important;
  .header-home {
    position: absolute;
    top: 0;
    width: 100%;
    i {
      margin-right: 7px;
    }
  }
  .content {
    min-width: 1220px;
    height: calc(100%-167px);
    margin: 80px 0 87px;
    .login-main {
      background: #fff url(./imgs/background.png) center center / cover no-repeat;
      height: 100%;
      position: relative;
      width: 100%;
      transform: translateY(-7px);
      .w1220 {
        height: 100%;
        position: relative;
        .login-register {
          width: 500px;
          min-height: 514px;
          box-sizing: border-box;
          padding: 39px 42px;
          position: absolute;
          top: 50%;
          left: 100%;
          transform: translate(-500px, -250px);
          background: #fff;
          border-radius: 6px;
        }
      }
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
  }
}
</style>