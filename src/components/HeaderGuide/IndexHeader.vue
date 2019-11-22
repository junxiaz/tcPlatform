<template>
  <el-header class="header">
    <el-row class="w1220">
      <el-col :span="12" algin="left">
        <img src="./imgs/tc_logo.png" alt />
        <span>天臣互联网平台</span>
      </el-col>
      <el-col :span="12" algin="right" class="right">
        <template v-if="this.$route.path == '/login'">
          <i class="el-icon-house"></i>首页
        </template>
        <el-button style="color: #1e88e5">发布需求</el-button>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
export default {
  name: "IndexGuide"
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/vars.scss";
.header {
  background: $blue;
  min-width: 1220px;
  height: 80px !important;
  .w1220 {
    font-size: 16px;
    color: #fff;
    line-height: 80px;
    overflow: hidden;
    .el-col {
      img {
        display: inline-block;
        vertical-align: middle;
        margin-right: 9px;
      }
      span {
        font-size: 30px;
        font-weight: 600;
        display: inline-block;
        vertical-align: middle;
      }
      &.right {
        text-align: right;
        position: absolute;
        top: 0;
        width: 100%;
        i {
          margin-right: 7px;
        }
      }
    }
  }
}
</style>