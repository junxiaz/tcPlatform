<template>
  <el-container>
    <!-- 头部 -->
    <el-header>
      <vHeader/>
    </el-header>

    <el-container class="w1220">
      <!-- 导航 -->
      <el-aside>
        <sideNav/>
      </el-aside>

      <!-- 内容区域 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>

    <!-- 尾部 -->
    <el-footer>
      <vfoot/>
    </el-footer>
  </el-container>     
</template>

<script>
import vHeader from "@/components/sellerPages/vHeader"
import sideNav from "@/components/sellerPages/sideNav"
import vfoot from "@/components/sellerPages/vfooter"
export default {
  components:{
    vHeader,
    sideNav,
    vfoot
  }
}
</script>

<style lang="scss" scoped>
#app{
  >section{
    background:#F6F6F6;
    >header.el-header{
      height: 90px !important;
    }

    >section.el-container{
      padding:30px 0 20px;
      >aside.el-aside{
        width:220px !important;
      }
      >main{
        margin-left:20px;
      }
    }
  }
}
</style>
