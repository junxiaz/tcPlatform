<template>
  <el-carousel :interval="5000" arrow="always" :height="bannerHeight+ 'px'">
    <el-carousel-item v-for="item in imgUrls" :key="item.id">
      <img :src="item.idView" alt @load="imgLoad" ref="bannerHeight"/>
      <div class="operate-btns" v-if="item.id == 3">
        <el-button type="primary" style="margin-right:70px;">发布需求</el-button>
        <el-button type="primary">服务商入驻</el-button>
      </div>
    </el-carousel-item>
    <!--<el-carousel-item>
      <img src="./images/banner1.png" alt @load="imgLoad" ref="bannerHeight"/>
    </el-carousel-item>
     <el-carousel-item>
      <img src="./images/banner2.jpg" alt @load="imgLoad" ref="bannerHeight" />
    </el-carousel-item>
    <el-carousel-item>
      <img src="./images/banner3.png" alt @load="imgLoad" ref="bannerHeight" />
      <div class="operate-btns">
        <el-button type="primary" style="margin-right:70px;">发布需求</el-button>
        <el-button type="primary">服务商入驻</el-button>
      </div>
    </el-carousel-item> -->
  </el-carousel>
  <!-- <el-carousel :interval="5000" arrow="always">
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
  </el-carousel> -->
</template>

<script>
export default {
  name: 'HeaderCarousel',
  data() {
    return {
      bannerHeight: '',
      imgUrls: [
        {id: 1, idView: require('./images/banner1.png')},
        {id: 2, idView: require('./images/banner2.jpg')},
        {id: 3, idView: require('./images/banner3.png')},
      ]
    }
  },
  methods: {
    imgLoad() {
      this.$nextTick(() => {
        this.bannerHeight = this.$refs.bannerHeight[0].height - 2
      })
    }
  },
  mounted() {
    this.imgLoad();
    window.addEventListener('resize', () => {
      this.bannerHeight = this.$refs.bannerHeight[0].height - 2
      this.imgLoad()
    })
  }
}
</script>

<style>
.el-carousel__item img {
  width: 100%;
}
</style>

<style lang="scss" scoped>
// 轮播
.el-carousel__item {
  width: 100%;
  background-color: #99a9bf;
  .operate-btns {
    position: absolute;
    bottom: 24%;
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