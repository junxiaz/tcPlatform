<template>
  <el-container style="overflow:hidden" direction="vertical">
    <HeaderGuide />
    <el-main>
      <HeaderCarousel />
      <!-- 材料介绍 -->
      <div class="products-wrap">
        <el-row type="flex" class="products w1220" justify="center">
          <el-col :span="8" v-for="(product, index) in products" :key="index">
            <div class="product">
              <a class="product-type" href="#">
                <img :src="product.icon" alt="">
                <h1>{{product.title}} ></h1>
              </a>
              <ul class="product-items">
                <li v-for="(item, index) in product.list" :key="index">{{item.title}}</li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 数据展示 -->
      <div class="nums-wrap">
        <div class="w1220">
          <el-row :gutter="33" type="flex" justify="center" class="nums-top">
            <el-col :span="6" v-for="(item, index) in nums" :key="index" v-if="index<4">
              <div class="num">
                <img :src="item.src" alt="">
                <p>{{item.num}}</p>
                <span>{{item.title}}</span>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="33" class="nums-bottom">
            <el-col :span="12"  v-for="(item, index) in nums" :key="index" v-if="index>=4">
              <el-row class="num">
                <el-col :span="10"><img :src="item.src" alt=""></el-col>
                <el-col :span="14">
                  <p>{{item.num}}</p>
                  <span>{{item.title}}</span>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </div>
      <!-- 金牌合作商 -->
      <div class="gold-partner">
        <Title title="金牌合作商" titleColor="#1e88e5" subTitle="天臣互联网产业平台合作伙伴" subTitleColor="rgb(46,46,46)"></Title>
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
      <!-- 发布需求按钮 -->
      <div class="publish-btn">
        <el-button type="primary">发布需求</el-button>
      </div>
      <!-- 服务商大厅 -->
      <div class="service-hall">
        <Title title="服务商大厅 >" titleColor="#fff" subTitle="服务12000+客户，沉淀2500+案例" subTitleColor="#fff" link="/release"></Title>
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
        <Title title="需求动态 >" titleColor="#4f69dd"></Title>
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
        <Title title="企业支持 >" titleColor="#f85d5d" subTitle="帮助企业、印包厂降低采购及生产成本提升效率，为创业青年、设计师提供一片天地！" subTitleColor="#2e2e2e"></Title>
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
import Title from '@/components/Title/Title'
export default {
  name: "Home",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      activeName: 'first',
      products: [  //特种材料
        {icon: '/static/images/material_icon.png', title: '特种材料', list: [{title: '云膜'}, {title: '全印模'}, {title: '镭射'},]},
        {icon: '/static/images/print_icon.png', title: '包装印刷', list: [{title: '酒类'}, {title: '烟类'}, {title: '化妆品'},]},
        {icon: '/static/images/design_icon.png', title: '设计服务', list: [{title: 'LOGO设计'}, {title: '包装设计'}, {title: '产品效果图'},]},
      ],
      nums: [  //数据展示
        {src: '/static/images/users.png', title: '注册用户数', num: '1234'},
        {src: '/static/images/server.png', title: '入驻服务商数', num: '1234'},
        {src: '/static/images/demand.png', title: '发布需求数', num: '1234'},
        {src: '/static/images/order.png', title: '订单成交数', num: '1234'},
        {src: '/static/images/turnover.png', title: '成交金额', num: '1234'},
        {src: '/static/images/escrow.png', title: '托管金额', num: '1234'},
      ],
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
    HeaderCarousel,
    Title
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
  overflow: hidden;
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
      .gold-partner-items {
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
      // padding-top: 37px;
      padding-bottom: 37px;
      background: url(./images/service_hall_bg.png) no-repeat;
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
      min-height: 698px;
      color: rgb(79, 105, 221);
      box-sizing: border-box;
      padding-bottom: 37px;
      overflow-x: hidden;
      background: url(./images/demand_dynamic_bg.png) no-repeat center center;
      // 服务商列表
      .dynamic-row-items {
        .dynamic-item {
          min-height: 253px;
          box-sizing: border-box;
          border: solid 2px rgb(79, 105, 221);
          background: #fff;
          margin-bottom: 20px;
          padding: 28px 15px 10px;
          font-size: 18px;
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
      background: #fdf8f8;
      overflow-x: hidden;
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

