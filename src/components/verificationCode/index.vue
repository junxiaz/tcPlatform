<template>
  <div class="ValidCode disabled-select" :style="`width:${width}; height:${height}`" @click="refreshCode">
    <span v-for="(item, index) in codeList" :key="index" :style="getStyle(item)">{{item.code}}</span>
  </div>
</template>

<script>
export default {
  name: 'validCode',
  props: {
    width: {
      type: String,
      default: '100px'
    },
    height: {
      type: String,
      default: '40px'
    },
    length: {
      type: Number,
      default: 4
    }
  },
  data () {
    return {
      codeList: []
    }
  },
  mounted () {
    this.createdCode()
  },
  methods: {
    //刷新验证码的方法
    refreshCode () {
      this.createdCode()
    },
    // 生成验证码的方法
    createdCode () {
      let len = this.length,
        codeList = [],
        chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789',
        charsLen = chars.length
      // 生成
      for (let i = 0; i < len; i++) {
        let rgb = [Math.round(Math.random() * 220), Math.round(Math.random() * 240), Math.round(Math.random() * 200)]
        codeList.push({
          code: chars.charAt(Math.floor(Math.random() * charsLen)),
          color: `rgb(${rgb})`,
          fontSize: `1${[Math.floor(Math.random() * 10)]}px`,
          padding: `${[Math.floor(Math.random() * 10)]}px`,
          transform: `rotate(${Math.floor(Math.random() * 90) - Math.floor(Math.random() * 90)}deg)`
        })
      }
      // 指向
      this.codeList = codeList;
      // 将当前数据派发出去
      // this.$emit('update:value', codeList.map(item => item.code).join(''))
      this.$emit('sendData', codeList.map(item => item.code).join(''))
    },
    // 每个元素生成动态的样式
    getStyle (data) {
      return `color: ${data.color}; font-size: ${data.fontSize}; padding: ${data.padding}; transform: ${data.transform}`
    }
  }
}
</script>

<style scoped lang="scss">
  .ValidCode{
    border:1px solid #DCDFE6;
    display:-webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    display: inline-block;
    -webkit-justify-content:center;
    justify-content:center;
    -moz-box-pack:center;
    -webkit--moz-box-pack:center;
    box-pack:center;
    align-items:center;
    -webkit-align-items:center;
    box-align:center;
    -moz-box-align:center;
    -webkit-box-align:center;
    overflow: hidden;
    background:#fff;
    cursor: pointer;
    span{
      display: inline-block;
      // float: left;
      text-align: center;
      -moz-user-select:none; /*火狐*/
      -webkit-user-select:none; /*webkit浏览器*/
      -ms-user-select:none; /*IE10*/
      -khtml-user-select:none; /*早期浏览器*/
      user-select:none;
    }
  }
</style>