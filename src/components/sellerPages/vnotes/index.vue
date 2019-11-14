<template>
<!-- 小标签 -->
  <div class="vnotes">
    <el-row>
      <el-col :span="18" align=left>
        <span style="margin-left:12px;">{{title}}</span>
      </el-col>
      <el-col :span="6" align="right">
        <span :style="{'font-size':'12px','color':color,'cursor':cursor}"
              @click="getParent">
          {{subtitle}}
        </span>
      </el-col>
    </el-row>
    <p></p>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type:String,
      default:"最新"
    },
    subtitle:{
      type:String,
      default:""
    },
    color:{
      type:String,
      default:""
    },
    cursor:{
      type:String,
      default:'auto'
    }
  },
  methods:{
    getParent(){
      console.log("触发子组件,this.$emit的作用是触发自定义函数");
      this.$emit("toPath");
    }
  }
}
</script>

<style scoped lang="scss">
.vnotes{
  height:54px;
  position: relative;
  font:18px/54px "";
  p{border-top:1px solid #d2d2d2}

}
.vnotes:before{
  content:"";
  position: absolute;
  top:18px;left:0px;
  width:4px;
  height:18px;
  background:#1e88e5;
}

</style>