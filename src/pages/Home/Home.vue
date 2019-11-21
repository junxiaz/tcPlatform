<template>
  <el-container direction="vertical">
    <HeaderGuide />
    <el-main>
      <HeaderCarousel />
      <!-- 材料介绍 -->
      <div class="products-wrap">
        <el-row type="flex" class="products w1220" justify="center">
          <el-col :span="8">
            <div class="product">
              <a class="product-type" href="#">
                <img src="./images/material_icon.png" alt="">
                <h1>特种材料 ></h1>
              </a>
              <ul class="product-items">
                <li>云膜</li>
                <li>全印模</li>
                <li>镭射</li>
              </ul>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="product">
              <a class="product-type" href="#">
                <img src="./images/material_icon.png" alt="">
                <h1>特种材料 ></h1>
              </a>
              <ul class="product-items">
                <li>云膜</li>
                <li>全印模</li>
                <li>镭射</li>
              </ul>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="product">
              <a class="product-type" href="#">
                <img src="./images/material_icon.png" alt="">
                <h1>特种材料 ></h1>
              </a>
              <ul class="product-items">
                <li>云膜</li>
                <li>全印模</li>
                <li>镭射</li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="nums-wrap">
        <div class="w1220">
          <el-row :gutter="33" type="flex" justify="center" class="nums-top">
            <el-col :span="6">
              <div class="num">
                <img src="./images/users.png" alt="">
                <p>1234</p>
                <span>注册用户数</span>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="num">
                <img src="./images/users.png" alt="">
                <p>1234</p>
                <span>注册用户数</span>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="num">
                <img src="./images/users.png" alt="">
                <p>1234</p>
                <span>注册用户数</span>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="num">
                <img src="./images/users.png" alt="">
                <p>1234</p>
                <span>注册用户数</span>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="33" class="nums-bottom">
            <el-col :span="12">
              <el-row class="num">
                <el-col :span="10"><img src="./images/turnover.png" alt=""></el-col>
                <el-col :span="14">
                  <p>2222</p>
                  <span>成交金额</span>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="12">
              <el-row class="num">
                <el-col :span="10"><img src="./images/turnover.png" alt=""></el-col>
                <el-col :span="14">
                  <p>2222</p>
                  <span>成交金额</span>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </div>
      <!-- 金牌合作商 -->
      <div class="gold-partner">
        <div class="gold-partner-title">
          <h1>金牌合作商</h1>
          <h4>天臣互联网产业平台合作伙伴</h4>
          <div class="gold-partner-items">
            <el-col :span="6" v-for="(o, index) in 5" :key="index" style="height:100%;">
              <el-card style="height:100%;" :body-style="{ padding: '0px', height: '100%' }">
                <img style="height:100%" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                <!-- <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div> -->
              </el-card>
            </el-col>
          </div>
          <div class="change-btns">
            <el-button circle><-</el-button>
            <el-button circle>-></el-button>
          </div>
        </div>
      </div>
      <!-- 发布需求按钮 -->
      <div class="publish-btn">
        <el-button type="primary">发布需求</el-button>
      </div>
      <!-- 服务商大厅 -->
      <div class="service-hall">
        <el-button type="text">服务商大厅 ></el-button>
        <h4>服务12000+客户，沉淀2500+案例</h4>
        <div class="service-types">
          <el-tabs :stretch="true" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane class="w1220" label="用户管理" name="first">
              <el-row type="flex" class="service-row-items" :gutter="20" justify="center">
                <el-col :span="8">
                  <ul class="service-item">
                    <li><img src="./images/gowin.png" alt=""></li>
                    <li>专注品牌策略与视觉设计</li>
                    <li>革文营销策划</li>
                    <p class="line"></p>
                    <li>
                      <el-button type="primary">了解详情 ></el-button>
                    </li>
                  </ul>
                </el-col>
                <el-col :span="8">
                  <ul class="service-item">
                    <li><img src="./images/gowin.png" alt=""></li>
                    <li>专注品牌策略与视觉设计</li>
                    <li>革文营销策划</li>
                    <p class="line"></p>
                    <li>
                      <el-button type="primary">了解详情 ></el-button>
                    </li>
                  </ul>
                </el-col>
                <el-col :span="8">
                  <ul class="service-item">
                    <li><img src="./images/gowin.png" alt=""></li>
                    <li>专注品牌策略与视觉设计</li>
                    <li>革文营销策划</li>
                    <p class="line"></p>
                    <li>
                      <el-button type="primary">了解详情 ></el-button>
                    </li>
                  </ul>
                </el-col>
              </el-row>
              <el-row type="flex" class="service-row-items" :gutter="20" justify="center">
                <el-col :span="8">
                  <ul class="service-item">
                    <li><img src="./images/gowin.png" alt=""></li>
                    <li>专注品牌策略与视觉设计</li>
                    <li>革文营销策划</li>
                    <p class="line"></p>
                    <li>
                      <el-button type="primary">了解详情 ></el-button>
                    </li>
                  </ul>
                </el-col>
                <el-col :span="8">
                  <ul class="service-item">
                    <li><img src="./images/gowin.png" alt=""></li>
                    <li>专注品牌策略与视觉设计</li>
                    <li>革文营销策划</li>
                    <p class="line"></p>
                    <li>
                      <el-button type="primary">了解详情 ></el-button>
                    </li>
                  </ul>
                </el-col>
                <el-col :span="8">
                  <ul class="service-item">
                    <li><img src="./images/gowin.png" alt=""></li>
                    <li>专注品牌策略与视觉设计</li>
                    <li>革文营销策划</li>
                    <p class="line"></p>
                    <li>
                      <el-button type="primary">了解详情 ></el-button>
                    </li>
                  </ul>
                </el-col>
              </el-row>
              <el-row>
                <el-button class="service-more" type="primary">查看更多</el-button>
                <el-button class="service-entering" type="primary">立即入驻</el-button>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <!-- 需求动态 -->
      <div class="demand-dynamic">
        <el-button type="text">需求动态 ></el-button>
        <div class="w1220">
          <el-row type="flex" class="dynamic-row-items" :gutter="20" justify="center">
            <el-col :span="6">
              <ul class="dynamic-item">
                <li>茅台飞天酒包装设计</li>
                <li><img src="./images/line_xuqiu.png" alt=""></li>
                <li>包装设计</li>
                <li>项目预算：<span class="red">￥100000</span></li>
                <li>
                  <el-button type="primary" size="small">了解详情</el-button>
                </li>
              </ul>
            </el-col>
            <el-col :span="6">
              <ul class="dynamic-item">
                <li>茅台飞天酒包装设计</li>
                <li><img src="./images/line_xuqiu.png" alt=""></li>
                <li>包装设计</li>
                <li>项目预算：<span class="red">￥100000</span></li>
                <li>
                  <el-button type="primary" size="small">了解详情</el-button>
                </li>
              </ul>
            </el-col>
            <el-col :span="6">
              <ul class="dynamic-item">
                <li>茅台飞天酒包装设计</li>
                <li><img src="./images/line_xuqiu.png" alt=""></li>
                <li>包装设计</li>
                <li>项目预算：<span class="red">￥100000</span></li>
                <li>
                  <el-button type="primary" size="small">了解详情</el-button>
                </li>
              </ul>
            </el-col>
            <el-col :span="6">
              <ul class="dynamic-item">
                <li>茅台飞天酒包装设计</li>
                <li><img src="./images/line_xuqiu.png" alt=""></li>
                <li>包装设计</li>
                <li>项目预算：<span class="red">￥100000</span></li>
                <li>
                  <el-button type="primary" size="small">了解详情</el-button>
                </li>
              </ul>
            </el-col>
          </el-row>
          <el-row type="flex" class="dynamic-row-items" :gutter="20" justify="center">
            <el-col :span="6">
              <ul class="dynamic-item">
                <li>茅台飞天酒包装设计</li>
                <li><img src="./images/line_xuqiu.png" alt=""></li>
                <li>包装设计</li>
                <li>项目预算：<span class="red">￥100000</span></li>
                <li>
                  <el-button type="primary" size="small">了解详情</el-button>
                </li>
              </ul>
            </el-col>
            <el-col :span="6">
              <ul class="dynamic-item">
                <li>茅台飞天酒包装设计</li>
                <li><img src="./images/line_xuqiu.png" alt=""></li>
                <li>包装设计</li>
                <li>项目预算：<span class="red">￥100000</span></li>
                <li>
                  <el-button type="primary" size="small">了解详情</el-button>
                </li>
              </ul>
            </el-col>
            <el-col :span="6">
              <ul class="dynamic-item">
                <li>茅台飞天酒包装设计</li>
                <li><img src="./images/line_xuqiu.png" alt=""></li>
                <li>包装设计</li>
                <li>项目预算：<span class="red">￥100000</span></li>
                <li>
                  <el-button type="primary" size="small">了解详情</el-button>
                </li>
              </ul>
            </el-col>
            <el-col :span="6">
              <ul class="dynamic-item">
                <li>茅台飞天酒包装设计</li>
                <li><img src="./images/line_xuqiu.png" alt=""></li>
                <li>包装设计</li>
                <li>项目预算：<span class="red">￥100000</span></li>
                <li>
                  <el-button type="primary" size="small">了解详情</el-button>
                </li>
              </ul>
            </el-col>
          </el-row>
        </div>
      </div>
      <!-- 企业支持 -->
      <div class="company-support">
        <el-button type="text">企业支持 ></el-button>
        <h4>帮助企业、印包厂降低采购及生产成本提升效率，为创业青年、设计师提供一片天地！</h4>
        <div class="w1220">
          <el-row type="flex" class="support-row-items" :gutter="20" justify="center">
            <el-col :span="8">
              <ul class="support-item">
                <li><img src="./images/support1.png" alt=""></li>
                <li>技术支持</li>
                <li>提供互联网技术解决方案，订单全流程</li>
              </ul>
            </el-col>
            <el-col :span="8">
              <ul class="support-item">
                <li><img src="./images/support1.png" alt=""></li>
                <li>技术支持</li>
                <li>提供互联网技术解决方案，订单全流程</li>
              </ul>
            </el-col>
            <el-col :span="8">
              <ul class="support-item">
                <li><img src="./images/support1.png" alt=""></li>
                <li>技术支持</li>
                <li>提供互联网技术解决方案，订单全流程</li>
              </ul>
            </el-col>
          </el-row>
          <el-row type="flex" class="support-row-items" :gutter="20" justify="center">
            <el-col :span="8">
              <ul class="support-item">
                <li><img src="./images/support1.png" alt=""></li>
                <li>技术支持</li>
                <li>提供互联网技术解决方案，订单全流程</li>
              </ul>
            </el-col>
            <el-col :span="8">
              <ul class="support-item">
                <li><img src="./images/support1.png" alt=""></li>
                <li>技术支持</li>
                <li>提供互联网技术解决方案，订单全流程</li>
              </ul>
            </el-col>
            <el-col :span="8">
              <ul class="support-item">
                <li><img src="./images/support1.png" alt=""></li>
                <li>技术支持</li>
                <li>提供互联网技术解决方案，订单全流程</li>
              </ul>
            </el-col>
          </el-row>
        </div>  
      </div>
      <div class="service-map">
        <img src="./images/service_map.jpg" alt="">
      </div>
    </el-main>
    <FooterGuide />
  </el-container>
