<template>
  <el-container direction="vertical">
    <!-- <HeaderGuide /> -->
    <el-main>
        <div class="design-wrap">
          <img src="./images/logobanner1.png" alt="">
          <!-- <el-tabs type="border-card">
            <el-tab-pane label="用户管理"> -->
              <div class="bottle-wrap">
                <el-row class="adv-wrap">
                  <div class="w1220">
                    <img src="./images/logobanner2.png" alt="">
                    <TitleRed title="OUR ADVANTAGE" subTitle="我们的优势" />
                    <el-row class="advs" :gutter="50">
                      <el-col :span="8"><img src="./images/company.png" alt=""></el-col>
                      <el-col :span="16">
                        <el-row class="adv">
                          <el-col :span="8">
                            <div><span class="font_family icon-qi"></span>设计人才</div>
                            <p>10万+优秀人才入驻平台，100%身份</p>
                          </el-col>
                          <el-col :span="8">
                            <div><span class="font_family icon-wanchengsudu"></span>完成速度</div>
                            <p>3～5天，修改到满意为止</p>
                          </el-col>
                          <el-col :span="8">
                            <div><span class="font_family icon-fuwujiage"></span>服务价格</div>
                            <p>收费便宜、价格合理</p>
                          </el-col>
                          <el-col :span="8">
                            <div><span class="font_family icon-goutong"></span>沟通</div>
                            <p>与专属设计师对接，深度沟通设计灵感，提供标志释义等</p>
                          </el-col>
                          <el-col :span="8">
                            <div><span class="font_family icon-yuanchuangsheji"></span>原创设计</div>
                            <p>保证原创，提供担保注册等服务</p>
                          </el-col>
                          <el-col :span="8">
                            <div><span class="font_family icon-shejifangan"></span>设计方案</div>
                            <p>方案多，质量高</p>
                          </el-col>
                          <el-col :span="8">
                            <div><span class="font_family icon-fuwubaozhang"></span>服务保障</div>
                            <p>赏金托管平台，5大交易保障，验收满意后再付款，提供官方在线交易协议，拒绝合同陷阱</p>
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
                        <el-col :span="12"><img src="./images/logocase1.png" alt=""></el-col>   
                        <el-col :span="12"><img src="./images/logocase2.png" alt=""></el-col>   
                        <el-col :span="12"><img src="./images/logocase3.png" alt=""></el-col>   
                        <el-col :span="12"><img src="./images/logocase4.png" alt=""></el-col>   
                    </el-row>
                  </div>
                </el-row>
                <el-row class="service-process">
                    <TitleRed class="w1220" title="OUR ADVANTAGES" subTitle="我们的优势" />
                    <img src="./images/logobanner3.png" alt="">
                </el-row>
                <el-row class="service-process" style="background: #F4F9FF;">
                  <div class="w1220">
                    <TitleRed title="OUR PLEDGE" subTitle="我们的保证" />
                    <img src="./images/logobanner4.png" alt="">
                    <TitleRed title="COOPERATION" subTitle="合作商家" />
                    <img src="./images/cooperation.png" alt="">
                    <!-- <img src="./images/cooperation.png" alt=""> -->
                  </div>  
                </el-row>
                <el-row class="service-process1">
                  <div class="w1220">
                    <TitleRed title="Service Process" subTitle="服务流程" />
                    <img src="./images/banner4.png" alt="">
                    <TitleRed title="Supplyer" subTitle="推荐服务商" />
                    <el-row class="servier" :gutter="20">
                      <el-col class="servier-item" :span="6">
                        <div class="col-wrap"> 
                        <img src="./images/ISP.png" alt="">
                        <div>天津艺点意创科技有限公司</div>
                        <div>
                          <img src="./images/icon1.png" alt="">
                          <img src="./images/icon2.png" alt="">
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
                        <img src="./images/ISP.png" alt="">
                        <div>天津艺点意创科技有限公司</div>
                        <div>
                          <img src="./images/icon1.png" alt="">
                          <img src="./images/icon2.png" alt="">
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
                        <img src="./images/ISP.png" alt="">
                        <div>天津艺点意创科技有限公司</div>
                        <div>
                          <img src="./images/icon1.png" alt="">
                          <img src="./images/icon2.png" alt="">
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
                        <img src="./images/ISP.png" alt="">
                        <div>天津艺点意创科技有限公司</div>
                        <div>
                          <img src="./images/icon1.png" alt="">
                          <img src="./images/icon2.png" alt="">
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
export default {
  name: "",
  components: {
    HeaderGuide,
    FooterGuide,
    TitleRed
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
                width: 237px;
                font-size: 16px;
                color: #474747;
              }
            }
          }
        }
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
        .servier {
          .servier-item {
            background-color: #f8f8f8;
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