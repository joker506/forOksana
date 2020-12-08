<template>
  <div class="NewsArticle distance">
    <div class="author-info">
      <p class="author__theme">{{ tArticles[id].theme }}</p>
      <p class="author__title mt-1">{{ tArticles[id].title }}</p>

      <p class="mt-3" style="color: rgba(130, 130, 130, 1)">
        {{ tArticles[id].date }}
      </p>
    </div>
    <img class="distance" v-bind:src="info[id].img" alt="q" />
    <div class="green-line"></div>
    <p class="base-p">{{ tArticles[id].content }}</p>
    <hr class="distance grey-line" />
    <div class="share d-flex justify-content-start align-items-center">
      <span>Поделиться:</span>
      <div class=" d-flex align-items-center justify-content-between">
        <a href="#" class="facebook">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="56" height="56" rx="28" fill="#1C1642" />
            <path
              d="M40.5938 28.25C40.5938 21.293 34.957 15.6562 28 15.6562C21.043 15.6562 15.4062 21.293 15.4062 28.25C15.4062 34.5469 19.9766 39.7773 26.0195 40.6914V31.9062H22.8203V28.25H26.0195V25.5078C26.0195 22.3594 27.8984 20.582 30.7422 20.582C32.1641 20.582 33.5859 20.8359 33.5859 20.8359V23.9336H32.0117C30.4375 23.9336 29.9297 24.8984 29.9297 25.9141V28.25H33.4336L32.875 31.9062H29.9297V40.6914C35.9727 39.7773 40.5938 34.5469 40.5938 28.25Z"
              fill="white"
            />
          </svg>
        </a>

        <a href="#" class="insta">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="56" height="56" rx="28" fill="#1C1642" />
            <path
              d="M28 22.4102C24.75 22.4102 22.1602 25.0508 22.1602 28.25C22.1602 31.5 24.75 34.0898 28 34.0898C31.1992 34.0898 33.8398 31.5 33.8398 28.25C33.8398 25.0508 31.1992 22.4102 28 22.4102ZM28 32.0586C25.918 32.0586 24.1914 30.3828 24.1914 28.25C24.1914 26.168 25.8672 24.4922 28 24.4922C30.082 24.4922 31.7578 26.168 31.7578 28.25C31.7578 30.3828 30.082 32.0586 28 32.0586ZM35.4141 22.207C35.4141 21.4453 34.8047 20.8359 34.043 20.8359C33.2812 20.8359 32.6719 21.4453 32.6719 22.207C32.6719 22.9688 33.2812 23.5781 34.043 23.5781C34.8047 23.5781 35.4141 22.9688 35.4141 22.207ZM39.2734 23.5781C39.1719 21.75 38.7656 20.125 37.4453 18.8047C36.125 17.4844 34.5 17.0781 32.6719 16.9766C30.793 16.875 25.1562 16.875 23.2773 16.9766C21.4492 17.0781 19.875 17.4844 18.5039 18.8047C17.1836 20.125 16.7773 21.75 16.6758 23.5781C16.5742 25.457 16.5742 31.0938 16.6758 32.9727C16.7773 34.8008 17.1836 36.375 18.5039 37.7461C19.875 39.0664 21.4492 39.4727 23.2773 39.5742C25.1562 39.6758 30.793 39.6758 32.6719 39.5742C34.5 39.4727 36.125 39.0664 37.4453 37.7461C38.7656 36.375 39.1719 34.8008 39.2734 32.9727C39.375 31.0938 39.375 25.457 39.2734 23.5781ZM36.8359 34.9531C36.4805 35.9688 35.668 36.7305 34.7031 37.1367C33.1797 37.7461 29.625 37.5938 28 37.5938C26.3242 37.5938 22.7695 37.7461 21.2969 37.1367C20.2812 36.7305 19.5195 35.9688 19.1133 34.9531C18.5039 33.4805 18.6562 29.9258 18.6562 28.25C18.6562 26.625 18.5039 23.0703 19.1133 21.5469C19.5195 20.582 20.2812 19.8203 21.2969 19.4141C22.7695 18.8047 26.3242 18.957 28 18.957C29.625 18.957 33.1797 18.8047 34.7031 19.4141C35.668 19.7695 36.4297 20.582 36.8359 21.5469C37.4453 23.0703 37.293 26.625 37.293 28.25C37.293 29.9258 37.4453 33.4805 36.8359 34.9531Z"
              fill="white"
            />
          </svg>
        </a>

        <a href="#" class="youtube">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="56" height="56" rx="28" fill="#1C1642" />
            <path
              transform="translate(14,16)"
              d="M27.8789 3.59766C27.5742 2.37891 26.6094 1.41406 25.4414 1.10938C23.2578 0.5 14.625 0.5 14.625 0.5C14.625 0.5 5.94141 0.5 3.75781 1.10938C2.58984 1.41406 1.625 2.37891 1.32031 3.59766C0.710938 5.73047 0.710938 10.3008 0.710938 10.3008C0.710938 10.3008 0.710938 14.8203 1.32031 17.0039C1.625 18.2227 2.58984 19.1367 3.75781 19.4414C5.94141 20 14.625 20 14.625 20C14.625 20 23.2578 20 25.4414 19.4414C26.6094 19.1367 27.5742 18.2227 27.8789 17.0039C28.4883 14.8203 28.4883 10.3008 28.4883 10.3008C28.4883 10.3008 28.4883 5.73047 27.8789 3.59766ZM11.7812 14.4141V6.1875L18.9922 10.3008L11.7812 14.4141Z"
              fill="#ffffff"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'nArticle',
  data() {
    return {
      post: '',
      id: this.$router.currentRoute.params['id'],
    };
  },
  components: {},
  methods: {
    dateConvert(param) {
      let d = new Date(param);
      return d.toLocaleDateString('ru-RU');
    },
  },
  computed: {
    ...mapState({
      info: state => state.articlesInfo.Articles,
      themes: state => state.articlesInfo.Themes,
      tArticles: state => state.articlesInfo.tArticles,
    }),
  },
};
</script>

<style lang="scss" scope>
.distance {
  margin-top: 32px !important;
  margin-bottom: 32px !important;
}
.author__theme {
  width: 55px;
  height: 30px;
  background: black;
  color: #ffffff;
  border-radius: 10px;
  text-align: center;
  padding-top: 3px;
}
.author__title {
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: 2px;
  text-align: left;
  color: rgba(28, 22, 66, 1);
}
.NewsArticle {
  width: 790px;
  padding: 40px;
  background: #ffffff;
  box-shadow: 0px 14px 32px rgba(108, 137, 164, 0.15);
  border-radius: 15px;
  margin: auto;
  h2 {
    font-size: 40px;
    line-height: 56px;
    letter-spacing: 2px;
    color: #1c1642;
  }
  img {
    width: 100%;
  }
  .author-info {
    p {
      margin-bottom: 0;
    }
  }
  .green-line {
    width: 80px;
    height: 6px;
    margin-bottom: 32px;
    background-color: #66b42f;
  }

  .grey-line {
    background: #bdbdbd;
    width: 100%;
    height: 1px;
  }

  .share {
    a {
      width: 25px;
      height: 25px;
    }
    svg {
      width: 100%;
      height: 100%;
    }
    div {
      width: 90px;
      margin-left: 15px;
    }
  }
}

@media (max-width: 992px) {
  .NewsArticle {
    width: 95%;
    padding: 2.5%;
    img {
      width: 100%;
    }
  }
}
</style>
