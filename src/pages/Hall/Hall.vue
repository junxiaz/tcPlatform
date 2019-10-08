<template>
  <el-container direction="vertical">
    <HeaderGuide />
    <el-main>
      <!-- 需求大厅 -->
      <div class="demand-hall">
        <div class="demand-types">
          <el-tabs v-model="activeName">
            <el-tab-pane label="商品需求" name="first">
              <!-- 商品需求 -->
              <el-row type="flex" class="statu-row-items" justify="center">
                <el-col :span="20">
                  <el-form ref="form" size="mini" :model="sizeForm" label-width="155px">
                    <el-form-item label="活动性质">
                      <el-checkbox-group v-model="sizeForm.type">
                        <el-checkbox-button label="美食/餐厅线上活动" name="type"></el-checkbox-button>
                        <el-checkbox-button label="地推活动" name="type"></el-checkbox-button>
                        <el-checkbox-button label="线下主题活动" name="type"></el-checkbox-button>
                      </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="特殊资源">
                      <el-radio-group v-model="sizeForm.resource">
                        <el-radio border label="线上品牌商赞助"></el-radio>
                        <el-radio border label="线下场地免费"></el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </el-form>
                </el-col>
              </el-row>
              <el-row type="flex" class="sort-row-items" justify="center">
                <el-col :span="20">
                  <el-radio-group v-model="radio1" @change="sortChange" size="mini">
                    <el-radio-button label="上海">综合</el-radio-button>
                    <el-radio-button label="北京">
                      北京
                      <i class="el-icon-arrow-down"></i>
                    </el-radio-button>
                    <el-radio-button label="广州">
                      广州
                      <i class="el-icon-arrow-down"></i>
                    </el-radio-button>
                  </el-radio-group>
                  <!-- <el-select
                    class="map-select"
                    v-model="value"
                    placeholder="全国"
                    style="width:100px; margin-left:40px;"
                    size="mini"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select> -->
                  <div class="map">
                      <img src="./images/map.png" alt="">
                  <el-select
                    class="map-select"
                    v-model="value"
                    placeholder="全国"
                    size="mini"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                  </div>
                  <div style="margin-top: 15px;">
                    <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                        <el-select v-model="select" slot="prepend" placeholder="请选择">
                        <el-option label="餐厅名" value="1"></el-option>
                        <el-option label="订单号" value="2"></el-option>
                        <el-option label="用户电话" value="3"></el-option>
                        </el-select>
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                    </div>
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
      radio1: "上海",
      tags: [
        { name: "标签一" },
        { name: "标签一" },
        { name: "标签一" },
        { name: "标签一" },
        { name: "标签一" }
      ],
      sizeForm: {
        type: [],
        resource: ""
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭北京烤鸭"
        }
      ],
      value: ""
    };
  },
  methods: {
    sortChange() {
      console.log("1");
    }
  },
  components: {
    HeaderGuide,
    FooterGuide
  }
};
</script>

<style lang="scss">
.demand-types {
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
  .el-form {
    border: solid 1px #c7d3de;
    .el-form-item {
      border-bottom: solid 1px #c7d3de;
      margin: 0;
      padding: 0;
      vertical-align: middle;
      .el-form-item__label {
        padding: 10px 0;
        text-align: center;
        border-right: solid 1px #c7d3de;
        margin-right: 25px;
      }
      .el-form-item__content {
        padding-top: 10px;
        margin: 0;
      }
    }
    .el-form-item:last-child {
      border-bottom: none;
    }
  }
//   .map-select {
//     .el-input__inner {
//       background: #fff url(./images/map.png) no-repeat 20px center;
//       text-align: center;
//       padding: 0;
//     }
//     i {
//       display: none;
//     }
//   }
  .map {
    height: 28px;
    width: 100px;
    border: 1px solid #e0e0e0;
    line-height: 28px;
    text-align: center;
    display: inline-block;
    vertical-align: top;
    cursor: pointer;
    margin-left: 40px;
    font-size: 12px;
    color: #333333;
    background-color: #ffffff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
      img {
        width: 9px;
        height: 13px;
        vertical-align: middle;
      }
      .el-select {
        display: inline-block;
        font-size: 12px;
        color: #333333;
        // margin-left: 5px;
        position: static;
        // width: 86px!important;
        .el-input__inner {
            border: none;
            padding: 0;
            width: inherit;
        }
        i {
            display: none;
        }
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
    .demand-hall {
      .demand-types {
        .sort-row-items {
          margin-top: 20px;
          margin-bottom: 20px;
          .el-col {
            background-color: rgb(235, 238, 240);
            padding: 10px;
          }
        }
      }
    }
    // 需求
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