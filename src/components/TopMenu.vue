<template>
  <div class="nav-container">
    <el-menu
        mode="horizontal"
        :router="true"
        class="nav-menu"
        :default-active="$route.path"
    >
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/awards">Awards</el-menu-item>
      <el-menu-item index="/members">Member</el-menu-item>
      <el-menu-item index="/events">Events</el-menu-item>
    </el-menu>
  </div>

  <!-- Fufu 挂件 -->
  <div class="fufu-pendant" @click="playFufu">
    <img
        src="@/assets/images/misc/fufu.png"
        alt="Fufu"
        :class="{ 'fufu-jump': isJumping }"
    />
    <div class="sparkle"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isJumping = ref(false)

defineProps({
  isScrolled: {
    type: Boolean,
    default: false
  }
})

const playFufu = () => {
  isJumping.value = true
  setTimeout(() => {
    isJumping.value = false
  }, 800)
  new Audio(require('@/assets/fufu-sound.mp3')).play()
}
</script>

<style scoped>
.nav-container {
  display: flex;
  align-items: center;
  position: relative;
  padding-right: 60px;
  min-width: 800px; /* 新增 */
}

.fufu-pendant {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 100;
  width: 60px;
  height: 60px;
}

.fufu-pendant img {
  width: 100%;
  height: 100%;
  max-width: 50px;
  max-height: 50px;
  object-fit: contain;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 1.5);
}

.fufu-jump {
  animation: fufuJump 0.8s cubic-bezier(0.25, 0.46, 0.45, 1.5);
}

@keyframes fufuJump {
  0% { transform: translateY(0) rotate(0deg); }
  30% { transform: translateY(-50px) rotate(15deg); }
  70% { transform: translateY(-20px) rotate(-10deg); }
  100% { transform: translateY(0) rotate(0deg); }
}

.sparkle {
  position: absolute;
  width: 20px;
  height: 20px;
  background: radial-gradient(circle, #fff 20%, transparent 60%);
  opacity: 0;
  animation: sparkle 0.8s ease-out;
  left: -10px;
  top: 15px;
}

@keyframes sparkle {
  0% { opacity: 1; transform: scale(0); }
  100% { opacity: 0; transform: scale(2); }
}

/* 核心修改部分 */
.nav-menu {
  flex: 1;
  border-bottom: none;
  background: transparent !important;
  min-width: 0; /* 允许内容溢出 */
}

:deep(.el-menu--horizontal) {
  justify-content: center;
  flex-wrap: nowrap; /* 禁止换行 */
  overflow-x: visible; /* 允许溢出 */
  white-space: nowrap; /* 防止文字换行 */
}

:deep(.el-menu-item) {
  padding: 0 25px !important;
  font-size: 16px;
  transition: all 0.3s ease;
  flex-shrink: 0; /* 禁止收缩 */
}

:deep(.el-menu-item):hover {
  transform: translateY(-3px);
}

/* 响应式处理 */
@media (max-width: 768px) {
  .nav-container {
    min-width: 100%;
    overflow-x: auto; /* 小屏幕横向滚动 */
    padding-right: 50px;
  }

  .fufu-pendant {
    width: 50px;
    height: 50px;
  }

  .fufu-pendant img {
    max-width: 40px;
    max-height: 40px;
  }

  :deep(.el-menu--horizontal) {
    padding: 0 10px;
  }

  :deep(.el-menu-item) {
    padding: 0 12px !important;
    font-size: 14px;
  }
}

/* 超小屏幕优化 */
@media (max-width: 480px) {
  :deep(.el-menu-item) {
    padding: 0 8px !important;
    font-size: 13px;
  }
}
</style>