<template>
  <el-container direction="vertical">
    <IndexHeader></IndexHeader>
    <el-main>
      <div class="w1220">
        <el-row v-if="form.userType == 2" class="title">设计人员</el-row>
        <el-row v-else class="title">企业/终端客户/创客认证</el-row>
        <el-divider></el-divider>
        <el-form ref="form" class="register" :rules="rules" :model="form" label-width="140px">
          <el-form-item v-if="form.userType == 2" label="认证类型">
            <el-radio-group v-model="form.regType">
              <el-radio :label="0">个人认证</el-radio>
              <el-radio :label="1">企业认证</el-radio>
            </el-radio-group>
          </el-form-item>
          <template v-if="!form.regType">
            <el-form-item label="真实姓名" prop="personForm.userName">
              <el-input v-model="form.personForm.userName"></el-input>
            </el-form-item>
            <el-form-item label="身份证号码" prop="personForm.idNumber">
              <el-input v-model="form.personForm.idNumber"></el-input>
            </el-form-item>
            <el-form-item label="个人头像">
              <ImgUpload @takeUrl="takeUrlPerson"></ImgUpload>
            </el-form-item>
          </template>
          <template v-else>
            <el-form-item label="企业名称" prop="companyForm.enterpriseName">
              <el-input v-model="form.companyForm.enterpriseName"></el-input>
            </el-form-item>
            <el-form-item label="统一社会信用代码" prop="companyForm.certificateCode">
              <el-input v-model="form.companyForm.certificateCode"></el-input>
            </el-form-item>
            <el-form-item label="企业描述" prop="companyForm.enterpriseDesc">
              <el-input v-model="form.companyForm.enterpriseDesc"></el-input>
            </el-form-item>
            <el-form-item label="企业logo">
              <ImgUpload @takeUrl="takeUrlLogo"></ImgUpload>
            </el-form-item>
            <el-form-item label="企业图片">
              <ImgUpload @takeUrl="takeUrlImg"></ImgUpload>
            </el-form-item>
            <el-form-item label="企业地址">
              <el-input v-model="form.companyForm.enterpriseAddress"></el-input>
            </el-form-item>
            <el-form-item label="企业官网">
              <el-input v-model="form.companyForm.enterpriseUrl"></el-input>
            </el-form-item>
            <el-form-item label="联系人">
              <el-input v-model="form.companyForm.enterpriseContecter"></el-input>
            </el-form-item>
            <el-form-item label="联系方式">
              <el-input v-model="form.companyForm.enterpriseTel"></el-input>
            </el-form-item>
          </template>
          <el-form-item style="text-align: center;">
            <el-button type="danger" @click="submitForm('form')">立即创建</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-main>
    <FooterGuide />
  </el-container>
</template>

