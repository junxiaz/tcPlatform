<template>
  <el-container direction="vertical">
    <HeaderGuide />
    <el-main>
      <div class="w1220">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/hall' }">需求大厅</el-breadcrumb-item>
          <el-breadcrumb-item>需求详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="wrap">
          <el-row class="title">需求名称</el-row>
          <el-row class="content" :gutter="30">
            <el-col :span="8">产品图片</el-col>
            <el-col :span="16">
              <el-row :gutter="10">
                <el-col :span="6">
                  <p>￥1000000</p>
                  <p>需求预算</p>
                </el-col>
                <el-col :span="6">
                  <p>￥1000000</p>
                  <p>需求预算</p>
                </el-col>
                <el-col :span="6">
                  <p>￥1000000</p>
                  <p>需求预算</p>
                </el-col>
                <el-col :span="6">
                  <p>￥1000000</p>
                  <p>需求预算</p>
                </el-col>
              </el-row>
              <el-row class="row">
                <el-col>需求号</el-col>
                <el-col>839004890400308383</el-col>
              </el-row>  
              <el-row class="row">
                <el-col>需求号</el-col>
                <el-col>839004890400308383</el-col>
              </el-row>  
              <el-row class="row">
                <el-col>需求号</el-col>
                <el-col>839004890400308383</el-col>
              </el-row>  
              <el-row class="row">
                <el-col>需求号</el-col>
                <el-col>839004890400308383</el-col>
              </el-row>  
              <el-row class="row">
                <el-button type="danger">发布需求</el-button>
                <el-button type="danger">发布需求</el-button>
              </el-row>  
            </el-col>
            <el-row>
              <el-row class="title"><p>需求内容</p></el-row>
              <el-divider></el-divider>
              <el-row>需求内容：根据通机公司整体规划，建立一个立体库满足使用需求，规划面积140M*40M，库位总共40000个左右,整个立体库运行需采用货位管理系统进行管理。<br/>其他详情：投标后电话详谈。</el-row>
            </el-row>
          </el-row>
        </div>
      </div>
    </el-main>
    <FooterGuide />
  </el-container>
</template>

<script>
import HeaderGuide from "@/components/HeaderGuide/HeaderGuide";
import FooterGuide from "@/components/FooterGuide/FooterGuide";
export default {
  name: "Release",
  data() {
    return {
      
    };
  },
  methods: {
    
  },
  components: {
    HeaderGuide,
    FooterGuide,
  }
};
</script>

<style lang="scss">
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
.contact .el-form-item__label {
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
.el-textregion textregion {
  width: 310px;
  min-height: 140px!important;
}
.annex .el-upload-list {
  width: 340px;
}
</style>
<style lang="scss" scoped>
@import '@/assets/style/vars.scss';
.el-container {
  background-color: #f6f6f6;
  .w1220 {
    .el-breadcrumb {
      padding-top: 51px;
      padding-bottom: 20px;
      margin-top: 60px;
    }
    
  }
}
</style>
