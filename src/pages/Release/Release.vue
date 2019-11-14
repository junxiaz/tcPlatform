<template>
  <el-container direction="vertical">
    <Top />
    <IndexHeader>
      <router-link slot="home">
        <i class="el-icon-house"></i>首页
      </router-link>
    </IndexHeader>
    <el-main>
      <div class="w1220">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>发布需求</el-breadcrumb-item>
        </el-breadcrumb>
        
      </div>
    </el-main>
    <FooterGuide />
  </el-container>
</template>

<script>
import IndexHeader from "@/components/HeaderGuide/IndexHeader";
import FooterGuide from "@/components/FooterGuide/FooterGuide";
import Top from "@/components/sellerPages/top";
export default {
  name: "",
  components: {
    IndexHeader,
    FooterGuide,
    Top
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/vars.scss";
</style>