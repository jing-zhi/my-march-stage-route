<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
  .nav-bar {
      height: 55px;
      /* line-height: 44px; */
      display: flex;
      text-align: center;
      background: #1296db;
      color: white;
      font-weight: 700;
      box-shadow: 0 1px 1px rgba(100, 100, 100, .2);
  }
  .left, .right{
    width: 100px;
    /* background: red; */
  }
  .center{
    flex: 1;
    /* background: rgb(148, 150, 248); */
  }
</style> scoped>
  