<script>
import base from '@/api/base'; // 导入接口域名列表
import axios from 'axios';
import ImgUpload from "@/components/ImgUpload";
import FooterGuide from "@/components/FooterGuide/FooterGuide";
import IndexHeader from "@/components/HeaderGuide/IndexHeader";
export default {
  name: "Register",
  data() {
    return {
      form: {
        userType: '',
        regType: 1,
        personForm: {
          userId: sessionStorage.getItem('userId'),
          token: sessionStorage.getItem('token'),
          userName: '',
          idNumber: '',
          file: '',
        },
        companyForm: {
          userId: sessionStorage.getItem('userId'),
          token: sessionStorage.getItem('token'),
          "enterpriseName": "", //企业名称
          "certificateCode": "",  //统一社会信用代码
          "enterpriseDesc": "",  //企业描述
          "enterpriseAddress": "", //企业地址
          "enterpriseContecter": "", //联系人
          "enterpriseTel": "",  //联系方式
          "enterpriseUrl": "",  //企业官网
          "file": "", //企业图片
          "logoFile": "" //企业Logo
        },
      },
      rules: {
        personForm : {
          userName: [
            { required: true, message: "请输入真实姓名", trigger: "blur" }
          ],
          idNumber: [
            { required: true, message: "请输入身份证号", trigger: "blur" }
          ],
        },
        companyForm: {
          enterpriseName: [
            { required: true, message: "请输入名称", trigger: "blur" }
          ],
          certificateCode: [
            { required: true, message: "请输入统一社会信用代码", trigger: "blur" }
          ],
          enterpriseDesc: [
            { required: true, message: "请输入企业描述", trigger: "blur" }
          ],
        }
      },
    };
  },
  methods: {
    // 接收个人Logo
    takeUrlPerson(param) {
      this.form.personForm.file = param
    },
    // 接收企业logo地址
    takeUrlLogo(param) {
      this.form.companyForm.logoFile = param
      console.log(param)
    },
    // 接收企业图片地址
    takeUrlImg(param) {
      this.form.companyForm.file = param
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if(!this.form.regType) {
            this.verifyUserByPerson()
          } else {
            this.verifyUserByEnterprise()
          }
        } else {
          return false;
        }
      });
    },
    verifyUserByPerson() {
      // this.$api.user.verifyUserByPerson(this.form.personForm).then(res => {
      //   this.$router.push('/seller/home')
      // })
      let formData = new FormData();
      let params = this.form.personForm
      Object.keys(params).forEach((key) => {
        formData.append(key, params[key]);
      });
      axios({
        url: base.sq + '/user/verifyUserByPerson',
        type: FormData,
        headers:{
          'Content-type': 'application/x-www-form-urlencoded'
        },
        method: 'post',
        data: formData,
      }).then(res => {
        console.log(res)
        if(res.data.code == '0000') {
          this.$router.push('/seller/home')
        } else {
          this.$message.error(res.data.msg)
          return false
        }
      })
    },
    verifyUserByEnterprise() {
      let formData = new FormData();
      let params = this.form.companyForm
      Object.keys(params).forEach((key) => {
        formData.append(key, params[key]);
      });
      axios({
        url: base.sq + '/user/verifyUserByEnterprise',
        type: FormData,
        headers:{
          'Content-type': 'application/x-www-form-urlencoded'
        },
        method: 'post',
        data: formData,
      }).then(res => {
        console.log(res)
        if(res.data.code == '0000') {
          this.$router.push('/seller/home')
        } else {
          this.$message.error(res.data.msg)
          return false;
        }
      })
      // this.$api.user.verifyUserByEnterprise(this.form.companyForm).then(res => {
      //   this.$router.push('/seller/home')
      // })
    },

  },
  created() {
    if(sessionStorage.getItem('userType')) {
      this.form.userType = sessionStorage.getItem('userType')
    }
  },
  components: {
    IndexHeader,
    FooterGuide,
    ImgUpload
  }
};
</script>

<style lang="scss">
.register {
  // .avatar-uploader .el-upload {
  //   border: 1px dashed #d9d9d9;
  //   border-radius: 6px;
  //   cursor: pointer;
  //   position: relative;
  //   overflow: hidden;
  //   width:101px;
  //   height:101px;
  // }
  // .avatar-uploader .el-upload:hover {
  //   border-color: #409EFF;
  // }
  // .avatar-uploader .el-upload .el-upload__input{
  //     display: none;
  // }
  // .avatar-uploader-icon {
  //   font-size: 28px;
  //   color: #8c939d;
  //   width: 100px;
  //   height: 100px;
  //   line-height: 100px;
  //   text-align: center;
  // }
  // .avatar {
  //   width: 100px;
  //   height: 100px;
  //   display: block;
  // }
  .el-input {
    width: 280px;
    .el-input__inner{
      background-color: rgb(246, 246, 246);
    }
  }
  .el-textarea {
    width: 380px;
    .el-textarea__inner{
      min-height: 60px!important;
      background-color: rgb(246, 246, 246);
    }
  }
  .region {
    .el-input {
      width: 132px;
    }
  }
  .addrs {
    width: 400px;
  }
  .el-upload__tip {
    line-height: 1;
  }
}
</style>

<style lang="scss" scoped>
@import "@/assets/style/vars.scss";
.el-container {
  background-color: #f6f6f6;
  .w1220 {
    margin-top: 35px;
    margin-bottom: 50px;
    background-color: #fff;
    padding: 30px 40px;
    .title {
      font-size: 24px;
      font-weight: 600;
      color: $blue;
    }

  }
}
</style>