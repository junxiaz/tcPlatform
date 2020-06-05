<!--
 * @Author: your name
 * @Date: 2020-04-11 17:08:27
 * @LastEditTime: 2020-05-12 13:13:00
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \tc_platform\src\components\ImgUpload\index1.vue
 -->
<template>
  <div class="imgUpload">
    <el-upload
      class="avatar-uploader"
      action=""
      :auto-upload="false"
      :show-file-list="false"
      :on-change="changeImg">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
import base from '@/api/base'; // 导入接口域名列表
export default {
  props: {
    imageUrled: String,
  },
  data() {
    return {
      imageUrl: '', //本地图片显示路径
      resUrl: '' //返回后台二进制数据
    }
  },
  methods: {
    orderImg() {
      if(this.imageUrled) {
        this.imageUrl = this.imageUrled
      }
    },
    changeImg (file, fielList) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      let regex = /(.jpg|.jpeg|.gif|.png|.bmp)$/;
      if (!regex.test(file.name.toLowerCase())) {
        this.$message.error('请选择图片文件');
        return false;
      } else if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!');
        return false;
      } else {
        this.imageUrl = URL.createObjectURL(file.raw);
        this.resUrl = file.raw
        if(this.resUrl) {
          this.$emit('takeUrl', this.resUrl)
        }
      }
    },
  },
  watch:{
    imageUrled:function(newData,oldData){
      console.log(newData,oldData)  //newData就是orderData
      if(newData) {
        this.imageUrl = newData;
      }
    }
  },
  created() {
    this.orderImg();
  }
}
</script>

<style lang="scss">
.imgUpload {
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width:101px;
    height:101px;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader .el-upload .el-upload__input{
      display: none;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
}
</style>