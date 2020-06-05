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
                    <el-form ref="form" size="mini" :model="params" label-width="155px">
                      <el-form-item label="需求性质">
                        <el-radio-group v-model="params.demandType">
                          <el-radio border label="">无限制</el-radio>
                          <template v-for="item in demandType">
                            <el-radio border v-if="item.demandType!=2" :label="item.demandType" :key="item.demandType">{{item.demandTypeName}}</el-radio>
                          </template>
                        </el-radio-group>
                      </el-form-item>
                      <el-form-item label="需求状态">
                        <el-radio-group v-model="params.demandStatus">
                          <el-radio border label="">无限制</el-radio>
                          <el-radio border :label="item.demandType" v-for="item in demandStatus" :key="item.demandType">{{item.demandTypeName}}</el-radio>
                        </el-radio-group>
                      </el-form-item>
                    </el-form>
                  </el-col>
                </el-row>
                <el-row type="flex" class="sort-row-items" justify="center">
                  <el-col>
                    <ul class="sorts" ref="sorts">
                      <li @click="sortChange('all')">综合</li>
                      <li :class="{ active: params.beginDesc }" @click="sortChange('begin')">发布时间<i class="el-icon-arrow-down"></i></li>
                      <li :class="{ active: params.endDesc }" @click="sortChange('end')">截止时间<i class="el-icon-arrow-down"></i></li>
                    </ul>
                    <div class="map">
                        <!-- <img src="./images/map.png" alt=""> -->
                      <el-select class="map-select" v-model="params.provinceName" size="small" >
                        <el-option label="未选择" value="" ></el-option>
                        <el-option v-for="(item,index) in provinces" :key="index" :label="item" :value="item" ></el-option>
                      </el-select>
                    </div>
                    <div style="float:right;">
                      <el-input placeholder="请输入内容" size="small" class="input-with-select" v-model="searchText">
                          <el-button @click="search" slot="append">搜索</el-button>
                      </el-input>
                      </div>
                  </el-col>
                </el-row>
              </div>

              <div class="demand">
                <div class="w1220">
                  <el-row class="demand-row-items" :gutter="20" justify="left">
                    <el-col :span="6" v-for="item in listData" :key="item.id">
                      <ul class="demand-items">
                        <li>{{item.demandTitle}}</li>
                        <li>{{item.demandTypeDesc}}<span :class="item.demandStatus==0&&item.demandStatus!==5?'reviewing': 'audited' || item.demandStatus==5?'completed': 'audited'">{{item.demandStatusDesc}}</span></li>
                        <li>需求地区：{{item.provinceName}}</li>
                        <li>截止时间：{{item.endTime}}</li>
                        <!-- <li>投标状态：<el-progress :percentage="Math.floor(item.tenderReal/item.tenderPlan*100)" :stroke-width="12"></el-progress></li> -->
                        <li>投标状态：
                          <el-progress :percentage="Math.ceil(item.tenderReal/item.tenderPlan*100)" :stroke-width="12"></el-progress>
                          <span class="progress-text-self">{{item.tenderReal==null?0:item.tenderReal}}/{{item.tenderPlan}}</span>
                        </li>
                        <li><el-link type="primary" :underline="false" @click="reqOrder(item.id)">查看详情</el-link></li>
                      </ul>
                    </el-col>
                  </el-row>
                  <el-pagination
                    v-if="pageshow"
                    background
                    layout="prev, pager, next"
                    :page-size="params.pageSize"
                    :current-page.sync="params.pageNum"
                    :total="total"
                    @current-change='handleCurrentChange'
                   >
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
      pageshow: true,
      demandType: "",  //需求性质
      demandStatus: "",  //需求状态
      searchText: '',  //搜索文本
      provinces: [],  //省份
      activeName: "first",
      value: "",
      params: {
        pageNum: 1,
        pageSize: 8,
        demandType: "",
        demandStatus: "",
        beginDesc: '',
        endDesc: '',
        provinceName: '',
        desc: '',
        token: sessionStorage.getItem('token'),
        userId: sessionStorage.getItem('userId'),
        flag: 1,
      },
      total: 0,
      listData: []
    };
  },
  methods: {
    //切换页码
    handleCurrentChange(val) {
      this.params.pageNum = val;
    },
    // 获取需求类型
    reqDemandType() {
      this.$api.demand.reqDemandType().then(res => {
        this.demandType = res.list
      })
    },
    // 获取需求状态
    reqDemandStatus() {
      this.$api.demand.reqWebDemandStatus().then(res => {
        this.demandStatus = res.list
      })
    },
    reqListDemand(params) {
      this.$api.demand.reqListDemand(params).then(res => {
        this.listData = res.datas.records
        this.total = res.datas.total
      })
    },
    // 点击排序
    sortChange(param) {
      if(param == 'all') {
        this.params.beginDesc = '';
        this.params.endDesc = '';
      } else if(param == 'begin') {
        this.params.isAll = '';
        this.params.endDesc = '';
        this.params.beginDesc = !this.params.beginDesc + 0;
      } else if(param == 'end') {
        this.params.isAll = '';
        this.params.beginDesc = '';
        this.params.endDesc = !this.params.endDesc + 0;
      }
    },
    // 文本搜索
    search() {
      this.params.desc = this.searchText;
    },
    // 省份搜索
    reqListDemandProvince() {
      this.$api.demand.reqListDemandProvince().then(res => {
        this.provinces = res.data
      })
    },
    reqOrder(id) {
      this.$router.push({
        path: `/order/${id}`,
      })
    }
  },
  watch: {
    params: {
      handler(newValue, oldValue) {
        this.reqListDemand(this.params)
        this.$nextTick(() => {
          this.pageshow = true
        })
      },
      deep: true
    }
  },
  mounted() {
    this.reqListDemand(this.params)
    this.reqListDemandProvince()
    this.reqDemandType()
    this.reqDemandStatus()
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
  .el-progress__text {
    display:none;
  }
  .progress-text-self {
    font-size: 16.8px;
    margin-left: -40px;
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
  .input-with-select .el-input-group__append {
    background-color: rgb(30, 136, 229);
    color: #fff;
  }
  .map {
    height: 32px;
    width: 95px;
    // padding-left: 5px;
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
            background: url(./images/map.png) no-repeat 5px;
            border: none;
            padding: 0;
            width: inherit;
            text-indent: 20px;
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
            .sorts {
              display: inline-block;
              overflow: hidden;
              li {
                float: left;
                line-height: 30px;
                font-size: 13px;
                color: #606266;
                padding: 0 10px;
                border: solid 1px #e0e0e0;
                border-right: none;
                background-color: #fff;
                cursor: pointer;
                &:last-child {
                  border-right: solid 1px #e0e0e0;
                }
                &.active i {
                  transform: rotate(180deg);
                }
              }
            }
            .el-radio-button__orig-radio:checked + .el-radio-button__inner i {
              transform: rotate(180deg);
            }
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
        margin-bottom: 20px;
      }
    }
  }
}
</style>


</style>