<template>
  <el-container direction="vertical">
    <!-- <HeaderGuide /> -->
    <el-main>
        <div class="design-wrap">
          <img src="./imagesLaser/banner1.png" alt="">
          <!-- <el-tabs type="border-card">
            <el-tab-pane label="用户管理"> -->
              <div class="bottle-wrap">
                <el-row class="adv-wrap">
                  <div class="w1220">
                    <TitleRed title="OUR ADVANTAGE" subTitle="我们的优势" />
                    <el-row :gutter="10">
                      <el-col :span="6" v-for="(item, index) in advs" :key="index">
                        <div class="adv-item" @mouseover="changeIndex(index)" @mouseleave="changeBackIndex()">
                          <img :src="hoverIndex == index ? item.hoverSrc : item.src" :alt="item.title">
                          <p>{{item.title}}</p>
                          <p>{{item.subTitle}}</p>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-row>
                <el-row class="laser-wrap">
                  <div class="w1220">
                    <TitleRed title="LASER ANTI-COUNTERFEITING" subTitle="镭射防伪" />
                    <el-row class="advs" :gutter="50">
                      <el-col :span="11" align="right"><img src="./imagesLaser/pic1.png" alt=""></el-col>
                      <el-col :span="13">
                        <el-row class="adv">
                          <el-col :span="24">
                            <div><span class="font_family icon-goutong"></span>沟通</div>
                            <p>镭射防伪又称为激光全息防伪，是利用激光彩色全息图制版技术和模压复制技术完成的防伪标签，可实现的制版技术有：点阵动态光芒，一次性专用激光膜、3D光学微缩背景、多彩光学随机干涉、中英文铀缩文字等、</p>
                          </el-col>
                          <el-col :span="24">
                            <div><span class="font_family icon-fuwubaozhang"></span>服务保障</div>
                            <el-row>
                              <el-col :span="10">1.常规全息防伪技术；<br/>2.多通道全息防伪技术；<br/>3.隐形加密技术；<br/>4.360°计算机点阵全息技术；</el-col>
                              <el-col :span="14">5.双层全息技术；<br/>6.荧光加密全息技术；<br/>7.动态编码防伪技术；<br/>8.电话电码防伪技术，字等。</el-col>
                            </el-row>
                          </el-col>
                        </el-row>
                      </el-col>
                    </el-row>
                  </div>
                </el-row>
                <el-row class="app-field">
                  <TitleRed class="w1220" title="APPLICATION FIELD" subTitle="应用领域" />
                  <div class="w1220">
                    <el-row :gutter="20">
                      <el-col :span="11">
                        <p>此类标签适用于各个行业各类产品，如配件、医药、化妆品、奶粉等行业，特别是酒类贸易商用行业用的尤其多，而且此类标签制作成本较低。</p>
                        <p>天臣集团是贵州茅台酒19年来防伪标签、防伪胶帽、RFID防伪溯源系统三代产品的独家供应商；已为贵州茅台、四川五粮液、法国轩尼诗、金沙回沙酒等知名品牌提供量身定制的防伪溯源解决方案。</p>
                      </el-col>
                      <el-col :span="13" align="right"><img src="./imagesLaser/pic2.png" alt=""></el-col>
                    </el-row>
                  </div>
                </el-row>
                <el-row class="package-wrap w1220">
                  <TitleRed title="EXCELLENT TEAM" subTitle="优质团队" />
                  <img src="./imagesLaser/team.png" alt="">
                </el-row>
                <el-row class="service-img">
                  <img src="./imagesLaser/service.png" alt="">
                </el-row>
                <el-row class="service-process">
                  <div class="w1220">
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
  data() {
    return {
      hoverIndex: 99,
      advs: [
        {src: require('./imagesLaser/adv_nor1.png'), hoverSrc: require('./imagesLaser/adv_pre1.png'), title: '高科技', subTitle:'可实现全透明材质，不覆盖底纹'},
        {src: require('./imagesLaser/adv_nor2.png'), hoverSrc: require('./imagesLaser/adv_pre2.png'), title: '防转移', subTitle:'采用防转移技术，防止被应用于假冒商品'},
        {src: require('./imagesLaser/adv_nor3.png'), hoverSrc: require('./imagesLaser/adv_pre3.png'), title: '易识别', subTitle:'明显的变色效果，易于真假识别'},
        {src: require('./imagesLaser/adv_nor4.png'), hoverSrc: require('./imagesLaser/adv_pre4.png'), title: '低成本', subTitle:'明显的变色效果，易于真假识别'},
      ]
    }
  },
  methods: {
    changeIndex(index) {
      this.hoverIndex = index
    },
    changeBackIndex() {
      this.hoverIndex = 99
    }
  },
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
        background: #f5f5f5;
        text-align: center;
        .adv-item {
          background-color: #C8F8F8;
          padding-top: 60px;
          height: 298px;
          &:hover {
            background-color: #1BACBD;
            P {
              color: #fff!important;
            }
          }
          img {
            width: auto;
            height: 90px;
          }
          p:nth-child(2) {
            font-size:24px;
            font-weight:bold;
            color:#1BACBD;
            line-height:1.7;
          }
          p:nth-child(3) {
            margin: 0 auto;
            width: 216px;
            font-size:15px;
            font-weight:bold;
            color:#6C6C6C;
            line-height:1.5;
          }
        }
      }
      .laser-wrap {
        padding-bottom: 30px;
        .advs {
          .adv {
            >.el-col {
              min-height: 138px;
              padding-top: 20px;
              img {
                margin-left: 36px;
              }
              div {
                font-size: 20px;
                font-weight: bold;
                color: #464646;
                padding-bottom: 12px;
                span {
                  color: #0092fe;
                  padding-right: 3px;
                }
              }
              p {
                font-size: 15px;
                color: #474747;
                line-height: 2;
              }
              >.el-row .el-col {
                font-size: 15px;
                color: #474747;
                font-weight: normal;
                line-height: 2;
              }
            }
          }
        }
      }
      .app-field {
        background-color: #E7EAFD;
        >div .el-row .el-col {
          padding-bottom: 80px;
          p {
            font-size:16px;
            font-weight:bold;
            color:#474747;
            line-height:2;
            padding-top: 50px;
          }
          img {
            margin-right: 26px;
          }
        }
      }
      .service-img {
        padding-top: 30px;
        >img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
      .service-process {
        background-color: #fff;
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