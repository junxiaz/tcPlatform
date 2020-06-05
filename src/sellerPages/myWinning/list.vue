<template>
  <div id="myOrder" class="bg sell-padding">
    <!-- 商家端----我的订单 -->
      <vnotes title="我的中标"/>

      <el-form :inline="true" :model="searchForm" ref="searchForm"
                class="demo-form-inline" style="margin-top:14px;">
        <el-form-item label="需求标题">
          <el-input v-model="params.desc" size="medium" class="nobr" style="width:140px;"></el-input>
        </el-form-item>
        <el-form-item label="需求性质">
          <el-select v-model="params.demandType" placeholder="请选择" class="nobr" style="width:140px;">
            <el-option label="请选择" value=""></el-option>
            <el-option
              v-for="item in demandType"
              :key="item.demandType"
              :label="item.demandTypeName"
              :value="item.demandType">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="需求状态">
          <el-select v-model="params.demandStatus" placeholder="请选择" class="nobr" style="width:140px;">
            <el-option label="请选择" value=""></el-option>
            <el-option
              v-for="item in demandStatus"
              :key="item.demandType"
              :label="item.demandTypeName"
              :value="item.demandType">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="danger" size="medium" @click="searchBtn('searchForm')" style="width:90px;">查询</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="tableData" border style="width: 100%" :header-cell-style="{background:'#e0e9ff'}" class="myTable">

        <el-table-column type="index" :index="indexMethod" width="50" label="序号" align="center" fixed="left"></el-table-column>
        <el-table-column prop="demandTitle" label="需求标题"  align="center" min-width="140"></el-table-column>
        <el-table-column prop="demandTypeDesc" label="需求性质"  align="center"></el-table-column>
        <el-table-column prop="provinceName" label="需求范围"  align="center"></el-table-column>
        <el-table-column prop="capitalCount" label="项目预算"  align="center"></el-table-column>
        <!-- <el-table-column prop="demandType" label="需求类型" align="center"></el-table-column> -->
        <el-table-column prop="depositCount" label="托管资金"  align="center"></el-table-column>
        <el-table-column prop="tenderPlan" label="投标数目" align="center" width="110"></el-table-column>  
        <!-- <el-table-column prop="filUrl" label="filUrl"  align="center"></el-table-column> -->
        <el-table-column prop="originatorName" label="发起人"  align="center" min-width="300"></el-table-column>
        <!-- <el-table-column prop="otherDesc" label="其他说明"  align="center"></el-table-column> -->
        <el-table-column prop="tenderReal" label="已投标数"  align="center"></el-table-column>
        <el-table-column prop="winTenderName" label="中标人"  align="center" min-width="300"></el-table-column>
        <el-table-column prop="startTime" label="创建时间"  align="center" min-width="110"></el-table-column>
        <el-table-column prop="endTime" label="项目周期" align="center" min-width="110"></el-table-column>  
        <el-table-column prop="demandStatusDesc" label="状态" align="center" width="110"></el-table-column>       
