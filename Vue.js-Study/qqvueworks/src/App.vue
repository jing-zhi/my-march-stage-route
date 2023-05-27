<template>
  <div id="app">
    <router-view name="en" class="en"></router-view>  
    <router-view name="at" class="en"></router-view>  
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/message">
        <!-- <img slot="item-icon" src="./assets/img/tabbar/message1.svg" alt="" />
      <div slot="item-text">消息</div> -->
        <template #item-icon>
          <img src="./assets/img/tabbar/message1.svg" alt="" />
        </template>
        <template #item-icon-active>
          <img src="./assets/img/tabbar/message2.svg" alt="" />
        </template>
        <template #item-text><div>消息</div></template>
      </tab-bar-item>

      <tab-bar-item path="/contacts">
        <template v-slot:item-icon>
          <img src="./assets/img/tabbar/contacts1.svg" alt="" />
        </template>
        <template v-slot:item-icon-active>
          <img src="./assets/img/tabbar/contacts2.svg" alt="" />
        </template>
        <template v-slot:item-text><div>联系人</div></template>
      </tab-bar-item>

      <tab-bar-item path="/dynamic">
        <template v-slot:item-icon>
          <img src="./assets/img/tabbar/dynamic1.svg" alt="" />
        </template>
        <template v-slot:item-icon-active>
          <img src="./assets/img/tabbar/dynamic2.svg" alt="" />
        </template>
        <template v-slot:item-text><div>动态</div></template>
      </tab-bar-item>
    </tab-bar>
  </div>

</template>

<script>
// import MyDate from './components/common/navbar/mydate/MyDate.vue';
import TabBar from "./components/tabbar/TabBar.vue";
import TabBarItem from "./components/tabbar/TabBarItem.vue";
import NavBar from "./components/common/navbar/NavBar.vue";

export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
    NavBar,
    
  },
};
</script>

<style>
/* 引进来css文件 */
@import "./assets/css/base.css";
</style>
<style scoped>
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 4px;
  /* 取消图片和文字之间的空隙 */
  vertical-align: middle;
}
</style>