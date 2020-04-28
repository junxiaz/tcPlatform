<template>
  <el-container direction="vertical">
    <el-main>
      <a class="afixed" href name="top"></a>
      <div style="height:152px;"></div>
      <div class="top-wrap">
        <el-row class="top">
          <div class="w1220">
            <img src="./images/logo.png" alt />
          </div>
        </el-row>
        <el-row class="menu">
          <ul class="w1220">
            <li>
              <a href="#top">首页</a>
            </li>
            <li>
              <a href="#profile">企业介绍</a>
            </li>
            <li>
              <a href="#proCase">产品案例</a>
            </li>
            <li>
              <a href="#honor">资质荣誉</a>
            </li>
            <li>
              <a href="#serCase">服务案例</a>
            </li>
            <li>
              <a href="#evaluation">交易评价</a>
            </li>
            <a>
              <i class="el-icon-star-off"></i>收藏服务商
            </a>
          </ul>
        </el-row>
      </div>
      <!-- 轮播图 -->
      <HeaderCarousel :bannerHeight="bannerHeight" :imgUrls="imgUrls"></HeaderCarousel>
      <el-row class="profile-wrap">
        <a class="afixed" href name="profile"></a>
        <TitleService title="企业介绍" />
        <el-row class="profile" :gutter="30">
          <el-col :span="11">
            <img src="./images/techsun.png" alt />
          </el-col>
          <el-col :span="13">
            <h1>天臣集团</h1>
            <p>天臣集团创立于1999年，由天臣防伪、天臣控股等8家公司组成，总部位于上海，产业布局跨北京、深圳、长沙、成都等地区，集团经营领域涉足防伪溯源、特种包装材料、人工智能和新能源四大高科技产业。其中，防伪产业历经20年专注发展，拥有国内外专利100多项，具有强大的防伪溯源解决方案能力，是国内防伪领域知名品牌企业。</p>
            <p>天臣集团致力于为客户提供特种包装和防伪溯源整体解决方案，是贵州茅台酒19年来三代防伪溯源系统供应商，是公安部居民身份证、公安部全国警官证、四川五粮液防伪溯源、法国轩尼诗防伪溯源、剑南春、广西中烟等诸多国内外著名品牌和机构的长期合作伙伴。</p>
            <p>一路风雨、一路艰辛、随客户同成长、用防伪正天下 !</p>
          </el-col>
        </el-row>
      </el-row>
      <div class="w1220">
        <a class="afixed" href name="proCase"></a>
        <TitleService title="产品案例" />
        <el-row class="case-wrap" :gutter="20">
          <el-col :span="6">
            <div>
              <img src="./images/case1.png" alt="产品案例" />
              <p>贵州茅台酒防伪溯源</p>
              <p>RFID方位胶帽</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
              <img src="./images/case2.png" alt="产品案例" />
              <p>法国轩尼诗防伪溯源</p>
              <p>3D云膜+RFID+二维码标签</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
              <img src="./images/case3.png" alt="产品案例" />
              <p>金谷醇全印模包装</p>
              <p>光刻猫眼+模压全息</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
              <img src="./images/case4.png" alt="产品案例" />
              <p>四川五粮液防伪标签</p>
              <p>RFID防伪标签</p>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="honor-wrap">
        <div>
          <a class="afixed" href name="honor"></a>
          <TitleService title="资质荣誉" />
          <div class="honor-swiper">
            <ul class="honor" ref="carousel">
              <li>
                <img src="./images/honour1.png" alt />
                <p>茅台酒优秀供方</p>
              </li>
              <li>
                <img src="./images/honour2.png" alt />
                <p>2009福布斯中国潜力企业</p>
              </li>
              <li>
                <img src="./images/honour3.png" alt />
                <p>中国防伪行业协会常务理事单位</p>
              </li>
              <li>
                <img src="./images/honour4.png" alt />
                <p>国家高新企业</p>
              </li>
              <li>
                <img src="./images/honour5.png" alt />
                <p>中国防伪行业协会定点单位</p>
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
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>天臣集团</el-breadcrumb-item>
              </el-breadcrumb>
              <p>实力&amp;信用</p>
            </el-row>
            <el-row class="cn-main">
              <el-row class="nums">
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
                </el-col>
                <el-col :span="6">
                  <p>￥38499</p>
                  <p>交易</p>
                </el-col>
                <el-col :span="6">
                  <p>￥38499</p>
                  <p>交易</p>
                </el-col>
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
                      <i class="el-icon-success"></i>企业认证
                    </span>
                  </div>
                  <div>
                    <b>身份认证</b>
                    <span>
                      <i class="el-icon-success"></i>企业认证
                    </span>
                    <span>
                      <i class="el-icon-success"></i>企业认证
                    </span>
                  </div>
                  <div>
                    <b>身份认证</b>
                    <span>
                      <i class="el-icon-success"></i>企业认证
                    </span>
                    <span>
                      <i class="el-icon-success"></i>企业认证
                    </span>
                  </div>
                  <p>
                    近一个月退款率：
                    <span>0.00%</span>
                  </p>
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
                    <img src="./images/logo1.png" alt />
                  </div>
                  <el-button type="primary">雇佣TA为我服务</el-button>
                  <br />
                  <el-button type="primary" plain>雇佣TA为我服务</el-button>
                </div>
              </el-col>
              <el-col class="cn-right" :span="15">
                <h1>上海天臣集团</h1>
                <div class="rating">
                  <b>服务等级</b>
                  <span>
                    <i class="el-icon-star-on"></i>
                    <i class="el-icon-star-on"></i>
                    <i class="el-icon-star-on"></i>
                  </span>
                </div>
                <div class="label">
                  <b>技能标签</b>
                  <span>包装设计</span>
                  <span>标签设计</span>
                </div>
                <p class="address">上海市松江区光华路509号</p>
                <p class="slogan">成为全球防伪智能包装引领者</p>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>

      <div class="serCase-wrap">
        <div>
          <a class="afixed" href name="serCase"></a>
          <TitleService title="服务案例" />
          <div class="swiper">
            <ul ref="carousel1">
              <li>
                <img src="./images/service1.png" alt />
                <div class="infos">
                  <h1>云膜包装</h1>
                  <p>服务类型：3D云膜防伪包装</p>
                  <p>服务客户：九和堂</p>
                </div>
                <div class="price">
                  <img src="./images/logo2.png" alt />天臣集团
                  <span>￥38499</span>
                </div>
              </li>
              <li>
                <img src="./images/service2.png" alt />
                <div class="infos">
                  <h1>云膜包装</h1>
                  <p>服务类型：3D云膜防伪包装</p>
                  <p>服务客户：九和堂</p>
                </div>
                <div class="price">
                  <img src="./images/logo2.png" alt />天臣集团
                  <span>￥38499</span>
                </div>
              </li>
              <li>
                <img src="./images/service3.png" alt />
                <div class="infos">
                  <h1>云膜包装</h1>
                  <p>服务类型：3D云膜防伪包装</p>
                  <p>服务客户：九和堂</p>
                </div>
                <div class="price">
                  <img src="./images/logo2.png" alt />天臣集团
                  <span>￥38499</span>
                </div>
              </li>
              <li>
                <img src="./images/service4.png" alt />
                <div class="infos">
                  <h1>云膜包装</h1>
                  <p>服务类型：3D云膜防伪包装</p>
                  <p>服务客户：九和堂</p>
                </div>
                <div class="price">
                  <img src="./images/logo2.png" alt />天臣集团
                  <span>￥38499</span>
                </div>
              </li>
              <li>
                <img src="./images/service5.png" alt />
                <div class="infos">
                  <h1>云膜包装</h1>
                  <p>服务类型：3D云膜防伪包装</p>
                  <p>服务客户：九和堂</p>
                </div>
                <div class="price">
                  <img src="./images/logo2.png" alt />天臣集团
                  <span>￥38499</span>
                </div>
              </li>
            </ul>
          </div>
          <i class="el-icon-arrow-left pre" @click="carousel1('pre')"></i>
          <i class="el-icon-arrow-right next" @click="carousel1('next')"></i>
        </div>
      </div>

      <div class="evaluation-wrap w1220">
        <a class="afixed" href name="evaluation"></a>
        <TitleService title="交易评价" />

        <div class="evaluation-box">
          <div class="e-top">
            <table>
              <tbody>
                <tr>
                  <td>
                    <img class="icon" src="./images/appraise_icon.png" alt/>评分
                  </td>
                  <td>
                    <b>平均好评率：<span>100.00%</span></b>
                    <div class="pt5">共有1个任务被评价</div>
                  </td>
                  <td>
                    <b>平均任务质量</b>
                    <div>
                      <el-rate
                        v-model="value"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}分">
                      </el-rate>
                    </div>
                  </td>
                  <td>
                    <b>平均响应速度</b>
                    <div>
                      <el-rate
                        v-model="value"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}分">
                      </el-rate>
                    </div>
                  </td>
                  <td>
                    <b>平均服务态度</b>
                    <div>
                      <el-rate
                        v-model="value"
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
                <tr>
                  <td>
                    <div class="r1 clearfix">
                      <div class="fl">
                        <el-rate
                          v-model="value"
                          disabled
                          show-score
                          text-color="#ff9900"
                          score-template="{value}分">
                        </el-rate>
                      </div>
                      <div class="fr money">￥20000.00</div>
                    </div>
                    <div class="r1 clearfix">
                      <div class="fl username"></div>
                    </div>
                    <div class="r1 clearfix">
                      <div class="fl time">2019-06-06 14:26:31</div>
                      <div class="fr cat">保温杯外观设计</div>
                    </div>
                    <p>久形团队在外观设计方面水平极高，初稿出得很快，也不需要修改什么，工作效率高，领导很满意，感谢！</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <el-pagination
              background
              layout="prev, pager, next"
              :page-size="1"
              :total="5"
              @current-change="handleCurrentChange">
            </el-pagination>
          </div>
        </div>
      </div>

      <div class="servier-wrap w1220">
        <TitleService title="推荐服务商" />
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
    </el-main>
    <FooterGuide />
  </el-container>
