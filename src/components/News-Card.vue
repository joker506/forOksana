<template>
  <div class="search container-xl align-items-center">
    <div class="container-lg d-flex flex-column align-items-end">
      <InfoCard
        v-for="(article, index) in book"
        :key="index"
        :title="article.title"
        :author="article.author"
        :date="article.date"
        :path="/nNewsArtic/"
        :index="index"
        :picture="article.img"
      >
      </InfoCard>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import InfoCard from '@/components/subcomponents/InfoCard.vue';

export default {
  name: 'News_Card',
  data() {
    return {
      newsCard: [],
    };
  },
  /*   async created() {
    var response = await fetch('http://localhost:8000/api/news')
    this.newsCard = await response.json();
    console.log(this.newsCard)
  }, */
  components: {
    InfoCard,
  },
  computed: {
    ...mapState({
      info: state => state.newsInfo.NewsArticle,
      news: state => state.newsInfo.dataFromApi,
    }),
    ...mapGetters({
      book: 'newsInfo/filterNews',
    }),
  },
};
</script>
