<template>
  <div class="title">
    <el-button v-if="link == ''|| link == undefined" :style="{color: titleColor}" type="text">{{title}}</el-button>
    <router-link v-else :to="link">
      <el-button :style="{color: titleColor}" type="text">{{title}}</el-button>
    </router-link>
    <h4 v-if="subTitle != '' || subTitle != ''" :style="{color: subTitleColor}">{{subTitle}}</h4>
  </div>    
</template>

<script>
export default {
  name: "Title",
  props: {
    title: String,
    subTitle: String,
    link: String,
    titleColor: String,
    subTitleColor: String,
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';
.title {
  text-align: center;
  .el-button{
    line-height: 1;
    padding: 0;
    padding-top: 38px;
    font-size: 30px;
    font-weight: 600;
    color: #fffbf7;
  }
  h4 {
    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    color: #fff;
    padding-top: 10px;
    padding-bottom: 26px;
    margin: 0;
  }
}
</style>