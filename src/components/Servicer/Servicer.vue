<template>
  <el-row class="servier" :gutter="20">
    <el-col class="servier-item" :span="6">
      <div class="col-wrap" @click="jump">
        <img src="./images/supplyer1.png" alt />
        <div>复旦大学</div>
        <div>
          <img src="./images/icon1.png" alt />
          <img src="./images/LV16.png" alt />
        </div>
        <el-row type="flex" justify="center">
          <el-col :span="8">速度:5.00</el-col>
          <el-col :span="8">速度:5.00</el-col>
          <el-col :span="8">速度:5.00</el-col>
        </el-row>
        <div>
          成交金额：
          <span>¥23455555</span>
        </div>
        <div>
          <el-tag type="info">图标设计签四签四签四签四签四</el-tag>
          <el-tag type="info">图标设计</el-tag>
          <el-tag type="info">图标设计</el-tag>
        </div>
      </div>
    </el-col>
    <el-col class="servier-item" :span="6">
      <div class="col-wrap" @click="jump">
        <img src="./images/supplyer2.png" alt />
        <div>上海研发公共服务平台</div>
        <div>
          <img src="./images/icon1.png" alt />
          <img src="./images/LV16.png" alt />
        </div>
        <el-row type="flex" justify="center">
          <el-col :span="8">速度:5.00</el-col>
          <el-col :span="8">速度:5.00</el-col>
          <el-col :span="8">速度:5.00</el-col>
        </el-row>
        <div>
          成交金额：
          <span>¥23455555</span>
        </div>
        <div>
          <el-tag type="info">图标设计签四签四签四签四签四</el-tag>
          <el-tag type="info">图标设计</el-tag>
          <el-tag type="info">图标设计</el-tag>
        </div>
      </div>
    </el-col>
    <el-col class="servier-item" :span="6">
      <div class="col-wrap" @click="jump">
        <img src="./images/supplyer3.png" alt />
        <div>中国防伪行业协会</div>
        <div>
          <img src="./images/icon1.png" alt />
          <img src="./images/LV16.png" alt />
        </div>
        <el-row type="flex" justify="center">
          <el-col :span="8">速度:5.00</el-col>
          <el-col :span="8">速度:5.00</el-col>
          <el-col :span="8">速度:5.00</el-col>
        </el-row>
        <div>
          成交金额：
          <span>¥23455555</span>
        </div>
        <div>
          <el-tag type="info">图标设计签四签四签四签四签四</el-tag>
          <el-tag type="info">图标设计</el-tag>
          <el-tag type="info">图标设计</el-tag>
        </div>
      </div>
    </el-col>
    <el-col class="servier-item" :span="6">
      <div class="col-wrap" @click="jump">
        <img src="./images/supplyer4.png" alt />
        <div>天臣集团</div>
        <div>
          <img src="./images/icon1.png" alt />
          <img src="./images/LV16.png" alt />
        </div>
        <el-row type="flex" justify="center">
          <el-col :span="8">速度:5.00</el-col>
          <el-col :span="8">速度:5.00</el-col>
          <el-col :span="8">速度:5.00</el-col>
        </el-row>
        <div>
          成交金额：
          <span>¥23455555</span>
        </div>
        <div>
          <el-tag type="info">图标设计签四签四签四签四签四</el-tag>
          <el-tag type="info">图标设计</el-tag>
          <el-tag type="info">图标设计</el-tag>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  methods: {
    jump() {
      this.$router.push({ path: "/service" });
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
      > img {
        width: 115px;
        height: 115px;
        padding-bottom: 25px;
      }
      > div:nth-of-type(1) {
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