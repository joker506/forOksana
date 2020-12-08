<template>
  <div class="w-100 card__wrapp d-flex flex-column-reverse flex-sm-row justify-content-around align-items-center mb-3">
    <div class="article__item col-lg-7 d-flex flex-column justify-content-around h-100" >
      <p class="w-100 art__card mb-1">{{title}}</p>
      <div class="wrap mb-3">
        <span class="w-100 art__content">{{author}}</span>
        <span class="w-100 art__content">{{date}}</span>
      </div>
      <div class="w-100 art__item--link col-lg-6 pl-0 mt-sm-5 mt-md-1">
       <router-link
        :to="path + index"
        :key="index"
        >
          Узнать больше
          <svg width="44" height="20" viewBox="0 0 44 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 10H43M43 10L35.6111 1M43 10L35.6111 19" stroke="#219653" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </router-link>
      </div>
    </div>
    <div class="art__img--news col-lx-6" >
      <img v-bind:src='picture' alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoCard',
  props: [
    'title',
    'author',
    'date',
    'path',
    'index',
    'picture'
  ]
}
</script>

<style lang="scss">
@import '../../scss/variables';
.art__img--news img {
  max-width: 356px;
  max-height: 248px;
  border-radius: 15px;
}
.article__item{
  min-height: 248px;
}
@media (max-width:576px) {
  .art__img--news>img{
  width:280px;
}
 .card__wrapp{
  padding: 0;
  border-radius: 0;
  border-left: 4px solid $base-green;
  }
}
</style>