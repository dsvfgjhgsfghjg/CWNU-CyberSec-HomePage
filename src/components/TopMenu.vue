<template>
  <!-- 顶部菜单栏 -->
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
  >
    <el-menu-item index="1">Home</el-menu-item>
    <el-menu-item index="2">Awards</el-menu-item>
    <el-menu-item index="3">Member</el-menu-item>
    <el-menu-item index="4">Events</el-menu-item>
    <el-sub-menu index="5">
      <template #title>About us</template>
      <el-menu-item index="5-1">
        <a :href="urls.qq" target="_blank">QQ</a>
      </el-menu-item>
      <el-menu-item index="5-2">
        <a :href="urls.wechat" target="_blank">微信</a>
      </el-menu-item>
      <el-menu-item index="5-3">
        <a :href="urls.webpage" target="_blank">WebPage</a>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// 定义当前激活的菜单项
const activeIndex = ref('1')

// 定义 URL
const urls = {
  qq: '#',       // QQ 的 URL
  wechat: '#',   // 微信的 URL
  webpage: '#',  // WebPage 的 URL
}

// 菜单项选择事件
const handleSelect = (key: string, keyPath: string[]) => {
  console.log('选择了菜单项:', key, keyPath)
}
</script>

<style scoped>
/* 自定义样式 */
.el-menu-demo {
  line-height: 60px;
  font-size: 16px;
}
.el-menu{
  width: 88vw;
}
.el-menu--horizontal > .el-menu-item:nth-child(4) {
  margin-right: auto;
}
</style>
