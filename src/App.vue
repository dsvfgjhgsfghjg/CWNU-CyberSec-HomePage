<script setup lang="ts">
import Header from './components/Header.vue'
import Mian from './components/Main.vue'
</script>

<template>
  <div class="container" >
    <el-container>
      <el-header><Header /></el-header>
      <el-container>
        <el-container>
          <el-main><Mian /></el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.container{
  width: 100vw;
  height: 100vh;

}
.el-header {
  padding: 0;
  height: 73px;
}
</style>
