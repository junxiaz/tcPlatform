<template>
  <el-container style="overflow:hidden" direction="vertical">
    <HeaderGuide />
    <el-main>
      <HeaderCarousel :bannerHeight="bannerHeight" :imgUrls="imgUrls">
        <template slot="btns">
          <div class="operate-btns">
            <router-link to="/release">
              <el-button type="primary" style="margin-right:70px;">发布需求</el-button>
            </router-link>
            <el-button type="primary">服务商入驻</el-button>
          </div>
        </template>
      </HeaderCarousel>
      <!-- 材料介绍 -->
      <div class="products-wrap">
        <el-row type="flex" class="products w1220" justify="center">
          <el-col :span="8" v-for="(product, index) in products" :key="index">
            <div class="product">
              <span class="product-type">
                <img :src="product.icon" alt="">
                <h1>{{product.title}} ></h1>
              </span>
              <ul class="product-items">
                <router-link tag="li" v-for="(item, index) in product.list" :key="index" :to="item.path">{{item.title}}</router-link>
              </ul>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 统计数据展示 -->
      <div class="nums-wrap">
        <div class="w1220">
          <el-row :gutter="33" type="flex" justify="center" class="nums-top">
            <el-col :span="4" v-for="(item, index) in nums" :key="index" v-if="index<6">
              <div class="num">
                <img :src="item.src" alt="">
                <p>{{item.num}}</p>
                <span>{{item.title}}</span>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="33" class="nums-bottom">
            <el-col :span="12"  v-for="(item, index) in nums" :key="index" v-if="index>=6">
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
          <el-col :span="6" v-for="(item, index) in listPartner" :key="index" style="height:100%;">
            <el-card @mouseenter.native="partnerInfo($event, index)" @mouseleave.native="isActive = false;" ref="partnerInfo" :style="{backgroundImage: 'url(' + item.imgUrl + ')'}" class="partner-card" :body-style="{ padding: '0px', height: '100%'}">
              <div class="partner-info" :class="index===isActive?'show': 'hidden'">
                <p>{{item.enterpriseName}}</p>
                <p>{{item.enterpriseDesc}}</p>
                <a :href="item.enterpriseUrl"><el-button plain>查看更多 ></el-button></a>
              </div>
            </el-card>
          </el-col>
        </div>
        <div class="change-btns">
          <el-button circle @click="pageChange('dec')">←</el-button>
          <el-button circle @click="pageChange('add')">→</el-button>
        </div>
      </div>
      <!-- 发布需求按钮 -->
      <div class="publish-btn">
        <router-link to="/release">
          <el-button type="primary">发布需求</el-button>
        </router-link>
      </div>
      <!-- 服务商大厅 -->
      <div class="service-hall">
        <Title title="服务商大厅 >" titleColor="#fff" subTitle="服务12000+客户，沉淀2500+案例" subTitleColor="#fff" link="/release"></Title>
        <div class="service-types">
          <el-tabs :stretch="true" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane class="w1220" label="印刷企业" name="first">
              <el-row type="flex" class="service-row-items" :gutter="20" justify="left">
                <el-col :span="8" v-for="(item, index) in listClientUser" :key="item.index" v-if="index < 3">
                  <ul class="service-item">
                    <li><img :src="item.logoUrl" alt=""></li>
                    <li>{{item.enterpriseDesc}}</li>
                    <li>{{item.enterpriseName}}</li>
                    <p class="line"></p>
                    <li>
                      <router-link :to="{path: '/service/'}">
                        <el-button type="primary">了解详情 ></el-button>
                      </router-link>
                    </li>
                  </ul>
                </el-col>
              </el-row>
              <el-row type="flex" class="service-row-items" :gutter="20" justify="left">
                <el-col :span="8" v-for="(item, index) in listClientUser" :key="item.index" v-if="index >= 3">
                  <ul class="service-item">
                    <li><img :src="item.logoUrl" alt=""></li>
                    <li>{{item.enterpriseDesc}}</li>
                    <li>{{item.enterpriseName}}</li>
                    <p class="line"></p>
                    <li>
                      <router-link :to="{path: '/service'}">
                        <el-button type="primary">了解详情 ></el-button>
                      </router-link>
                    </li>
                  </ul>
                </el-col>
              </el-row>
              <el-row>
                <el-button class="service-more" type="primary">查看更多</el-button>
                <router-link to="/login/register">
                  <el-button class="service-entering" type="primary">立即入驻</el-button>
                </router-link>
              </el-row>
            </el-tab-pane>
            <el-tab-pane class="w1220" label="设计人员" name="second">
              <el-row type="flex" class="service-row-items" :gutter="20" justify="left">
                <el-col :span="8" v-for="(item, index) in listClientUser" :key="item.index" v-if="index < 3">
                  <ul class="service-item">
                    <li><img :src="item.logoUrl" alt=""></li>
                    <li>{{item.enterpriseDesc}}</li>
                    <li>{{item.enterpriseName}}</li>
                    <p class="line"></p>
                    <li>
                      <el-button type="primary">了解详情 ></el-button>
                    </li>
                  </ul>
                </el-col>
              </el-row>
              <el-row type="flex" class="service-row-items" :gutter="20" justify="left">
                <el-col :span="8" v-for="(item, index) in listClientUser" :key="item.index" v-if="index >= 3">
                  <ul class="service-item">
                    <li><img :src="item.logoUrl" alt=""></li>
                    <li>{{item.enterpriseDesc}}</li>
                    <li>{{item.enterpriseName}}</li>
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
            <el-tab-pane class="w1220" label="青年创客" name="third">
              <el-row type="flex" class="service-row-items" :gutter="20" justify="left">
                <el-col :span="8" v-for="(item, index) in listClientUser" :key="item.index" v-if="index < 3">
                  <ul class="service-item">
                    <li><img :src="item.logoUrl" alt=""></li>
                    <li>{{item.enterpriseDesc}}</li>
                    <li>{{item.enterpriseName}}</li>
                    <p class="line"></p>
                    <li>
                      <el-button type="primary">了解详情 ></el-button>
                    </li>
                  </ul>
                </el-col>
              </el-row>
              <el-row type="flex" class="service-row-items" :gutter="20" justify="left">
                <el-col :span="8" v-for="(item, index) in listClientUser" :key="item.index" v-if="index >= 3">
                  <ul class="service-item">
                    <li><img :src="item.logoUrl" alt=""></li>
                    <li>{{item.enterpriseDesc}}</li>
                    <li>{{item.enterpriseName}}</li>
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
          </el-tabs>
        </div>
      </div>
      <!-- 需求动态 -->
      <div class="demand-dynamic">
        <Title title="需求动态 >" titleColor="#4f69dd"></Title>
        <div class="w1220">
          <el-row type="flex" class="dynamic-row-items" :gutter="20" justify="left">
            <el-col :span="6" v-for="(item,index) in listNewDemand" :key="item.id" v-if="index<4">
              <ul class="dynamic-item">
                <li>{{item.demandTitle}}</li>
                <li><img src="./images/line_xuqiu.png" alt=""></li>
                <li>{{item.demandTypeDesc}}</li>
                <li>项目预算：<span class="red">{{item.capitalCount}}</span></li>
                <li>
                  <el-button type="primary" size="small"  @click="reqOrder(item.id)">了解详情</el-button>
                </li>
              </ul>
            </el-col>
          </el-row>
          <el-row type="flex" class="dynamic-row-items" :gutter="20" justify="left">
            <el-col :span="6" v-for="(item,index) in listNewDemand" :key="item.id" v-if="index>4">
              <ul class="dynamic-item">
                <li>{{item.demandTitle}}</li>
                <li><img src="./images/line_xuqiu.png" alt=""></li>
                <li>{{item.demandTypeDesc}}</li>
                <li>项目预算：<span class="red">{{item.capitalCount}}</span></li>
                <li>
                  <el-button type="primary" size="small"  @click="reqOrder(item.id)">了解详情</el-button>
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
            <el-col :span="8" v-if="index < 3" v-for="(support, index) in supports" :key="index">
              <ul class="support-item">
                <li><img :src="support.icon" alt=""></li>
                <li>{{support.title}}</li>
                <li>{{support.subTitle}}</li>
              </ul>
            </el-col>
          </el-row>
          <el-row type="flex" class="support-row-items" :gutter="20" justify="center">
            <el-col :span="8" v-if="index >= 3" v-for="(support, index) in supports" :key="index">
              <ul class="support-item">
                <li><img :src="support.icon" alt=""></li>
                <li>{{support.title}}</li>
                <li>{{support.subTitle}}</li>
              </ul>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="service-map">
        <img src="./images/service_map.png" alt="">
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
      // 轮播数据
      bannerHeight: '620',
      imgUrls: [
        {id: 1, idView: require('./images/banner1.png')},
        {id: 2, idView: require('./images/banner2.jpg')},
        {id: 3, idView: require('./images/banner3.png')},
      ],
      activeIndex: '1',
      activeIndex2: '1',
      activeName: 'first',
      products: [  //特种材料
        {icon: require('./images/material_icon.png'), title: '特种材料', list: [{title: '云膜', path: '/special/cloud'}, {title: '全印模', path: '/special/full'}, {title: '镭射', path: '/special/laser'},]},
        {icon: require('./images/print_icon.png'), title: '包装印刷', list: [{title: '酒类', path: '/package/wine'}, {title: '烟类', path: '/package/smoke'}, {title: '化妆品', path: '/package/makeup'},]},
        {icon: require('./images/design_icon.png'), title: '设计服务', list: [{title: 'LOGO设计', path: '/design/logo'}, {title: '包装设计', path: '/design/package'}, {title: '产品效果图', path: '/design/pro'},]},
      ],
      nums: [],
      supports: [  //企业支持
        {icon: require('./images/support1.png'), title: '技术支持', subTitle: '提供互联网技术解决方案，订单全流程' },
        {icon: require('./images/support2.png'), title: '费用可控', subTitle: '价格透明，费用清晰' },
        {icon: require('./images/support3.png'), title: '品类齐全', subTitle: '超过1500余种云膜产品，包装耗材等订制品' },
        {icon: require('./images/support4.png'), title: '全国服务', subTitle: '服务范围覆盖300多个城市和1600个县城' },
        {icon: require('./images/support5.png'), title: '服务保障', subTitle: '先行赔付，仓储物流代运营' },
        {icon: require('./images/support6.png'), title: '设计师团队', subTitle: '7*24小时服务不间断，专属团队低价护航' },
      ],
      demandParams: {
        demandStatus: 0,
        pageNum: 1,
        pageSize: 8,
      },
      clientUserParams: {
        userType: 1,
        pageNum: 1,
        pageSize: 6,
      },
      partnerParams: {
        userType: 0,
        pageNum: 1,
        pageSize: 4,
      },
      listNewDemand: [],
      listClientUser: [],
      listPartner: [],
      partnerTotal: '',
      isActive: false,
      data: {},
    };
  },
  methods: {
    // 金牌合作商翻页
    pageChange(ope) {
      if(ope == 'add') {
        if(this.partnerTotal > this.partnerParams.pageNum) {
          this.partnerParams.pageNum++
          this.reqlistPartner()
        } else {
          this.$message({
          message: '不能再加了哦',
          type: 'warning'
          });
        }
      } else if (ope == 'dec') {
        if(this.partnerParams.pageNum > 1) {
          this.partnerParams.pageNum--
          this.reqlistPartner()
        } else {
          this.$message({
          message: '再减就没有数据了哦',
          type: 'warning'
          });
        }
      }
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    // 服务商tab切换
    handleClick(tab, event) {
      if(tab.name == 'first') {
        this.clientUserParams.userType = 1;
        this.reqlistClientUser()
      } else if(tab.name == 'second') {
        this.clientUserParams.userType = 2;
        this.reqlistClientUser()
      } else if(tab.name == 'third') {
        this.clientUserParams.userType = 3;
        this.reqlistClientUser()
      }
    },
    // 获取最新需求
    reqListNewDemand() {
      this.$api.demand.reqListNewDemand(this.demandParams).then(res => {
        this.listNewDemand = res.datas.records
      })
    },
    // 获取服务商
    reqlistClientUser() {
      this.$api.user.listClientUser(this.clientUserParams).then(res => {
        this.listClientUser = res.datas.records
      })
    },
    // 获取金牌合作商
    reqlistPartner() {
      this.$api.user.listClientUser(this.partnerParams).then(res => {
        this.listPartner = res.datas.records
        this.partnerTotal = Math.ceil(res.datas.total / this.partnerParams.pageSize)
      })
    },
    // 统计数据显示
    reqStatistics() {
      this.$api.user.reqStatistics().then(res => {
        let data = res.statisticsDTO;
        this.nums=[
            {"title":"终端用户数",num:data.clientCount,src: require('./images/endUser.png')},
            {"title":"印刷企业数",num:data.printingCount,src: require('./images/printingEnterprise.png')},
            {"title":"青年创客数",num:data.entrepreneurCount,src: require('./images/youngPioneer.png')},
            {"title":"设计人员数",num:data.designerCount,src: require('./images/designer.png')},
            {"title":"发布需求数",num:data.releaseDemandCount,src: require('./images/releaseDemand.png')},
            {"title":"订单成交数",num:data.transactionOrderCount,src: require('./images/orderTransaction.png')},
            {"title":"成交金额",num:data.gmvCount,src: require('./images/turnover.png')},
            {"title":"托管金额",num:data.depositCount,src: require('./images/escrow.png')},
          ];
      })
    },
    // 点击需求进入详情
    reqOrder(id) {
      this.$router.push({
        path: `/order/${id}`,
      })
    },
    // 金牌合作商鼠标移入信息显示
    partnerInfo(event, index) {
      this.isActive = index;
    }
  },
  mounted() {
    this.reqListNewDemand()
    this.reqlistClientUser()
    this.reqlistPartner()
    this.reqStatistics()
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
    // 轮播上的操作按钮
    .operate-btns {
      position: absolute;
      bottom: 24%;
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
              cursor: pointer;
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
        .el-col {
          position: relative;
          .partner-card {
            height:100%;
            text-align:center;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
            padding: 0;
            margin: 0;
            overflow: hidden;
            .partner-info {
              width: 100%;
              height: 100%;
              position: absolute;
              text-align: center;
              color: #fff;
              background: rgba($color: #000000, $alpha: .7);
              box-sizing: border-box;
              padding-top: 140px;
              line-height: 3.5;
              &.show {
                transition: all .5s ease;
                opacity: 1;
              }
              &.hidden {
                opacity: 0;
                transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
              }
              .el-button {
                background: rgba($color: #000000, $alpha: 0);
                color: #fff;
              }
            }
          }
        }
      }
      .change-btns {
        .el-button {
          padding: 2px 5px 8px;
          border-width: 2px;
          font-weight: 900;
          font-size: 28px;
          vertical-align: middle;
          background-color: #fdf8f8;
        }
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
            li:first-child img {
              height: 40px;
              max-width: 100%;
            }
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

