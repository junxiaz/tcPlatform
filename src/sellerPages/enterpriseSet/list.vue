<template>
  <div id="enterpriseSet">
    <!-- 商家端 --- 企业设置 -->
    <div class="baseInfo bg sell-padding">
      <vnotes :title="title"/>

      <el-form :model="userInfo" :rules="userInfo.verifyType?baseRules.company:baseRules.person" ref="companyForm" label-width="150px" class="demo-ruleForm mt30">
        <!-- 个人信息 -->
        <template v-if="!userInfo.verifyType">
          <el-form-item label="真实姓名" prop="userName">
            <el-input v-model="userInfo.userName" placeholder="请输入真实姓名" style="width:300px;" size="medium"></el-input>
          </el-form-item>
          <el-form-item label="身份证号" prop="idNumber">
            <el-input v-model="userInfo.idNumber" placeholder="请输入身份证号" style="width:300px;" size="medium"></el-input>
          </el-form-item>
          <!-- <el-form-item label="个人logo">
            <ImgUpload :imageUrled="userInfo.personLogo" @takeUrl="takeUrlPerson"></ImgUpload>
          </el-form-item> -->
          <el-form-item label="个人LOGO">
            <ele-upload-images
              :action="imgUploadUrl"
              v-model="personForm.personLogo"
              :responseFn="handleResponse"
              :size="100"
            ></ele-upload-images>
          </el-form-item>
        </template>

        <!-- 企业信息 -->
        <template v-else>
          <el-form-item label="企业名称" prop="enterpriseName">
            <el-input v-model="userInfo.enterpriseName" placeholder="请填写企业名称" style="width:300px;" size="medium"></el-input>
          </el-form-item>
          <el-form-item label="统一社会信用代码" prop="certificateCode">
            <el-input v-model="userInfo.certificateCode" placeholder="请输入统一信用码" style="width:300px;" size="medium"></el-input>
          </el-form-item>
          <el-form-item label="主营业务" prop="mainBusiness">
            <el-input type="textarea" v-model="userInfo.enterpriseDesc" placeholder="请输入小标题，50字以内（非必填）"
                      style="width:500px;" resize="none" show-word-limit maxlength="50" rows="3">
            </el-input>
          </el-form-item>
          <!-- <el-form-item label="企业logo">
            <ImgUpload @takeUrl="takeUrlLogo" :imageUrled="userInfo.logoUrl"></ImgUpload>
          </el-form-item>
          <el-form-item label="企业图片">
            <ImgUpload @takeUrl="takeUrlImg" :imageUrled="userInfo.imgUrl"></ImgUpload>
          </el-form-item> -->

          <el-form-item label="企业LOGO">
            <ele-upload-images
              :action="imgUploadUrl"
              v-model="companyForm.logoUrl"
              :responseFn="handleResponse"
              :size="100"
            ></ele-upload-images>
          </el-form-item>
          <el-form-item label="企业图片">
            <ele-upload-images
              :action="imgUploadUrl"
              v-model="companyForm.imgUrl"
              :responseFn="handleResponse"
              :size="100"
            ></ele-upload-images>
          </el-form-item>
          <el-form-item label="顶部图片">
            <ele-upload-images
              :action="imgUploadUrl"
              v-model="companyForm.topPic"
              :responseFn="handleResponse"
              :size="100"
            ></ele-upload-images>
          </el-form-item>
          <el-form-item label="轮播图片">
            <ele-upload-images
              multiple
              :responseFn="handleResponse"
              :action="imgUploadUrl"
              v-model="companyForm.headPic"
              :size="100"
            ></ele-upload-images>
          </el-form-item>
          <el-form-item label="介绍图片">
            <ele-upload-images
              multiple
              :responseFn="handleResponse"
              :action="imgUploadUrl"
              v-model="companyForm.introducePic"
              :size="100"
            ></ele-upload-images>
          </el-form-item>
          <el-form-item label="产品图片">
            <ele-upload-images
              multiple
              :responseFn="handleResponse"
              :action="imgUploadUrl"
              v-model="companyForm.productPic"
              :size="100"
            ></ele-upload-images>
          </el-form-item>
          <el-form-item label="荣誉图片">
            <ele-upload-images
              multiple
              :responseFn="handleResponse"
              :action="imgUploadUrl"
              v-model="companyForm.honorPic"
              :size="100"
            ></ele-upload-images>
          </el-form-item>
        </template>

        <el-form-item style="margin-left:-110px;text-align:center;">
         <el-button type="danger" size="medium" @click="submitForm('companyForm')">立即提交</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
