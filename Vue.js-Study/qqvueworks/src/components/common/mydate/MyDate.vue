<template>
  <div class="my-date">
    <div class="myself">
      <img src="../../../assets/img/navbar/myself.png" alt="" />
    </div>
    <div class="zhuangtai">
      <img src="../../../assets/img/navbar/diqiu.png" alt="" />
      
    </div>
  </div>
</template>

<script>
export default {
  name: "MyDate",
};
</script>

<style scoped>
.my-date {
  position: absolute;
  width: 100px;
  height: 55px;
}
.myself {
  position: absolute;
  width: 36px;
  height: 36px;
  border-radius: 36px;
  background: #222;
  margin: 11px 0px 0px 12px;
  overflow: hidden;
}
.zhuangtai {
  position: absolute;
  width: 13px;
  height: 13px;
  border-radius: 12px;
  /* background: transparent; */
  background: #222;
  margin: 34px 0px 0px 55px;
  overflow: hidden;
}

</style>