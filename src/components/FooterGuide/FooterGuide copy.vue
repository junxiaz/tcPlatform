<template>
  <el-footer height="87px">
    <div class="footer-guide">
      <div class="footer-link clearFix">
        <ul>
          <a class="footer-item" href="javascript:"><li>加入我们</li></a>
          <a class="footer-item" href="javascript:"><li>合作洽谈</li></a>
          <a class="footer-item" href="javascript:"><li>隐私政策</li></a>
          <a class="footer-item" href="javascript:"><li>网站地图</li></a>
        </ul>
      </div>
      <div class="footer-decleared">上海天臣集团 版权所有</div>
    </div>
  </el-footer>
</template>

<script>
export default {
    name: 'FooterGuide',
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';
// 底部导航
.el-footer {
  width: 100%;
  .footer-guide {
    width: 100%;
    height: 87px;
    background-color: $fontGray;
    font-size: 12px;
    text-align: center;
    color: #fff;
      .footer-link {
        display: inline-block;
        margin: 0 auto;
        .footer-item {
          float: left;
          padding: 24px 68px 18px;
          color: #fff;
          &:hover {
            color: $blue;
          }
        }
      }
  }
}
</style>