import vnotes from '@/components/sellerPages/vnotes';
// import ImgUpload from "@/components/ImgUpload/index1.vue";
import eleUploadImage from "@/components/ImgUpload/index.vue";
import UploadImage from "@/components/ImgUpload/index.vue";
import ImgsUpload from "@/components/ImgUpload/indexs.vue";
import axios from 'axios';
import base from '@/api/base'; // 导入接口域名列表
import EleUploadImages from 'vue-ele-upload-image'
export default {
  components:{
    vnotes,
    ImgsUpload,
    eleUploadImage,
    UploadImage,
    EleUploadImages
  },
  data(){
    return {
      title:"个人信息", //需要判断userType进行设置
      fileList: [],
      userInfo: {},
      imgUploadUrl: base.sq+'/upload/uploadPic',
      baseRules:{
        person: {
          userName:[
            {required:true, message: '请输入真实姓名', tigger:'blur'}
          ],
          idNumber:[
            {required:true, message: '请输入身份证号', tigger:'blur'}
          ],
        },
        company: {
          enterpriseName:[
            {required:true, message: '请输入企业名称', tigger:'blur'}
          ],
          certificateCode:[
            {required:true, message: '请输入统一社会信用代码', tigger:'blur'}
          ],
          mainBusiness:[
            {required:true, message: '请输入主营业务', tigger:'blur'}
          ],
        }
      },
      companyForm: {
        userId: sessionStorage.getItem('userId'),
        token: sessionStorage.getItem('token'),
        "enterpriseName": "", //企业名称
        "certificateCode": "",  //统一社会信用代码
        "enterpriseDesc": "",  //企业描述
        "imgUrl": "", //企业图片
        "logoUrl": "", //企业Logo
        "topPic": '',
        "headPic": [],
        "introducePic": [],
        "productPic": [],
        "honorPic": [],
      },
      personForm: {
        userId: sessionStorage.getItem('userId'),
        token: sessionStorage.getItem('token'),
        userName: '',
        idNumber: '',
        personLogo: '',
      },
      enterpriseRules:{
        companyProfile:[
          {required:true, message: '请输入公司简介', tigger:'blur'}
        ],
        province:[
          {required:true, message: '请选择省', tigger:'change'}
        ],
        city:[
          {required:true, message: '请选择市', tigger:'change'}
        ],
        address:[
          {required:true, message: '请输入公司详细地址', tigger:'blur'}
        ],
        trade:[
          {required:true, message: '请输入所属行业', tigger:'change'}
        ],
        telephone:[
          {required:true, message: '请输入公司电话', tigger:'blur'},
          { type: 'number', message: '公司电话必须为数字值'}
        ],
        email:[
          {required:true, message: '请输入邮箱', tigger:'blur'},
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        qq:[
          {required:true, message: '请输入QQ', tigger:'blur'},
          { type: 'number', message: 'QQ必须为数字值'}
        ]
      },
      enterpriseForm:{},
    }
  },
  methods:{
    handleResponse(response, file, fileList) {
      // 根据响应结果, 设置 URL
      return response.picUrl
    },

    takeUrlTopImg(param) {
      this.companyForm.topPicFile = param
    },
    // 接收轮播图
    takeHeadPicFiles(param) {
      this.companyForm.headPicFiles = param
    },
    // 接收轮播图
    takeIntroducePicFiles(param) {
      this.companyForm.introducePicFiles = param
    },
    // 接收轮播图
    takeProductPicFiles(param) {
      this.companyForm.productPicFiles = param
    },
    // 接收轮播图
    takeHonorPicFiles(param) {
      this.companyForm.honorPicFiles = param
    },

    // 接收个人Logo
    takeUrlPerson(param) {
      this.personForm.file = param
    },
    // 接收企业logo地址
    takeUrlLogo(param) {
      this.companyForm.logoFile = param
    },
    // 接收企业图片地址
    takeUrlImg(param) {
      this.companyForm.file = param
    },

    //表单提交
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if(formName === 'companyForm'){
            if(this.userInfo.verifyType) {
              this.companyForm.enterpriseName = this.userInfo.enterpriseName
              this.companyForm.enterpriseDesc = this.userInfo.enterpriseDesc
              this.companyForm.certificateCode = this.userInfo.certificateCode
              let formData = new FormData();
              let params = this.companyForm
              Object.keys(params).forEach((key) => {
                if(params[key] instanceof Array) {
                  console.log(params[key])
                  params[key].map(item => {
                    formData.append(key, item);
                  })
                } else {
                  formData.append(key, params[key]);
                }
              });
              axios({
                url: base.sq + '/user/updateVerifyUserByEnterprise',
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
                } else {
                  this.$message.error(res.data.msg);
                  return false;
                }
              })
            } else {
              // person
              this.personForm.userName = this.userInfo.userName
              this.personForm.idNumber = this.userInfo.idNumber
              let formData = new FormData();
              let params = this.personForm
              Object.keys(params).forEach((key) => {
                formData.append(key, params[key]);
              });
              axios({
                url: base.sq + '/user/updateVerifyUserByPerson',
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
                } else {
                  this.$message.error(res.data.msg);
                  return false;
                }
              })

            }
          }
          else{
            console.log(this.enterpriseForm);
          }

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },

  },
  mounted() {
    const params = {
      token: sessionStorage.getItem('token'),
      userId: sessionStorage.getItem('userId')
    }
    this.$api.user.getUserInfo(params).then(res => {
      this.userInfo = res.data
      if(this.userInfo.verifyType) {
        this.title = '企业信息'
        this.companyForm.logoUrl = this.userInfo.logoUrl
        this.companyForm.imgUrl = this.userInfo.imgUrl
        this.companyForm.topPic = this.userInfo.topPicFile
        this.userInfo.headPicFiles.map((item,index) => {
          this.companyForm.headPic.push(item.idView)
        })
        this.userInfo.introducePicFiles.map((item,index) => {
          this.companyForm.introducePic.push(item.idView)
        })
        this.userInfo.productPicFiles.map((item,index) => {
          this.companyForm.productPic.push(item.idView)
        })
        this.userInfo.honorPicFiles.map((item,index) => {
          this.companyForm.honorPic.push(item.idView)
        })
      } else {
        this.title = '个人信息'
        this.personForm.personLogo = this.userInfo.personLogo
      }
    })
  }
}
</script>


<style lang="scss">
.baseInfo {
  .ele-upload-image>div {
    &:nth-child(1) {
      display: inline-block;
    }
    &:nth-child(2) {
      float: left;
    }
  }
}
</style>
<style lang="scss" scoped>
#enterpriseSet{
  .baseInfo{
    form.el-form{
      .el-form-item__content{line-height:20px !important;}
    }
  }
}
</style>