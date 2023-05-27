<template>
  <div class="fenzu-control">
    <div v-for="(itemw,index) in titlesww" :key="index" class="fzff" :class="{active: index === currentIndex}" @click="fzControl(index)">
      <span>{{itemw}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FenZuControl',
  props:{
    titlesww: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    fzControl(index){
      this.currentIndex = index;
    }
  },
}
</script>

<style scoped>
.fenzu-control{
  position: relative;
  display: flex;
  /* justify-content: space-around; */
}
.fzff{
  flex: 1;
  border-radius: 24px;
  text-align: center;
  height: 35px;
  font-size: 14px;
}
.fzff:before{
  display: inline-block;
  content: "";
  vertical-align: middle;
  height: 100%;
}
.active{
  color: #0c58e4;
  background: #c4deff;
}

</style>