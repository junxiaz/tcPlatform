<template>
  <el-row class="title">
    <div :style="{color: titleColor}">{{title}}</div>
    <div :style="{color: subTitleColor}">{{subTitle}}</div>
  </el-row>
</template>

<script>
export default {
  name: "TitleRed",
  props: {
    title: String,
    subTitle: String,
    titleColor: String,
    subTitleColor: String
  }
};
</script>

<style lang="scss" scoped>
.title {
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: left;
  div:first-child {
    font-size:42px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(246,94,97,1);
  }
  div:last-child {
    font-size:30px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(90,90,90,1);
  }
}
</style>