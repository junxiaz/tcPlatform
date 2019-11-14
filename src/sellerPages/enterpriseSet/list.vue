<template>
  <div id="enterpriseSet">
    <!-- 商家端 --- 企业设置 -->
    <div class="baseInfo bg sell-padding">
      <vnotes title="基本信息"/>

      <el-form :model="baseForm" :rules="baseRules" ref="baseForm" 
                label-width="110px" class="demo-ruleForm mt30">

        <el-form-item label="封面信息" class="upload-item" required>
          <el-upload class="upload-demo" ref="upload"
            action="#" :limit="1" :on-exceed="handleExceed"
            accept=".jpg,.jpeg,.png,.gif,.JPG,.JPEG,.PNG,.GIF"
            :before-upload="beforeUpload"
            :on-success="handleSuccess"
            :on-remove="handleRemove"
            :file-list="fileList" list-type="picture">

            <img src="./uploadlogo.png" class="uploadImg" slot="trigger" alt="">
            <el-checkbox v-model="baseForm.noLogo" 
              style="margin-left:16px;font:12px/1 '';vertical-align: top;color:#7D7D7D">
              暂无logo
            </el-checkbox>
            <div slot="tip" class="el-upload__tip">建议上传140*140（像素），PNG格式透明背景logo</div>
          </el-upload>  

        </el-form-item>

        <el-form-item prop="enterpriseName">
          <el-input v-model="baseForm.enterpriseName" placeholder="请填写企业名称" style="width:300px;" size="medium"></el-input>
        </el-form-item>        
        <el-form-item label="banner标语" prop="banner">
          <el-input v-model="baseForm.banner" maxlength="15" show-word-limit
                    placeholder="请输入大标题，15字以内" style="width:300px;" size="medium"></el-input>
        </el-form-item>
        <el-form-item prop="subtitle">
          <el-input type="textarea" v-model="baseForm.subtitle" placeholder="请输入小标题，50字以内（非必填）" 
                    style="width:500px;" resize="none" show-word-limit maxlength="50" rows="3">
          </el-input>
        </el-form-item>
        
        <el-form-item style="margin-left:-110px;text-align:center;">
         <el-button type="danger" size="medium" @click="submitForm('baseForm')">立即提交</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 企业介绍 -->
    <div class="enterpriseInfo bg sell-padding mt30">
      <vnotes title="企业介绍"/>

      <el-form :model="enterpriseForm" :rules="enterpriseRules" ref="enterpriseForm" label-width="100px" class="demo-ruleForm mt20" :inline="true">
        <el-form-item label="公司简介" prop="companyProfile"> 
          <el-input type="textarea" v-model="enterpriseForm.companyProfile" placeholder="请输入公司简介，最多500字符" 
                    style="width:700px;" resize="none" show-word-limit maxlength="500" rows="10">
          </el-input>              
        </el-form-item>
        <el-form-item label="所在地区" style="margin-bottom:46px;" required>
          <el-form-item prop="province">
            <el-select v-model="enterpriseForm.province" clearable placeholder="请选择省" style="width:140px;" size="medium">
              <el-option
                label="北京市" value="1">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="city">
            <el-select v-model="enterpriseForm.city" clearable placeholder="请选择市" style="width:140px;" size="medium">
              <el-option
                label="北京市" value="1">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="address">
            <el-input v-model="enterpriseForm.address" placeholder="请填写公司详细地址" style="width:237px;" size="medium"></el-input>
          </el-form-item>                
        </el-form-item>        
        <el-form-item label="所属行业" prop="trade">
          <el-select v-model="enterpriseForm.trade" clearable placeholder="请选择所属行业" 
                      style="width:300px;" size="medium">
            <el-option
              label="事业部" value="1">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="电话" prop="telephone">
          <el-input v-model.number="enterpriseForm.telephone" placeholder="请填写公司联系电话" style="width:300px;" size="medium"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="enterpriseForm.email" placeholder="请填写公司邮箱" style="width:300px;" size="medium"></el-input>
        </el-form-item>
        <el-form-item label="QQ" prop="qq">
          <el-input v-model.number="enterpriseForm.qq" placeholder="请填写QQ" style="width:300px;" size="medium"></el-input>
        </el-form-item>

        <el-form-item style="width:100%;text-align:center;">
          <el-button type="danger" size="medium" @click="submitForm('enterpriseForm')">立即提交</el-button>
        </el-form-item>
      </el-form>    
    </div>

    <!-- <el-row class="mt20">
      <el-col :span="24" align="center">        
        <el-button type="danger">立即提交</el-button>
      </el-col>
    </el-row> -->

  </div>
</template>

<script>
import vnotes from '@/components/sellerPages/vnotes'
export default {
  components:{
    vnotes
  },
  data(){
    return { 
      fileList: [],
      baseRules:{
        enterpriseName:[
          {required:true, message: '请输入企业名称', tigger:'blur'}
        ],
        banner:[
          {required:true, message: '请输入大标题', tigger:'blur'}
        ]
      },
      baseForm:{
        noLogo: false,
        enterpriseName:'',
        banner:'',
        subtitle:''
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
      enterpriseForm:{}
    }
  },
  methods:{
    //上传logo
    //限制上传一个
    handleExceed(files,fileList){
      this.$message.warning(`当前限制选择 1 个文件`);
    },

    //文件上传之前
    beforeUpload(file){
      console.log("文件上传之前",file);
    },

    //文件上传成功时的钩子
    handleSuccess(res,file,fileList){
      console.log("文件上传成功时的钩子",res,file,fileList);
      console.log("上传成功后的fileList",this.fileList)
    },

    //文件列表移除文件时
    handleRemove(file) {
      console.log(file);
    },
    

    //表单提交
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if(formName === 'baseForm'){
            if(this.fileList.length === 0 && this.baseForm.noLogo === false){
              // this.$message.warning(`无logo时,请选择“暂无logo”选项`);
              this.$message({
                showClose: true,
                message: '警告哦，这是一条警告消息',
                type: 'warning',
                duration: 0
              });
            } else {

            }
          }
          else{
            
          }

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  }
}
</script>

<style lang="scss" scoped>

#enterpriseSet{
  .baseInfo{
    form.el-form{
      .el-form-item__content{line-height:20px !important;}      
          
      .uploadImg{vertical-align: top;width:140px;height:140px;}      
    }
  }

}
</style>