<template>
<!-- 小标签 -->
  <div class="vnotes">
    <span style="margin-left:12px;">{{title}}</span>
    <p></p>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type:String,
      default:"最新"
    }
  }
}
</script>

<style scoped lang="scss">
.vnotes{
  height:50px;
  position: relative;
  font:18px/50px "";
  p{border-top:1px solid #d2d2d2}

}
.vnotes:before{
  content:"";
  position: absolute;
  top:16px;left:0px;
  width:4px;
  height:18px;
  background:#1e88e5;
}

</style>