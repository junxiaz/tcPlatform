<template>
  <el-row class="servier" :gutter="20">
    <el-col class="servier-item" :span="6" v-for="item in servicers" :key="item.id">
      <div class="col-wrap" @click="jump(item.id)">
        <img :src="item.logoUrl" alt />
        <div :title="item.enterpriseName">{{item.enterpriseName}}</div>
        <div>
          <img src="./images/icon1.png" alt />
          <img src="./images/LV16.png" alt />
        </div>
        <el-row type="flex" justify="center">
          <el-col :span="8">质量:{{item.quality}}</el-col>
          <el-col :span="8">速度:{{item.speed}}</el-col>
          <el-col :span="8">服务:{{item.service}}</el-col>
        </el-row>
        <div>
          成交金额：
          <span>¥{{item.totalTransaction}}</span>
        </div>
        <!-- <div>
          <el-tag type="info">图标设计签四签四签四签四签四</el-tag>
          <el-tag type="info">图标设计</el-tag>
          <el-tag type="info">图标设计</el-tag>
        </div> -->
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      servicers: []
    };
  },
  methods: {
    jump(id) {
      this.$router.push({ path: "/service/"+id });
    },
    reqRecommendList() {
      this.$api.demand.reqRecommendList({}).then(res => {
        this.servicers = res.datas.records
      })
    }
  },
  mounted() {
    this.reqRecommendList()
  },
  watch: {
    $route() {
      this.id = this.$route.query.id
    }
  }
};
</script>

<style lang="scss" scoped>
.servier {
  .servier-item {
    cursor: pointer;
    // background-color: #f8f8f8;
    .col-wrap {
      background-color: #fff;
      padding: 25px;
      overflow: hidden;
      > img {
        width: auto;
        max-width: 100%;
        height: 115px;
        padding-bottom: 25px;
      }
      > div:nth-of-type(1) {
        font-size: 18px;
        font-weight: bold;
        color: #4b4b4b;
        padding-bottom: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
        // border-bottom: solid 1px #efefef;
        span {
          color: #f98d2d;
        }
      }
      div:nth-of-type(5) {
        .el-tag {
          max-width: 30%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>