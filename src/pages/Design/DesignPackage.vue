<template>
  <el-container direction="vertical">
    <!-- <HeaderGuide /> -->
    <el-main>
        <div class="design-wrap">
          <img src="./imagesPackage/banner.png" alt="">
          <el-tabs type="border-card" v-model="activeName">
            <!-- <el-tab-pane label="酒水">酒水</el-tab-pane> -->
            <el-tab-pane label="烟草" name="bottleDesign">
              <div class="bottle-wrap">
                <el-row class="classic-case">
                  <TitleRed class="w1220" title="CLASSIC CASE" subTitle="精品案例展示" />
                  <div class="w1220">
                    <el-row :gutter="10">
                        <el-col :span="8">
                          <div>
                            <img src="./imagesPackage/case1.png" alt="">
                            <p>天臣全印膜可制作成各类日化品外包装，以及各类洗护用品标签，提升美观度和实现产品防伪。</p>
                          </div>
                        </el-col>
                        <el-col :span="8">
                          <div>
                            <img src="./imagesPackage/case2.png" alt="">
                            <p>天臣全印膜集猫眼、全息、浮雕等当前高端印刷于一身，为盒装、条装包装提供精美的包装制作，比定位纸更精准。</p>
                          </div>
                        </el-col>
                        <el-col :span="8">
                          <div>
                            <img src="./imagesPackage/case3.png" alt="">
                            <p>用满版3D云膜材料做成酒盒包装，全视角裸眼3D效果，视觉效果更震撼，品牌识辨度更高</p>
                          </div>
                        </el-col>
                        <el-col :span="8">
                          <div>
                            <img src="./imagesPackage/case4.png" alt="">
                            <p>天臣全印膜可制作成各种食品软包装袋，可与猫眼、全息等工艺结合，实现产品防伪。</p>
                          </div>
                        </el-col>
                        <el-col :span="8">
                          <div>
                            <img src="./imagesPackage/case5.png" alt="">
                            <p>天臣全印膜集猫眼、全息、浮雕等当前高端印刷于一身，为盒装、条装包装提供精美的包装制作，比定位纸更精准。</p>
                          </div>
                        </el-col>
                        <el-col :span="8">
                          <div>
                            <img src="./imagesPackage/case6.png" alt="">
                            <p>天臣全印膜可完美替代当前猫眼、全息、浮雕等定位纸酒盒包装，套印更精准，并能大幅降低包装成本</p>
                          </div>
                        </el-col>
                    </el-row>
                  </div>
                </el-row>
                <el-row class="project">
                  <h1>项目可视化呈现</h1>
                  <p>让客户有效掌握项目进度，实时沟通项目问题，实现服务过程的透明化、可视化。</p>
                  <img src="./imagesPackage/banner2.png" alt="">
                </el-row>
                <el-row class="free-resolve">
                  <div class="w1220">
                    <div>免费帮您诊断企业设计问题</div>
                    <div>专属顾问将根据您企业的具体情况免费进行诊断服务</div>
                    <img src="./imagesPackage/banner3.png" alt="">
                  </div>
                </el-row>
                <el-row class="service-cycle">
                  <div class="w1220">
                    <div>不了解服务周期，被拖稿怎么办？</div>
                    <div>标准化的服务与保障</div>
                    <el-row :gutter="20">
                      <el-col :span="8"><img src="./imagesPackage/pic1.png" alt=""></el-col>
                      <el-col :span="8"><img src="./imagesPackage/pic2.png" alt=""></el-col>
                      <el-col :span="8"><img src="./imagesPackage/pic3.png" alt=""></el-col>
                    </el-row>
                    <router-link to="/comment"><el-button type="primary">立即咨询</el-button></router-link>
                  </div>
                </el-row>
                <el-row class="service-process1">
                  <div class="w1220">
                    <TitleRed title="Service Process" subTitle="服务流程" />
                    <img src="./imagesPackage/banner4.png" alt="">
                    <TitleRed title="Supplyer" subTitle="推荐服务商" />
                    <Servicer />
                  </div>
                </el-row>
              </div>
            </el-tab-pane>
            <!-- <el-tab-pane label="食品/保健品">产品包装设计</el-tab-pane>
            <el-tab-pane label="日化品">运输包装设计</el-tab-pane> -->
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
        padding-bottom: 20px;
        overflow: hidden;
        .el-row .el-col {
          margin-bottom: 20px;
          overflow: hidden;
          cursor: pointer;
          div {
            width: 100%;
            height: 100%;
            overflow: hidden;
            position: relative;
            img {
              max-width: 100%;
              max-height: 100%;
              display: block;
            }
            >p {
              position: absolute;
              bottom: -100px;
              box-sizing: border-box;
              background:rgba(33,33,33,.8);
              font-size: bold 14px/1.5 Microsoft YaHei;
              text-align: center;
              color:#fff;
              padding: 18px 27px;
              opacity: 0;
            }
            &:hover p {
              opacity: 1;
              bottom: 0;
              transition: bottom .5s linear;
            }
          }
        }
      }
      .project {
        background-color: #fff;
        text-align: center;
        padding-bottom: 20px;
        h1 {
          font: bold 24px/2 Microsoft YaHei;
          color:#1067DC;
        }
        p {
          width:350px;
          font: 400 14px/1.5 Microsoft YaHei;
          color:#464646;
          margin: 0 auto 40px;
        }
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
        background: url(./imagesPackage/bg1.png) no-repeat;
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