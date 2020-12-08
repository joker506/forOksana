<template>
  <div class="video ">
    <div class="container-lg pl-lg-1 pr-lg-1 pl-0 pr-0">
      <img class="ellipse__video" src="../assets/Ellipse.svg" alt="" />
      <!--  <div class="container-lg d-flex justify-content-center flex-column"> -->
      <div
        class=" d-flex flex-column flex-lg-row flex-wrap justify-content-between"
      >
        <div
          class="w-100 title d-flex align-items-center flex-wrap justify-content-end"
        >
          <div class="col-6">
            <h3 class="articles__title col-lg-6 col-12 p-0">Видео</h3>
          </div>

          <div class="col-lg-6 col-6 green"></div>
          <div
            v-for="(video, index) in videos"
            :key="index"
            class="col-lg-5-8 h-auto pt-3 col-12 video-wrapper"
          >
            <VideoItem
              :img="video.img"
              :uploadDate="video.date"
              :title="video.title"
              :path="/nVideo/"
              :index="index"
              v-if="index <= 3"
            />
          </div>
        </div>
        <div
          class="container-lg d-flex justify-content-lg-end justify-content-center"
        >
          <router-link
            to="/Videos"
            class=" d-flex align-items-center justify-content-between"
          >
            <div class="link-to-all">
              Все видео
              <svg
                width="44"
                height="20"
                viewBox="0 0 44 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 10H43M43 10L35.6111 1M43 10L35.6111 19"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoItem from '@/components/Video-self';
import { mapState } from 'vuex';
export default {
  name: 'Video',
  components: {
    VideoItem,
  },
  computed: {
    ...mapState({
      videos: state => state.Videos.videosAPI,
    }),
  },
};
</script>

<style lang="scss">
@import '../scss/variables';

.video {
  position: relative;
  background-color: #f2f4f9;
  padding-bottom: 160px;

  .link-to-all {
    display: block;
    margin: auto;
    margin-top: 50px;
  }
}
.ellipse__video {
  position: absolute;
  top: -3%;
  left: 0%;
}
.video__title {
  margin-bottom: 80px;
  font-family: 'San-Francisco', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 88px;
  letter-spacing: 2px;
  color: #1c1642;
  position: absolute;
  z-index: 3;
}
@media (max-width: 576px) {
  .video {
    overflow: hidden;
  }

  .ellipse__video {
    position: absolute;
    top: 0%;
    left: -5%;
    width: 124px;
    height: 124px;
  }
  .bord {
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 0;
    border-left: 4px solid $base-green;
  }
  .video-wrapper {
    &:nth-child(3),
    &:nth-child(4) {
      display: none;
    }
  }
}
</style>
