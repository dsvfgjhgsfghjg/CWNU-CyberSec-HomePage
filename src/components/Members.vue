<script setup lang="ts">
import { ref, computed } from 'vue'

type BadgeType = 'founder' | 'pioneer' | 'techExpert' | 'keyContributor'

interface Member {
  id: number
  nickname: string
  avatar: string
  title: string
  role: 'founder' | 'president' | 'member'
  badges?: BadgeType[]
}

const badgesConfig = {
  founder: {
    text: '创始成员',
    style: 'background: #e74c3c; color: white;',
    icon: '⭐'
  },
  pioneer: {
    text: '协会元老',
    style: 'background: #3498db; color: white;',
    icon: '🏛️'
  },
  techExpert: {
    text: '技术权威',
    style: 'background: #2ecc71; color: white;',
    icon: '💻'
  },
  keyContributor: {
    text: '核心贡献',
    style: 'background: linear-gradient(45deg, #ffd700, #ffb400); color: #2c3e50;',
    icon: '🏆'
  }
}

const members = ref<Member[]>([
  {
    id: 3,
    nickname: 'E9u1n0X',
    avatar: new URL('@/assets/members/avatar3.jpg', import.meta.url).href,
    title: '现任理事长',
    role: 'president',
    badges: ['pioneer']
  },
  {
    id: 1,
    nickname: 'Bz_silo',
    avatar: new URL('@/assets/members/avatar1.jpg', import.meta.url).href,
    title: '创始人 & 前理事长',
    role: 'founder',
    badges: ['founder', 'pioneer']
  },
  {
    id: 2,
    nickname: 'UrKc',
    avatar: new URL('@/assets/members/avatar2.jpg', import.meta.url).href,
    title: '联合创始人 & 协会奠基人',
    role: 'founder',
    badges: ['founder', 'keyContributor']
  },
  {
    id: 4,
    nickname: 'CyberSec',
    avatar: new URL('@/assets/members/avatar4.jpg', import.meta.url).href,
    title: '技术总监',
    role: 'member',
    badges: ['techExpert']
  }
])

const orderedMembers = computed(() => {
  return [...members.value].sort((a, b) => {
    const roleOrder = { president: 0, founder: 1, member: 2 }
    const titleOrder = {
      '现任理事长': 0,
      '创始人': 1,
      '联合创始人': 2,
      '技术总监': 3
    }

    if (roleOrder[a.role] !== roleOrder[b.role]) {
      return roleOrder[a.role] - roleOrder[b.role]
    }
    return titleOrder[a.title.split(' ')[0]] - titleOrder[b.title.split(' ')[0]]
  })
})
</script>

