<template>
  <el-container direction="vertical">
    <!-- <HeaderGuide /> -->
    <el-main>
        <div class="design-wrap">
          <img src="./imagesMakeUp/banner.png" alt="">
          <el-tabs type="border-card" v-model="activeName">
            <!-- <el-tab-pane label="包装盒设计">印刷制作</el-tab-pane>
            <el-tab-pane label="包装袋设计">印刷制作</el-tab-pane>
            <el-tab-pane label="礼盒设计">印刷制作</el-tab-pane> -->
            <el-tab-pane label="盒型设计" name="bottleDesign">
              <div class="bottle-wrap">
                <el-row class="classic-case">
                  <TitleRed class="w1220" title="CLASSIC CASE" subTitle="精品案例展示" />
                  <div class="w1220">
                    <el-row :gutter="20">
                        <el-col :span="8"><img src="./imagesMakeUp/case1.png" alt=""></el-col>
                        <el-col :span="8"><img src="./imagesMakeUp/case2.png" alt=""></el-col>
                        <el-col :span="8"><img src="./imagesMakeUp/case3.png" alt=""></el-col>
                        <el-col :span="8"><img src="./imagesMakeUp/case4.png" alt=""></el-col>
                        <el-col :span="8"><img src="./imagesMakeUp/case5.png" alt=""></el-col>
                        <el-col :span="8"><img src="./imagesMakeUp/case6.png" alt=""></el-col>
                    </el-row>
                  </div>
                </el-row>
                <el-row class="service-process">
                    <TitleRed class="w1220" title="Service Process" subTitle="服务流程" />
                    <img src="./imagesMakeUp/banner2.png" alt="">
                </el-row>
                <el-row class="free-resolve">
                  <div class="w1220">
                    <div>免费帮您诊断企业设计问题</div>
                    <div>专属顾问将根据您企业的具体情况免费进行诊断服务</div>
                    <img src="./imagesMakeUp/banner3.png" alt="">
                  </div>
                </el-row>
                <el-row class="service-cycle">
                  <div class="w1220">
                    <div>不了解服务周期，被拖稿怎么办？</div>
                    <div>标准化的服务与保障</div>
                    <el-row :gutter="20">
                      <el-col :span="8"><img src="./imagesMakeUp/pic1.png" alt=""></el-col>
                      <el-col :span="8"><img src="./imagesMakeUp/pic2.png" alt=""></el-col>
                      <el-col :span="8"><img src="./imagesMakeUp/pic3.png" alt=""></el-col>
                    </el-row>
                    <router-link to="/comment"><el-button type="primary">立即咨询</el-button></router-link>
                  </div>
                </el-row>
                <el-row class="service-process1">
                  <div class="w1220">
                    <TitleRed title="Service Process" subTitle="服务流程" />
                    <img src="./imagesMakeUp/banner4.png" alt="">
                    <TitleRed title="supplyer" subTitle="推荐服务商" />
                    <Servicer />
                  </div>
                </el-row>
              </div>
            </el-tab-pane>
            <!-- <el-tab-pane label="产品包装设计">产品包装设计</el-tab-pane>
            <el-tab-pane label="运输包装设计">运输包装设计</el-tab-pane>
            <el-tab-pane label="印刷制作">印刷制作</el-tab-pane> -->
          </el-tabs>
        </div>
    </el-main>
    <!-- <FooterGuide /> -->
  </el-container>
</template>

<script>
import HeaderGuide from "@/components/HeaderGuide/HeaderGuide";
import FooterGuide from "@/components/FooterGuide/FooterGuide";
import TitleRed from "@/components/Title/TitleRed";
import Servicer from '@/components/Servicer/Servicer';
export default {
  data() {
    return {
      activeName: 'bottleDesign'
    }
  },
  name: "",
  components: {
    HeaderGuide,
    FooterGuide,
    TitleRed,
    Servicer
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
      .classic-case {
        background-color: #f8f8f8;
      }
      .service-process {
        >img {
          width: 100%;
          height: 100%;
          display: block;
        }
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
      .service-process1 {
        background-color: #f8f8f8;
        text-align: center;
        padding-bottom: 80px;
        >img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
    }
  }
}
</style>