<template>
  <el-container direction="vertical">
    <el-main>
      <el-row id="top">
        <!-- 顶部组件 -->
        <el-row class="w1220">
          <el-col :span="12" align="left">
            <router-link :to="{ path: '/' }">
              <i :style="{'backgroundImage':'url('+homeImg+')'}" class="el-icon-my-home" ></i>
              <!-- <i class="el-icon-my-home"></i> -->
              <span style="margin-left:1px;">Hello，欢迎来到天臣产业互联网平台！</span>
            </router-link>
          </el-col>

          <!-- <el-col :span="12" align="right">
            <el-link :underline="false" @click="signout">退出登录</el-link> |
            <el-link :underline="false">网站导航 <i class="el-icon-arrow-right el-icon--right"></i></el-link>
          </el-col> -->
        </el-row>

      </el-row>
      <!-- 首页 -->
      <a class="afixed" href name="top" id="anchor-0"></a>
      <div style="height:182px;"></div>
      <div class="top-wrap">
        <el-row class="top">
          <div class="w1220">
            <img v-if="serInfo.enterpriseInfo" :src="serInfo.topPic" alt />
          </div>
        </el-row>
        <el-row class="menu">
          <ul class="w1220">
            <li v-for="(item, index) in navData" :key="index"><a href="javascript:void(0)"  @click="goAnchor('#anchor-'+index)">{{item}}</a></li>
            <!-- <a>
              <i class="el-icon-star-off"></i>收藏服务商
            </a> -->
          </ul>
        </el-row>
      </div>
      <!-- 轮播图 -->
      <HeaderCarousel :imgUrls="serInfo.headPicList"></HeaderCarousel>
      <!-- 企业介绍 -->
      <a class="afixed" href name="profile" id="anchor-1"></a>
      <el-row class="profile-wrap">
        <TitleService title="企业介绍" />
        <el-row class="profile" :gutter="30">
          <img v-for="item in serInfo.introducePicList" :key="item.id" :src="item.idView" alt="">
          <!-- <el-col :span="11">
            <img :src="serInfo.introducePicList[0]" alt />
          </el-col>
          <el-col :span="13">
            <h1>{{serInfo.enterpriseInfo.enterpriseName}}</h1>
            <p>天臣集团创立于1999年，由天臣防伪、天臣控股等8家公司组成，总部位于上海，产业布局跨北京、深圳、长沙、成都等地区，集团经营领域涉足防伪溯源、特种包装材料、人工智能和新能源四大高科技产业。其中，防伪产业历经20年专注发展，拥有国内外专利100多项，具有强大的防伪溯源解决方案能力，是国内防伪领域知名品牌企业。</p>
            <p>天臣集团致力于为客户提供特种包装和防伪溯源整体解决方案，是贵州茅台酒19年来三代防伪溯源系统供应商，是公安部居民身份证、公安部全国警官证、四川五粮液防伪溯源、法国轩尼诗防伪溯源、剑南春、广西中烟等诸多国内外著名品牌和机构的长期合作伙伴。</p>
            <p>一路风雨、一路艰辛、随客户同成长、用防伪正天下 !</p>
          </el-col> -->
        </el-row>
      </el-row>
      <!-- 产品案例 -->
      <a class="afixed" href name="proCase" id="anchor-2"></a>
      <div class="w1220">
        <TitleService title="产品案例" />
        <el-row class="case-wrap" :gutter="20">
          <img v-for="item in serInfo.productPicList" :key="item.id" :src="item.idView" alt="">
        </el-row>
      </div>
      <!-- 资质荣誉 -->
      <a class="afixed" href name="honor" id="anchor-3"></a>
      <div class="honor-wrap">
        <div>
          <TitleService title="资质荣誉" />
          <div class="honor-swiper">
            <ul class="honor" ref="carousel">
              <li v-for="item in serInfo.honorPicList" :key="item.id">
                <img :src="item.idView" alt="荣誉">
                <!-- <p>{{item.title}}</p> -->
              </li>
            </ul>
          </div>
          <i class="el-icon-arrow-left pre" @click="carousel('pre')"></i>
          <i class="el-icon-arrow-right next" @click="carousel('next')"></i>
        </div>
      </div>
      <div class="w1220">
        <el-row class="companyNums-wrap" :gutter="15">
          <el-col :span="12">
            <el-row class="cn-top">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item style="cursor:pointer;" :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item v-if="serInfo.enterpriseInfo">{{serInfo.enterpriseInfo.enterpriseName}}</el-breadcrumb-item>
              </el-breadcrumb>
              <p>实力&amp;信用</p>
            </el-row>
            <el-row class="cn-main">
              <el-row class="nums">
                <el-col :span="6">
                  <p>{{serInfo.totalTransaction}}</p>
                  <p>交易总额</p>
                </el-col>
                <el-col :span="6">
                  <p>{{serInfo.transactionScore}}</p>
                  <p>交易评分</p>
                </el-col>
                <el-col :span="6">
                  <p>{{serInfo.winPercentage}}%</p>
                  <p>中标转化率</p>
                </el-col>
                <el-col :span="6">
                  <p>{{serInfo.winNums}}</p>
                  <p>中标总次数</p>
                </el-col>
                <!-- <el-col :span="6">
                  <p>￥38499</p>
                  <p>交易</p>
                </el-col>
                <el-col :span="6">
                  <p>￥38499</p>
                  <p>交易</p>
                </el-col>
                <el-col :span="6">
                  <p>￥38499</p>
                  <p>交易</p>
                </el-col>
                <el-col :span="6">
                  <p>￥38499</p>
                  <p>交易</p>
                </el-col> -->
              </el-row>
              <el-row class="txts">
                <el-col :span="8">
                  <div>
                    <img src="./images/believe.png" alt />
                  </div>
                </el-col>
                <el-col :span="16">
                  <div>
                    <b>身份认证</b>
                    <span>
                      <i class="el-icon-success"></i>企业认证
                    </span>
                    <span>
                      <i class="el-icon-success"></i>资金账户
                    </span>
                  </div>
                  <div>
                    <b>账号安全</b>
                    <span>
                      <i class="el-icon-success"></i>手机绑定
                    </span>
                  </div>
                  <div>
                    <b>诚信保证</b>
                    <span>
                      <i class="el-icon-success"></i>保证完成
                    </span>
                    <span>
                      <i class="el-icon-success"></i>保证售后
                    </span>
                    <span>
                      <i class="el-icon-success"></i>保证原创
                    </span>
                  </div>
                  <!-- <p>
                    近一个月退款率：
                    <span>0.00%</span>
                  </p> -->
                </el-col>
              </el-row>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-row class="cn-top">
              <p>企业名称</p>
            </el-row>
            <el-row class="cn-main">
              <el-col class="cn-left" :span="9">
                <div>
                  <div>
                    <img v-if="serInfo.enterpriseInfo" :src="serInfo.enterpriseInfo.logoUrl" alt />
                  </div>
                  <router-link :to="{ path: '/release' }">
                    <el-button type="primary">立即发布</el-button>
                  </router-link>
                  <!-- <br />
                  <el-button type="primary" plain>雇佣TA为我服务</el-button> -->
                </div>
              </el-col>
              <el-col class="cn-right" :span="15">
                <h1 v-if="serInfo.enterpriseInfo">{{serInfo.enterpriseInfo.enterpriseName}}</h1>
                <div class="rating">
                  <b>服务等级</b>
                  <span>
                    <i class="el-icon-star-on"></i>
                    <i class="el-icon-star-on"></i>
                    <i class="el-icon-star-on"></i>
                    <i class="el-icon-star-on"></i>
                    <i class="el-icon-star-on"></i>
                  </span>
                </div>
                <div class="label">
                  <b>企业类型</b>
                  <span v-if="serInfo.clientUserDTO">{{serInfo.clientUserDTO.userTypeName}}</span>
                </div>
                <p class="address" v-if="serInfo.enterpriseInfo">{{serInfo.enterpriseInfo.enterpriseAddress}}</p>
                <p class="slogan" v-if="serInfo.enterpriseInfo">{{serInfo.enterpriseInfo.enterpriseDesc}}</p>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <!-- 服务案例 -->
      <a class="afixed" href name="serCase" id="anchor-4"></a>
      <div class="serCase-wrap">
        <div>
          <TitleService title="服务案例" />
          <div class="swiper">
            <ul ref="carousel1">
              <li v-for="item in serCase" :key="item.id">
                <img :src="item.imgUrl" alt />
                <div class="infos">
                  <h1>{{item.demandTitle}}</h1>
                  <p>服务类型：{{item.demandTypeDesc}}</p>
                  <p>服务客户：{{item.custName}}</p>
                </div>
                <div class="price">
                  <img v-if="serInfo.enterpriseInfo" :src="serInfo.enterpriseInfo.logoUrl" alt="公司图片" />
                  <p v-if="serInfo.enterpriseInfo">{{serInfo.enterpriseInfo.enterpriseName}}</p>
                  <span>￥{{item.capitalCount}}</span>
                </div>
              </li>
            </ul>
          </div>
          <i class="el-icon-arrow-left pre" @click="carousel1('pre')"></i>
          <i class="el-icon-arrow-right next" @click="carousel1('next')"></i>
        </div>
      </div>
      <!-- 服务评价 -->
      <a class="afixed" href name="evaluation" id="anchor-5"></a>
      <div class="evaluation-wrap w1220">
        <TitleService title="交易评价" />

        <div class="evaluation-box">
          <div class="e-top">
            <table>
              <tbody>
                <tr>
                  <td><img class="icon" src="./images/appraise_icon.png" alt/>评论</td>
                  <td>
                    <b>平均好评率：<span>{{serScores.goodPercentage}}%</span></b>
                    <div class="pt5">共有{{total}}个任务被评价</div>
                  </td>
                  <td v-if="serScores">
                    <b>平均任务质量</b>
                    <div>
                      <el-rate
                        v-model="serScores.quality"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}分">
                      </el-rate>
                    </div>
                  </td>
                  <td v-if="serScores">
                    <b>平均响应速度</b>
                    <div>
                      <el-rate
                        v-model="serScores.speed"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}分">
                      </el-rate>
                    </div>
                  </td>
                  <td v-if="serScores">
                    <b>平均服务态度</b>
                    <div>
                      <el-rate
                        v-model="serScores.service"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}分">
                      </el-rate>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="e-body">
            <table>
              <tbody>
                <tr v-for="item in serComment" :key="item.id">
                  <td>
                    <div class="r1 clearfix">
                      <div class="fl">
                        <template ></template>
                        <el-rate
                          :value= "Number(((item.quality+item.speed+item.service)/3).toFixed(2))"
                          disabled
                          show-score
                          text-color="#ff9900"
                          score-template="{value}分">
                        </el-rate>
                      </div>
                      <div class="fr money">￥{{item.capitalCount}}</div>
                    </div>
                    <div class="r1 clearfix">
                      <div class="fl username"></div>
                    </div>
                    <div class="r1 clearfix">
                      <div class="fl time">{{item.createTime}}</div>
                      <div class="fr cat">{{item.demandTitle}}</div>
                    </div>
                    <p>{{item.comment}}</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <el-pagination
              background
              layout="prev, pager, next"
              :page-size="serCaseParams.pageSize"
              :current-page.sync="serCaseParams.pageNum"
              :total="total"
              @current-change='handleCurrentChange'>
            </el-pagination>
          </div>
        </div>
      </div>

      <div class="servier-wrap w1220">
        <TitleService title="推荐服务商" />
        <Servicer />
      </div>
    </el-main>
    <FooterGuide />
  </el-container>
