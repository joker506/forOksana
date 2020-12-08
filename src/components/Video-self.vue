<template>
  <!-- <div class="video__self"> -->
  <div class="bord video-item h-auto w-95 pt-0 pt-sm-4">
    <router-link :to="path + index" :key="index">
      <div class="content__video content h-lg-100">
        <div
          class="picture-wrapper d-flex justify-content-center align-items-center flex-column"
        >
          <img class="run" src="../assets/start-video.svg" alt="" />
          <img class="w-90 main-pic h-100 h-lg-100" :src="img" alt="" />
          <div class="darken w-90 h-100"></div>
        </div>
        <span class="art__date">{{ uploadDate }}</span>
        <p>
          {{ title }}
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'videoItem',
  props: ['uploadDate', 'title', 'img', 'path', 'index'],
};
</script>
<style lang="scss">
@import '../scss/variables';

.video-item {
  background: #ffffff;
  box-shadow: 20px 24px 32px rgba(108, 137, 164, 0.15);
  border-radius: 15px;
  cursor: pointer;
  min-height: 645px;
  padding: 40px;
  margin-bottom: 44px;

  a:hover {
    text-decoration: none;
  }

  &:hover {
    .content .picture-wrapper {
      .darken,
      .run {
        opacity: 1;
        transition: opacity 0.4s ease;
      }
    }
  }

  .content {
    padding-left: 28px;
    border-left: 4px solid $base-green;
    span {
      color: #828282;
      font-size: 14px;
      line-height: 20px;
      margin-top: 28px;
      display: block;
    }
    p {
      font-weight: 600;
      font-size: 28px;
      line-height: 36px;
      letter-spacing: 0.02em;
      color: #000000;
      margin-top: 24px;
    }
  }

  .picture-wrapper {
    position: relative;
    height: 275px;
    .run {
      z-index: 2;
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    .darken {
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba($color: #000000, $alpha: 0.2);
      content: '';
      border-radius: 15px;
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    .main-pic {
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 15px;
    }
  }
}
.bord {
  margin: auto;
  margin-bottom: 10px;
}

@media (max-width: 576px) {
  .bord {
    margin: 0 auto;
  }

  .video-item {
    background: none;
    // margin-left: 15px;
    width: 95%;
    margin-bottom: 20px;
    box-shadow: none;
    // padding: 10px;
    min-height: initial;
    padding-bottom: 0;
    .picture-wrapper {
      height: 193px;
    }
    .content {
      padding-left: 0;
      border-left: none;
      p {
        font-weight: 600;
        font-size: 24px;
        line-height: 28px;
        margin-top: 0;
      }
      span {
        font-size: 16px;
        line-height: 24px;
        color: rgba(0, 0, 0, 1);
      }
    }
  }
}
</style>
