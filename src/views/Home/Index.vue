<template>
  <div class="container">
    <router-view></router-view>
  </div>
  <TabBar />
</template>

<script setup>
import TabBar from '@/components/TabBar/TabBar.vue'
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: calc(100vh - 150px);
}
</style>
