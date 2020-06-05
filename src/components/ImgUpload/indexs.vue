<template>
  <div class="imgUpload">
    <el-upload
      class="avatar-uploader"
      action=""
      :auto-upload="false"
      list-type="picture-card"
      :file-list="fileList"
      :on-change="changeImg"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
      <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
import base from '@/api/base'; // 导入接口域名列表
export default {
  props: {
    imageUrled: Array,
    honor: String
  },
  data() {
    return {
      imageUrl: [], //本地图片显示路径
      resUrl: [], //返回后台二进制数据
      dialogImageUrl: '',
      dialogVisible: false,
      fileList: [],
      files: [],
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    orderImg() {
      if(this.imageUrled) {
        this.imageUrl = this.imageUrled
        this.imageUrl.map((item, index) => {
          this.fileList[index] = {}
          this.fileList[index].name = item.id
          this.fileList[index].url = item.idView
        })
      }
    },
    changeImg (file, fileList) {
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
        Object.entries(fileList).forEach(file => {
          this.files.push(file[1].raw)
        })
        if(this.resUrl) {
          this.$emit('takeUrl', this.files)
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
  .el-upload-list--picture-card .el-upload-list__item  {
    // border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width:101px;
    height:101px;
  }
  .el-upload--picture-card {
    line-height: 100px;
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