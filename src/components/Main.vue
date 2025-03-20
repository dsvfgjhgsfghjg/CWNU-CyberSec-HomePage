<script setup lang="ts">
import Drawer from './Drawer.vue'
import Banner from './Banner.vue'
import AsocialUpdates from "../Views/AsocialUpdates.vue";
import Detail from "../Views/Detail.vue";
</script>

<template>
  <div class="root-container">
    <!-- 抽屉组件保持原结构 -->
    <el-container>
      <Drawer />
    </el-container>

    <!-- 直接在目标el-container上操作 -->
    <el-container class="banner-main">
      <div class="banner-content">
        <Banner />
      </div>
    </el-container>

    <!-- 内容区域 -->
    <div class="content-main">
      <el-container><AsocialUpdates /></el-container>
      <el-container><Detail /></el-container>
      <el-container><Detail /></el-container>
    </div>
  </div>
</template>

<style scoped>
/* 核心解决方案 */
.banner-main {
  /* 覆盖Element默认的flex方向 */
  flex-direction: row !important;
  /* 实现居中 */
  display: flex !important;
  justify-content: center;
  /* 尺寸控制 */
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

/* 内容宽度控制 */
.banner-content {
  width: 100%;
  max-width: 1200px;  /* 根据设计需求调整 */
}

/* 整体布局优化 */
.root-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-main {
  flex: 1;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 24px 5%;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
}

/* 响应式处理 */
@media (max-width: 768px) {
  .banner-main {
    margin-left: 0;
    width: 100%;
  }

  .content-main {
    grid-template-columns: 1fr;
    padding: 12px;
  }

  .banner-content {
    padding: 0 12px;
  }
}
</style>