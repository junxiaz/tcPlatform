<template>
  <div class="imgUpload">
    <el-upload
      @click="sendUrl"
      class="avatar-uploader"
      action=""
      :show-file-list="false"
      :http-request="httpRequest"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
import base from '@/api/base'; // 导入接口域名列表
export default {
  data() {
    return {
      imageUrl: '', //本地图片路径
      resUrl: '' //后台接口返回路径
    }
  },
  methods: {
    httpRequest (options) {
      let file = options.file
      let filename = file.name
      let reader=new FileReader();
      if (file) {
        reader.readAsDataURL(file)
      }
      reader.onload = () => {
        this.imageUrl = reader.result
        let dataURL = dataURItoBlob(reader.result);
        let data = {
          // base64Data: reader.result
          base64Data: dataURL
        }
        this.$api.user.logoUpload(data).then(res => {
          if(res.code == '0000') {
            // this.form.companyForm.imgUrl = res.msg
            this.resUrl = res.msg
          } else {
            this.$message.error('上传图片不正确');
          }
        })
      }
    },
    dataURItoBlob(dataURI) {
      var byteString = atob(dataURI.split(',')[1]);
      var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
      var ab = new ArrayBuffer(byteString.length);
      var ia = new Uint8Array(ab);
      for (var i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ab], {type: mimeString});
    },
    beforeAvatarUpload(file, fileList) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      let regex = /(.jpg|.jpeg|.gif|.png|.bmp)$/;
      if (!regex.test(file.name.toLowerCase())) {
        this.$message.error('请选择图片文件');
        return false;
      } else if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!');
        return false;
      }
    },
    sendUrl() {
      if(this.resUrl) {
        this.$emit('takeUrl', this.resUrl)
      }
    }
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