<template>
  <el-container direction="vertical">
    <HeaderGuide />
    <el-main>
      <!-- 服务商大厅 -->
      <div class="service-hall">
        <div class="service-types">
          <el-tabs v-model="activeName">
            <el-tab-pane label="商品需求" name="first">
              <!-- 商品需求 -->
              <el-row type="flex" class="dynamic-row-items" justify="center">
                <el-col :span="20">
                  <el-form ref="form" size="small" :model="sizeForm" label-width="155px" style="border:solid 1px #c7d3de;">
                    <el-form-item label="活动性质">
                      <el-checkbox-group v-model="sizeForm.type" size="mini">
                        <el-checkbox-button label="美食/餐厅线上活动" name="type"></el-checkbox-button>
                        <el-checkbox-button label="地推活动" name="type"></el-checkbox-button>
                        <el-checkbox-button label="线下主题活动" name="type"></el-checkbox-button>
                      </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="特殊资源">
                      <el-radio-group v-model="sizeForm.resource" size="mini">
                        <el-radio border label="线上品牌商赞助"></el-radio>
                        <el-radio border label="线下场地免费"></el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </el-form>
                </el-col>
              </el-row>

              <!-- <el-form-item label="活动名称">
                <el-input></el-input>
              </el-form-item>-->
              <!-- <el-button size="mini" v-for="tag in tags" :key="tag.name"> {{tag.name}}</el-button> -->
              <div class="demand-dynamic">
                <el-row type="flex" class="dynamic-row-items" :gutter="20" justify="center">
                  <el-col :span="5">
                    <ul class="dynamic-item">
                      <li>茅台飞天酒包装设计</li>
                      <li>
                        <img src="./images/line_xuqiu.png" alt />
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
                        <img src="./images/line_xuqiu.png" alt />
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
                        <img src="./images/line_xuqiu.png" alt />
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
                        <img src="./images/line_xuqiu.png" alt />
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
                <el-row type="flex" class="dynamic-row-items" :gutter="20" justify="center">
                  <el-col :span="5">
                    <ul class="dynamic-item">
                      <li>茅台飞天酒包装设计</li>
                      <li>
                        <img src="./images/line_xuqiu.png" alt />
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
                        <img src="./images/line_xuqiu.png" alt />
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
                        <img src="./images/line_xuqiu.png" alt />
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
                        <img src="./images/line_xuqiu.png" alt />
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
            </el-tab-pane>
            <el-tab-pane label="服务需求" name="second">配置管理</el-tab-pane>
          </el-tabs>
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
  name: "Hall",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      activeName: "first",
      tags: [
        { name: "标签一" },
        { name: "标签一" },
        { name: "标签一" },
        { name: "标签一" },
        { name: "标签一" }
      ],
      sizeForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  components: {
    HeaderGuide,
    FooterGuide
  }
};
</script>

<style lang="scss">
.service-types {
  .el-tabs {
    .el-tabs__item {
      font-size: 16px;
      font-weight: 600;
      color: rgb(46, 46, 46);
      height: 60px;
      line-height: 60px;
    }
    .el-tabs__nav {
      transform: translateX(-50%);
      left: 50%;
    }
  }
}
</style>
<style scoped lang="scss">
@import "@/assets/style/vars.scss";
.el-container {
  // 中间内容
  .el-main {
    width: 100%;
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
          li:nth-of-type(2) img {
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
}
</style>


</style>