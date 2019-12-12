<template>
  <el-carousel class="header-carousel" :interval="5000" arrow="always" :height="bannerHeight+ 'px'">
    <el-carousel-item v-for="item in imgUrls" :key="item.id">
      <img :src="item.idView" alt @load="imgLoad" ref="bannerHeight"/>
      <div class="operate-btns" v-if="item.id == 3">
        <router-link to="/release">
          <el-button type="primary" style="margin-right:70px;">发布需求</el-button>
        </router-link>
        <el-button type="primary">服务商入驻</el-button>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'HeaderCarousel',
  data() {
    return {
      bannerHeight: '620',
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
      this.imgLoad()
      // this.bannerHeight = this.$refs.bannerHeight[0].height - 2
    })
  }
}
</script>

<style lang="scss">
.header-carousel {
  .el-carousel__item img {
    width: 100%;
  }
  .el-carousel__button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgb(140, 140, 140)
  }
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