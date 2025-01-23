<script setup lang="ts">
import { ref } from "vue";
import { ElButton, ElDrawer, ElMenu, ElMenuItem } from 'element-plus';

interface MenuItem {
  index: string;
  label: string;
}

// 控制侧边栏显示状态
const isSidebarVisible = ref<boolean>(false);

// 菜单项数据
const menuItems: MenuItem[] = [
  { index: "1", label: "首页" },
  { index: "2", label: "设置" },
  { index: "3", label: "关于" },
];

// 明确指定 @select 事件处理函数的参数类型
const handleSelect = (index: string) => {
  console.log('选中菜单项:', index);
};
</script>

<template>
  <div>
    <!-- 控制侧边栏的按钮 -->
    <el-button type="primary" @click="isSidebarVisible = !isSidebarVisible">
      {{ isSidebarVisible ? "隐藏侧边栏" : "显示侧边栏" }}
    </el-button>

    <!-- 侧边栏 -->
    <el-drawer
        title="侧边栏"
        v-model="isSidebarVisible"
        direction="ltr"
        size="300px"
        :with-header="true"
    >
      <!-- 动态菜单 -->
      <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @select="handleSelect"
      >
        <el-menu-item
            v-for="item in menuItems"
            :key="item.index"
            :index="item.index"
        >
          {{ item.label }}
        </el-menu-item>
      </el-menu>
    </el-drawer>
  </div>
</template>

<style scoped>
.el-button {
  margin: 10px;
}

.el-drawer {
  background-color: #f9f9f9;
}
</style>



