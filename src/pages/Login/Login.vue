<template>
  <el-container direction="vertical" class="wrap" style="height: 100%!important;">
    <IndexHeader class="header-home"></IndexHeader>
    <el-main class="content">
      <div class="login-main">
        <div class="w1220">
          <!-- 登录注册框 -->
          <router-view></router-view>
        </div>
      </div>
    </el-main>
    <FooterGuide class="footer" />
  </el-container>
</template>

<script>
import IndexHeader from "@/components/HeaderGuide/IndexHeader";
import FooterGuide from "@/components/FooterGuide/FooterGuide";
import md5 from 'js-md5';
export default {
  name: "Login",
  components: {
    IndexHeader,
    FooterGuide
  }
};
</script>

<style lang="scss">
.login-register {
  // 重置tabs
  .el-tabs {
    .el-tabs__nav {
      text-align: center;
      float: none;
    }
    .el-tabs__item {
      font-size: 20px;
      color: rgb(159, 159, 159);
      width: 90px;
      text-align: center;
      padding: 0;
    }
    .el-tabs__active-bar {
      width: 90px !important;
      margin-left: calc(50% - 90px);
    }
  }
  // 重置input
  .reset-form {
    .el-form-item {
      .el-form-item__content {
        height: 48px;
        line-height: 48px;
        .el-input, .el-select {
          width: 100%;
          font-size: 16px;
          color: rgb(153, 153, 153);
          .el-input__inner {
            background-color: rgb(248, 246, 246);
            height: 48px;
            line-height: 48px;
          }
          .el-input__prefix {
            font-size: 22px;
          }
        }
      }
      .el-button.el-button--text {
        text-align: right;
        font-size: 14px;
        margin-top: 10px;
        margin-bottom: 56px;
        padding: 0;
        height: auto;
      }
      .el-button {
        width: 100%;
        height: 48px;
        font-size: 18px;
        border-radius: 24px;
      }
      #tips {
        display: inline;
        margin: 0;
        width: auto;
      }
    }
  }
  .login-form .el-form-item:nth-of-type(1) {
    margin-top: 56px;
  }
  .login-form .el-form-item:nth-of-type(2) {
    margin-top: 52px;
    margin-bottom: 0;
  }
  .login-form .el-form-item:nth-of-type(3) {
    margin: 0;
    padding: 0;
    line-height: 1;
    .el-form-item__content {
      padding: 0;
      height: auto;
      line-height: 1;
    }
  }
  .register-form .el-form-item:nth-of-type(1) {
    margin-top: 15px;
  }
  .register-form .el-form-item:nth-of-type(3) {
    margin-bottom: 0;
  }
  .register-form .el-form-item:nth-of-type(4) {
    margin: 0;
    padding: 0;
    line-height: 1;
    .el-form-item__content {
      padding: 0;
      height: auto;
      line-height: 1;
      .el-button--text {
        margin-bottom: 0;
      }
    }
  }
  .register-form .el-form-item:nth-of-type(5) {
    margin: 0;
    margin-top: 10px;
  }
}
</style>
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
    overflow: hidden;
    .login-main {
      background: #fff url(./imgs/background.png) center calc(50% - 7px) / cover
        no-repeat;
      height: 100%;
      position: relative;
      width: 100%;
      // transform: translateY(-7px);
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
          transform: translate(-500px, -260px);
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