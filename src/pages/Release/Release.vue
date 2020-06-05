<template>
  <el-container direction="vertical">
    <!-- <Top /> -->
    <IndexHeader>
      <router-link slot="home">
        <i class="el-icon-house"></i>首页
      </router-link>
    </IndexHeader>
    <el-main>
      <div class="w1220 release">
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
            <el-form-item label="我需要" class="i-need" prop="demandType">
              <el-radio-group v-model="ruleForm.demandType">
                <el-radio v-for="item in demandType" :key="item.demandType" :label="item.demandType">{{item.demandTypeName}}</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="需求标题" class="i-need title-blue" prop="demandTitle">
              <el-input v-model="ruleForm.demandTitle"></el-input>
            </el-form-item>
            <el-form-item label="需求范围" class="i-need title-blue" prop="provinceId">
              <el-select v-model="ruleForm.provinceId" placeholder="请选择需求范围">
                <el-option v-for="item in province" :key="item.id" :label="item.provinceName" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="需求预算" class="i-need title-blue" prop="capitalCount">
              <el-input v-model.number="ruleForm.capitalCount"></el-input>
            </el-form-item>
            <el-form-item label="托管资金" class="i-need title-blue" prop="depositCount">
              <el-input v-model.number="ruleForm.depositCount"></el-input>
            </el-form-item>
            <el-form-item label="投标数目" class="i-need title-blue" prop="tenderPlan">
              <el-input v-model.number="ruleForm.tenderPlan"></el-input>
            </el-form-item>
            <el-form-item label="项目周期" class="i-need title-blue" prop="endDate">
              <el-date-picker
                v-model="ruleForm.endDate"
                type="date"
                value-format="yyyy-MM-dd"
                :picker-options="pickerOptions"
                placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="其他说明" class="i-need title-blue" prop="otherDesc">
              <el-input type="textarea" v-model="ruleForm.otherDesc"></el-input>
            </el-form-item>
            <el-form-item label="添加图片" class="title-blue">
              <ImgUpload @takeUrl="takeUrlDemand" />
              <!-- <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                :file-list="ruleForm.fileList"
                class="annex"
              >
                <el-button size="small" type="danger">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">（支持的文件格式为doc、xls、jpg、png、pdf压缩文件，大小不超过50M）</div>
              </el-upload> -->
            </el-form-item>
            <el-form-item label="联系方式" class="mobile" prop="mobile">
              <el-input v-model="ruleForm.mobile" placeholder="请输入联系方式"></el-input>
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
import base from '@/api/base'; // 导入接口域名列表
import axios from 'axios';
import ImgUpload from "@/components/ImgUpload";
import IndexHeader from "@/components/HeaderGuide/IndexHeader";
import FooterGuide from "@/components/FooterGuide/FooterGuide";
import Top from "@/components/sellerPages/top";

export default {
  name: "Release",
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;//如果没有后面的-8.64e7就是不可以选择今天的
        }
      },
      ruleForm: {
        demandType: "",
        demandTitle: "",
        provinceId: "",
        capitalCount: '',
        depositCount: '',
        tenderPlan: '',
        endDate: '',
        otherDesc: "",
        file: "",
        mobile: "",
        token: sessionStorage.getItem('token'),
        userId: sessionStorage.getItem('userId'),
      },
      rules: {
        demandType: [
          { required: true, message: "请选择需要的需求", trigger: "change" }
        ],
        demandTitle: [
          { required: true, message: '需求标题不能为空', trigger: 'blur'},
        ],
        provinceId: [
          { required: true, message: '需求范围不能为空', trigger: 'blur'},
        ],
        capitalCount: [
          { required: true, message: '需求预算不能为空', trigger: 'blur'},
          { type: 'number', message: '需求预算必须为数字', trigger: 'blur'}
        ],
        depositCount: [
          { required: true, message: '托管资金不能为空', trigger: 'blur'},
          { type: 'number', message: '托管资金必须为数字', trigger: 'blur'}
        ],
        tenderPlan: [
          { required: true, message: '投标数目不能为空', trigger: 'blur'},
          { type: 'number', message: '投标数目必须为数字', trigger: 'blur'}
        ],
        endDate: [
          { required: true, message: '需求周期不能为空', trigger: 'blur'},
        ],
        otherDesc: [
          { required: true, message: '说明不能为空', trigger: 'blur'}
        ],
        mobile: [
          { required: true, message: "请输入联系方式", trigger: "blur" }
        ],
      },
      demandType: [],
      province: [],
    };
  },
  methods: {
    takeUrlDemand(param) {
      this.ruleForm.file = param
    },
    submitForm(formmobile) {
      this.$refs[formmobile].validate(valid => {
        if (valid) {
          // this.$api.demand.addDemand(this.ruleForm).then(res => {
          //   this.$message({
          //     message: '恭喜你，需求添加成功',
          //     type: 'success'
          //   });
          //   setTimeout(() => {
          //     window.history.back()
          //   }, 1000);
          // })
          let formData = new FormData();
          let params = this.ruleForm
          Object.keys(params).forEach((key) => {
            formData.append(key, params[key]);
          });
          axios({
            url: base.sq + '/demand/addDemand',
            type: FormData,
            headers:{
              'Content-type': 'application/x-www-form-urlencoded'
            },
            method: 'post',
            data: formData,
          }).then(res => {
            console.log(res)
            if(res.data.code == '0000') {
              this.$message.success(res.data.msg)
              setTimeout(() => {
                window.history.back()
              }, 1000);
            } else {
              this.$message.error(res.data.msg);
              return false;
            }
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 获取需求类型
    reqDemandType() {
      this.$api.demand.reqDemandType().then(res => {
        this.demandType = res.list
      })
    },
    // 获取需求范围
    reqProvince() {
      this.$api.demand.reqProvince().then(res => {
        this.province = res.list
      })
    }
  },
  mounted() {
    this.reqDemandType()
    this.reqProvince();
  },
  components: {
    IndexHeader,
    FooterGuide,
    ImgUpload,
    // Top
  }
};
</script>

<style lang="scss">
.release {
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
.mobile .el-form-item__label {
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
.el-textarea .el-textarea__inner {
  width: 310px;
  min-height: 100px!important;
}
.annex .el-upload-list {
  width: 340px;
}
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/vars.scss';
.el-container {
  background-color: #f6f6f6;
  .w1220.release {
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
