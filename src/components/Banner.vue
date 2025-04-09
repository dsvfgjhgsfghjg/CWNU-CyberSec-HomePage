<script lang='ts' setup>
// 保持原有脚本部分不变
const BannerImg = [
  { id: 1, src: new URL('../assets/images/banner/anhengbei2024.jpg', import.meta.url).toString(), title: 'Slide 1' },
  { id: 2, src: new URL('../assets/images/banner/shuzhengbei2024.jpg', import.meta.url).toString(), title: 'Slide 2' },
  { id: 3, src: new URL('../assets/images/banner/wangdingbei2024.jpg', import.meta.url).toString(), title: 'Slide 3' },
];
</script>

<template>
  <!-- 添加包裹容器 -->
  <div class="carousel-container">
    <el-carousel
        :interval="4000"
        type="card"
        height="270px"
        class="centered-carousel"
    >
      <el-carousel-item v-for="item in BannerImg" :key="item.id">
        <img
            :src="item.src"
            :alt="item.title"
            class="banner-image"
        />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
/* 新增包裹容器样式 */
.carousel-container {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
}

/* 修改轮播器样式 */
.centered-carousel {
  width: 804px;  /* 保持原有设计宽度 */
  margin: 0 auto; /* 水平居中 */
}

/* 调整卡片式轮播布局 */
:deep(.el-carousel__container) {
  justify-content: center; /* 卡片居中布局 */
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;  /* 保持图片比例 */
  border-radius: 4px; /* 可选：添加圆角 */
}

/* 响应式调整 */
@media (max-width: 860px) {
  .centered-carousel {
    width: 95%;  /* 小屏幕时适当缩小 */
    max-width: 804px;
  }

  :deep(.el-carousel__item) {
    width: 70% !important;  /* 调整卡片宽度 */
  }
}

@media (max-width: 480px) {
  .carousel-container {
    padding: 10px 0;
  }

  :deep(.el-carousel__item) {
    width: 85% !important;
  }
}
</style>