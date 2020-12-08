<template>
  <div class="search container-xl align-items-center">
    <div class="container-lg d-flex flex-column align-items-end">
      <InfoCard
        v-for="(article, i) in info"
        :key="i"
        :title="article.title"
        :author="article.author"
        :date="article.date"
        :index="index"
        :picture="article.picture"
      >
      </InfoCard>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import InfoCard from '@/components/subcomponents/InfoCard.vue';

export default {
  name: 'Video__Card',
  data() {
    return {};
  },
  components: {
    InfoCard,
  },
  computed: {
    ...mapState({
      info: state => state.newsInfo.NewsArticle,
    }),
    ...mapGetters({
      correctVideo: 'Videos/filterVideo',
    }),
  },
};
</script>
