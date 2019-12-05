<template>
  <el-container direction="vertical">
    <HeaderGuide />
    <el-main>
      <div class="w1220">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/hall' }">需求大厅</el-breadcrumb-item>
          <el-breadcrumb-item>需求详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="order">
          <el-row class="title">{{demand.demand_title}}</el-row>
          <el-row class="content" :gutter="70">
            <el-col class="order-img" :span="8">
              <div></div>
            </el-col>
            <el-col class="order-items" :span="16">
              <el-row :gutter="10">
                <el-col class="col" :span="6">
                  <div>
                    <p>{{demand.capitalCount}}</p>
                    <p>项目预算</p>
                  </div>
                </el-col>
                <el-col class="col" :span="6">
                  <div>
                    <p>{{demand.depositCount}}</p>
                    <p>托管资金</p>
                  </div>
                </el-col>
                <el-col class="col" :span="7">
                  <div>
                    <p>{{demand.endTime}}</p>
                    <p>项目周期</p>
                  </div>
                </el-col>
                <el-col class="col" :span="5">
                  <div>
                    <p>{{demand.tenderReal-0}}/{{demand.tenderPlan}}</p>
                    <p>已投标位</p>
                  </div>
                </el-col>
              </el-row>
              <el-row class="row">
                <el-col :span="4">需求号</el-col>
                <el-col :span="20">{{demand.id}}</el-col>
              </el-row>
              <el-row class="row">
                <el-col :span="4">发布时间</el-col>
                <el-col :span="20">{{demand.startTime}}</el-col>
              </el-row>
              <el-row class="row">
                <el-col :span="4">需求范围</el-col>
                <el-col :span="20">{{demand.provinceName}}</el-col>
              </el-row>
              <el-row class="row">
                <el-col :span="4">需求类型</el-col>
                <el-col :span="20">{{demand.demandTypeDesc}}</el-col>
              </el-row>
              <el-row class="row">
                <el-button type="primary" plain>立即投标</el-button>
                <router-link to="/release">
                  <el-button type="primary" plain>我有类似需求</el-button>
                </router-link>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <el-row class="desc">
          <el-row class="title">
            <p>需求详情</p>
          </el-row>
          <el-divider></el-divider>
          <el-row class="desc-content">{{demand.otherDesc}}</el-row>
        </el-row>
        <el-row class="desc">
          <el-row class="title">
            <p>雇主详情</p>
          </el-row>
          <el-divider></el-divider>
          <el-row class="desc-content">
            <i class="el-icon-phone"></i>
            <span class="phone-desc">{{demand.winTenderTel}}</span>
            <i class="el-icon-s-custom"></i>
          </el-row>
          <p class="odfi-num">
            该需求可接受
            <span class="bwNumOne">{{demand.tenderPlan}}</span> 位服务商投标，目前还剩
            <span class="bwNumOne">{{demand.tenderPlan-demand.tenderReal}}</span> 个名额
          </p>
          <p class="odfi-desc">违法违规类需求，如刷单、炒信、违规降权等将可能损害到您的合法权益，请拒绝参与。如发现类似问题，请向忽米网举报</p>
        </el-row>
      </div>
    </el-main>
    <FooterGuide />
  </el-container>
</template>

<script>
import HeaderGuide from "@/components/HeaderGuide/HeaderGuide";
import FooterGuide from "@/components/FooterGuide/FooterGuide";
export default {
  name: "Order",
  data() {
    return {
      demand: {}
    };
  },
  methods: {
    reqDemand() {
      const data = {
        id: this.$route.params.id
      }
      this.$api.demand.reqDemand(data).then(res => {
        this.demand = res
      })
    }
  },
  mounted() {
    this.reqDemand()
  },
  components: {
    HeaderGuide,
    FooterGuide
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/vars.scss";
.el-container {
  background-color: #f6f6f6;
  .w1220 {
    margin-top: 60px;
    margin-bottom: 20px;
    .el-breadcrumb {
      padding-top: 20px;
      padding-bottom: 20px;
    }
    .order {
      background: #fff;
      padding: 25px 50px 40px 30px;
      .title {
        font-size: 24px;
        color: #333;
        margin-bottom: 20px;
      }
      .content {
        width: 100%;
        height: 320px;
        .order-img {
          height: 100%;
          div {
            width: 100%;
            height: 100%;
            background: url("/static/images/material_icon.png");
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
          }
        }
        .order-items {
          > .el-row {
            margin-bottom: 20px;
            .col div {
              height: 108px;
              padding-top: 25px;
              border: 1px solid #eee;
              text-align: center;
              margin: 5px;
              p:nth-of-type(1) {
                font-size: 30px;
                color: $blue;
              }
              p:nth-of-type(2) {
                font-size: 14px;
                color: #999;
              }
            }
          }
          .row {
            // line-height: 2.14;
            font-size: 14px;
            .el-col:nth-of-type(1) {
              color: #999;
            }
            .el-col:nth-of-type(2) {
              color: #666;
            }
          }
        }
      }
    }
    .desc {
      background: #fff;
      margin-top: 20px;
      padding: 26px 25px 36px 23px;
      min-height: 208px;
      box-sizing: border-box;
      .title {
        line-height: 16px;
        font-size: 16px;
        color: #333;
        p {
          padding-left: 10px;
          border-left: solid 2px $blue;
        }
      }
      .desc-content {
        margin: 15px 0;
        line-height: 2;
        color: #999;
        font-size: 14px;
        .phone-desc {
          margin: 0 10px;
        }
      }
      .odfi-num {
        font-size: 16px;
        margin: 26px 0 10px;
        .bwNumOne {
          color: #ff7919;
        }
      }
      .odfi-desc {
        font-size: 14px;
      }
    }
  }
}
</style>
