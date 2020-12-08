<template>
  <div>
    <div class="title d-flex align-items-center justify-content-start">
      <div class="green"></div>
      <div class="container">
        <h2>Видео</h2>
      </div>
    </div>
    <!-- МЕСТО ДЛЯ ПОИСКА -->
    <Search />
    <div class="container">
      <div class="row">
        <div
          class="col-lg-6 col-12"
          v-for="(video, index) in corrVideo"
          :key="index"
        >
          <VideoItem
            :img="video.img"
            :uploadDate="video.date"
            :title="video.title"
            :path="/nVideo/"
            :index="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoItem from '@/components/Video-self';
import Search from '@/components/Search';
import { mapState, mapGetters } from 'vuex';
export default {
  name: 'videos',
  components: {
    VideoItem,
    Search,
  },
  computed: {
    ...mapState({
      Videos: state => state.Videos.videosAPI,
    }),
    ...mapGetters({
      corrVideo: 'Videos/filterVideo',
    }),
  },
};
</script>

<style lang="scss" scope>
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
