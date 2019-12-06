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

      <el-table :data="tableData" border style="width: 100%" 
              :header-cell-style="{background:'#e0e9ff'}" class="myTable">

        <el-table-column type="index" :index="indexMethod" width="50" label="序号" align="center" fixed="left"></el-table-column>
        <el-table-column prop="demandTitle" label="需求标题"  align="center" min-width="120"></el-table-column>
        <el-table-column prop="provinceName" label="需求范围"  align="center"></el-table-column>
        <el-table-column prop="capitalCount" label="项目预算"  align="center"></el-table-column>
        <!-- <el-table-column prop="demandType" label="需求类型" align="center"></el-table-column> -->
        <el-table-column prop="depositCount" label="托管资金"  align="center"></el-table-column>
        <el-table-column prop="tenderPlan" label="投标数目" align="center" width="110"></el-table-column>  
        <!-- <el-table-column prop="filUrl" label="filUrl"  align="center"></el-table-column> -->
        <el-table-column prop="originatorId" label="发起人"  align="center"></el-table-column>
        <!-- <el-table-column prop="otherDesc" label="其他说明"  align="center"></el-table-column> -->
        <el-table-column prop="tenderReal" label="已投标数"  align="center"></el-table-column>
        <el-table-column prop="winTenderId" label="中标人"  align="center"></el-table-column>
        <el-table-column prop="startTime" label="创建时间"  align="center" min-width="110"></el-table-column>
        <el-table-column prop="endTime" label="项目周期" align="center" min-width="110"></el-table-column>  
        <el-table-column prop="demandStatusDesc" label="状态" align="center" width="110"></el-table-column>       
        <el-table-column label="操作" align="center" width="180" fixed="right">
          <template slot-scope="scope">
            <el-button type="success" size="mini" @click="checkData(scope.row.id)">选标</el-button>
            <el-button type="danger" size="mini" @click="checkData(scope.row.id)">结单</el-button>
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
        pageNum:1,
        pageSize:10,
        token: sessionStorage.getItem('token'),
        userId: sessionStorage.getItem('userId'),
        demandStatus: 1
      },
      currentPage:1,
      total: 0,
      tableData:[],
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
    },

    // 初始化订单列表
    initDemand() {
      this.$api.demand.reqListDemand(this.params).then(res => {
        this.tableData = res.datas.records
        this.total = res.total
      })
    }
  },
  mounted() {
    this.initDemand()
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