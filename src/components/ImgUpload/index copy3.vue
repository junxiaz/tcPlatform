<template>
  <div class="imgUpload">
    <el-upload
      class="avatar-uploader"
      :action="action"
      list-type="picture-card"
      :limit="limit"
      :multiple="multiple"
      :on-exceed="handleExceed"
      :file-list="computedValues"
      :on-success="handleUploadSuccess"
      :before-upload="handleBeforeUpload"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt />
    </el-dialog>
  </div>
</template>
<script>
import base from "@/api/base.js"
export default {
  name: "UploadImage",
  props: {
    // 初始图片
    value: {
      type: [String, Array],
      default() {
        return [];
      }
    },
    // 文件上传个数
    limit: Number,
    // 文件类型, 例如['png', 'jpg', 'jpeg']
    fileType: {
      type: Array,
      default: () => ["png", "jpg", "jpeg"]
    },
    // 大小限制(MB)
    fileSize: {
      type: Number
    },
    // 上传地址 (同官网)
    action: {
      type: String,
      // required: true
      default: base.sq + '/upload/uploadPic'
      // default: 'https://jsonplaceholder.typicode.com/posts/'
    },
    // 是否支持多选文件 (同官网)
    multiple: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      fileList: []
    };
  },
  computed: {
    computedValues() {
      if (this.value) {
        if (typeof this.value === "string") {
          return [{url: this.value}];
        } else {
          let files = []
          this.value.map((item,index) => {
            files.push({name:index})
            files[index].url = item.url?item.url:item
          })
          return files
        }
      } else {
        return [];
      }
    },
    successFiles () {
      return this.fileList.filter((file) => file === file.url)
    }
  },
  methods: {
    // 上传前校检格式和大小
    handleBeforeUpload(file) {
      let isImg = false;
      if (this.fileType.length) {
        let fileExtension = "";
        if (file.name.lastIndexOf(".") > -1) {
          fileExtension = file.name.slice(file.name.lastIndexOf(".") + 1);
        }
        isImg = this.fileType.some(type => {
          if (file.type.indexOf(type) > -1) return true;
          if (fileExtension && fileExtension.indexOf(type) > -1) return true;
          return false;
        });
      } else {
        isImg = file.type.indexOf("image") > -1;
      }
      if (!isImg) {
        this.$message.error(
          `文件格式不正确, 请上传${this.fileType.join("/")}图片格式文件!`
        );
        return false;
      }
      if (this.fileSize) {
        const isLt = file.size / 1024 / 1024 < this.fileSize;
        if (!isLt) {
          this.$message.error(`上传头像图片大小不能超过 ${this.fileSize} MB!`);
          return false;
        }
      }
      return true;
    },
    // handleChange(file, fileList) {
    //   this.fileList = fileList;
    // },
    // 文件个数超出
    handleExceed() {
      this.$message.error(`最多上传${this.limit}张图片`);
    },
    // 上传失败
    handleUploadError(err) {
      this.$message.error("上传失败, 请重试");
      this.$emit("error", err);
    },
    // 上传成功回调
    handleUploadSuccess(response, file) {
      let url = response.picUrl;
      this.$message.success("上传成功");

      if (this.responseFn) {
        url = this.responseFn(response, file, this.successFiles);
        console.log(url)
      }
      // if (this.multiple) {
      //   if (Array.isArray(this.value)) {
      //     this.$emit("input", [...this.value, url]);
      //   } else {
      //     this.$emit("input", [...this.value, url]);
      //   }
      // } else {
        this.$emit("input", [...this.value, url]);
      // }
    },
    handleRemove(index) {
      // if (this.multiple) {
        const data = [...this.computedValues];
        data.splice(index, 1);
        debugger
        this.$emit("input", data || []);
      // } else {
      //   this.$emit("input", '');
      // }
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.imgUpload {
  .avatar-uploader .el-upload {
    background-color: #fbfdff;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 101px;
    height: 101px;
    line-height: 100px;
  }
  .el-upload-list--picture-card .el-upload-list__item {
    // border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 101px;
    height: 101px;
  }
  .el-upload--picture-card {
    line-height: 100px;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader .el-upload .el-upload__input {
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