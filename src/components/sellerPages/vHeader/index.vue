<template>
  <el-row id="vheader">
    <!-- 头部组件 -->
    <el-row class="w1220">
      
      <el-col :span="12" align="left" class="logo">
        <img src="./logo.png">
        <span style="margin-left:20px;">基础资料</span>
      </el-col>
      <el-col :span="12" align="right">
        <span v-if="this.$route.name=='login'">
          <i class="el-icon-s-home"></i>
          首页
        </span>
        <el-button v-else @click="signout" size="mini">退出登录</el-button>
      </el-col>

    </el-row>
  </el-row>
</template>

<script>
export default {
  name:"v-header",
  methods:{
    signout(){
      this.$confirm('是否退出登录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('userId')
        sessionStorage.removeItem('account')
        this.$router.push('/login');
      }).catch(() => {
                  
      });
    }

  },
  created(){
  }
}
</script>

<style scoped lang="scss">
  #vheader{
    background:#409EFF;
    height:80px;
    color:#fff;
    line-height: 80px;
    .logo{
      height:80px;
      img{display: inline-block;vertical-align: middle;}
    }    
      
    button{
      color:#409EFF;font:16px/26px "";
      width:134px;height:42px;border-radius: 8px;
    }
  }
</style>