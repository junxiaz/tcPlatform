<template>
    <div class="login-register">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <!-- 登录 -->
        <el-tab-pane label="登录" name="login">
          <el-form status-icon ref="loginForm" :model="loginForm" :rules="rules" class="login-form reset-form">
            <el-form-item prop="account">
              <el-input placeholder="请输入您的账号" v-model="loginForm.account" prefix-icon="el-icon-user"></el-input>
            </el-form-item>
            <el-form-item prop="pwd">
              <el-input placeholder="请输入您的密码" v-model="loginForm.pwd" type="password" prefix-icon="el-icon-lock"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="text">忘记密码？</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="loginOrRegister('loginForm')">提交</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <!-- 注册 -->
        <el-tab-pane label="注册" name="register">
          <el-form status-icon ref="registerForm" :rules="rules" :model="registerForm" class="register-form reset-form">
            <el-form-item prop="account">
              <el-input placeholder="请输入您的账号" v-model="registerForm.account" prefix-icon="el-icon-user"></el-input>
            </el-form-item>
            <el-form-item prop="pwd">
              <el-input placeholder="请输入您的密码" type="password" v-model="registerForm.pwd" prefix-icon="el-icon-lock"></el-input>
            </el-form-item>
            <el-form-item prop="userType">
              <el-select v-model="registerForm.userType" placeholder="请选择客户类型" prefix-icon="el-icon-lock">
                <el-option v-for="item in userType" :key="item.userType" :label="item.userTypeName" :value="item.userType"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="text">忘记密码？</el-button>
            </el-form-item>
            <el-form-item>
              <el-checkbox ref="checkRule" v-model="registerForm.checkRule">我已阅读并同意</el-checkbox>
              <el-button type="text" id="tips">《天臣产业互联网平台》</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="loginOrRegister('registerForm')">提交</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane> 
      </el-tabs>
    </div>
</template>

<script>
import md5 from 'js-md5';
export default {
  name: "Login",
  data() {
    return {
      activeName: "",
      userType: [],
      loginForm: {
        account: '',
        pwd: '',
      },
      registerForm: {
        account: '',
        pwd: '',
        userType: '',
        checkRule: false,
      },
      rules: {
        account: [
          { required: true, message: "请输入账号", trigger: "blur" }
        ],
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" }
        ],
        userType: [
          { required: true, message: "请选择客户类型", trigger: "blur" }
        ],
      },
    };
  },
  methods: {   
    initActive() {
      this.activeName = this.$route.name
    }, 
    handleClick(tab, event) {
      this.$router.replace('/login/'+ this.activeName)
    },
    // 获取注册用户类型
    reqUserType() {
      this.$api.user.userType().then(res=> {
        this.userType = res.list
      })
    },
    // 登录或注册页面
    loginOrRegister(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (formName == "registerForm") {
            if(this.registerForm.checkRule) {
              const pwd = md5(this.registerForm.pwd).toLocaleUpperCase();
              let registerData = JSON.parse(JSON.stringify(this.registerForm))
              registerData.pwd = pwd
              this.$api.user.register(registerData).then(res => {
                this.$router.push('/register')
              })
            } else {
              this.$message({
                type: 'warning',
                message: "请在注册前仔细阅读平台规则并同意"
              });
              this.$refs['checkRule'].focus = true;
            }
          } else if (formName == "loginForm") {
            const pwd = md5(this.loginForm.pwd).toLocaleUpperCase();
            const loginData = JSON.parse(JSON.stringify(this.loginForm))
            loginData.pwd = pwd
            this.$api.user.login(loginData).then(res => {
              this.$router.push('/seller/home')
            })
          }
        }
      });
    }
  },
  mounted() {
    this.initActive()
    this.reqUserType()
  }
};
</script>

<style lang="scss">
.login-register {
  width: 500px;
  min-height: 514px;
  box-sizing: border-box;
  padding: 39px 42px;
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-500px, -260px);
  background: #fff;
  border-radius: 6px;
  // 重置tabs
  .el-tabs {
    .el-tabs__nav {
      text-align: center;
      float: none;
    }
    .el-tabs__item {
      font-size: 20px;
      color: rgb(159, 159, 159);
      width: 90px;
      text-align: center;
      padding: 0;
    }
    .el-tabs__active-bar {
      width: 90px !important;
      margin-left: calc(50% - 90px);
    }
  }
  // 重置input
  .reset-form {
    .el-form-item {
      .el-form-item__content {
        height: 48px;
        line-height: 48px;
        .el-input, .el-select {
          width: 100%;
          font-size: 16px;
          color: rgb(153, 153, 153);
          .el-input__inner {
            background-color: rgb(248, 246, 246);
            height: 48px;
            line-height: 48px;
          }
          .el-input__prefix {
            font-size: 22px;
          }
        }
      }
      .el-button.el-button--text {
        text-align: right;
        font-size: 14px;
        margin-top: 10px;
        margin-bottom: 56px;
        padding: 0;
        height: auto;
      }
      .el-button {
        width: 100%;
        height: 48px;
        font-size: 18px;
        border-radius: 24px;
      }
      #tips {
        display: inline;
        margin: 0;
        width: auto;
      }
    }
  }
  .login-form .el-form-item:nth-of-type(1) {
    margin-top: 56px;
  }
  .login-form .el-form-item:nth-of-type(2) {
    margin-top: 52px;
    margin-bottom: 0;
  }
  .login-form .el-form-item:nth-of-type(3) {
    margin: 0;
    padding: 0;
    line-height: 1;
    .el-form-item__content {
      padding: 0;
      height: auto;
      line-height: 1;
    }
  }
  .register-form .el-form-item:nth-of-type(1) {
    margin-top: 15px;
  }
  .register-form .el-form-item:nth-of-type(3) {
    margin-bottom: 0;
  }
  .register-form .el-form-item:nth-of-type(4) {
    margin: 0;
    padding: 0;
    line-height: 1;
    .el-form-item__content {
      padding: 0;
      height: auto;
      line-height: 1;
      .el-button--text {
        margin-bottom: 0;
      }
    }
  }
  .register-form .el-form-item:nth-of-type(5) {
    margin: 0;
    margin-top: 10px;
  }
}
</style>
