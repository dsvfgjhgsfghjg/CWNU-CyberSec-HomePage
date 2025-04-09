<template>
  <div class="detail-container">
    <el-skeleton v-if="loading" animated />

    <div v-else-if="error" class="error-container">
      <el-alert title="数据加载失败" type="error" show-icon />
      <el-button type="primary" @click="fetchData">重新加载</el-button>
    </div>

    <div v-else class="content-wrapper">
      <!-- 团队标题 -->
      <div class="header-section">
        <h1 class="title">{{ detailData.teamName }}</h1>
        <div class="subtitle">{{ detailData.motto }}</div>
      </div>

      <!-- 核心介绍 -->
      <el-card class="info-card">
        <div class="timeline">
          <el-timeline>
            <el-timeline-item
                v-for="(intro, index) in detailData.introductions"
                :key="index"
                :timestamp="intro.year"
                placement="top"
            >
              <el-card class="intro-card">
                <h3>{{ intro.title }}</h3>
                <p>{{ intro.content }}</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </el-card>

      <!-- 服务模块 -->
      <div class="service-section">
        <h2 class="section-title">🚀 服务提供</h2>
        <el-row :gutter="20">
          <el-col
              v-for="(service, index) in detailData.services"
              :key="index"
              :xs="24" :sm="12" :md="8" :lg="6"
          >
            <el-card class="service-card" shadow="hover">
              <div class="service-icon">
                <component :is="service.icon" style="width: 2em; height: 2em"/>
              </div>
              <h3>{{ service.name }}</h3>
              <el-button
                  type="primary"
                  link
                  :href="service.url"
                  target="_blank"
              >
                立即访问 →
              </el-button>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <!-- 合作伙伴 -->
      <div class="partner-section">
        <h2 class="section-title">🤝 合作伙伴</h2>
        <div class="partner-badges">
          <el-tag
              v-for="(partner, index) in detailData.partners"
              :key="index"
              class="partner-tag"
              effect="dark"
              :color="partner.color"
          >
            <el-icon><Connection /></el-icon>
            {{ partner.name }}
          </el-tag>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted ,markRaw} from 'vue'
import {
  ElIcon,
  Connection,
  Promotion,
  Document,
  Link
} from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
interface TeamIntroduction {
  year: string
  title: string
  content: string
}

interface ServiceItem {
  name: string
  url: string
  icon: any
}

interface PartnerItem {
  name: string
  url: string
  color: string
}

interface AssociationDetail {
  teamName: string
  motto: string
  introductions: TeamIntroduction[]
  services: ServiceItem[]
  partners: PartnerItem[]
}

export default defineComponent({
  components: { Connection },
  setup() {
    const detailData = ref<AssociationDetail>({
      teamName: '星盟安全团队',
      motto: '我们的征途是星辰大海',
      introductions: [
        {
          year: "2018",
          title: "团队成立",
          content: "星盟安全团队正式成立于2018年10月，由一群热爱网络安全的年轻人组成"
        },
        {
          year: "2020",
          title: "发展壮大",
          content: "建立完善的人才培养体系，开始输出高质量安全研究内容"
        },
        {
          year: "2022",
          title: "生态建设",
          content: "形成博客、CTF训练、视频教程、开源项目四位一体的技术生态"
        }
      ],
      services: [
        {
          name: "团队博客",
          url: "#",
          icon: markRaw(Document)
        },
        {
          name: "CTF训练",
          url: "#",
          icon: markRaw(Promotion)
        },
        {
          name: "哔哩哔哩",
          url: "#",
          icon: markRaw(Link)
        },
        {
          name: "GitHub",
          url: "#",
          icon: markRaw(Link)
        }
      ],
      partners: [
        { name: "FreeBuf", color: "#1E90FF", url: "#" },
        { name: "看雪学院", color: "#FF6347", url: "#" },
        { name: "漏洞银行", color: "#32CD32", url: "#" }
      ]
    })

    const loading = ref(true)
    const error = ref(false)

    const fetchData = async () => {
      try {
        // 模拟加载
        await new Promise(resolve => setTimeout(resolve, 1200))
      } catch {
        error.value = true
        ElMessage.error('数据加载失败')
      } finally {
        loading.value = false
      }
    }

    onMounted(fetchData)

    return {
      detailData,
      loading,
      error,
      fetchData,
      Connection
    }
  }
})
</script>

<style lang="scss" scoped>
.detail-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  .header-section {
    text-align: center;
    margin-bottom: 3rem;
    .title {
      font-size: 2.5rem;
      color: #409eff;
      margin-bottom: 1rem;
    }
    .subtitle {
      font-size: 1.2rem;
      color: #666;
    }
  }

  .service-section {
    margin: 3rem 0;
    .service-card {
      text-align: center;
      margin-bottom: 1.5rem;
      transition: transform 0.3s;
      &:hover {
        transform: translateY(-5px);
      }
      h3 {
        margin: 1rem 0;
      }
    }
  }

  .partner-section {
    margin-top: 3rem;
    .partner-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      .partner-tag {
        padding: 0.8rem 1.2rem;
        font-size: 1rem;
        border-radius: 20px;
        .el-icon {
          margin-right: 0.5rem;
        }
      }
    }
  }

  .section-title {
    text-align: center;
    margin: 2rem 0;
    font-size: 1.8rem;
    color: #333;
  }

  .intro-card {
    margin: 1rem 0;
    h3 {
      color: #409eff;
      margin-bottom: 0.8rem;
    }
    p {
      line-height: 1.8;
      color: #666;
    }
  }
}
</style>