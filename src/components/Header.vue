<template>
  <header
      class="header-container"
      :class="{ 'header-shrink': isScrolled }"
      ref="headerElement"
  >
    <!-- 协会会标 -->
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

const headerElement = ref<HTMLElement | null>(null)
const isScrolled = ref(false)
const lastScrollY = ref(0)
let isScrolling = false
let momentumTimer: number | null = null

// 设备适配参数
const SCROLL_THRESHOLD = ('ontouchstart' in window) ? 120 : 100
const SCROLL_END_DELAY = ('ontouchstart' in window) ? 250 : 150
const RESTORE_THRESHOLD = 10
const MOMENTUM_THRESHOLD = 2 // 惯性滚动位移阈值

// 核心滚动处理
const handleScroll = () => {
  isScrolling = true
  const currentY = window.scrollY
  const direction = currentY > lastScrollY.value ? 'down' : 'up'

  // 实时处理向下滚动
  if (direction === 'down') {
    updateState(currentY, direction)
  }

  // 清除旧计时器
  if (momentumTimer) {
    cancelAnimationFrame(momentumTimer)
    momentumTimer = null
  }

  // 启动惯性滚动检测
  momentumTimer = requestAnimationFrame(() => {
    checkMomentumScroll(currentY)
  })

  lastScrollY.value = currentY
}

// 更新状态机
const updateState = (currentY: number, direction: string) => {
  const shouldShrink = currentY > SCROLL_THRESHOLD
  if (shouldShrink !== isScrolled.value) {
    isScrolled.value = shouldShrink
  }
}

// 惯性滚动检测
const checkMomentumScroll = (startY: number) => {
  const check = () => {
    const currentY = window.scrollY
    const delta = Math.abs(currentY - startY)

    if (delta < MOMENTUM_THRESHOLD) {
      finalizeState(currentY)
      isScrolling = false
    } else {
      startY = currentY
      momentumTimer = requestAnimationFrame(check)
    }
  }

  check()
}

// 最终状态修正
const finalizeState = (currentY: number) => {
  if (currentY <= RESTORE_THRESHOLD) {
    isScrolled.value = false
  } else if (currentY > SCROLL_THRESHOLD && !isScrolled.value) {
    isScrolled.value = true
  }
}

// 智能事件监听
const addScrollListener = () => {
  const options = { passive: true }
  if ('ontouchstart' in window) {
    window.addEventListener('touchmove', handleScroll, options)
    window.addEventListener('touchend', handleScrollEnd, options)
  } else {
    window.addEventListener('wheel', handleScroll, { passive: true })
  }
}

const handleScrollEnd = () => {
  setTimeout(() => finalizeState(window.scrollY), SCROLL_END_DELAY)
}

onMounted(() => {
  addScrollListener()
  lastScrollY.value = window.scrollY
})

onUnmounted(() => {
  if ('ontouchstart' in window) {
    window.removeEventListener('touchmove', handleScroll)
    window.removeEventListener('touchend', handleScrollEnd)
  } else {
    window.removeEventListener('wheel', handleScroll)
  }
})
</script>

<style scoped>
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 40px;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.28, 0.62, 0.35, 1);
}

.header-shrink {
  height: 60px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
}

.logo {
  height: 50px;
  margin-right: 40px;
  transition: transform 0.4s cubic-bezier(0.28, 0.62, 0.35, 1);
}

.logo-shrink {
  transform: scale(0.85) translateY(2px);
}

@media (max-width: 768px) {
  .header-container {
    padding: 0 20px;
    height: 60px;
  }

  .header-shrink {
    height: 50px;
  }

  .logo {
    height: 40px;
    margin-right: 20px;
  }
}
</style>