<template>
  <div class="container">
    <van-tabbar v-model="active" @change="handleTabBarChange">
      <van-tabbar-item
        :icon="tab.icon"
        v-for="tab in tabbarData"
        :key="tab.title"
      >
        {{ tab.title }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

onMounted(() => {
  keppHighLight(route.meta.name)
})

const tabbarData = ref([
  {
    title: '首页',
    icon: 'wap-home-o',
    path: '/home'
  },
  {
    title: '科研项目',
    icon: 'cash-o',
    path: '/scientific'
  },
  {
    title: '成果管理',
    icon: 'coupon-o',
    path: '/achievement'
  },
  {
    title: '审核管理',
    icon: 'todo-list-o',
    path: '/audit'
  }
])

let active = ref(
  localStorage.getItem('currentTabBar')
    ? localStorage.getItem('currentTabBar')
    : 0
)

const keppHighLight = (name) => {
  tabbarData.value.forEach((item, index) => {
    if (item.title === name) {
      active.value = index
    }
  })
}

const handleTabBarChange = (e) => {
  active.value = e
  localStorage.setItem('currentTabBar', e)
  router.push(tabbarData.value[e].path)
}
</script>

<style scoped lang="less"></style>