<template>
  <div class="member-page">
    <!-- 理事长展示区 -->
    <section class="president-section">
      <h2 class="section-title">现任领导</h2>
      <div class="president-grid">
        <article
            v-for="member in orderedMembers.filter(m => m.role === 'president')"
            :key="member.id"
            class="president-card"
        >
          <div class="avatar-wrapper president-avatar">
            <img :src="member.avatar" :alt="member.nickname" class="avatar" />
          </div>
          <div class="member-info">
            <h3 class="nickname">{{ member.nickname }}</h3>
            <p class="title">{{ member.title }}</p>
            <div class="badge-group" v-if="member.badges">
              <div
                  v-for="badge in member.badges"
                  :key="badge"
                  class="member-badge"
                  :style="badgesConfig[badge].style"
              >
                {{ badgesConfig[badge].icon }} {{ badgesConfig[badge].text }}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- 创始人展示区 -->
    <section class="founders">
      <h2 class="section-title">创始团队</h2>
      <div class="founder-grid">
        <article
            v-for="founder in orderedMembers.filter(m => m.role === 'founder')"
            :key="founder.id"
            class="founder-card"
        >
          <div class="avatar-wrapper">
            <img :src="founder.avatar" :alt="founder.nickname" class="avatar" />
          </div>
          <div class="member-info">
            <h3 class="nickname">{{ founder.nickname }}</h3>
            <p class="title">{{ founder.title }}</p>
            <div class="badge-group" v-if="founder.badges">
              <div
                  v-for="badge in founder.badges"
                  :key="badge"
                  class="member-badge"
                  :style="badgesConfig[badge].style"
              >
                {{ badgesConfig[badge].icon }} {{ badgesConfig[badge].text }}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- 核心成员展示区 -->
    <section class="members">
      <h2 class="section-title">核心成员</h2>
      <div class="member-grid">
        <article
            v-for="member in orderedMembers.filter(m => m.role === 'member')"
            :key="member.id"
            class="member-card"
        >
          <div class="avatar-wrapper">
            <img :src="member.avatar" :alt="member.nickname" class="avatar" />
          </div>
          <div class="member-info">
            <h3 class="nickname">{{ member.nickname }}</h3>
            <p class="title">{{ member.title }}</p>
            <div class="badge-group" v-if="member.badges">
              <div
                  v-for="badge in member.badges"
                  :key="badge"
                  class="member-badge"
                  :style="badgesConfig[badge].style"
              >
                {{ badgesConfig[badge].icon }} {{ badgesConfig[badge].text }}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.member-page {
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 2rem;
  min-height: 100vh;
}

.section-title {
  color: #2c3e50;
  font-size: 2.25rem;
  text-align: center;
  margin: 0 0 4rem;
  position: relative;
  letter-spacing: 1.5px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: #3498db;
  border-radius: 2px;
}

/* 理事长区块 */
.president-section {
  margin-bottom: 6rem;
}

.president-grid {
  max-width: 900px;
  margin: 0 auto;
}

.president-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 3rem;
  margin: 2rem 0;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.president-card:hover {
  transform: translateY(-5px);
}

/* 创始人区块 */
.founders {
  margin-bottom: 5rem;
}

.founder-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3rem;
  padding: 0 2rem;
}

.founder-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease;
}

.founder-card:hover {
  transform: translateY(-3px);
}

/* 核心成员区块 */
.members {
  margin-top: 4rem;
}

.member-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2.5rem;
  padding: 0 2rem;
}

.member-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
}

.member-card:hover {
  transform: translateY(-2px);
}

/* 头像样式 */
.avatar-wrapper {
  width: 160px;
  height: 160px;
  margin: 0 auto 2rem;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid rgba(52, 152, 219, 0.15);
}

.president-avatar {
  width: 200px !important;
  height: 200px !important;
  border-width: 4px;
  border-color: #3498db;
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 文字信息 */
.member-info {
  text-align: center;
  position: relative;
}

.nickname {
  color: #2c3e50;
  font-size: 1.4rem;
  margin: 0 0 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.title {
  color: #666;
  font-size: 1rem;
  margin: 0 0 1.5rem;
  line-height: 1.6;
}

/* 徽章系统 */
.badge-group {
  position: absolute;
  top: 1.5rem;
  right: -1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.member-badge {
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .member-page {
    padding: 3rem 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .founder-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.75rem;
    margin-bottom: 3rem;
  }

  .section-title::after {
    bottom: -1.2rem;
  }

  .president-card {
    padding: 2rem;
  }

  .badge-group {
    position: static;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1.5rem;
  }

  .member-badge {
    font-size: 0.8rem;
    padding: 0.4rem 1rem;
  }

  .avatar-wrapper {
    width: 140px;
    height: 140px;
    margin-bottom: 1.5rem;
  }

  .president-avatar {
    width: 160px !important;
    height: 160px !important;
  }
}

@media (max-width: 480px) {
  .member-page {
    padding: 2rem 1rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .founder-grid,
  .member-grid {
    grid-template-columns: 1fr;
    padding: 0;
  }

  .nickname {
    font-size: 1.2rem;
  }

  .title {
    font-size: 0.9rem;
  }
}
</style>