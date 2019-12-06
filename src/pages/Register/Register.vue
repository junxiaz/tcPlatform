<template>
  <el-container direction="vertical">
    <IndexHeader></IndexHeader>
    <el-main>
      <div class="w1220">
        <el-row class="title">企业/终端客户/创客认证</el-row>
        <el-divider></el-divider>
        <el-form ref="form" class="register" :rules="rules" :model="form" label-width="140px">
          <el-form-item v-if="userType == 2" label="认证类型">
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
import IndexHeader from "@/components/HeaderGuide/IndexHeader";
import FooterGuide from "@/components/FooterGuide/FooterGuide";
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
          idNumber: ''
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
      this.$api.user.verifyUserByPerson(this.form.personForm).then(res => {
        this.$router.push('/seller/home')
      })
    },
    verifyUserByEnterprise() {
      this.$api.user.verifyUserByEnterprise(this.form.companyForm).then(res => {
        this.$router.push('/seller/home')
      })
    },
  },
  created() {
    if(sessionStorage.getItem('userType')) {
      this.userType = sessionStorage.getItem('userType')
    }
  },
  components: {
    IndexHeader,
    FooterGuide
  }
};
</script>

<style lang="scss">
.register {
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