<template>
  <div class="sou-suo">
    <div style="margin-top: 10px;">
      <img src="../../assets/img/sousuo/搜索小.png" alt="">
      <input class="sousuo" type="text" placeholder="搜索">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SouSuo'
}
</script>

<style scoped>
img{
  display: inline;
  top: 72px;
  width: 16px;
  height: 16px;
  line-height: 20px;
  position: absolute;
    left: 42%;
}
.sousuo{
  border-radius: 20px;
  background: #ada7c140;
  border: 1px solid transparent;
  width: 90%;
  height: 25px;
  margin-left: 5%;
  vertical-align:middle;
  text-align:center;
  /* user-select: none; */
  /* cursor: default; */
}
</style>