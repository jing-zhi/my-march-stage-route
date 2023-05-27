<template>
  <div id="app">
    <h2>{{ message }}</h2>
    <p>{{ $store.state.counter }}</p>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <hellovus :counter="counter" />
    <!-- <hellovus></hellovus> -->
    <!-- <router-view /> -->
  </div>
</template>

<script>
import hellovus from "./components/hellovus.vue";
import Hellovus from "./components/hellovus.vue";

export default {
  components: { hellovus },
  name: "App",
  conponents: {
    hellovus,
  },
  data() {
    return {
      message: "我是App帅哥",
      counter: 0,
    };
  },
  methods: {
    addition() {
      this.$store.commit("increment");
    },
    subtraction() {
      this.$store.commit("decrement");
    },
  },
};
</script>

<style>
</style>
