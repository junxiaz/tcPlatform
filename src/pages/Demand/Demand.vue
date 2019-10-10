<template>
  <el-container direction="vertical">
    <HeaderGuide />
    <el-container>

    <el-main>
      <!-- 需求 -->
      <div class="demands">
        <div class="w1220">
          <div class="demand-item">
            <h2>需求1</h2>
            <el-divider></el-divider>
            <el-row class="demand-info">
              <el-col :span="10">需求内容：<span>设计服务  食品包装/水果包装/包装盒/保健品</span></el-col>
              <el-col :span="4">附件：<span>天臣云膜.doc</span><div class="grid-content bg-purple-light"></div></el-col>
              <el-col :span="10">联系方式：<span>13578942315</span><div class="grid-content bg-purple"></div></el-col>
            </el-row>
            <div class="demand-steps">
              <el-steps :space="200" :active="4" finish-status="success" align-center>
                <el-step title="需求已发布"></el-step>
                <el-step title="审核通过"></el-step>
                <el-step title="招标"></el-step>
                <el-step title="招标"></el-step>
                <el-step title="招标"></el-step>
                <el-step title="招标"></el-step>
                <el-step title="招标"></el-step>
                <el-step title="招标"></el-step>
                <el-step title="招标"></el-step>
              </el-steps>
            </div>
          </div>
          <div class="demand-item">
            <h2>需求1</h2>
            <el-divider></el-divider>
            <el-row class="demand-info">
              <el-col :span="10">需求内容：<span>设计服务  食品包装/水果包装/包装盒/保健品</span></el-col>
              <el-col :span="4">附件：<span>天臣云膜.doc</span><div class="grid-content bg-purple-light"></div></el-col>
              <el-col :span="10">联系方式：<span>13578942315</span><div class="grid-content bg-purple"></div></el-col>
            </el-row>
            <div class="demand-steps">
              <el-steps :space="200" :active="2" finish-status="success" align-center>
                <el-step title="需求已发布"></el-step>
                <el-step title="审核通过"></el-step>
                <el-step title="招标"></el-step>
                <el-step title="招标"></el-step>
                <el-step title="招标"></el-step>
                <el-step title="招标"></el-step>
                <el-step title="招标"></el-step>
                <el-step title="招标"></el-step>
                <el-step title="招标"></el-step>
              </el-steps>
            </div>
          </div>
        </div>
      </div>
    </el-main>
    </el-container>
    <FooterGuide />
  </el-container>
</template>

<script>
import HeaderGuide from "@/components/HeaderGuide/HeaderGuide";
import FooterGuide from "@/components/FooterGuide/FooterGuide";
export default {
  name: "Demand",
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
    HeaderGuide,
    FooterGuide
  }
};
</script>

<style lang="scss">
.el-step__head.is-success {
  border-color: #ff6f00;
  .el-step__icon.is-text {
    background-color: #ff6f00;
  }
}
.el-step__title {
  line-height: 60px;
}
.el-step__title.is-success {
  font-size: 16px;
  color: #ef5350;
}
.el-step__icon-inner.is-status {
  color: #fff;
  font-size: 34px;
}
.el-step__icon {
  width: 42px;
  height: 42px;
}
.el-step.is-horizontal .el-step__line {
  top: 21px;
}
</style>

<style scoped lang="scss">
@import "@/assets/style/vars.scss";
.el-container {
  // 中间内容
  .el-main {
    width: 100%;
    background-color: #f6f6f6; 
    .demands {
      .demand-item {
        background-color: #fff;
        padding: 20px 34px;
        padding-right: 90px;
        margin-top: 35px;
        h2 {
          font-size: 18px;
          color: $fontGray;
          border-left: solid 5px $blue;
          padding-left: 5px;
        }
        .el-divider {
            margin-top: 9px;
            margin-bottom: 30px;
        }
        .demand-info {
          font-size: 12px;
          font-weight: 600;
          .el-col span {
            font-weight: 500;
          }
          .el-col:nth-of-type(2) span {
            color: $blue;
          }
        }
        .demand-steps {
          border: solid 1px #bfbfbf;
          padding: 39px 44px 0;
          height: 140px;
          box-sizing: border-box;
          margin-top: 9px;
        }
      }
    }
  }
}
</style>


</style>