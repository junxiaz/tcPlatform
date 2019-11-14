<template>
  <el-row id="vheader">
    <!-- 头部组件 -->
    <el-row class="w1220">
      
      <el-col :span="12" align="left" class="logo">
        <img src="./logo.png">
        <span style="margin-left:20px;">个人资料</span>
      </el-col>
      <el-col :span="12" align="right">
        <span v-if="this.$route.name=='login'">
          <i class="el-icon-s-home"></i>
          首页
        </span>
        <el-button v-else @click="signout" size="mini">免费发布需求</el-button>
      </el-col>
      
    </el-row>
  </el-row>
</template>

<script>
// import {handleConfirm} from '../../../public/js'
export default {
  name:"v-header",
  methods:{
    signout(){
      // handleConfirm('确认退出登录吗？','warning').then(res => {
      //   this.$router.push('/login');
      // }).catch(err =>{
      //   console.log('err',err)
      // })
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