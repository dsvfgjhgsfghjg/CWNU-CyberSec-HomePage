<script setup lang="ts">
import Drawer from './Drawer.vue'
import Banner from './Banner.vue'
import AsocialUpdates from "../Views/AsocialUpdates.vue";
import Detail from "../Views/Detail.vue";
import KnowlegeRepository from "@/Views/KnowlegeRepository.vue";
</script>

<template>
  <div class="root-container">
    <el-container>
      <Drawer />
    </el-container>

    <el-container class="banner-main">
      <div class="banner-content">
        <Banner />
      </div>
    </el-container>

    <!-- 修改后的内容区域 -->
    <div class="content-main">
      <div class="vertical-layout">
        <AsocialUpdates class="full-width-component" />
        <Detail class="full-width-component" />
        <KnowlegeRepository class="full-width-component" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 保持Banner区域样式不变 */
.banner-main {
  flex-direction: row !important;
  display: flex !important;
  justify-content: center;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

.banner-content {
  width: 100%;
  max-width: 1200px;
}

.root-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* 重写内容区域 */
.content-main {
  flex: 1;
  width: 100%;
  padding: 24px 0;
}

.vertical-layout {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 5%;
}

.full-width-component {
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .banner-main {
    margin-left: 0;
    width: 100%;
  }

  .vertical-layout {
    padding: 0 12px;
  }

  .content-main {
    padding: 12px 0;
  }
}

@media (max-width: 480px) {
  .vertical-layout {
    gap: 16px;
    padding: 0 8px;
  }
}
</style>