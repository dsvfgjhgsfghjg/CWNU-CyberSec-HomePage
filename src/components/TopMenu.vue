<template>
  <el-menu
      mode="horizontal"
      :router="true"
      :class="['nav-menu', { 'menu-shrink': isScrolled }]"
      :default-active="$route.path"
  >
    <el-menu-item index="/">Home</el-menu-item>
    <el-menu-item index="/awards">Awards</el-menu-item>
    <el-menu-item index="/member">Member</el-menu-item>
    <el-menu-item index="/events">Events</el-menu-item>

    <!-- 右侧功能保持右对齐 -->
    <div class="menu-right">
      <el-button type="primary" link>Login</el-button>
    </div>
  </el-menu>
</template>

<script setup lang="ts">
defineProps<{
  isScrolled: boolean
}>()
</script>

<style scoped>
.nav-menu {
  flex: 1;
  border-bottom: none;
  margin-left: 40px;
}

/* Element Plus 样式覆盖 */
:deep(.el-menu--horizontal) {
  display: flex;
  justify-content: flex-end;
}

:deep(.el-menu-item) {
  padding: 0 25px !important;
  font-size: 16px;
  transition: all 0.3s ease;
}

/* 缩小后的紧凑模式 */
.menu-shrink :deep(.el-menu-item) {
  font-size: 14px !important;
  padding: 0 20px !important;
}

.menu-right {
  margin-left: auto;
  display: flex;
  align-items: center;
}
</style>