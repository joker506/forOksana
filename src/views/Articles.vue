<template>
  <div>
    <div class="title d-flex align-items-center justify-content-start">
      <div class="green"></div>
      <div class="container">
        <h2>Статьи</h2>
      </div>
    </div>
    <router-view></router-view>

    <ArticlesComponent />
  </div>
</template>

<script>
import ArticlesComponent from '@/components/Articles.vue';
export default {
  name: 'Articles',
  components: {
    ArticlesComponent,
  },
};
</script>

<style lang="scss" scoped>
.title {
  h2 {
    font-weight: bold;
    font-size: 80px;
    line-height: 88px;
    letter-spacing: 2px;
    color: #1c1642;
  }
}
</style>
