<template>
  <el-container direction="vertical">
    <HeaderGuide />
    <el-main>
      <el-row class="banner">
        <div class="operate-btns">
          <el-button type="primary" style="margin-right:70px;">发布需求</el-button>
          <el-button type="primary">服务商入驻</el-button>
        </div>
      </el-row>
      <!-- 会员介绍 -->
      <div class="member-intro">
        <h1>会员介绍</h1>
        <el-row type="flex" class="member-row-items" :gutter="20" justify="center">
          <el-col :span="5">
            <ul class="member-item">
              <li><img src="./images/shell.png" alt=""></li>
              <li>终端客户</li>
              <li>入驻天臣产业互联网的会员，可享受线上发布需求的基础权益。</li>
              <li><el-divider>终端客户权限</el-divider></li>
              <li>技术服务费率30%</li>
              <li>技术服务费率30%</li>
              <li>技术服务费率30%</li>
              <li>技术服务费率30%</li>
              <li>
                <el-button type="primary" size="small">立即入驻</el-button>
              </li>
            </ul>
          </el-col>
          <el-col :span="5">
            <ul class="member-item">
              <li><img src="./images/shell.png" alt=""></li>
              <li>终端客户</li>
              <li>入驻天臣产业互联网的会员，可享受线上发布需求的基础权益。</li>
              <li><el-divider>终端客户权限</el-divider></li>
              <li>技术服务费率30%</li>
              <li>技术服务费率30%</li>
              <li>技术服务费率30%</li>
              <li>技术服务费率30%</li>
              <li>
                <el-button type="primary" size="small">立即入驻</el-button>
              </li>
            </ul>
          </el-col>
          <el-col :span="5">
            <ul class="member-item">
              <li><img src="./images/shell.png" alt=""></li>
              <li>终端客户</li>
              <li>入驻天臣产业互联网的会员，可享受线上发布需求的基础权益。</li>
              <li><el-divider>终端客户权限</el-divider></li>
              <li>技术服务费率30%</li>
              <li>技术服务费率30%</li>
              <li>技术服务费率30%</li>
              <li>技术服务费率30%</li>
              <li>
                <el-button type="primary" size="small">立即入驻</el-button>
              </li>
            </ul>
          </el-col>
          <el-col :span="5">
            <ul class="member-item">
              <li><img src="./images/shell.png" alt=""></li>
              <li>终端客户</li>
              <li>入驻天臣产业互联网的会员，可享受线上发布需求的基础权益。</li>
              <li><el-divider>终端客户权限</el-divider></li>
              <li>技术服务费率30%</li>
              <li>技术服务费率30%</li>
              <li>技术服务费率30%</li>
              <li>技术服务费率30%</li>
              <li>
                <el-button type="primary" size="small">立即入驻</el-button>
              </li>
            </ul>
          </el-col>
        </el-row>
      </div>
      <!-- 入驻流程 -->
      <div class="into-process">
        <h1>入驻流程</h1>
        <div class="processes">
          <img src="./images/into_process.jpg" alt="">
        </div>
      </div>
    </el-main>
    <FooterGuide />
  </el-container>
</template>

<script>
import HeaderGuide from "@/components/HeaderGuide/HeaderGuide";
import FooterGuide from "@/components/FooterGuide/FooterGuide";
export default {
  name: "Label",
  components: {
    HeaderGuide,
    FooterGuide
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';
.el-main {
  .banner {
    width: 100%;
    height: 540px;
    background: url(./images/banner3.png) no-repeat center center;
    background-size: cover;
    .operate-btns {
      position: absolute;
      bottom: 128px;
      left: 50%;
      transform: translateX(-50%);
      .el-button {
        width: 166px;
        height: 50px;
        background-color: #f85c5d;
        border-color: #f85c5d;
        border-radius: 25px;
        font-size: 20px;
      }
    }
  }
  // 会员介绍
  .member-intro {
    width: 100%;
    min-height: 575px;
    box-sizing: border-box;
    padding-top: 30px;
    padding-bottom: 30px;
    overflow-x: hidden;
    >h1{
      margin-bottom: 30px;
      width: 183px;
      font-size: 24px;
      font-weight: 600;
      color: $blue;
      text-align: left;
      margin-left: 8.5%;
      padding-bottom: 12px;
      border-bottom: solid 2px $blue;
      border-radius: 0;
    }
    .member-row-items {
      .member-item {
        min-height: 434px;
        box-sizing: border-box;
        border: solid 1px #d2d2d2;
        text-align: center;
        font-size: 14px;
        line-height: 30px;
        color: $fontGray;
        li:nth-of-type(1) {
          height: 92px;
          padding-top: 24px;
          padding-bottom: 16px;
          background-color: $blue;
        }
        li:nth-of-type(2){
          font-size: 24px;
          background-color: $blue;
          color: #fff;
          padding-bottom: 35px;
        }
        li:nth-of-type(3) {
          font-size: 12px;
          color: $blue;
          background-color: #dde8fd;
          padding: 10px 12px;
          text-align: left;
          line-height: 1.2;
        }
        li:nth-of-type(4) {
          padding: 30px 50px 10px;
          text-align: center;
          .el-divider {
            line-height: 1.2;
            background-color: $fontGray;
            margin: 0;
            .el-divider__text {
              font-size: 14px;
              color: $fontGray;
              font-weight: 600;
              padding: 0 5px;
              min-width: 95px;
            }
          }
        }
        li:last-child {
          margin-top: 16px;
          .el-button {
            background-color: #f85c5d;
            border-color: #f85d5d;
          }
        }
      }
    }
  }
  // 入驻流程
  .into-process {
    width: 100%;
    box-sizing: border-box;
    padding-top: 30px;
    padding-bottom: 30px;
    overflow-x: hidden;
    >h1{
      margin-bottom: 30px;
      width: 183px;
      font-size: 24px;
      font-weight: 600;
      color: $blue;
      text-align: left;
      margin-left: 8.5%;
      padding-bottom: 12px;
      border-bottom: solid 2px $blue;
      border-radius: 0;
    }
    .processes {
      margin: 30px 8.5%;
      img {
        width: 100%;
      }
    }
  }
}
</style>