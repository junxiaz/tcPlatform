<template>
  <div id="seller-home">
    <!-- 商家端----我的首页 -->

    <!-- 企业信息 -->
    <!-- <div id="enterpriseInfo" class="bg sell-padding">
      <vnotes title="企业信息" subtitle="完善企业设置" color="#409efe" cursor="pointer"
              @toPath="handleToPath('/seller/enterpriseSet')"></vnotes>
      <div class="mt20 logoInfo clearfix">
        <div class="logo">
          <img src="./head_portrait.png" alt="">
        </div>
        <div class="logo-desc">
          <h4>天臣集团</h4>
          <p class="slogan over">banner标语：让天下没有假货</p>
          <p class="address">
            所属行业：防伪安全
            <span>地址：上海市松江区光华路509号</span>
          </p>
        </div>
      </div>
    </div> -->
    <el-row class="bg sell-padding" id="enterprise-top">
      <el-col :span="10" class="logo clearfix">
        <img :src="userInfo.logoUrl?userInfo.logoUrl:userInfo.personLogo" alt="暂无logo" srcset="">
        <div>
          <h3>欢迎您，{{userInfo.account}}</h3>
          <p><span @click="$router.push('/seller/enterpriseSet')">完善信息</span>，可享受专属客服</p>
        </div>
      </el-col>
      <el-col :span="7" class="otherInfo clearfix">
        <i></i>
        <div>
          <h4>交易记录</h4>
          <p><span>{{userInfo.endDemandCount}}</span>条</p>
        </div>
        <!-- <p>交易记录</p> -->
      </el-col>
      <el-col :span="7" class="otherInfo clearfix">
        <i class="working"></i>
        <div>
          <h4>待选标数</h4>
          <p><span>{{userInfo.selectDemandCount}}</span>条</p>
        </div>
        <!-- <p>交易记录</p> -->
      </el-col>
    </el-row>

    <!-- 我的订单 -->
    <div class="myOrder bg sell-padding mt20">
      <vnotes title="我的订单" subtitle="全部订单 >" color="#409efe" cursor="pointer"
              @toPath="handleToPath('/seller/myOrder')"/>


      <!-- <el-table :data="tableData.slice((currentPage-1)*params.pageSize,currentPage*params.pageSize)" border style="width: 100%"  class="mt20 myTable"
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
      </el-table> -->

      <!-- 分页 -->
      <!-- <el-row class="mt20">
        <el-col :span="24" align="right">
          <el-pagination background class="myPagination"
            layout="prev, pager, next"
            @current-change="handleCurrentChange"
            :page-size="params.pageSize" :current-page.sync="currentPage"
            :total="tableData.length">
          </el-pagination>
        </el-col>
      </el-row>       -->
      <el-row class="order-items">
        <el-col :span="6" align="center">
          <p>{{userInfo.checkDemandCount}}</p>
          <p>审核中</p>
        </el-col>
        <el-col :span="6" align="center">
          <p>{{userInfo.tenderDemandCount}}</p>
          <p>投标中</p>
        </el-col>
        <el-col :span="6" align="center">
          <p>{{userInfo.selectDemandCount}}</p>
          <p>选标中</p>
        </el-col>
        <el-col :span="6" align="center">
          <p>{{userInfo.produceDemandCount}}</p>
          <p>工作中</p>
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
      total:0,
      // total:12,
      tableData:[
        {userName:"木木",realName:"李霞",userType:"终端客户",sex:0,tel:"13412343568",email:"1234123@163.com",state:"状态一",platInfo:1},
        {userName:"木木",realName:"李霞",userType:"印刷企业",sex:1,tel:"13412343568",email:"1234123@163.com",state:"状态一",platInfo:2},
        {userName:"木木",realName:"李霞",userType:"印刷企业",sex:0,tel:"13412343568",email:"1234123@163.com",state:"状态一",platInfo:2},
        {userName:"木木",realName:"李霞",userType:"设计师",sex:0,tel:"13412343568",email:"1234123@163.com",state:"状态一",platInfo:1},
        {userName:"木木",realName:"李霞",userType:"设计师",sex:1,tel:"13412343568",email:"1234123@163.com",state:"状态一",platInfo:1},
        {userName:"木木",realName:"李霞",userType:"终端客户",sex:1,tel:"13412343568",email:"1234123@163.com",state:"状态一",platInfo:1}
      ],
      imgUrl:{
        noImg: require('./imgs/head_portrait.png')
      },
      userInfo: {}
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

    handleToPath(path){
      this.$router.push(path)
    }
  },
  mounted() {
    const params = {
      token: sessionStorage.getItem('token'),
      userId: sessionStorage.getItem('userId')
    }
    this.$api.user.getUserInfo(params).then(res => {
      this.userInfo = res.data
    })
  }

}
</script>

<style lang="scss" scoped>
  #seller-home{
    // #enterpriseInfo{
    //   .logoInfo{
    //     .logo{
    //       float: left;
    //       width:125px;
    //       img{
    //         display: block;
    //         width:125px;height:126px;
    //         object-fit: cover;
    //       }
    //     }
    //     .logo-desc{
    //       float: left;margin:18px 0 0 27px;
    //       width:700px;color:#2E2E2E;
    //       h4{margin:0;font:900 18px/1 "";}
    //       p.slogan{
    //         height:54px;
    //         font: 14px/54px "";
    //       }
    //       p.address{
    //         height:20px;
    //         font:14px/20px "";
    //         span{
    //           margin-left:46px;
    //         }
    //       }
    //     }

    //   }

    // }
    #enterprise-top{
      .logo{
        height:100px;
        img{
          height:100px;
          width: 100px;
          display: inline-block;
          object-fit: cover;
          float: left;
          border-radius: 50%;
        }
        >div{
          margin-left:10px;
          float: left;
          span{color:rgba(255, 136, 0, 0.877);cursor: pointer;}
        }
      }

      .otherInfo{
        height:80px;
        margin-top:20px;
        i{
          background: url("./imgs/ordering.png") no-repeat center;
          height: 66px;width:66px;
          display: block;
          float: left;
        }
        .working {
          background: url("./imgs/working.png") no-repeat center;
        }
        >div{
          float:left;
          margin-left: 20px;
          h4{font:500 16px/1 "";margin:0;}
          p{font: 14px/50px "";}
          span{font-size:30px}
        }
        >p{
          float: left;
          font:500 16px/1 "";
          margin:20px 0 0 20px;
        }
      }

    }
  }
  .order-items {
    .el-col {
      padding: 40px;
      p:nth-of-type(1) {
        font-size: 48px;
        color: #67C23A;
        padding-bottom: 25px;
      }

    }
  }
</style>