</template>

<script>
import FooterGuide from "@/components/FooterGuide/FooterGuide";
import HeaderCarousel from "@/components/Carousel/HeaderCarousel";
import TitleService from "@/components/Title/TitleService";
import Servicer from '@/components/Servicer/Servicer';
export default {
  name: "",
  data() {
    return {
      homeImg: require('@/assets/images/home_nor.png'),
      navData: ['首页', '企业介绍', '产品案例', '资质荣誉', '服务案例', '交易评价'],
      // 轮播数据
      honorTrans: 0, //资质荣誉位移距离
      serCaseTrans: 0, //服务案例位移距离
      serInfo: '', //服务商信息
      serCase: '', //服务案例信息
      serComments: '', //服务评价
      serScores: '', //服务评分
      serComment: '', //服务评价
      total: 0, //评论总条数
      serCaseParams: {
        pageNum: 1,
        pageSize: 5,
        userId: this.$route.params.id,
      }
    };
  },
  methods: {
    //切换页码
    handleCurrentChange(val) {
      this.serCaseParams.pageNum = val;
      this.reqServiceComment()
    },
    goAnchor(selector) {
      var anchor = this.$el.querySelector(selector)
      document.documentElement.scrollTop = anchor.offsetTop
    },
    carousel(param) {
      if (param == "next") {
        if (this.$refs.carousel.children.length - 4 > this.honorTrans / -300) {
          this.honorTrans = this.honorTrans - 300;
          this.$refs.carousel.style.transform =
            "translateX(" + this.honorTrans + "px)";
        }
      } else if (param == "pre") {
        if (this.honorTrans) {
          this.honorTrans = this.honorTrans + 300;
          console.log(this.honorTrans);
          this.$refs.carousel.style.transform =
            "translateX(" + this.honorTrans + "px)";
        }
      }
    },
    carousel1(param) {
      if (param == "next") {
        if (
          this.$refs.carousel1.children.length - 4 >
          this.serCaseTrans / -300
        ) {
          this.serCaseTrans = this.serCaseTrans - 300;
          this.$refs.carousel1.style.transform =
            "translateX(" + this.serCaseTrans + "px)";
        }
      } else if (param == "pre") {
        if (this.serCaseTrans) {
          this.serCaseTrans = this.serCaseTrans + 300;
          console.log(this.serCaseTrans);
          this.$refs.carousel1.style.transform =
            "translateX(" + this.serCaseTrans + "px)";
        }
      }
    },
    reqService() {
      const data = {
        userId: this.$route.params.id
      }
      this.$api.demand.reqService(data).then(res => {
        this.serInfo = res
      })
    },
    reqServiceCase() {
      const data = {
        userId: this.$route.params.id
      }
      this.$api.demand.reqServiceCase(data).then(res => {
        this.serCase = res.datas.records
      })
    },
    reqServiceComment() {
      this.$api.demand.reqServiceComment(this.serCaseParams).then(res => {
        this.serComment = res.datas.records
        this.serComments = res.datas
        this.total = res.datas.total
        this.serScores = res.demandCommentDTO
      })
    },
  },
  mounted() {
    this.reqService();
    this.reqServiceCase();
    this.reqServiceComment();
  },
  components: {
    FooterGuide,
    HeaderCarousel,
    TitleService,
    Servicer,
  }
};
</script>

