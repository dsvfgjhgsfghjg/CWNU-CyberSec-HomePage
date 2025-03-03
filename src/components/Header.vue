<template>
  <header
      class="header-container"
      :class="{ 'header-shrink': isScrolled }"
  >
    <!-- 会标部分 -->
    <img
        src="@/assets/images/icon/icon.png"
        alt="协会会标"
        class="logo"
        :class="{ 'logo-shrink': isScrolled }"
    >

    <!-- 导航菜单 -->
    <TopMenu :is-scrolled="isScrolled" />
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import TopMenu from './TopMenu.vue'

const isScrolled = ref(false)
const scrollThreshold = 100 // 滚动触发阈值

// 节流函数优化性能
const throttle = (fn: Function, delay: number) => {
  let lastCall = 0
  return (...args: any[]) => {
    const now = Date.now()
    if (now - lastCall >= delay) {
      fn(...args)
      lastCall = now
    }
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > scrollThreshold
}

onMounted(() => {
  window.addEventListener('scroll', throttle(handleScroll, 50))
})

onUnmounted(() => {
  window.removeEventListener('scroll', throttle(handleScroll, 50))
})
</script>

<style scoped>
.header-container {
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 1000;
}

/* 缩小状态 */
.header-shrink {
  height: 60px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}

.logo {
  height: 50px;
  transition: transform 0.3s ease;
}

.logo-shrink {
  transform: scale(0.85);
}
</style>