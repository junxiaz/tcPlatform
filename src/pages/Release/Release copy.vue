<template>
  <el-container direction="vertical">
    <Top />
    <IndexHeader>
      <router-link slot="home">
        <i class="el-icon-house"></i>首页
      </router-link>
    </IndexHeader>
    <el-main>
      <div class="w1220">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>发布需求</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="wrap">
          <el-row class="title"><p>需求内容</p></el-row>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="220px"
          >
            <el-form-item label="我需要" class="i-need" prop="need">
              <el-radio-group v-model="ruleForm.need">
                <el-radio label="1">设计服务</el-radio>
                <el-radio label="2">包装印刷</el-radio>
                <el-radio label="3">特种材料</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="其他说明" class="title-blue">
              <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item label="添加附件" class="title-blue">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                :file-list="ruleForm.fileList"
                class="annex"
              >
                <el-button size="small" type="danger">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">（支持的文件格式为doc、xls、jpg、png、pdf压缩文件，大小不超过50M）</div>
              </el-upload>
            </el-form-item>
            <el-form-item label="联系方式" class="contact" prop="contact">
              <el-input v-model="ruleForm.contact" placeholder="请输入联系方式"></el-input>
              <div class="el-upload__tip">信息保护中，仅官方可见</div>
            </el-form-item>
            <el-form-item>
              <el-button style="width:280px;" type="danger" @click="submitForm('ruleForm')">发布需求</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-main>
    <FooterGuide />
  </el-container>
</template>

<script>
import IndexHeader from "@/components/HeaderGuide/IndexHeader";
import FooterGuide from "@/components/FooterGuide/FooterGuide";
import Top from "@/components/sellerPages/top";
export default {
  name: "Release",
  data() {
    return {
      ruleForm: {
        need: "",
        desc: "",
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        contact: "",
      },
      rules: {
        contact: [
          { required: true, message: "请输入联系方式", trigger: "blur" }
        ],
        need: [
          { required: true, message: "请选择需要的需求", trigger: "change" }
        ],
      }
    };
  },
  methods: {
    submitForm(formcontact) {
      this.$refs[formcontact].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  components: {
    IndexHeader,
    FooterGuide,
    Top
  }
};
</script>

<style lang="scss">
.i-need .el-form-item__label {
  &::before{
    content: ''!important;
  }
  &::after {
    content: '*';
    color: #F56C6C;
  }
}
.title-blue .el-form-item__label {
  color: #1e88e5;
}
.contact .el-form-item__label {
  font-size: 18px;
  color: rgb(46, 46, 46);
  text-align: left;
  padding-left: 35px;
  &::before {
    content: ''!important;
    border-left: solid 4px #1e88e5;
  }
  &::after {
    content: '*';
    color: #F56C6C;
  }
}
.el-input {
  width: 280px;
}
.el-textarea textarea {
  width: 310px;
  min-height: 140px!important;
}
.annex .el-upload-list {
  width: 340px;
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/vars.scss';
.el-container {
  background-color: #f6f6f6;
  .w1220 {
    .el-breadcrumb {
      padding-top: 51px;
      padding-bottom: 20px;
    }
    .wrap {
      width: 1000px;
      margin-bottom: 30px;
      background-color: #fff;
      border: solid 1px $blue;
      .title {
        font-size: 18px;
        font-weight: 600;
        color: $fontGray;
        padding: 30px 0 45px 35px;
        p {
          &::before{
            border-left: solid 4px $blue;
            content: '';
            padding-left: 4px;
          }
          &::after {
            content: '*';
            color: #F56C6C;
          }
        }
      }
    }
  }
}
</style>
