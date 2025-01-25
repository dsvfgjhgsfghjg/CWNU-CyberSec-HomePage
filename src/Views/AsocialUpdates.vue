<template>
  <el-card class="news-panel" shadow="hover">
    <div class="news-header">
      <!-- 遍历新闻列表 -->
      <el-row class="news-item" v-for="(news, index) in newsList" :key="index">
        <el-col :span="8" class="news-image">
          <img :src="news.image" alt="News image" />
        </el-col>
        <el-col :span="16" class="news-content">
          <h3>{{ news.title }}</h3>
          <p>{{ news.description }}</p>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'NewsPanel',
  setup() {
    // 初始化新闻数据（可以通过Ajax请求后端API来动态获取）
    const newsList = ref([
      {
        title: 'Vue 3 新特性发布',
        description: 'Vue 3 带来了大量新特性，包括 Composition API、性能提升等，本文详细介绍了 Vue 3 的主要变化。',
        image: 'https://via.placeholder.com/150',
      },
      {
        title: 'ElementPlus 更新日志',
        description: 'ElementPlus 发布了新版本，增加了许多组件和功能，优化了性能，本文总结了这次更新的亮点。',
        image: 'https://via.placeholder.com/150',
      },
      {
        title: 'Vite 2.0 发布',
        description: 'Vite 2.0 带来了更快的启动速度、更优秀的热更新支持以及更强的构建性能，是前端开发的未来。',
        image: 'https://via.placeholder.com/150',
      },
      {
        title: 'JavaScript 新特性介绍',
        description: '随着 JavaScript 不断发展，新的语言特性不断推出，这篇文章将带你了解 JavaScript 中的一些新特性。',
        image: 'https://via.placeholder.com/150',
      },
      {
        title: '前端框架对比：Vue vs React',
        description: 'Vue 和 React 是目前最流行的前端框架，本文将对这两者进行详细对比，帮助开发者选择合适的框架。',
        image: 'https://via.placeholder.com/150',
      }
    ]);

    return { newsList };
  },
};
</script>

<style scoped>
.news-panel {
  width: 100%;
  max-height: 400px;
  overflow-y: scroll;
}

.news-item {
  display: flex;
  margin-bottom: 16px;
}

.news-image img {
  width: 100%;
  height: auto;
}

.news-content h3 {
  font-size: 18px;
  margin: 0;
  font-weight: bold;
}

.news-content p {
  font-size: 14px;
  color: #555;
}
</style>
