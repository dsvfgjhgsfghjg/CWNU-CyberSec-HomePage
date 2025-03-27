<script setup lang="ts">
import { ref, computed } from 'vue'
import dayjs from 'dayjs' // 需要先安装 dayjs

interface NewsItem {
  id: number
  title: string
  content: string
  date: string
  thumbnail: string
  tag: 'competition' | 'recruitment' | 'general'
}

const newsList = ref<NewsItem[]>([
  {
    id: 1,
    title: '恭喜E9u1n0X团队在CISCN全国赛斩获一等奖',
    content: '在刚刚结束的全国大学生信息安全竞赛中，我协会成员组成的参赛队伍凭借出色的技术实力和团队协作，从全国300余支队伍中脱颖而出...',
    date: '2024-05-20',
    thumbnail: new URL('../assets/news/ciscn-result.jpg', import.meta.url).href,
    tag: 'competition'
  },
  {
    id: 2,
    title: '2024年度协会干事招新圆满结束',
    content: '经过为期两周的面试选拔，本届协会干事招新工作已顺利完成。共有23名新成员加入协会管理团队...',
    date: '2024-05-15',
    thumbnail: new URL('../assets/news/recruit-done.jpg', import.meta.url).href,
    tag: 'recruitment'
  },
  {
    id: 3,
    title: '2024年度协会干事招新正式启动',
    content: '新一年度的协会干事招新工作即日起正式启动，欢迎各位会员踊跃报名。本次招新岗位包括技术部、宣传部...',
    date: '2024-05-01',
    thumbnail: new URL('../assets/news/recruit-start.jpg', import.meta.url).href,
    tag: 'recruitment'
  }
])

// 标签配置
const tagConfig = {
  competition: {
    text: '比赛成绩',
    class: 'tag-competition'
  },
  recruitment: {
    text: '招新进度',
    class: 'tag-recruitment'
  },
  general: {
    text: '协会动态',
    class: 'tag-general'
  }
}

// 按时间倒序排列
const sortedNews = computed(() => {
  return [...newsList.value].sort((a, b) =>
      dayjs(b.date).unix() - dayjs(a.date).unix()
  )
})
</script>

<template>
  <div class="news-page">
    <h1 class="page-title">协会动态</h1>

    <div class="timeline">
      <article
          v-for="item in sortedNews"
          :key="item.id"
          class="timeline-item"
      >
        <!-- 时间节点 -->
        <div class="timeline-node">
          <div class="node-date">{{ dayjs(item.date).format('YYYY-MM-DD') }}</div>
          <div class="node-marker"></div>
        </div>

        <!-- 内容卡片 -->
        <div class="timeline-content">
          <div class="news-card">
            <!-- 标签 -->
            <div :class="['news-tag', tagConfig[item.tag].class]">
              {{ tagConfig[item.tag].text }}
            </div>

            <!-- 内容主体 -->
            <div class="content-wrapper">
              <div class="thumbnail">
                <img :src="item.thumbnail" :alt="item.title" />
              </div>
              <div class="text-content">
                <h2 class="news-title">{{ item.title }}</h2>
                <p class="news-excerpt">{{ item.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.news-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.page-title {
  font-size: 2.5rem;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 3rem;
  letter-spacing: 1px;
}

/* 时间线整体布局 */
.timeline {
  position: relative;
  padding-left: 100px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 100px;
  top: 0;
  height: 100%;
  width: 2px;
  background: #e0e0e0;
}

/* 时间节点 */
.timeline-node {
  position: absolute;
  left: -100px;
  width: 200px;
  text-align: right;
  padding-right: 30px;
}

.node-date {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 8px;
}

.node-marker {
  width: 16px;
  height: 16px;
  background: #3498db;
  border-radius: 50%;
  position: absolute;
  right: -8px;
  top: 4px;
  border: 3px solid white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* 内容卡片 */
.timeline-content {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 40px;
}

.news-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.3s ease;
  position: relative;
}

.news-card:hover {
  transform: translateY(-5px);
}

/* 缩略图 */
.thumbnail {
  width: 240px;
  height: 160px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 文字内容 */
.text-content {
  flex: 1;
  padding-left: 2rem;
}

.news-title {
  font-size: 1.4rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.news-excerpt {
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 标签样式 */
.news-tag {
  position: absolute;
  top: -12px;
  right: 20px;
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: white;
  z-index: 1;
}

.tag-competition {
  background: linear-gradient(135deg, #2ecc71, #27ae60);
}

.tag-recruitment {
  background: linear-gradient(135deg, #3498db, #2980b9);
}

.tag-general {
  background: linear-gradient(135deg, #9b59b6, #8e44ad);
}

/* 内容布局 */
.content-wrapper {
  display: flex;
  gap: 2rem;
}

/* 响应式设计 */
@media (max-width: 992px) {
  .timeline {
    padding-left: 0;
  }

  .timeline::before {
    left: 50px;
  }

  .timeline-node {
    left: 0;
    width: auto;
    text-align: left;
    padding-right: 0;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .node-date {
    order: 2;
    margin-bottom: 0;
  }

  .node-marker {
    position: static;
    order: 1;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .content-wrapper {
    flex-direction: column;
  }

  .thumbnail {
    width: 100%;
    height: 200px;
  }

  .text-content {
    padding-left: 0;
  }

  .news-title {
    font-size: 1.2rem;
  }

  .news-excerpt {
    -webkit-line-clamp: 2;
  }

  .timeline::before {
    left: 30px;
  }
}

@media (max-width: 576px) {
  .news-page {
    padding: 2rem 1rem;
  }

  .timeline-node {
    flex-direction: column;
    align-items: flex-start;
  }

  .node-marker {
    margin-left: -8px;
  }

  .news-tag {
    font-size: 0.75rem;
    padding: 4px 12px;
  }
}
</style>