<template>
  <div id="message">
    <nav-bar>
      <template #left>
        <my-date></my-date>
      </template>

      <template #center>
        <p>动态</p>
      </template>

      <template #right>
        <div></div>
      </template>
    </nav-bar>
    <!-- 搜索组件 -->
    <sou-suo></sou-suo>
    
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import SouSuo from "../../components/sousuo/SouSuo.vue";
import MyDate from "../../components/common/mydate/MyDate.vue";
export default {
  name: "Dynamic",
  
  components: {
    NavBar,
    SouSuo,
    MyDate,
  },
};
</script>
  
<style scoped>
.down{
  border-top:1px solid #e5e5e5;
  height:400px;
  width:540px;
  margin:15px 0 0 0;
  overflow:auto;
  background-color: #fff;
}
.down>ul>li{
  width:540px;
  height: 80px;
  border-bottom:1px solid #e5e5e5;
}
.li-ro>img{
  width:60px;
  height:60px;
  margin:10px;
  border-radius: 5px;
  float: left;
}
.li-ro>p{
  width:440px;
  height: 80px;
}
</style>