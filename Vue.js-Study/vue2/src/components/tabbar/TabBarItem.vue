<template>
  <div class="tab-bar-item">
    <slot name="item-icon"></slot>
    <slot name="item-icon-active"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: 'tabbaritem'
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

</style>