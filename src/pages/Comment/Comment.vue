<template>
  <div class="comment-wrap">
    <h1>请您留言</h1>
    <el-form ref="form" :model="form" size="small">
      <el-input type="textarea" v-model="form.content" placeholder="请再次输入浏览内容，我们会尽快与您联系。（必填）"></el-input>
      <el-input placeholder="姓名" prefix-icon="el-icon-user-solid" v-model="form.name"> </el-input>
      <el-input placeholder="电话" prefix-icon="el-icon-phone" v-model="form.tel"> </el-input>
      <el-input placeholder="公司电话" prefix-icon="el-icon-s-order" v-model="form.companyTel"> </el-input>
      <div class="captcha">
        <el-input placeholder="验证码" v-model="validCode2"></el-input>
        <validCode v-model="validCode" :refresh="refreshCode" @sendData="getCode"></validCode>
      </div>
      <el-form-item>
        <el-button type="primary" size="medium" @click="onSubmit">发送</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import validCode from '@/components/verificationCode';
  export default {
    data() {
      return {
        validCode:"",
        validCode2:"",
        refreshCode:0,
        form: {
          "content": "",
          "name": "",
          "tel": "",
          "companyTel": "",
        },
      }
    },
    methods: {
      onSubmit() {
        if(this.validCode2.toLowerCase() != this.validCode.toLowerCase()) {
          this.$message.warning('验证码输入不正确！')
        } else if(!this.form.content) {
          this.$message.warning('留言内容不能为空！')
        } else {
          this.$api.demand.addMessage(this.form).then(res => {
            if(res.code == '0000') {
              this.$message.success('您已成功留言,请等待工作人员处理反馈！')
            } else {
              this.$message.error(res.msg)
            }
          })
        }
      },
      //从子组件获取验证码，并将验证码返回到页面
      getCode(data){
        // console.log(data)
        this.validCode = data;
      }
    },
    components: {
      validCode
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';
.comment-wrap {
  width: 360px;
  margin: 0 auto;
  padding-top: 40px;
  h1 {
    background-color: $blue;
    font-size: 14px;
    font-weight: normal;
    color: #fff;
    padding: 10px;
    padding-right: 0;
    margin: 0;
  }
  .el-form {
    background-color: #ededed;
    padding: 20px 22px;
    .el-input,.el-textarea {
      margin-bottom: 5px;
    }
    .captcha {
      .el-input {
        vertical-align: top;
        width: 120px;
        display: inline-block;
      }
      span {
        display: inline-block;
        width: 100px;
        height: 40px;
        line-height: 40px;
        background: #fff;
        vertical-align: middle;
        text-align: center;
        font-size: 32px;
      }
    }
  }
}
</style>