</template>

<script>
import FooterGuide from "@/components/FooterGuide/FooterGuide";
import HeaderCarousel from "@/components/Carousel/HeaderCarousel";
import TitleService from "@/components/Title/TitleService";
export default {
  name: "",
  data() {
    return {
      value: 5,
      // 轮播数据
      bannerHeight: "460",
      imgUrls: [
        { id: 1, idView: require("./images/banner1.png") },
        { id: 2, idView: require("./images/banner2.png") }
      ],
      honorTrans: 0, //资质荣誉位移距离
      serCaseTrans: 0 //服务案例位移距离
    };
  },
  methods: {
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
    }
  },
  components: {
    FooterGuide,
    HeaderCarousel,
    TitleService
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
  .afixed {
    position: relative;
    top: -120px;
    height: 0;
    display: block;
  }
  .top-wrap {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9;
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
    padding: 0 10% 70px;
    margin: 0 auto;
    background-color: #f5f5f5;
    .profile {
      padding-top: 50px;
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
          padding-bottom: 25px;
          text-align: center;
          font-size: 14px;
          color: #464646;
          p:first-child {
            font-size: 18px;
            color: #4830fc;
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
              width: 80px;
              font-size: 14px;
              font-weight: normal;
            }
            span {
              display: inline-block;
              padding: 3px 10px;
              width: 88px;
              background: rgba(248, 250, 254, 1);
              border: 1px solid rgba(3, 155, 229, 1);
              border-radius: 6px;
              margin-right: 5px;
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
            img {
              vertical-align: middle;
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
          text-align: left;
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
          }
          .infos {
            padding-left: 20px;
            h1 {
              font-size: 18px;
              font-weight: normal;
              color: #2f2e2e;
            }
            p {
              font-size: 12px;
              color: #7e7e7e;
              padding-bottom: 13px;
            }
          }
          .price {
            border-top: solid 1px #e9e9e9;
            padding-left: 22px;
            font-size: 12px;
            color: #464646;
            height: 50px;
            line-height: 50px;
            position: relative;
            img {
              vertical-align: middle;
              width: 22px;
              height: 22px;
              margin-right: 9px;
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
</style>