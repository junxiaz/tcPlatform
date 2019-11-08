<template>
  <div id="seller-home">
    <!-- 商家----我的首页 -->

    <!-- 企业信息 -->
    <div id="enterpriseInfo" class="bg padding">
      <vnotes title="企业信息"></vnotes>

      <el-row class="mt20">
        <el-col :span="3">
          <div class="logo"></div>
        </el-col>

        <el-col :span="21">
          <h4>天臣集团</h4>
          <p class="slogan">banner标语：让天下没有假货</p>
          <p class="address">
            所属行业：防伪安全
            <span>地址：上海市松江区光华路509号</span>
          </p>
        </el-col>
      </el-row>
    </div>

    <!-- 我的订单 -->
    <div class="myOrder bg padding mt20">
      <vnotes title="我的订单"/>

      <el-table :data="tableData.slice((currentPage-1)*params.pageSize,currentPage*params.pageSize)" border style="width: 100%"  class="mt20 myTable"
                :header-cell-style="{background:'#647787',color:'#fff'}">

        <el-table-column type="index" :index="indexMethod" width="50" label="序号" align="center"></el-table-column>
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
  }

}
</script>

<style lang="scss" scoped>
  .padding{padding:10px 30px 10px 40px;}

  #seller-home{
    #enterpriseInfo{

      .logo{
        width:80px;height:80px;
        border-radius: 50%;
        border:1px solid #d2d2d2;
      }
      h4{margin:0;font:900 16px/1 "";}
      p.slogan{
        height:42px;
        font: 14px/3 "";
      }
      p.address{
        font:14px/1 "";
        span{
          margin-left:30px;
        }
      }
    }
  }
</style>