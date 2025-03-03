<script setup lang="ts">
import Header from './components/Header.vue'
</script>
// App.vue
<template>
  <div class="container">
    <el-container>
      <el-header><Header /></el-header>
      <el-main>
        <!-- 路由视图容器 -->
        <router-view></router-view>
      </el-main>
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
