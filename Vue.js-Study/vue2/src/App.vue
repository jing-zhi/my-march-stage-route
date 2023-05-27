<template>
  <div id="app">
    <h2>我是帅帅的聪明的大聪明</h2>
    <!-- <router-link to = "/home" tag = "button" replace>首页</router-link>
    <router-link to = "/about"  tag = "button" replace>关于</router-link> -->

    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/' + userId">用户界面</router-link>
    <router-view></router-view>

    <tab-bar>
      <tab-bar-item>
        <!-- <img slot="item-icon" src="./assets/img/tabbar/message1.svg" alt="" /> -->
        <div slot="item-text">消息</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar.vue";
import TabBarItem from "./components/tabbar/TabBarItem.vue";
export default {
  name: "App",
  data() {
    return {
      userId: "lise",
    };
  },
  comments: {
    TabBar,
    TabBarItem,
  }
  // methods: {
  //   homeClick() {
  //     console.log('homeclick');
  //     // 通过代码方式改变路由
  //     // this.$router.push('/home')
  //     this.$router.replace('/home')
  //   },
  //   aboutClick() {
  //     console.log('aboutclick');
  //     // this.$router.push('./about')
  //     this.$router.replace('./about')
  //   }
  // }
};
</script>

<style>
.router-link-active {
  color: brown;
}
</style>