<!--         <el-table-column label="操作" align="center" width="220" fixed="right">
          <template slot-scope="scope">
            <el-button type="success" :disabled="scope.row.demandStatus != 3" size="mini" @click="checkData(scope.row.id)">选标</el-button>
            <el-button type="danger" :disabled="scope.row.demandStatus == 5 || scope.row.demandStatus == 6" size="mini" @click="finishData(scope.row.id)">结单</el-button>
            <el-button type="danger" :disabled="scope.row.demandStatus == 5?false:true" size="mini" @click="evaluateData(scope.row.id)">评价</el-button>
          </template>
        </el-table-column> -->
      </el-table>

      <!-- 分页 -->
      <el-row class="mt20">
        <el-col :span="24" align="right">
          <el-pagination background class="myPagination"
            layout="prev, pager, next"
            @current-change="handleCurrentChange"
            :page-size="params.pageSize" :current-page.sync="params.pageNum"
            :total="total">
          </el-pagination>
        </el-col>
      </el-row>

      <!-- 选标弹框 -->
      <el-dialog class="dialogTable" title="投标列表" :visible.sync="dialogTableVisible">
        <el-button type="primary" style="margin-bottom: 10px;" size="small" @click="winTenderDemand">选标</el-button>
        <el-table :data="tenderDemand" @selection-change="handleSelectionChange" :header-cell-style="{background:'#e0e9ff'}" :row-style="{background:'#fcfbf7'}">
          <el-table-column type="selection" width="88" align="center"></el-table-column>
          <el-table-column property="enterpriseName" label="名称" width="200"></el-table-column>
          <el-table-column property="mobile" label="联系电话" width="120"></el-table-column>
          <el-table-column property="userTypeName" label="用户类型"></el-table-column>
        </el-table>
      </el-dialog>

      <!-- 评价弹框 -->
      <el-dialog title="发表评价" :visible.sync="evaluateDialogVisible">
        <el-form :model="evaluateForm" :rules="rulesEvaluate" ref="evaluateForm" label-width="100px">
          <el-form-item label="评价内容" prop="comment">
            <el-input type="textarea" v-model="evaluateForm.comment" placeholder="从多个角度评价订单，可以帮助更多需要的人" style="width:450px;"></el-input>
          </el-form-item>
          <el-form-item label="任务质量" prop="quality">
            <el-rate v-model="evaluateForm.quality"></el-rate>
          </el-form-item>
          <el-form-item label="响应速度" prop="speed">
            <el-rate v-model="evaluateForm.speed"></el-rate>
          </el-form-item>
          <el-form-item label="服务态度" prop="service">
            <el-rate v-model="evaluateForm.service"></el-rate>
          </el-form-item>
          <el-form-item>
            <el-button type="danger" size="medium" @click="evaluateSubmit('evaluateForm')">发布</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
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
      evaluateDialogVisible: false,//评价弹框
      dialogTableVisible: false,
      demandStatus: '',
      demandType: '',
      params:{
        pageNum:1,
        pageSize:10,
        token: sessionStorage.getItem('token'),
        userId: sessionStorage.getItem('userId'),
        flag: 3,
        demandStatus: '',
        demandType: '',
        desc: ''
      },
      currentPage:1,
      total: 0,
      tableData:[],
      checkDemand: '',
      moreSelect: [], //多选的数据
      searchForm:{},
      tenderDemand: [],
      evaluateForm: {},
      evaluateId: '',
      rulesEvaluate: {
        comment: [{ required: true, message: '请输入评价内容', trigger: 'blur' },]
      }
    }
  },
  methods:{
    evaluateData(id) {
      this.evaluateDialogVisible = true;
      this.evaluateForm.demandId = id;
    },

    evaluateSubmit(formName) {
      this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$api.demand.addDemandComment(this.evaluateForm).then(res => {
              this.evaluateDialogVisible = false;
              this.$message.success('感谢您的评论！')
              this.initDemand();
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },

    //表格自定义序号
    indexMethod(index) {
      return (this.currentPage-1)*this.params.pageSize +(index+1) ;
    },

    //选择多个
    handleSelectionChange(val) {
      this.moreSelect = val;
    },

    //分页
    handleCurrentChange(val){
      this.params.pageNum = val;
      this.initDemand()
    },

    //搜索
    searchBtn(formName){
      this.initDemand()
    },

    // 选标
    checkData(id) {
      this.dialogTableVisible = true
      this.checkDemand = id
      const params = {
        token: sessionStorage.getItem('token'),
        userId: sessionStorage.getItem('userId'),
        demandId: id
      }
      this.$api.demand.reqListTenderDemand(params).then(res => {
        this.tenderDemand = res.list
        this.initDemand()
      })
    },
    // 结单
    finishData(id) {
      const params = {
        token: sessionStorage.getItem('token'),
        userId: sessionStorage.getItem('userId'),
        demandId: id
      }
      this.$api.demand.finishDemand(params).then(res => {
        this.$message.success('此订单已结束')
        this.initDemand()
      })
    },

    // 获取需求类型
    reqDemandType() {
      this.$api.demand.reqDemandType().then(res => {
        this.demandType = res.list
      })
    },
    // 获取需求状态
    reqDemandStatus() {
      this.$api.demand.reqDemandStatus().then(res => {
        this.demandStatus = res.list
      })
    },

    // 初始化订单列表
    initDemand() {
      this.$api.demand.reqListDemand(this.params).then(res => {
        this.tableData = res.datas.records
        this.total = res.datas.total
      })
    },

    // 初始化选标人列表
    // initTenderDemand(id) {
    //   const params = {
    //     token: sessionStorage.getItem('token'),
    //     userId: sessionStorage.getItem('userId'),
    //     demandId: id
    //   }
    //   this.$api.demand.reqListTenderDemand(params).then(res => {
    //     this.renderDemand = res.list
    //   })
    // },

    // 选标
    winTenderDemand() {
      if(this.moreSelect.length == 0){
        this.$message({
          message: '您还未选择任何信息',
          type: 'warning'
        });
      }
      else if(this.moreSelect.length == 1){
        const params = {
          token: sessionStorage.getItem('token'),
          userId: sessionStorage.getItem('userId'),
          demandId: this.checkDemand,
          winTenderId: this.moreSelect[0].userId
        }
        this.$api.demand.winTenderDemand(params).then(res => {
          this.dialogTableVisible = false
          this.$message({
            type: 'success',
            message: '恭喜您，选标成功'
          })
        })
        this.initDemand();
      }
      else{
        this.$message({
          message: '只能选择一个投标者',
          type: 'warning'
        });
      }
    },
  },
  mounted() {
    this.initDemand()
    this.reqDemandType()
    this.reqDemandStatus()
  }

}
</script>

<style lang="scss" scoped>
  #myOrder{
    .el-form.dialogTable{
      .el-form-item{
        margin-right:35px;

      }
      .el-form-item:last-child{
        margin-right:0px;
      }
    }
    .el-rate {
      margin-top: 10px;
    }

  }
</style>