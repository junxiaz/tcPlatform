<template>
  <div id="myOrder" class="bg sell-padding">
    <!-- 商家端----我的订单 -->
      <vnotes title="我的订单"/>

      <el-form :inline="true" :model="searchForm" ref="searchForm"
                class="demo-form-inline" style="margin-top:14px;">
        <el-form-item label="需求编号">
          <el-input v-model="searchForm.id" size="medium" class="nobr" style="width:140px;"></el-input>
        </el-form-item>
        <el-form-item label="发布时间">
          <el-date-picker 
            v-model="searchForm.timer" type="daterange" 
            size="medium" class="nobr dateIpt" style="width:190px;"
            format="yyyy.MM.dd" value-format="yyyy.MM.dd"
            range-separator="~" start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="金额">
          <el-input v-model="searchForm.minMoney" size="medium" class="nobr" style="width:80px;"></el-input>
          <span style="color:#d2d2d2"> ~ </span>
          <el-input v-model="searchForm.maxMoney" size="medium" class="nobr" style="width:80px;"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="danger" size="medium" @click="searchBtn('searchForm')" style="width:90px;">查询</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="tableData.slice((currentPage-1)*params.pageSize,currentPage*params.pageSize)" border style="width: 100%"  class="myTable"
                :header-cell-style="{background:'#647787',color:'#fff'}">

        <el-table-column type="index" :index="indexMethod" width="50" label="序号" align="center" fixed="left"></el-table-column>
        <el-table-column prop="userName" label="需求编号"  align="center"></el-table-column>
        <el-table-column prop="realName" label="需求预算" align="center"></el-table-column>
        <el-table-column prop="userType" label="发布时间"  align="center"></el-table-column>
        <el-table-column label="订单状态" align="center">          
          <template slot-scope="scope">
            <span v-if="scope.row.sex == 0">已发货</span>
            <span v-else>未发货</span>
          </template>
        </el-table-column>
        <el-table-column prop="tel" label="已支付" align="center" width="110"></el-table-column>
        <el-table-column label="操作" align="center" width="100px" fixed="right">
          <template slot-scope="scope">
            <el-link>删除</el-link>
          </template>
        </el-table-column>
      </el-table>
      
      <!-- 分页 -->
      <el-row class="mt20">
        <el-col :span="24" align="right">        
          <el-pagination background class="myPagination"
            layout="prev, pager, next"
            @current-change="handleCurrentChange"
            :page-size="params.pageSize" :current-page.sync="currentPage"
            :total="tableData.length">
          </el-pagination>
        </el-col>
      </el-row>      
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
      params:{
        pageNo:1,
        pageSize:10
      },
      currentPage:1,
      // total:12,
      tableData:[
        {userName:"木木",realName:"李霞",userType:"终端客户",sex:0,tel:"13412343568",email:"1234123@163.com",state:"状态一",platInfo:1},
        {userName:"木木",realName:"李霞",userType:"印刷企业",sex:1,tel:"13412343568",email:"1234123@163.com",state:"状态一",platInfo:2},
        {userName:"木木",realName:"李霞",userType:"印刷企业",sex:0,tel:"13412343568",email:"1234123@163.com",state:"状态一",platInfo:2},
        {userName:"木木",realName:"李霞",userType:"设计师",sex:0,tel:"13412343568",email:"1234123@163.com",state:"状态一",platInfo:1},
        {userName:"木木",realName:"李霞",userType:"设计师",sex:1,tel:"13412343568",email:"1234123@163.com",state:"状态一",platInfo:1},
        {userName:"木木",realName:"李霞",userType:"终端客户",sex:1,tel:"13412343568",email:"1234123@163.com",state:"状态一",platInfo:1}
      ],
      searchForm:{}
    }
  },
  methods:{
    //表格自定义序号
    indexMethod(index) {
      return (this.currentPage-1)*this.params.pageSize +(index+1) ;
    },
    //分页
    handleCurrentChange(val){
      this.currentPage = val;
    },

    //搜索
    searchBtn(formName){
      console.log(this.searchForm);
    }
  }

}
</script>

<style lang="scss" scoped>
  #myOrder{
    
    form.el-form{      
      .el-form-item{
        margin-right:35px;       
        
      }     
      .el-form-item:last-child{
        margin-right:0px;
      }
    }

  }
</style>