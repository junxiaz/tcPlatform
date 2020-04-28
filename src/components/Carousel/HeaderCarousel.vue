<template>
  <el-carousel class="header-carousel" :interval="5000" arrow="always" :height="hei+ 'px'">
    <el-carousel-item v-for="item in imgUrls" :key="item.id">
      <img :src="item.idView" alt @load="imgLoad" ref="bannerHeight"/>
      <!-- <div class="operate-btns" v-if="item.id == 3">
        <router-link to="/release">
          <el-button type="primary" style="margin-right:70px;">发布需求</el-button>
        </router-link>
        <el-button type="primary">服务商入驻</el-button>
      </div> -->
      <slot name="btns" v-if="item.id == 3"></slot>

    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'HeaderCarousel',
  props: {
    bannerHeight: String,
    imgUrls: Array
  },
  data() {
    return {
      hei: ''
    }
  },
  methods: {
    imgLoad() {
      this.$nextTick(() => {
        this.hei = this.$refs.bannerHeight[0].height - 2
      })
    }
  },
  created() {
    this.imgLoad()
    window.addEventListener('resize', () => {
      this.imgLoad()
    })
  }
}
</script>

<style lang="scss">
.header-carousel {
  .el-carousel__item {
    width: 100%;
    background-color: #99a9bf;
    img {
      width: 100%;
    }
  }
  .el-carousel__button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgb(140, 140, 140)
  }
}
</style>
