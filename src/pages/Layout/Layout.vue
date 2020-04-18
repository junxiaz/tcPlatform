<template>
  <el-container direction="vertical">
    <HeaderGuide />
    <el-main>
        <router-view/>
    </el-main>
    <FooterGuide />
  </el-container>
</template>

<script>
import HeaderGuide from "@/components/HeaderGuide/HeaderGuide";
import FooterGuide from "@/components/FooterGuide/FooterGuide";
export default {
  name: "",
  components: {
    HeaderGuide,
    FooterGuide
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';

</style>