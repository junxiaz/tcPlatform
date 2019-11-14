<template>
  <el-container>
    <!-- 头部 -->
    <el-header>
      <top></top>
      <vHeader/>
    </el-header>

    <el-container>
      <!-- 导航 -->
      <!-- <el-aside>
        <sideNav/>
      </el-aside> -->

      <!-- 内容区域 -->
      <!-- <el-main>
        <router-view></router-view>
      </el-main> -->
      <div class="w1220">
        <el-aside>
          <sideNav/>
        </el-aside>

        <el-main>
          <router-view></router-view>
        </el-main>
      </div>
    </el-container>

    <!-- 尾部 -->
    <el-footer>
      <vfoot/>
    </el-footer>
  </el-container>     
</template>

<script>
import top from "@/components/sellerPages/top"
import vHeader from "@/components/sellerPages/vHeader"
import sideNav from "@/components/sellerPages/sideNav"
import vfoot from "@/components/sellerPages/vfooter"
export default {
  components:{
    top,
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
      height: 110px !important;
      #top,#vheader{padding-left: calc(100vw - 100%);}
    }

    >section.el-container{
      padding:30px 0 127px;margin-left: calc(100vw - 100%);
      >div>aside.el-aside{
        width:220px !important;float:left;height:100%;
      }
      >div>main{
        float:left;width: 983px !important;padding:0;margin-left:17px;overflow-x: hidden;        
      }
    }

    >footer{
      height: 87px !important;background:#2E2E2E;color:#fff;
      position:fixed; bottom:0; left:0; right:0; margin:0 auto; z-index: 10;       
    }
  }
}
</style>
