<template>
  <el-contanier>
    <HeaderGuide />
    <el-main>
      <el-row class="banner">
        <div class="operate-btns">
          <el-button type="primary" style="margin-right:70px;">发布需求</el-button>
          <el-button type="primary">服务商入驻</el-button>
        </div>
      </el-row>
      <!-- 需求动态 -->
      <div class="demand-dynamic">
        <el-button type="text">需求动态 ></el-button>
        <el-row type="flex" class="dynamic-row-items" :gutter="20" justify="center">
          <el-col :span="5">
            <ul class="dynamic-item">
              <li>茅台飞天酒包装设计</li>
              <li>
                <img src="./images/shell.png" alt />
              </li>
              <li>包装设计</li>
              <li>
                项目预算：
                <span class="red">￥100000</span>
              </li>
              <li>
                <el-button type="primary" size="small">了解详情</el-button>
              </li>
            </ul>
          </el-col>
          <el-col :span="5">
            <ul class="dynamic-item">
              <li>茅台飞天酒包装设计</li>
              <li>
                <img src="./images/shell.png" alt />
              </li>
              <li>包装设计</li>
              <li>
                项目预算：
                <span class="red">￥100000</span>
              </li>
              <li>
                <el-button type="primary" size="small">了解详情</el-button>
              </li>
            </ul>
          </el-col>
          <el-col :span="5">
            <ul class="dynamic-item">
              <li>茅台飞天酒包装设计</li>
              <li>
                <img src="./images/shell.png" alt />
              </li>
              <li>包装设计</li>
              <li>
                项目预算：
                <span class="red">￥100000</span>
              </li>
              <li>
                <el-button type="primary" size="small">了解详情</el-button>
              </li>
            </ul>
          </el-col>
          <el-col :span="5">
            <ul class="dynamic-item">
              <li>茅台飞天酒包装设计</li>
              <li>
                <img src="./images/shell.png" alt />
              </li>
              <li>包装设计</li>
              <li>
                项目预算：
                <span class="red">￥100000</span>
              </li>
              <li>
                <el-button type="primary" size="small">了解详情</el-button>
              </li>
            </ul>
          </el-col>
        </el-row>
      </div>
    </el-main>
  </el-contanier>
</template>

<script>
import HeaderGuide from "@/components/HeaderGuide/HeaderGuide";
export default {
  name: "Label",
  components: {
    HeaderGuide
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';
.el-main {
  .banner {
    width: 100%;
    height: 540px;
    background: url(./images/banner3.png) no-repeat center center;
    background-size: cover;
    .operate-btns {
      position: absolute;
      bottom: 128px;
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
      >.el-button{
        margin-bottom: 20px;
        font-size: 30px;
        font-weight: 600;
        color: rgb(79, 105, 221);
      }
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
}
</style>