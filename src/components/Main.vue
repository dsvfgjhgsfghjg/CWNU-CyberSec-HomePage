<script setup lang="ts">
import Drawer from './Drawer.vue'
import Banner from './Banner.vue'
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
    <el-container>
      <!--存放主视图需要显示的内容-->
    </el-container>
  </div>
</template>

<style scoped>

</style>