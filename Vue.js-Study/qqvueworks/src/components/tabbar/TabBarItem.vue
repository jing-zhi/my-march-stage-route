<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive" class="tab-img"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{ active: isActive }"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBaritem",
  // 父子传组件，传一个字符串
  props:{
    path: String
  },
  data() {
    return {
      // isActive: true
      // path: '/message'
    };
  },
  computed: {
    isActive(){
      // route代表当前活跃的item
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  methods: {
    // 路由跳转语句
    itemClick() {
      // console.log(this.path);
      // console.log(this.,"44444")
      this.$router.replace(this.path)
    }
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 4px;
  /* 取消图片和文字之间的空隙 */
  vertical-align: middle;
}
.active {
  color: blue;
}
</style>