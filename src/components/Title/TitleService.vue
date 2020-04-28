<template>
  <h1 class="ser-title">{{title}}</h1>
</template>

<script>
export default {
  name: "TitleService",
  props: {
    title: String,
  }
};
</script>

<style lang="scss" scoped>
.ser-title {
  font-size:36px;
  font-weight:400;
  color:#464646;
  text-align: center;
  position: relative;
  padding: 40px 0;
  margin: 0;
  &::after {
    content: '';
    width: 68px;
    height: 4px;
    background-color: #F65E61;
    position: absolute;
    left: 50%;
    margin-left: -34px;
    bottom: 32px;
    border-radius:2px;
  }
}
</style>