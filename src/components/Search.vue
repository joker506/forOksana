<template>
  <div class="search container-xl align-items-center">
    <div class="container d-flex flex-column justify-content-between ">
      <div class="input__wrap w-100">
        <input
          class="input__news w-100"
          v-model="search"
          @input="searchNews"
          type="text"
          placeholder="Поиск"
        />
      </div>
      <ul
        class="items__hash d-lg-flex d-none col-lg-6 justify-content-between p-0 mt-1"
      >
        <li class="item__hash" v-for="(hashItem, item) in hashs" :key="item">
          {{ hashItem.hashTag }}
        </li>
      </ul>

      <swiper
        class="items__hash slider d-lg-none d-block mt-3 mb-3"
        ref="mySwiper"
        :options="swiperOptions"
      >
        <swiper-slide
          class="d-flex justify-content-start"
          v-for="(hashItem, item) in hashs"
          :key="item"
        >
          <li class="item__hash ">{{ hashItem.hashTag }}</li>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';

export default {
  name: 'Search',
  data() {
    return {
      search: '',
      hashs: [
        {
          hashTag: '#хэштег 1',
        },
        {
          hashTag: '#хэштег 2',
        },
        {
          hashTag: '#хэштег 3',
        },
        {
          hashTag: '#хэштег 4',
        },
        {
          hashTag: '#хэштег 5',
        },
        {
          hashTag: '#хэштег 6',
        },
      ],

      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
        slidesPerView: 3.5,
        spaceBetween: 20,
        loop: true,
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    ...mapState({
      infoN: state => state.newsInfo.NewsArticle,
    }),
  },
  directives: {
    swiper: directive,
  },
  methods: {
    searchNews() {
      this.$store.commit('newsInfo/CHANGE_FILTER', this.search);
      //this.$store.commit('Videos/CHANGE__FILTER', this.search);
    },
  },
  mounted() {
    this.swiper.slideTo(-2, 1000, false);
  },
};
</script>

<style lang="scss">
@import '../scss/variables';
.search {
  font-family: $base-family;
}
.search__news {
  font-family: $base-family;
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 88px;
  margin-top: 56px;
  margin-bottom: 45px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 40px;
    left: -262px;
    width: 250px;
    height: 3px;
    background-image: url('~@/assets/Vector2.svg');
  }
}
.input__news {
  height: 60px;
  border: none;
  padding: 20px;
  padding-left: 50px;
}
.input__wrap {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 17px;
    left: 15px;
    background-image: url('~@/assets/search.svg');
    background-repeat: no-repeat;
    background-position: 0 0;
    width: 24px;
    height: 24px;
  }
}
.items__hash {
  list-style: none;
}
.item__hash {
  padding: 0px;
  padding-left: 0px;
  color: rgba(28, 22, 66, 1);
  width: 77px;
  border-right: 1px solid $grey-news;
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid $base-green;
  }
}
.input__hash {
  font-weight: 500;
  font-size: 19px;
  line-height: 24px;
}

@media (max-width: 376px) {
  .search {
    background-color: $base-bg-news;
  }
  .search__news {
    font-weight: bold;
    font-size: 50px;
    line-height: 56px;
    letter-spacing: 2px;
    margin: 0 auto;
    margin-top: 24px;
    margin-bottom: 25px;
    &::before {
      content: '';
      position: absolute;
      top: 28px;
      left: -258px;
      width: 250px;
      height: 3px;
      background-image: url('~@/assets/Vector2.svg');
    }
  }
}
</style>
