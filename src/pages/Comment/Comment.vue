<template>
  <div class="comment-wrap">
    <h1>请您留言</h1>
    <el-form ref="form" :model="form" size="small">
      <el-input type="textarea" v-model="form.desc" placeholder="请再次输入浏览内容，我们会尽快与您联系。（必填）"></el-input>
      <el-input placeholder="姓名" prefix-icon="el-icon-user-solid" v-model="input2"> </el-input>
      <el-input placeholder="电话" prefix-icon="el-icon-phone" v-model="input2"> </el-input>
      <el-input placeholder="公司电话" prefix-icon="el-icon-s-order" v-model="input2"> </el-input>
      <div class="captcha">
        <el-input placeholder="验证码"></el-input>
        <span>XXPP</span>
      </div>
      <el-form-item>
        <el-button type="primary" size="medium" @click="onSubmit">发送</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
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