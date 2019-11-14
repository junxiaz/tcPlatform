<template>
  <el-row id="top">
    <!-- 顶部组件 -->
    <el-row class="w1220">      
      <el-col :span="12" align="left">
        <i :style="{'backgroundImage':'url('+homeImg+')'}" class="el-icon-my-home" ></i>
        <span style="margin-left:5px;">Hello，欢迎来到天臣产业互联网平台！</span>
      </el-col>

      <el-col :span="12" align="right">
        <el-link :underline="false" @click="signout">退出登录</el-link> |
        <el-link :underline="false">网站导航 <i class="el-icon-arrow-right el-icon--right"></i></el-link>
      </el-col>
    </el-row>
    
  </el-row>
</template>

<script>
// import {handleConfirm} from '../../../public/js'
export default {
  name:"top",
  data(){
    return {
      homeImg: require('@/assets/images/home_nor.png'),
    }
  },
  methods:{
    signout(){
      // handleConfirm('确认退出登录吗？','warning').then(res => {
      //   this.$router.push('/login');
      // }).catch(err =>{
      //   console.log('err',err)
      // })
    }
    
  }
}
</script>

<style scoped lang="scss">
  #top{
    height:30px;
    background:#fff;
    color:#666;
    font:12px/30px "";   
    .el-icon-my-home{
      width:14px;height:16px;display: inline-block;
      background-repeat: no-repeat;
      background-position: center 0;
      background-size:100%;
      line-height:30px;
      vertical-align:middle;
    } 

  }
</style>