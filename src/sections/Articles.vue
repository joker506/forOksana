<template>
  <div class="articles ">
    <div class="articles__wrapp container-xl ">
    
      <div class="row justify-content-between">
        <div class="col-lg-2 col-sm-12">
          <h3 class="articles__title">Статьи</h3>
        </div>
      </div>
      <div class="row justify-content-between">
        <ul
          class="articles__items col-lg-4 offset-lg-2 d-lg-flex d-none justify-content-between"
        >
          <li 
          v-for='(theme, i) in ThemeArticles' 
          :key="theme.title" 
          >
            <p v-if='theme.isActive' class='active-button articles__item w-100 h-100'>{{theme.title}}</p>
            <p v-on:click='activateTheme($event, i)' v-else class='articles__item w-100 h-100'>{{theme.title}}</p>
          </li>
        </ul>
        <!-- шаг 3 - внедряем в вёрстку сам компонент, прописываем swiperOptions как метод options -->
        <swiper class='articles__items slider d-lg-none d-block' ref="mySwiper" :options="swiperOptions" >
          <!--  шаг 4 - вот это сам слайд, его экземпляр. в него контент -->
          <swiper-slide 
          v-for='(theme, i) in ThemeArticles' 
          :key="theme.title">
            <p v-if='theme.isActive' class='active-button articles__item w-100 p-0 d-flex h-100 justify-content-center align-items-center'>{{theme.title}}</p>
            <p v-on:click='activateTheme($event, i)' v-else class='articles__item w-100 p-0 d-flex h-100 justify-content-center align-items-center'>{{theme.title}}</p>
          </swiper-slide>
        </swiper>
      </div>
        <div  class="article__card--wrap">
          <div class="articles__card offset-lg-2 d-flex flex-column mb-1"
            style="top:0px; left:10px">
            <span class="card__subject offset-lg-2">{{themeDefault}}</span>
            <span class="card__date offset-lg-2">{{dateDefault}}</span>
            <p class="card__text offset-lg-2 mb-lg-3">{{contentDefault}}</p>
        </div>

        <img
          class="articles__img offset-lg-6"
          src="../assets/articles-boy.png"
          alt=""
        />
      </div>

    </div>
    <ArticlesCard />
  </div>
</template>

<script>
// Шаг 1 - подключаем библиотеку
import ArticlesCard from '@/components/subcomponents/Articles-Card';
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
  name: 'Articles',
  components: {
    // Шаг 2 - подключаем компонент
    ArticlesCard,
    Swiper,
    SwiperSlide
  },
  data() {
    return {

      ThemeArticles: [
        {
          title: 'Наука',
          isActive: true
        },
        {
          title: 'Техника',
          isActive: false
        },
        {
          title: 'Медиа',
          isActive: false
        },
        {
          title: 'Досуг',
          isActive: false
        }
      ],
      ArticleItems: [
        {
          date: '15 февраля 2020',
          content: 'Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука',
          isActive: true
        },
        {
          date: '16 января 2020',
          content: 'Техника Техника Техника Техника Техника Техника Техника Техника Техника Техника Техника Техника Техника Техника Техника',
          isActive: false
        },
        {
          date: '17 декабря 2019',
          content: 'Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа',
          isActive: false
        },
        {
          date: '18 февраля 2020',
          content: 'Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг',
          isActive: false
        }
      ],
      themeDefault: 'Наука',
      dateDefault: '15 февраля 2020',
      contentDefault: 'Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука',
      
      // Шаг 8 - это сами опции слайдера, их большое количество, всё есть в документации. Тут типа видно 4 слайда
      // и расстояние между ними - 15 пикселей
      swiperOptions: {
        slidesPerView: 4,
        spaceBetween: 15
      }
    };
  },
  // Шаг 5 - запускаем тот самый метод comtuted
  computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
  },
  // Шаг 6 - не знаю зачем надо, но в документации указано как необходимое 
  directives: {
    swiper: directive
  },
  // Шаг 7 - запуск и инициализация слайдера. slideTo метод принимает в себя 3 аргумента - какой слайд первый по индексу
  // , с какой сторостью листается, идет ли в обратную сторону (false, если не идёт)
  mounted() {
   this.swiper.slideTo(0, 1000, false)
  },
  methods: {
    activateTheme(event, i) {
      this.ThemeArticles[i].isActive = true;
      this.themeDefault = this.ThemeArticles[i].title;
      this.dateDefault = this.ArticleItems[i].date;
      this.contentDefault = this.ArticleItems[i].content;
      for (let j=i+1; j<4; j++) {
        this.ThemeArticles[j].isActive = false;
      }
      for (let j=i-1; j>-1; j--) {
        this.ThemeArticles[j].isActive = false;
      }
    }
  }
};
</script>

<style lang="scss" scope>

@import '../scss/variables';

.articles {
  background-image: url('~@/assets/dots-articles.svg');
  background-repeat: no-repeat;
  background-color: #f2f4f9;
  padding-bottom: 130px;
  overflow: hidden;
  ul{
    li{
      list-style-type:none ;
      cursor: pointer;
      p{
        margin-bottom: 0;
      }
    }
  }
}

.articles__title {
  font-family: 'San Francisco' sans-serif;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: 88px;
  letter-spacing: 2px;
  text-align: left;
}
.articles__items {
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 1px;
}

.active-button{
  color: #fff;
  background-color: rgba(102, 209, 131, 1);
}

.articles__item {
  text-transform: uppercase;
  text-align: center;
  list-style: none;
  box-sizing: border-box;
  padding: 6px 4px;
  height: 48px;
  width: 112px;

  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: rgba(102, 209, 131, 1);
  }
}
.article__card--wrap {
  position: relative;
  height: 420px;
}

.articles__card {
  position: relative;
  top: 0px;
  left: 10px;
  z-index: 5;
  height: auto;
  width: 642px;
  left: 325px;
  top: 3088px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 20px 24px 32px 0px rgba(108, 137, 164, 0.15);
  &::before {
    content: '';
    position: relative;
    top: 70px;
    right: 220px;
    height: 8px;
    background-image: url('~@/assets/line.svg');
    background-repeat: no-repeat;
  }
}
.card__subject {
  height: 28px;
  width: fit-content;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 32px;
  padding-top: 3px;
  text-align: center;
  box-sizing: border-box;
  border-radius: 10px;
  color: #fff;
  background: black;
}

.card__date {
  margin-top: 10px;
  margin-bottom: 10px;
  color: #828282;
}
.card__text {
  width: 480px;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: 0.02em;

  color: #000000;
}
.articles__img {
  position: relative;
  top: -200px;
  left: -16px;
  z-index: 3;
  height: 271px;
  width: 584px;
  border-radius: 15px;
}

@media (max-width:576px) {
  .articles__title{
  font-size: 32px;
  line-height: 120%;
  }

  .active-button{
    padding: 24px 8px;
  }
  
  .articles__items{
    margin-top: 40px;
    margin-bottom: 60px;  
    }
    .article__card--wrap{
      display: none;
    }
    .card__wrapp{
      background-color:  transparent;
      box-shadow: none;
    }
}
</style>
