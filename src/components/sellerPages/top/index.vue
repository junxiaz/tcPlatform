<!--
 * @Author: your name
 * @Date: 2019-11-20 09:03:53
 * @LastEditTime: 2020-05-15 09:32:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tc_platform\src\components\sellerPages\top\index.vue
 -->
<template>
  <el-row id="top">
    <!-- 顶部组件 -->
    <el-row class="w1220">
      <el-col :span="12" align="left">
        <i :style="{'backgroundImage':'url('+homeImg+')'}" class="el-icon-my-home" ></i>
        <!-- <i class="el-icon-my-home"></i> -->
        <span style="margin-left:1px;">Hello，欢迎来到天臣产业互联网平台！</span>
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
      width:14px;
      height:14px;
      display: inline-block;
      background-repeat: no-repeat;
      background-position: center 0;
      background-size:100%;
      line-height:30px;
      vertical-align:text-bottom;
    }
    a{font:12px/30px "";vertical-align: baseline;}

  }
</style>