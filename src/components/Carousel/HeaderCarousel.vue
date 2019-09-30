<template>
  <el-carousel height="1020px" :interval="5000" arrow="always">
    <el-carousel-item>
      <img src="./images/banner1.png" alt />
    </el-carousel-item>
    <el-carousel-item>
      <img src="./images/banner2.jpg" alt />
    </el-carousel-item>
    <el-carousel-item>
      <img src="./images/banner3.png" alt />
      <div class="operate-btns">
        <el-button type="primary" style="margin-right:70px;">发布需求</el-button>
        <el-button type="primary">服务商入驻</el-button>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
    name: 'HeaderCarousel',
}
</script>

<style lang="scss" scoped>
// 轮播
.el-carousel__item {
  width: 100%;
  background-color: #99a9bf;
  .operate-btns {
    position: absolute;
    bottom: 378px;
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
</style>