<!--
 * @Author: your name
 * @Date: 2019-10-28 13:52:46
 * @LastEditTime: 2020-05-18 15:54:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tc_platform\src\components\Carousel\HeaderCarousel.vue
-->
<template>
  <el-carousel class="header-carousel" :interval="5000" arrow="always" :height="hei+'px'">
    <el-carousel-item v-for="item in imgUrls" :key="item.id">
      <img :src="item.idView" @load="imgLoad" alt ref="image"/>
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
    bannerHeight: {
      type: Number,
      default: 400
    },
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
        let isImg = this.$refs.image
        if(isImg) {
          this.hei = isImg[0].height - 2
        }
      })
    }
  },
  mounted() {
    this.imgLoad()
    window.addEventListener('resize', this.imgLoad, false)
  },

  destroyed(){
    window.removeEventListener("resize",this.imgLoad,false);
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
