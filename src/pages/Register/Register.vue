<template>
  <el-container direction="vertical">
    <IndexHeader>
      <router-link slot="home">
        <i class="el-icon-house"></i>首页
      </router-link>
    </IndexHeader>
    <el-main>
      <div class="w1220">
        <el-row class="title">企业/终端客户/创客注册详情</el-row>
        <el-divider></el-divider>
        <el-form ref="form" class="register" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="form.pass" autocomplete="off"></el-input>
            <div class="el-upload__tip">（8-16位，至少含数字、字母两种组合）</div>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="form.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="公司名称">
            <el-input v-model="form.companyName"></el-input>
          </el-form-item>
          <el-form-item label="公司地址">
            <el-input v-model="form.companyAddr"></el-input>
          </el-form-item>
          <el-form-item label="所在区域" class="region">
            <el-select v-model="form.region">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>省
            <el-select v-model="form.region">
              <el-option label="区一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>市
          </el-form-item>
          <el-form-item label="详细地址">
            <el-input class="addrs" v-model="form.companyAddr"></el-input>
          </el-form-item>
          <el-form-item label="联系人">
            <el-input v-model="form.companyAddr"></el-input>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="form.companyAddr"></el-input>
          </el-form-item>
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
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.form.checkPass !== "") {
          this.$refs.form.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      form: {
        name: "",
        region: "",
        pass: "",
        checkPass: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
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
    .el-input__inner {
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