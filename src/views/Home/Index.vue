<template>
  <div class="index">
    <router-view></router-view>
  </div>
  <TabBar />
</template>

<script setup>
import TabBar from '@/components/TabBar/TabBar.vue'
</script>

<style scoped lang="less">
// .index {
//   width: 100%;
//   height: calc(100vh - 150px);
// }
</style>
