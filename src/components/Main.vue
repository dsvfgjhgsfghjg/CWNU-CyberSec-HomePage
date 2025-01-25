<script setup lang="ts">
import Drawer from './Drawer.vue'
import Banner from './Banner.vue'
import AsocialUpdates from "../Views/AsocialUpdates.vue";
import Detail from "../Views/Detail.vue";

</script>

<template>
  <div id="Drawer">
    <el-container>
      <Drawer /><!--显示抽屉-->
    </el-container>
  </div>
  <el-container>
    <Banner />
  </el-container>
  <div id="views">
    <!--存放主视图需要显示的内容-->
    <el-container id="AsocialUpdates">
      <AsocialUpdates />
      <!--存放动态更新-->
    </el-container>
    <el-container id="Details">
      <!--存放Detail-->
      <Detail />
    </el-container>
    <el-container>
      <!--存放知识库-->
      <Detail />
    </el-container>
  </div>
</template>

<style scoped>

</style>