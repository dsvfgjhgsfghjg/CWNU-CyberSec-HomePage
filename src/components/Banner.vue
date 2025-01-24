<script lang='ts' setup>

const BannerImg = [
  { id: 1, src: new URL('../assets/images/banner/anhengbei2024.jpg', import.meta.url).toString(), title: 'Slide 1' },
  { id: 2, src: new URL('../assets/images/banner/shuzhengbei2024.jpg', import.meta.url).toString(), title: 'Slide 2' },
  { id: 3, src: new URL('../assets/images/banner/wangdingbei2024.jpg', import.meta.url).toString(), title: 'Slide 3' },
];
</script>
<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in BannerImg" :key="item">
      <img :src="item.src" :alt="item.title" class="banner-image" />
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.el-carousel{
  width:100%;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.banner-image{
  width:100%;
  height: 100%;
}
</style>
