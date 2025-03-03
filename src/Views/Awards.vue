<template>
  <div class="awards-container">
    <!-- 主标题 -->
    <h1 class="main-title">🏆 网络安全协会荣誉殿堂</h1>

    <!-- 时间线展示 -->
    <div class="timeline-section">
      <h2 class="section-title">荣誉历程</h2>
      <el-timeline>
        <el-timeline-item
            v-for="(award, index) in awards"
            :key="index"
            :timestamp="award.year"
            placement="top"
            type="primary"
            hollow
        >
          <el-card shadow="never" class="timeline-card">
            <div class="award-header">
              <h3 class="award-title">{{ award.title }}</h3>
              <el-tag type="success" effect="dark">{{ award.level }}</el-tag>
            </div>
            <p class="award-time">
              <el-icon><Calendar /></el-icon>
              {{ award.time }}
            </p>
            <p class="award-desc">{{ award.description }}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>

    <!-- 奖状相册 -->
    <div class="certificate-section">
      <h2 class="section-title">荣誉证书</h2>
      <el-row :gutter="20" justify="center">
        <el-col
            v-for="(cert, index) in certificates"
            :key="index"
            :xs="24"
            :sm="12"
            :md="8"
            :lg="6"
        >
          <el-card class="cert-card" shadow="hover">
            <div class="cert-badge">{{ cert.year }}</div>
            <el-image
                :src="cert.image"
                fit="cover"
                class="cert-image"
                :preview-src-list="certificates.map(c => c.image)"
                :initial-index="index"
                lazy
            >
              <template #error>
                <div class="image-error">
                  <el-icon><Picture /></el-icon>
                  <span>证书加载失败</span>
                </div>
              </template>
            </el-image>
            <div class="cert-info">
              <h3 class="cert-title">{{ cert.title }}</h3>
              <div class="cert-meta">
                <span class="cert-time">
                  <el-icon><Clock /></el-icon>
                  {{ cert.time }}
                </span>
                <el-tag size="small">{{ cert.category }}</el-tag>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Calendar, Clock, Picture } from '@element-plus/icons-vue'

const awards = ref([
  {
    year: '2023',
    title: '全国网络安全技术对抗赛',
    time: '2023年8月20日',
    level: '一等奖',
    description: '在由工信部主办的全国网络安全技术对抗赛中，从200支队伍中脱颖而出获得冠军'
  },
  // 更多获奖数据...
])

const certificates = ref([
  {
    title: 'CTF攻防赛全国冠军',
    time: '2023年8月',
    year: '2023',
    category: 'CTF竞赛',
    image: '/certs/2023-champion.jpg'
  },
  // 更多证书数据...
])
</script>

<style scoped>
.awards-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  min-height: 100vh;
}

.main-title {
  text-align: center;
  color: #2c3e50;
  margin: 2rem 0;
  font-size: 2.2rem;
}

.section-title {
  color: #34495e;
  border-left: 4px solid #409EFF;
  padding: 8px 20px;
  margin: 3rem 0;
  font-size: 1.5rem;
}

/* 时间线样式 */
.timeline-card {
  margin: 10px 0;
  border-radius: 8px;
}
.award-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}
.award-title {
  margin: 0;
  color: #2c3e50;
}
.award-time {
  color: #7f8c8d;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}
.award-desc {
  color: #666;
  line-height: 1.6;
}

/* 证书卡片样式 */
.cert-card {
  position: relative;
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
  border-radius: 8px;
}
.cert-card:hover {
  transform: translateY(-5px);
}
.cert-badge {
  position: absolute;
  top: 10px;
  right: -8px;
  background: #409EFF;
  color: white;
  padding: 4px 12px;
  border-radius: 4px;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.cert-image {
  height: 280px;
  width: 100%;
  border-radius: 6px 6px 0 0;
}
.cert-info {
  padding: 1rem;
}
.cert-title {
  margin: 0;
  color: #34495e;
  font-size: 1.1rem;
}
.cert-meta {
  margin-top: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cert-time {
  color: #95a5a6;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.9rem;
}

.image-error {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #999;
  background: #f5f7fa;
}
</style>