<template>
  <el-container direction="vertical">
    <IndexHeader></IndexHeader>
    <el-main>
      <div class="w1220">
        <el-row class="title">企业/终端客户/创客认证</el-row>
        <el-divider></el-divider>
        <el-form ref="form" class="register" :model="form"  label-width="100px">
          <el-form-item label="认证类型">
            <el-radio-group v-model="form.regType">
              <el-radio :label="0">个人认证</el-radio>
              <el-radio :label="1">企业认证</el-radio>
            </el-radio-group>
          </el-form-item>
          <template v-if="!form.regType">
            <el-form-item label="真实姓名">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="身份证号码">
              <el-input v-model="form.companyName"></el-input>
            </el-form-item>
          </template>
          <template v-else>
            <el-form-item label="企业名称">
              <el-input v-model="form.companyName"></el-input>
            </el-form-item>
            <el-form-item label="统一信用代码">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="主营业务">
              <el-input type="textarea" v-model="form.name"></el-input>
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
        regType: 1,
        name: "",
        region: "",
        pass: "",
        checkPass: ""
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
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