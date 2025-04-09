<template>
  <div class="knowledge-container">
    <!-- 主标题 -->
    <div class="header-section">
      <h1 class="main-title">网络安全知识库</h1>
      <p class="sub-title">汇聚全球网络安全领域优质资源</p>
    </div>

    <!-- 加载状态 -->
    <el-skeleton v-if="loading" :rows="6" animated />

    <!-- 错误提示 -->
    <div v-else-if="error" class="error-container">
      <el-alert
          title="数据加载失败"
          type="error"
          show-icon
          class="error-alert"
      />
      <el-button type="primary" @click="fetchData">重新加载</el-button>
    </div>

    <!-- 数据展示 -->
    <el-row v-else :gutter="20" class="repository-list">
      <el-col
          v-for="item in knowledgeList"
          :key="item.id"
          :xs="24"
          :sm="12"
          :md="8"
          :lg="6"
      >
        <el-card
            class="knowledge-card"
            shadow="hover"
            @click="handleCardClick(item)"
        >
          <div class="card-image">
            <el-image
                :src="item.imageUrl"
                fit="cover"
                style="height: 200px"
                :preview-src-list="[item.imageUrl]"
                lazy
            >
              <template #error>
                <div class="image-error">
                  <el-icon :size="40"><Picture /></el-icon>
                  <p>图片加载失败</p>
                </div>
              </template>
            </el-image>
          </div>

          <div class="card-content">
            <h3 class="card-title ellipsis">{{ item.title }}</h3>
            <div class="card-desc ellipsis-3">{{ item.content }}</div>
            <div class="card-footer">
              <el-tag
                  v-for="(tag, index) in item.tags"
                  :key="index"
                  size="small"
                  class="mr-1"
              >
                {{ tag }}
              </el-tag>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { Picture } from '@element-plus/icons-vue'

interface KnowledgeItem {
  id: string
  title: string
  content: string
  imageUrl: string
  tags: string[]
}

export default defineComponent({
  name: 'KnowledgeRepository',
  components: { Picture },
  setup() {
    const knowledgeList = ref<KnowledgeItem[]>([])
    const loading = ref(true)
    const error = ref(false)

    // 模拟 API 调用
    const fetchData = async () => {
      try {
        loading.value = true
        error.value = false

        await new Promise(resolve => setTimeout(resolve, 1500))

        // 模拟数据
        knowledgeList.value = [
          {
            id: '1',
            title: '网络安全基础入门指南',
            content: '全面讲解网络安全基础知识，涵盖常见攻击类型、防御策略以及基础工具使用，帮助初学者快速建立知识体系。',
            imageUrl: 'https://picsum.photos/400/200?random=1',
            tags: ['入门', '基础']
          },
          {
            id: '2',
            title: 'CTF竞赛完全攻略',
            content: '从零开始学习CTF竞赛技巧，包含Web安全、逆向工程、密码学等赛题解析，助力竞赛选手快速提升实战能力。',
            imageUrl: 'https://picsum.photos/400/200?random=2',
            tags: ['CTF', '竞赛']
          },
          // 更多模拟数据...
        ]
      } catch (err) {
        error.value = true
        ElMessage.error('数据加载失败')
      } finally {
        loading.value = false
      }
    }

    const handleCardClick = (item: KnowledgeItem) => {
      // 处理卡片点击事件
      console.log('打开详情:', item)
    }

    onMounted(() => {
      fetchData()
    })

    return {
      knowledgeList,
      loading,
      error,
      fetchData,
      handleCardClick
    }
  }
})
</script>

<style lang="scss" scoped>
.knowledge-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;

  .header-section {
    text-align: center;
    margin-bottom: 40px;

    .main-title {
      font-size: 32px;
      color: #303133;
      margin-bottom: 12px;
    }

    .sub-title {
      font-size: 16px;
      color: #909399;
    }
  }

  .repository-list {
    margin: -10px;
  }

  .knowledge-card {
    margin: 10px;
    transition: transform 0.3s;
    cursor: pointer;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    .card-image {
      border-radius: 4px 4px 0 0;
      overflow: hidden;

      .image-error {
        height: 200px;
        background: #f5f7fa;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #c0c4cc;

        p {
          margin-top: 10px;
        }
      }
    }

    .card-content {
      padding: 15px;

      .card-title {
        font-size: 16px;
        color: #303133;
        margin-bottom: 10px;
        font-weight: 600;
      }

      .card-desc {
        font-size: 14px;
        color: #606266;
        line-height: 1.6;
        min-height: 66px;
      }

      .card-footer {
        margin-top: 12px;
        padding-top: 12px;
        border-top: 1px solid #ebeef5;
      }
    }
  }

  // 文本省略处理
  .ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .ellipsis-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .error-container {
    text-align: center;
    padding: 50px 0;

    .error-alert {
      margin-bottom: 20px;
    }
  }
}
</style>