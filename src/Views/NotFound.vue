<!-- src/views/NotFound.vue -->
<template>
  <div class="notfound-container">
    <div class="error-content">
      <!-- 动态数字动画 -->
      <div class="error-code">
        <span class="digit">4</span>
        <el-icon class="zero-icon"><Lock /></el-icon>
        <span class="digit">4</span>
      </div>

      <!-- 错误信息 -->
      <h1 class="error-title">安全防护已启动</h1>
      <p class="error-description">
        您访问的页面已被加密保护或不存在<br>
        可能是URL输入错误或页面已被安全转移
      </p>

      <!-- 操作按钮 -->
      <div class="action-buttons">
        <el-button
            type="primary"
            size="large"
            @click="navigateHome"
            class="cyber-button"
        >
          <el-icon><HomeFilled /></el-icon>
          返回安全基地
        </el-button>

        <el-button
            size="large"
            @click="contactSupport"
            class="cyber-button"
        >
          <el-icon><Service /></el-icon>
          联系安全团队
        </el-button>
      </div>

      <!-- 动态背景效果 -->
      <div class="cyber-background">
        <div class="glitch-layers">
          <div class="glitch-layer"></div>
          <div class="glitch-layer"></div>
          <div class="glitch-layer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Lock, HomeFilled, Service } from '@element-plus/icons-vue'

const router = useRouter()

const navigateHome = () => {
  router.push('/')
}

const contactSupport = () => {
  window.location.href = 'mailto:security@yourassociation.org'
}
</script>

<style scoped>
.notfound-container {
  height: 100vh;
  background: #0a0a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: relative;
  overflow: hidden;
}

.error-content {
  text-align: center;
  z-index: 2;
  position: relative;
}

.error-code {
  font-size: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px #00f7ff;
}

.digit {
  color: #00f7ff;
  font-family: 'Courier New', monospace;
  animation: glitch 1s infinite;
}

.zero-icon {
  font-size: 8rem;
  color: #ff003c;
  margin: 0 1rem;
  filter: drop-shadow(0 0 8px #ff003c);
}

.error-title {
  font-size: 2rem;
  color: #fff;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.error-description {
  color: #8b8b8b;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 3rem;
}

.action-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.cyber-button {
  border: 2px solid #00f7ff;
  background: rgba(0, 247, 255, 0.1) !important;
  color: #00f7ff !important;
  transition: all 0.3s ease;
  font-family: 'Arial Black', sans-serif;
}

.cyber-button:hover {
  background: rgba(0, 247, 255, 0.3) !important;
  box-shadow: 0 0 15px #00f7ff;
}

/* 故障效果动画 */
@keyframes glitch {
  0% { transform: translate(0) }
  20% { transform: translate(-2px, 2px) }
  40% { transform: translate(-2px, -2px) }
  60% { transform: translate(2px, 2px) }
  80% { transform: translate(2px, -2px) }
  100% { transform: translate(0) }
}

/* 动态背景效果 */
.cyber-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.glitch-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      45deg,
      transparent 45%,
      rgba(0, 247, 255, 0.1) 50%,
      transparent 55%
  );
  animation: scan 4s linear infinite;
}

.glitch-layer:nth-child(2) {
  animation-delay: -1s;
  opacity: 0.7;
}

.glitch-layer:nth-child(3) {
  animation-delay: -2s;
  opacity: 0.5;
}

@keyframes scan {
  0% { transform: translateY(-100%) }
  100% { transform: translateY(100%) }
}
</style>