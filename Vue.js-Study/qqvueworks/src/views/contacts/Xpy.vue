<template>
  <div class="xpy">
    <div class="xpyxpy" v-for="(item, index) in list" :key="index">
      <p class="xpy-left">{{item.nameya}}</p>
      <img class="xpy-right" :src="item.srcya">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Xpy',
  data(){
    return {
      list: [
        {
          nameya: "新朋友",
          srcya: require("../../assets/img/contacts/jiantou.png")
        },
        {
          nameya: "群通知",
          srcya: require("../../assets/img/contacts/jiantou.png")
        },
      ]
    }
  }
}
</script>

<style scoped>
p{
  margin: 0;
  font-weight: 550;
}
.xpy{
  position: relative;
  margin: 3% 0;
  padding: 3% 0;
  width: 100%;
  height: 90px;
  background: #eeeeee;
}
.xpyxpy{
  padding: 4% 3%;
  background: white;
  height: 20px;
  /* box-shadow: 0 1px 1px rgba(100, 100, 100, .8); */
}
.xpy-left{
  position: absolute;
  font-size: 1em;

}
.xpy-right{
  position: absolute;
  margin-top: 4px;
  right: 8%;
  width: 12px;
  height: 12px;
}
</style>