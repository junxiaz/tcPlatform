<template>
  <el-container direction="vertical">
    <!-- <HeaderGuide /> -->
    <el-main>
        <div class="design-wrap">
          <img src="./images/banner1.png" alt="">
          <!-- <el-tabs type="border-card">
            <el-tab-pane label="用户管理"> -->
              <div class="bottle-wrap">
                <el-row class="adv-wrap">
                  <div class="w1220">
                    <TitleRed title="OUR ADVANTAGE" subTitle="我们的优势" />
                    <img class="advs-top" src="./images/banner2.png" alt="">
                    <el-row class="advs" :gutter="50">
                      <el-col :span="8"><img src="./images/pic1.png" alt=""></el-col>
                      <el-col :span="16">
                        <el-row class="adv">
                          <el-col :span="24">
                            <div><span class="font_family icon-goutong"></span>沟通</div>
                            <p>3D云膜是天臣研发的一种集微光学、微纳米加工及微缩印刷于一体，兼具包装和防伪功能的全视裸眼3D薄膜，通过在薄膜上形成微光学陈列结构，实现动态、立体图文效果。视觉冲击力强，效果新颖独特，易于识别，防伪难度高，具有自主知识产权。</p>
                          </el-col>
                          <el-col :span="24">
                            <div><span class="font_family icon-fuwubaozhang"></span>服务保障</div>
                            <p>材料厚度：50-100μm<br/>立体景深：0-15mm<br/>材料底色：可根据客户需求定制<br/>底部图文：可定制成各种LOGO、汉字、英文、数字等。</p>
                          </el-col>
                        </el-row>
                      </el-col>
                    </el-row>
                  </div>
                </el-row>
                <el-row class="classic-case">
                  <TitleRed class="w1220" title="CLASSIC CASE" subTitle="精品案例展示" />
                  <div class="w1220">
                    <el-row :gutter="20">
                        <el-col :span="8"><img src="./images/case1.png" alt=""></el-col>
                        <el-col :span="8"><img src="./images/case2.png" alt=""></el-col>
                        <el-col :span="8"><img src="./images/case3.png" alt=""></el-col>
                        <el-col :span="8"><img src="./images/case4.png" alt=""></el-col>
                        <el-col :span="8"><img src="./images/case5.png" alt=""></el-col>
                        <el-col :span="8"><img src="./images/case6.png" alt=""></el-col>
                    </el-row>
                  </div>
                </el-row>
                <el-row class="package-wrap w1220">
                    <TitleRed title="APPLICATION ON PACKAGING" subTitle="云膜应用" />
                    <!-- <img src="./images/banner3.png" alt=""> -->
                    <el-row class="packages" :gutter="20">
                      <el-col :span="13"><img src="./images/banner3.png" alt=""></el-col>
                      <el-col :span="11">
                        <el-row class="package">
                          <el-col :span="24">
                            <div>云膜包装</div>
                            <p>3D云膜可作为包装印刷材料，能与猫眼、全息、浮雕等工艺相结合，制作成各类纸质包装盒，以及食品、面膜袋等各类软包装，并兼容纹理、压纹、凹凸等所有后道工艺。云膜独特的裸眼3D效果，品牌识别更直观，视觉冲击力强，可提升包装的整体美观度，让产品华丽升级。</p>
                          </el-col>
                          <el-col :span="24">
                            <div>云膜标签</div>
                            <p>云膜可作为防伪标签的基材，可与二维码、RFID相结合，制作成各种形式的云膜防伪标签，实现商品的防伪追溯。</p>
                          </el-col>
                        </el-row>
                      </el-col>
                    </el-row>
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
                    <el-row class="servier" :gutter="20">
                      <el-col class="servier-item" :span="6">
                        <div class="col-wrap">
                        <img src="./images/supplyer1.png" alt="">
                        <div>复旦大学</div>
                        <div>
                          <img src="./images/icon1.png" alt="">
                          <img src="./images/LV16.png" alt="">
                        </div>
                        <el-row type="flex" justify="center">
                          <el-col :span="8">速度:5.00</el-col>
                          <el-col :span="8">速度:5.00</el-col>
                          <el-col :span="8">速度:5.00</el-col>
                        </el-row>
                        <div>成交金额：<span>¥23455555</span></div>
                        <div>
                          <el-tag type="info">图标设计签四签四签四签四签四</el-tag>
                          <el-tag type="info">图标设计</el-tag>
                          <el-tag type="info">图标设计</el-tag>
                        </div>
                        </div>
                      </el-col>
                      <el-col class="servier-item" :span="6">
                        <div class="col-wrap">
                        <img src="./images/supplyer2.png" alt="">
                        <div>上海研发公共服务平台</div>
                        <div>
                          <img src="./images/icon1.png" alt="">
                          <img src="./images/LV16.png" alt="">
                        </div>
                        <el-row type="flex" justify="center">
                          <el-col :span="8">速度:5.00</el-col>
                          <el-col :span="8">速度:5.00</el-col>
                          <el-col :span="8">速度:5.00</el-col>
                        </el-row>
                        <div>成交金额：<span>¥23455555</span></div>
                        <div>
                          <el-tag type="info">图标设计签四签四签四签四签四</el-tag>
                          <el-tag type="info">图标设计</el-tag>
                          <el-tag type="info">图标设计</el-tag>
                        </div>
                        </div>
                      </el-col>
                      <el-col class="servier-item" :span="6">
                        <div class="col-wrap">
                        <img src="./images/supplyer3.png" alt="">
                        <div>中国防伪行业协会</div>
                        <div>
                          <img src="./images/icon1.png" alt="">
                          <img src="./images/LV16.png" alt="">
                        </div>
                        <el-row type="flex" justify="center">
                          <el-col :span="8">速度:5.00</el-col>
                          <el-col :span="8">速度:5.00</el-col>
                          <el-col :span="8">速度:5.00</el-col>
                        </el-row>
                        <div>成交金额：<span>¥23455555</span></div>
                        <div>
                          <el-tag type="info">图标设计签四签四签四签四签四</el-tag>
                          <el-tag type="info">图标设计</el-tag>
                          <el-tag type="info">图标设计</el-tag>
                        </div>
                        </div>
                      </el-col>
                      <el-col class="servier-item" :span="6">
                        <div class="col-wrap">
                        <img src="./images/supplyer4.png" alt="">
                        <div>天臣集团</div>
                        <div>
                          <img src="./images/icon1.png" alt="">
                          <img src="./images/LV16.png" alt="">
                        </div>
                        <el-row type="flex" justify="center">
                          <el-col :span="8">速度:5.00</el-col>
                          <el-col :span="8">速度:5.00</el-col>
                          <el-col :span="8">速度:5.00</el-col>
                        </el-row>
                        <div>成交金额：<span>¥23455555</span></div>
                        <div>
                          <el-tag type="info">图标设计签四签四签四签四签四</el-tag>
                          <el-tag type="info">图标设计</el-tag>
                          <el-tag type="info">图标设计</el-tag>
                        </div>
                        </div>
                      </el-col>
                    </el-row>
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
export default {
  name: "",
  components: {
    HeaderGuide,
    FooterGuide,
    TitleRed,
    Title
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
        .advs-top {
          padding-bottom: 30px;
        }
        .advs {
          .adv {
            .el-col {
              min-height: 107px;
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
                width: 678px;
                font-size: 16px;
                color: #474747;
              }
            }
          }
        }
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
        >img {
          width: 100%;
          height: 100%;
          display: block;
        }
        .servier {
          .servier-item {
            background-color: #4955EA;
            .col-wrap {
                background-color: #fff;
                padding: 25px;
                >img {
                width: 115px;
                height: 115px;
                padding-bottom: 25px;
                }
                >div:nth-of-type(1) {
                font-size: 18px;
                font-weight: bold;
                color: #4b4b4b;
                padding-bottom: 8px;
                }
                .el-row {
                .el-col {
                    font-size: 14px;
                    color: #8d8d8d;
                    padding: 10px 0;
                }
                }
                div:nth-of-type(4) {
                font-size: 16px;
                color: #4b4b4b;
                padding-bottom: 14px;
                margin-bottom: 12px;
                border-bottom: solid 1px #efefef;
                span {
                    color: #F98D2D;
                }
                }
                div:nth-of-type(5) {
                .el-tag {
                    max-width: 30%;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap;
                }
                }
            }
          }
        }
      }
    }
  }
}
</style>