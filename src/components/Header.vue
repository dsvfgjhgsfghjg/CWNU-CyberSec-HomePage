<script setup lang="ts">
import type { ImageProps } from 'element-plus'
import TopMenu from "./TopMenu.vue";

const fits = [
  'contain',
] as ImageProps['fit'][];
const url = new URL('../assets/images/icon/icon.png', import.meta.url).href;
</script>

<template>
  <div class="horizontal-layout">
    <!-- 图标部分 -->
    <div class="icon-container" v-for="fit in fits" :key="fit">
      <el-image :src="url" :fit="fit" style="width: 10vw; max-height: 73px"></el-image>
    </div>
    <!-- 顶部菜单部分 -->
    <div class="top-menu-container">
      <el-container style="height: 73px">
        <TopMenu />
      </el-container>
    </div>
  </div>
</template>

<style scoped>
.horizontal-layout {
  display: flex;
  justify-content: space-between; /* 或者使用 'flex-start', 'flex-end', 'center' 根据需要 */
  align-items: center;
  padding: 0px; /* 可选，增加一些内边距 */
}

.icon-container {
  /* 如果需要，可以为图标容器添加更多样式 */
}

.top-menu-container {
  /* 如果需要，可以为顶部菜单容器添加更多样式 */
  flex-shrink: 0; /* 确保菜单不会缩小 */
  width: 90vw;
  height: 73px;
  max-height: 73px;
}
</style>