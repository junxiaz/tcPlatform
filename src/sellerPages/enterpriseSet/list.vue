<template>
  <div id="enterpriseSet">
    <div class="baseInfo bg">
      <vnotes title="基本信息"/>

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
}
</script>

<style>

</style>