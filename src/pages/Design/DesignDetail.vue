<template>
  <el-container direction="vertical">
    <HeaderGuide />
    <el-main>
      <div class="design-detail-wrap">
        <div class="w1220">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/hall' }">云膜包装设计</el-breadcrumb-item>
            <el-breadcrumb-item>服务详情</el-breadcrumb-item>
          </el-breadcrumb>
          <el-row class="design-top">
            <el-col :span="13" class="design-img"><img src="./images/pic.png" alt=""></el-col>
            <el-col :span="11" class="design-text">
              <h1>云膜设计＋基础款套餐</h1>
              <h2>提供两款设计方案，免费修改</h2>
              <el-row class="price">
                <el-col :span="12">售价：<span>¥6500</span></el-col>
                <el-col :span="12">市场价：<span>¥11800</span></el-col>
              </el-row>
              <el-row class="format">产品规格：<el-button type="primary" plain>基础款</el-button></el-row>
              <el-row class="design-btns">
                <el-button>我想要此服务</el-button>
                <el-button type="primary">在线咨询</el-button>
              </el-row>
              <el-row class="regular" :gutter="10">
                <el-col :span="6"><div>总监操刀设计</div></el-col>
                <el-col :span="6"><div>保障设计原创</div></el-col>
                <el-col :span="6"><div>产品按时交付</div></el-col>
                <el-col :span="6"><div>平台担保品质</div></el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row class="design-contain" :gutter="20">
            <el-col :span="19">
              <p>服务详情</p>
              <p><img src="./images/details.png" alt=""></p>
            </el-col>
            <el-col :span="5">
              <img src="./images/text.png" alt="">
            </el-col>
          </el-row>
        </div>
      </div>    
    </el-main>
    <FooterGuide />
  </el-container>
</template>

<script>
import HeaderGuide from "@/components/HeaderGuide/HeaderGuide";
import FooterGuide from "@/components/FooterGuide/FooterGuide";
export default {
  name: "",
  components: {
    HeaderGuide,
    FooterGuide
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';
.el-container {
  .el-main {
    width: 100%;
    margin-top: 60px;
    .design-detail-wrap {
      width: 100%;
      background-color: #f8f8f8;
      .el-breadcrumb {
        padding-top: 22px;
        padding-bottom: 22px;
        font-size:14px;
        font-weight:400;
        color:rgba(46,46,46,1);
      }
      .design-top {
        background-color: #fff;
        padding: 30px 50px 75px 20px;
        margin-bottom: 24px;
        .design-img {
          img {
            width: 100%;
            height: 100%;
            display: block;
          }
        }
        .design-text {
          padding-left: 75px;
          h1 {
            font-size:30px;
            font-weight:bold;
            color:rgba(39,138,226,1);
            padding-bottom: 18px;
            margin: 0;
          }
          h2 {
            font-size: 16px;
            font-weight: 500;
            color: #7f7f7f;
            padding-bottom: 20px;
            border-bottom: solid 1px #dcdcdc;
            margin: 0;
            margin-bottom: 18px;
          }
          .price {
            font-size: 18px;
            color: #2e2e2e;
            padding-bottom: 16px;
            .el-col:nth-of-type(1) {
              span {
                font-size: 30px;
                font-weight: bold;
                color: #F65E61;
              }
            }
            .el-col:nth-of-type(2) {
              span {
                font-size: 30px;
                font-weight: bold;
                color: #2e2e2e;
              }
            }
          }
          .format {
            font-size: 24px;
            color: #2e2e2e;
            padding-bottom: 20px;
          }
          .design-btns {
            padding-bottom: 20px;
            border-bottom: solid 1px #dcdcdc;
            margin-bottom: 10px;
          }
          .regular {
            .el-col {
              >div {
                padding: 10px 20px;
                width: 100px;
                background-color: #F8F5F3;
                font-size: 14px;
                line-height: 26px;
                text-align: center;
                color: #2e2e2e;
              }
            }
          }
        }
      }
      .design-contain {
        p:nth-of-type(1) {
          background-color: #fff;
          font-size: 14px;
          color: #2e2e2e;
          border-bottom: solid 1px #dcdcdc;
          padding-left: 12px;
          height: 54px;
          line-height: 54px;
        }
        p:nth-of-type(2) {
          background-color: #fff;
          padding: 0 62px 34px;
          margin-bottom: 38px;
        }
      }
    }
  }
}
</style>