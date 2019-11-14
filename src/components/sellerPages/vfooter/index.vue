<template>
  <div id="foots">
    <!-- 底部组件 -->
    <el-row class="foots-t w1220">      
      <el-col :span="6" align="center">
        <el-link :underline="false">加入我们</el-link>
      </el-col>
      <el-col :span="6" align="center">
        <el-link :underline="false">合作洽谈</el-link>
      </el-col>
      <el-col :span="6" align="center">
        <el-link :underline="false">隐私政策</el-link>
      </el-col>
      <el-col :span="6" align="center">
        <el-link :underline="false">网站地图</el-link>
      </el-col>
    </el-row>

    <el-row class="foots-b">
      <el-col :span="24" align="center">
        <span>上海天臣集团 版权所有</span>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
export default {
  name:"foots"
}
</script>

<style lang="scss" scoped>
#foots{       
  height:87px;
  font:14px/30px "";  
  
  .foots-t{
    .el-link.el-link--default{color:#fff}
  }
}
</style>