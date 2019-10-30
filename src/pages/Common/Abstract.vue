<template>
  <el-container direction="vertical">
    <HeaderGuide />
    <router-view></router-view>
    <FooterGuide />
  </el-container>
</template>

<script>
import HeaderGuide from '@/components/HeaderGuide/HeaderGuide'
import FooterGuide from '@/components/FooterGuide/FooterGuide'
export default {
  name: 'Abstract',
  data() {
    return {
      
    };
  },
  computed: {
    children: function(){
      return this.$route.meta.children || null
    }
  },
  components: {
    HeaderGuide,
    FooterGuide
  }
};
</script>