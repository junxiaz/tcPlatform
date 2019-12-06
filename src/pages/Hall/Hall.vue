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
              <div class="w1220">
                <el-row type="flex" class="statu-row-items" justify="center">
                  <el-col :span="24">
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
                  <el-col :span="24">
                    <el-radio-group v-model="radio1" @change="sortChange" size="small">
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
                      size="small"
                    >
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                    </div>
                    <div style="float:right;">
                      <el-input placeholder="请输入内容" size="small" class="input-with-select">
                          <el-button slot="append">搜索</el-button>
                      </el-input>
                      </div>
                  </el-col>
                </el-row>
              </div>

              <div class="demand">
                <div class="w1220">
                  <el-row type="flex" class="demand-row-items" :gutter="20" justify="left">
                    <el-col :span="6" v-for="(item,index) in listData" :key="item.id" v-if="index<4">
                      <ul class="demand-items">
                        <li>{{item.demandTitle}}</li>
                        <li>{{item.demandTypeDesc}}<span :class="item.demandStatus==0&&item.demandStatus!==5?'reviewing': 'audited' || item.demandStatus==5?'completed': 'audited'">{{item.demandStatusDesc}}</span></li>
                        <li>需求地区：{{item.provinceName}}</li>
                        <li>截止时间：{{item.endTime}}</li>
                        <li>投标状态：<el-progress :percentage="Math.floor(item.tenderReal/item.tenderPlan*100)" :stroke-width="12"></el-progress></li>
                        <li><el-link type="primary" :underline="false" @click="reqOrder(item.id)">查看详情</el-link></li>
                      </ul>
                    </el-col>
                  </el-row>
                  <el-row type="flex" class="demand-row-items" :gutter="20" justify="left">
                    <el-col :span="6" v-for="(item,index) in listData" :key="item.id" v-if="index>=4">
                      <ul class="demand-items">
                        <li>{{item.demandTitle}}</li>
                        <li>{{item.demandTypeDesc}}<span :class="item.demandStatus==0&&item.demandStatus!==5?'reviewing': 'audited' || item.demandStatus==5?'completed': 'audited'">{{item.demandStatusDesc}}</span></li>
                        <li>需求地区：{{item.provinceName}}</li>
                        <li>截止时间：{{item.endTime}}</li>
                        <li>投标状态：<el-progress :percentage="Math.floor(item.tenderReal/item.tenderPlan*100)" :stroke-width="12"></el-progress></li>
                        <li><el-link type="primary" :underline="false" @click="reqOrder(item.id)">查看详情</el-link></li>
                      </ul>
                    </el-col>
                  </el-row>
                  <el-pagination
                    background
                    layout="prev, pager, next"
                    :page-size="params.pageSize"  
                    :total="total"
                    @current-change="handleCurrentChange">
                  </el-pagination>
                </div>
              </div>
            </el-tab-pane>
            <!-- <el-tab-pane label="服务需求" name="second">配置管理</el-tab-pane> -->
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
      value: "",
      params: {
        pageNum: 1,
        pageSize: 8,
        token: sessionStorage.getItem('token'),
        userId: sessionStorage.getItem('userId')
      },
      total: 0,
      listData: []
    };
  },
  methods: {
    //页码
    handleCurrentChange(val) {
      this.params.pageNo = val;
      this.initEasyTable();
    },
    sortChange() {
      console.log("1");
    },
    format(percentage) {
      // console.log(`${per}/${pers}`)
      // return percentage === 100 ? '投标结束' : `${per}/${pers}`;
      let per = percentage.toFixed(2)*100
      console.log(per)
      return percentage === 100 ? '投标结束' : `${per}%`;
    },
    reqListDemand() {
      this.$api.demand.reqListDemand(this.params).then(res => {
        this.listData = res.datas.records
        this.total = res.datas.total
      })
    },
    reqOrder(id) {
      console.log(id)
      this.$router.push({
        path: `/order/${id}`,
      })
    }
  },
  mounted() {
    this.reqListDemand()
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
      transform: translateX(-50%)!important;
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
  .input-with-select .el-input-group__append {
    background-color: rgb(30, 136, 229);
    color: #fff;
  }
  .map {
    height: 32px;
    width: 95px;
    padding-left: 5px;
    border: 1px solid #e0e0e0;
    line-height: 32px;
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
  .el-pagination.is-background .btn-prev, .el-pagination.is-background .btn-next, .el-pagination.is-background .el-pager li {
    background-color: #fff;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background: #ec6941;
  }
}
</style>
<style scoped lang="scss">
@import "@/assets/style/vars.scss";
.el-container {
  // 中间内容
  .el-main {
    width: 100%;
    margin-top: 60px;
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
    .demand {
      width: 100%;
      min-height: 425px;
      background-color: rgb(243, 248, 253);
      box-sizing: border-box;
      padding-top: 30px;
      overflow-x: hidden;
      .demand-row-items {
        .demand-items {
          height: 316px;
          box-sizing: border-box;
          border: solid 1px #c7d3de;
          background: #fff;
          margin-bottom: 20px;
          font-size: 14px;
          color: $fontGray;
          li:nth-of-type(1) {
            font-size: 18px;
            font-weight: 600;
            border-left: solid 6px $blue;
            height: 21px;
            line-height: 21px;
            padding-left: 14px;
            margin: 20px 0;
          }
          li:nth-of-type(2) {
            padding: 0 20px;
            height: 30px;
            line-height: 30px;
            span {
              width: 100px;
              color: #fff;
              display: inline-block;
              text-align: center;
              border-radius: 4px;
              margin-left: 15px;
            }
            .reviewing {
              background-color: #f85d5d; //待审核
            }
            .audited {
              background-color: #32b16c; //已审核
            }
            .completed {
              background-color: #00b7ee; //已完成
            }
          }
          li:nth-of-type(3) {
            padding: 20px;
            padding-bottom: 0;
            border-top: solid 1px #c7d3de;
            margin-top: 15px;
            line-height: 36px;
          }
          li:nth-of-type(4) {
            line-height: 36px;
            padding: 0 20px;
          }
          li:nth-of-type(5) {
            line-height: 36px;
            padding: 0 20px;
            .el-progress {
              display: inline-block;
              min-width: 146px;
            }
          }
          li:nth-of-type(6) {
            border-top: solid 1px #c7d3de;
            text-align: center;
            margin-top: 28px;
            .el-link {
              position: relative;
              bottom: 0;
              font-size: 18px;
              height: 52px;
              line-height: 52px;
            }
          }
        }
      }
      .el-pagination {
        text-align: center;
      }
    }
  }
}
</style>


</style>