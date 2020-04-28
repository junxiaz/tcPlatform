<template>
  <el-container direction="vertical">
    <!-- <HeaderGuide /> -->
    <el-main>
        <div class="design-wrap">
          <img src="./imagesFull/banner1.png" alt="">
          <!-- <el-tabs type="border-card">
            <el-tab-pane label="用户管理"> -->
              <div class="bottle-wrap">
                <el-row class="tech-wrap w1220">
                  <TitleRed title="TECHNOLOGICAL PROCESS" subTitle="技术工艺" />
                  <img class="advs-top" src="./imagesFull/banner2.png" alt="">
                </el-row>
                <el-row class="adv-wrap">
                  <div class="w1220">
                    <TitleRed title="OUR ADVANTAGE" subTitle="我们的优势" />
                    <img class="advs-top" src="./imagesFull/adv.png" alt="">
                  </div>
                </el-row>
                <el-row class="classic-case">
                  <TitleRed class="w1220" title="CLASSIC CASE" subTitle="精品案例展示" />
                  <div class="w1220">
                    <el-row :gutter="20">
                        <el-col :span="8"><img src="./imagesFull/case1.png" alt=""></el-col>
                        <el-col :span="8"><img src="./imagesFull/case2.png" alt=""></el-col>
                        <el-col :span="8"><img src="./imagesFull/case3.png" alt=""></el-col>
                        <el-col :span="8"><img src="./imagesFull/case4.png" alt=""></el-col>
                        <el-col :span="8"><img src="./imagesFull/case5.png" alt=""></el-col>
                        <el-col :span="8"><img src="./imagesFull/case6.png" alt=""></el-col>
                    </el-row>
                  </div>
                </el-row>
                <el-row class="package-wrap w1220">
                    <TitleRed title="All-in-Print" subTitle="全印膜" />
                    <img src="./imagesFull/all.png" alt="">
                </el-row>
                <el-row class="service-process">
                  <div class="w1220">
                    <TitleRed title="OUR PLEDGE" subTitle="我们的保证" />
                    <img src="./images/banner4.png" alt="">
                    <TitleRed title="COOPERATION" subTitle="合作商家" />
                    <img src="./images/cooperation.png" alt="">
                    <!-- <img src="./images/cooperation.png" alt=""> -->
                  </div>
                </el-row>
                <el-row class="service-process1">
                  <div class="w1220">
                    <!-- <TitleRed title="Service Process" subTitle="服务流程" />
                    <img src="./images/banner4.png" alt=""> -->
                    <TitleRed title="supplyer" subTitle="推荐服务商" titleColor="#fff" subTitleColor="#fff" />
                    <Servicer />
                  </div>
                </el-row>
              </div>
            <!-- </el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
          </el-tabs>   -->
        </div>
    </el-main>
    <!-- <FooterGuide /> -->
  </el-container>
</template>

<script>
import HeaderGuide from "@/components/HeaderGuide/HeaderGuide";
import FooterGuide from "@/components/FooterGuide/FooterGuide";
import TitleRed from "@/components/Title/TitleRed";
import Title from "@/components/Title/Title";
import Servicer from '@/components/Servicer/Servicer';
export default {
  name: "",
  components: {
    HeaderGuide,
    FooterGuide,
    TitleRed,
    Title,
    Servicer,
  }
};
</script>
<style lang="scss">
.design-wrap {
  .el-tabs--border-card {
    box-shadow: none;
    border: none;
    > .el-tabs__content {
      padding: 0;
    }
    > .el-tabs__header {
      background-color: #fff;
      border: none;
      width: 1220px;
      margin: 0 auto;
      overflow: hidden;
      & .el-tabs__item.is-active {
        background-color: #dfeefb;
        border-color: #dfeefb;

      }
      .el-tabs__item {
        font-size: 18px;
        font-weight: 400;
        height: 70px;
        line-height: 70px;
        color: #424242;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/vars.scss';
.el-container {
  .el-main {
    width: 100%;
    margin-top: 60px;
    .design-wrap {
      width: 100%;
      overflow: hidden;
      >img {
        width: 100%;
        height: 100%;
        display: block;
      }
      .adv-wrap {
        padding-bottom: 30px;
        background: #FFE4DB;
      }
      .classic-case {
        background-color: #E7EAFD;
      }
      .free-resolve {
        background-color: #F2F3FF;
        padding-top: 45px;
        padding-bottom: 35px;
        .w1220 {
          >div:first-child {
            font-size: 30px;
            font-weight: bold;
            color: #3b3b3b;
          }
          div:nth-of-type(2) {
            font-size: 16px;
            color: #757575;
            margin-bottom: 30px;
          }
        }
      }
      .service-cycle {
        color: #fff;
        background-color: #4d507a;
        padding-top: 45px;
        padding-bottom: 45px;
        .w1220 {
          div:nth-of-type(1) {
            font-size: 36px;
            margin-bottom: 20px;
          }
          div:nth-of-type(2) {
            font-size: 28px;
            margin-bottom: 38px;
          }
          .el-button {
            width:237px;
            height: 60px;
            background:rgba(252,110,48,1);
            border-radius:8px;
            font-size: 24px;
            margin: 0 auto;
            display: block;
          }
        }
      }
      .package-wrap.w1220 {
        padding-bottom: 30px;
        .packages {
          min-height: 400px;
          background-color: #E2E2E2;
          .el-col {
            overflow: hidden;
            img {
              max-height: 100%;
              vertical-align: middle;
            }
            .package {
              .el-col {
                >div {
                  padding-top: 80px;
                  font-size: 18px;
                  font-weight: bold;
                  color: #595959;
                }
                >p {
                  font-size: 14px;
                  color: #767676;
                  line-height: 1.5;
                }
              }
            }
          }
        }
      }
      .service-process {
        background: #EBEBEB url('./images/pledge_bg.png') no-repeat;
      }
      .service-process1 {
        background:#4955EA;
        text-align: center;
        padding-bottom: 80px;
      }
    }
  }
}
</style>