</template>

<script>
import HeaderGuide from '@/components/HeaderGuide/HeaderGuide'
import FooterGuide from '@/components/FooterGuide/FooterGuide'
import HeaderCarousel from '@/components/Carousel/HeaderCarousel'
export default {
  name: "Home",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      activeName: 'first'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  components: {
    HeaderGuide,
    FooterGuide,
    HeaderCarousel
  }
};
</script>

<style lang="scss">
  .el-carousel__button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  // 服务商列表
  .service-types {
    .el-tabs {
      .el-tabs__item {
        font-size: 18px;
        font-weight: 600;
        color: #fffbf7;
        height: 60px;
        line-height: 60px;
      }
      .el-tabs__active-bar {
        width: 100px!important;
        height: 6px;
        margin-left: calc(15.5% - 50px);
      }
    }
  }
</style>

<style scoped lang="scss">
@import '@/assets/style/vars.scss';
.el-container {
  // 中间内容
  .el-main {
    width: 100%;
    // 产品介绍
    .products-wrap {
      width: 100%;
      background-color: #f6f6f6;
      .products {
        color: $blue;
        .product {
          padding-top: 37px;
          padding-bottom: 20px;
          padding-left: 146px;
          .product-type {
            img {
              padding-left: 20px;
            }
            h1 {
              font-size: 30px;
            }
          }
          .product-items {
            li{
              font-size: 18px;
              color: $fontGray;
              line-height: 48px;
            }
          }
        }
      }
    }
    // 数量展示
    .nums-wrap {
      width: 100%;
      background-color: rgb(241, 243, 255);
      padding: 20px 0;
      .num {
        background-color: #fff;
        text-align: center;
        p {
          font-size: 42px;
          padding-top: 11px;
          padding-bottom: 15px;
        }
      }
      .nums-top {
        padding-bottom: 20px;
        .num {
          padding: 31px 0;
        }
      }
      .nums-bottom {
        .num {
          padding: 26px 0;
          .el-col:nth-of-type(1) {
            text-align: right;
          }
          .el-col:nth-of-type(2) {
            text-align: center;
            margin-left: -100px;
            p {
              padding-top: 0px;
              padding-bottom: 5px;
            }
          }
        }
      }
    }
    // 金牌合作商
    .gold-partner {
      text-align: center;
      background: #fff;
      .gold-partner-title {
        h1 {
          font-size: 30px;
          color: $blue;
        }
        h4 {
          font-size: 14px;
          color: $fontGray;
          font-weight: 100;
        }
      }
      .gold-partner-items {
        margin-top: 10px;
        margin-bottom: 20px;
        overflow: hidden;
        width: 100%;
        height: 480px;
      }
    }
    // 发布需求
    .publish-btn {
      margin-top: 14px;
      margin-bottom: 40px;
      text-align: center;
      .el-button {
        width: 160px;
        height: 50px;
      }
    }
    // 服务商大厅
    .service-hall {
      width: 100%;
      text-align: center;
      min-height: 935px;
      box-sizing: border-box;
      padding-top: 37px;
      padding-bottom: 37px;
      background: url(./images/service_hall_bg.png) no-repeat;
      >.el-button{
        font-size: 30px;
        font-weight: 600;
        color: #fffbf7;
      }
      >h4 {
        font-size: 14px;
        font-weight: 500;
        color: #fff;
        margin-top: 10px;
        margin-bottom: 6px;
      }
      // 服务商列表
      .service-types {
        .service-row-items {
          .service-item {
            height: 300px;
            box-sizing: border-box;
            background: #fff;
            margin-bottom: 20px;
            padding: 60px 28px 25px;
            font-size: 18px;
            color: $fontGray;
            li:nth-of-type(2) {
              padding: 16px 0;
            }
            li:nth-of-type(3) {
              font-weight: 600;
              padding-bottom: 35px;
            }
            .line {
              width: 100%;
              height: 1px;
              background-color: #bfbfbf;
            }
            li:nth-of-type(4) {
              padding-top: 35px;
            }
          }
        }
        // 按钮
        .service-more {
          width: 160px;
          height: 50px;
          font-size: 16px;
          background-color: #000;
          border: none;
          margin-right: 58px;
        }
        .service-entering {
          width: 160px;
          height: 50px;
          font-size: 16px;
          background-color: #fff;
          border: none;
          color: #000;
        }
      }
    }
    // 需求动态
    .demand-dynamic {
      width: 100%;
      text-align: center;
      min-height: 700px;
      color: rgb(79, 105, 221);
      box-sizing: border-box;
      padding-top: 37px;
      padding-bottom: 37px;
      overflow-x: hidden;
      background: url(./images/demand_dynamic_bg.png) no-repeat;
      >.el-button{
        margin-bottom: 20px;
        font-size: 30px;
        font-weight: 600;
        color: rgb(79, 105, 221);
      }
      // 服务商列表
      .dynamic-row-items {
        .dynamic-item {
          height: 253px;
          box-sizing: border-box;
          border: solid 2px rgb(79, 105, 221);
          background: #fff;
          margin-bottom: 20px;
          padding: 28px 15px 10px;
          font-size: 18px;
          // <ul class="service-item">
          //         <li><img src="./images/gowin.png" alt=""></li>
          //         <li>专注品牌策略与视觉设计</li>
          //         <li>革文营销策划</li>
          //         <p class="line"></p>
          //         <li>
          //           <el-button type="primary">了解详情 ></el-button>
          //         </li>
          li:nth-of-type(1) {
            font-size: 20px;
            font-weight: 600;
          }
          li:nth-of-type(2) img{
            width: 100%;
          }
          li:nth-of-type(3) {
            font-weight: 600;
            padding-top: 25px;
            font-size: 16px;
          }
          li:nth-of-type(4) {
            padding-top: 35px;
            padding-bottom: 20px;
            font-size: 14px;
            color: $fontGray;
            .red {
              font-size: 30px;
              color: rgb(230, 0, 19);
            }
          }
          li:nth-of-type(5) {
            .el-button {
              background: rgb(79, 105, 221);
            }
          }
        }
      }
    }
    // 企业支持
    .company-support {
      width: 100%;
      text-align: center;
      min-height: 512px;
      box-sizing: border-box;
      padding-top: 37px;
      background: #fdf8f8;
      overflow-x: hidden;
      >.el-button{
        font-size: 30px;
        font-weight: 600;
        color: rgb(248, 93, 93);
      }
      >h4 {
        font-size: 14px;
        font-weight: 500;
        color: $fontGray;
        margin-top: 0;
        margin-bottom: 30px;
      }
      .support-row-items {
        .support-item {
          height: 190px;
          padding-top: 30px;
          box-sizing: border-box;
          font-size: 18px;
          li:nth-of-type(2) {
            font-size: 14px;
            font-weight: 600;
            color: rgb(248, 93, 93);
            padding: 14px 0 10px;
          }
          li:nth-of-type(3) {
            font-size: 12px;
            color: $fontGray;
            padding-bottom: 35px;
          }
          .line {
            width: 100%;
            height: 1px;
            background-color: #bfbfbf;
          }
          li:nth-of-type(4) {
            padding-top: 35px;
          }
        }
      }
    }
    .service-map {
      width: 100%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
  }
}
</style>