<style lang="scss">
.evaluation-wrap {
  .el-pagination.is-background {
    text-align: center;
  }
  .el-pagination.is-background .btn-prev, .el-pagination.is-background .btn-next, .el-pagination.is-background .el-pager li {
    background-color: #fff;
    border: solid 1px #D2D2D2;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background: #ec6941;
    border-color: #FD6E30;
  }
}
</style>

<style lang="scss" scoped>
@import "@/assets/style/vars.scss";
.el-main {
  background-color: #f8f8f8;
  #top{
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    height:30px;
    z-index: 99;
    background:#eee;
    color:#666;
    font:12px/30px "";
    .el-icon-my-home{
      width:14px;
      height:14px;
      display: inline-block;
      background-repeat: no-repeat;
      background-position: center 0;
      background-size:100%;
      line-height:30px;
      vertical-align:text-bottom;
    }
    a{font:12px/30px "";vertical-align: baseline;}
  }
  .afixed {
    position: relative;
    top: -150px;
    height: 0;
    display: block;
  }
  .top-wrap {
    position: fixed;
    left: 0;
    top: 30px;
    z-index: 99;
    width: 100%;
    .top {
      background: linear-gradient(
        0deg,
        rgba(189, 189, 189, 1) 0%,
        rgba(250, 250, 250, 1) 100%
      );
      img {
        display: inline-block;
        height: 56px;
        margin: 17px 0;
      }
    }
    .menu {
      height: 60px;
      line-height: 60px;
      background-color: #2e2e2e;
      font-size: 14px;
      color: #fff;
      ul {
        overflow: hidden;
        li {
          float: left;
          padding: 0 25px;
          a {
            display: inline-block;
            padding: 0 20px;
            &:hover {
              background-color: #1e88e5;
            }
          }
        }
        > a {
          float: right;
          i {
            padding-right: 7px;
          }
        }
      }
    }
  }
  .profile-wrap {
    // padding: 0 10% 70px;
    margin: 0 auto;
    background-color: #f5f5f5;
    overflow: hidden;
    .profile {
      // padding-top: 50px;
      >img {
        display: block;
        margin: 0 auto;
      }
      .el-col {
        overflow: hidden;
        img {
          height: 550px;
          width: auto;
        }
        h1 {
          font-size: 36px;
          color: #f65e61;
          line-height: 1.5;
          margin: 0;
        }
        p {
          font-size: 22px;
          color: #464646;
          line-height: 1.5;
          padding-top: 22px;
        }
      }
    }
  }
  .case-wrap {
    margin-bottom: 70px;
    overflow: hidden;
    >img {
      display: block;
      margin: 0 auto;
    }
    .el-col {
      > div {
        padding: 9px;
        background: #fff;
        font-size: 20px;
        font-weight: bold;
        color: #464646;
        text-align: center;
        line-height: 2;
        box-shadow: 2px 2px 5px 0px rgba(107, 107, 107, 0.29);
      }
      img {
        height: 190px;
        width: auto;
      }
      p:last-child {
        font-size: 14px;
      }
    }
  }
  .honor-wrap {
    overflow: hidden;
    > div {
      position: relative;
      width: 1220px;
      margin: 0 auto;
      background: url(./images/bg_horour.png) no-repeat;
      .honor-swiper {
        overflow: hidden;
      }
      .honor {
        transition-duration: 0.5s;
        width: 500%;
        height: 292px;
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
        padding: 10px;
        li {
          text-align: center;
          float: left;
          width: 300px;
          height: 292px;
          box-sizing: border-box;
          padding: 0 10px;
          overflow: hidden;
          img {
            height: 190px;
          }
          p {
            font-size: 18px;
            color: #464646;
            line-height: 2;
          }
        }
      }
      i {
        font-size: 60px;
        color: #959595;
        position: absolute;
        top: 57%;
        margin-top: -30px;
        cursor: pointer;
        &.pre {
          left: -50px;
        }
        &.next {
          right: -50px;
        }
      }
    }
  }
  .companyNums-wrap {
    .cn-top {
      height: 95px;
      padding-top: 40px;
      p {
        font-size: 22px;
        color: #2f2e2e;
        line-height: 2;
      }
    }
    .cn-main {
      background-color: #fff;
      padding: 36px;
      min-height: 350px;
      .nums {
        .el-col {
          padding-top: 20px;
          padding-bottom: 40px;
          text-align: center;
          font-size: 14px;
          color: #464646;
          p:first-child {
            font-size: 18px;
            color: #4830fc;
            line-height: 2;
          }
        }
      }
      .txts {
        > .el-col:first-child {
          div {
            width: 140px;
            height: 140px;
            line-height: 140px;
            border: solid 1px #dcdcdc;
            text-align: center;
            img {
              vertical-align: middle;
            }
          }
        }
        > .el-col:last-child {
          > div {
            font-size: 12px;
            color: #464646;
            padding-bottom: 20px;
            b {
              display: inline-block;
              width: 70px;
              font-size: 14px;
              font-weight: normal;
            }
            span {
              display: inline-block;
              padding: 3px 8px;
              width: 88px;
              background: rgba(248, 250, 254, 1);
              border: 1px solid rgba(3, 155, 229, 1);
              border-radius: 6px;
              margin-right: 3px;
              i {
                font-size: 12px;
                color: rgba(3, 155, 229, 1);
                padding-right: 2px;
              }
            }
          }
          > p {
            font-size: 14px;
            color: #464646;
            span {
              color: #ea3e1a;
            }
          }
        }
      }
      .cn-left {
        > div {
          width: 168px;
          text-align: center;
          > div {
            width: 168px;
            height: 168px;
            line-height: 168px;
            border: solid 1px #dcdcdc;
            overflow: hidden;
            img {
              vertical-align: middle;
              max-width: 100%;
            }
          }
        }
        .el-button {
          margin-top: 14px;
        }
      }
      .cn-right {
        font-size: 14px;
        h1 {
          font-size: 24px;
          font-weight: normal;
          color: #2f2e2e;
        }
        .rating {
          padding-bottom: 25px;
          b {
            font-weight: normal;
            color: #7e7e7e;
            padding-right: 13px;
          }
          span {
            color: #fecb6e;
            i {
              font-size: 20px;
              margin-left: -4px;
              // background-color: #f00;
            }
          }
        }
        .label {
          font-size: 14px;
          b {
            font-weight: normal;
            padding-right: 13px;
            color: #7e7e7e;
          }
          span {
            color: #6a6969;
            padding: 3px 6px;
            background: rgba(248, 250, 254, 1);
            border: 1px solid rgba(191, 191, 191, 1);
            border-radius: 4px;
          }
        }
        .address {
          font-size: 14px;
          color: #464646;
          border-bottom: solid 1px #d2d2d2;
          padding-top: 17px;
          padding-bottom: 12px;
        }
        .slogan {
          color: #6a6969;
          padding-top: 16px;
        }
      }
    }
  }
  .serCase-wrap {
    overflow: hidden;
    > div {
      position: relative;
      width: 1220px;
      margin: 0 auto;
      .swiper {
        overflow: hidden;
      }
      ul {
        transition-duration: 0.5s;
        width: 500%;
        height: 380px;
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
        li {
          text-align: center;
          float: left;
          width: 290px;
          // height: 380px;
          box-sizing: border-box;
          margin-right: 20px;
          overflow: hidden;
          background-color: #fff;
          box-shadow: 2px 2px 5px 0px rgba(107, 107, 107, 0.3);
          img {
            height: 214px;
            max-width: 100%;
            width: 100%;
          }
          .infos {
            padding-left: 20px;
            text-align: left;
            h1 {
              font-size: 18px;
              font-weight: normal;
              color: #2f2e2e;
            }
            p {
              font-size: 12px;
              color: #7e7e7e;
              padding-bottom: 13px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
          .price {
            text-align: left;
            border-top: solid 1px #e9e9e9;
            padding-left: 22px;
            font-size: 12px;
            color: #464646;
            height: 50px;
            line-height: 50px;
            position: relative;
            img {
              vertical-align: top;
              width: 22px;
              height: 22px;
              margin-right: 9px;
              margin-top: 14px;
            }
            p {
              display: inline-block;
              width: 60%;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            span {
              font-size: 18px;
              color: #ec3c00;
              position: absolute;
              right: 15px;
            }
          }
        }
      }
      i {
        font-size: 60px;
        color: #959595;
        position: absolute;
        top: 57%;
        margin-top: -30px;
        cursor: pointer;
        &.pre {
          left: -50px;
        }
        &.next {
          right: -50px;
        }
      }
    }
  }

  .evaluation-wrap {
    .evaluation-box {
      margin: 0 auto;
      padding: 30px;
      background: #fff;
      .e-top table {
        height: 85px;
        background-color: #f8fafe;
        width: 100%;
        tr td {
          text-align: center;
        }
        .icon {
          vertical-align: middle;
          margin-right: 6px;
        }
        .pt5 {
          padding-top: 5px;
        }
      }
      .e-body {
        margin-top: 10px;
        table {
          width: 100%;
          tr td {
            padding: 20px 0;
            .icon {
              width: 71px;
              height: 71px;
              object-fit: contain;
              display: block;
              margin-right: 28px;
            }
            .fl {
              float: left;
            }
            .fr {
              float: right;
            }
            .money {
              font-size: 18px;
              color: #fc9153;
            }
            .time {
              font-size: 12px;
              color: #666666;
            }
            .username {
              font-size: 14px;
              color: #333333;
            }
            .cat {
              font-size: 14px;
              color: #666666;
            }
            p {
              font-size: 13px;
              color: #333333;
              padding-top: 8px;
            }
          }
        }
      }
    }
  }

  .servier-wrap {
    background-color: #f8f8f8;
    text-align: center;
    padding-bottom: 50px;
  }

}
</style>