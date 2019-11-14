<template>
  <el-menu :default-active="$route.path" class="el-menu-vertical-demo myMenu"
          router
          @open="handleOpen" @close="handleClose">
    <!-- 侧导航栏 -->

    <!-- 所有路由配置信息 -->
    <template v-for="item in allRouter">

      <!-- 判断是否是商家列表 -->
      <template v-if="item.path == '/seller' && item.name=='商家'"> 

      <!-- 只需要循环商家的列表信息 -->
        <template v-for= "seller in item.children">
          
          <!-- 节点不隐藏 -->
          <template v-if="!seller.meta.hidden">
            <el-menu-item :index="item.path +'/'+ seller.path">
              <i :class="seller.meta.icon"></i>
              <span slot="title">{{seller.name}}</span>
            </el-menu-item>
          </template>

        </template>        
      </template>
    </template>

  </el-menu>
</template>

<script>
export default {
  data(){
    return {
      allRouter:this.$router.options.routes
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created(){
    console.log(this.$route)
  }
}
</script>

<style lang="scss" scoped>
  ul.myMenu{
    background:#fff;
    border-right:0; 
    overflow: hidden;
    >li{
      height:45px;
      font:16px/45px "";

      i{height:20px;vertical-align: middle;margin-right:19px;}
      .el-icon-my-home{        
        background: url('./imgs/home_nor.png') no-repeat center;
      }
      .el-icon-my-demand{        
        background: url('./imgs/needs_nor.png') no-repeat center;
      }
      .el-icon-my-order{        
        background: url('./imgs/order_nor.png') no-repeat center;
      }
      .el-icon-my-enterprise{        
        background: url('./imgs/enterprise_nor.png') no-repeat center;
      }

      


    }
    >li.is-active{
      color:#fff;
      background:#409EFF;
    }
    
    
  }
</style>