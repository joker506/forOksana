<template>
  <div class='news_item'>

    <div class="container-fluid">
      <div class="row">
        <div class='col-lg-1 col-6 p-0'>
          <a class='way d-block w-lg-100 w-mob-50' href="#">
            <button class='h-100 w-100'>
              Previous
            </button>
          </a>
        </div>
        <div class='col-lg-10 col-12 order-last order-lg-0'>

          <div class="news-container d-flex flex-column align-items-end">
            <!-- <NewsArticle/> -->
            <a class='d-block back' href="#"><button>Назад к новостям</button></a>
          </div>


        </div>
        <div class='col-lg-1 col-6 p-0 d-lg-block d-flex justify-content-end'>
          <a class='way d-block w-lg-100 w-mob-50' href="#">
            <button class='h-100 w-100 '>Next</button>
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// import Header from '@/components/Header'
// import NewsArticle from '@/components/NewsArticle'
// import Footer from '@/components/Footer'
export default {
  name: 'News_item',
  components: {
    // Header, Footer,
    // NewsArticle
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';
.news_item{
  background-color: $base-bg-news;
  .way{
    button{
      padding: 12px 24px;
      background-color: $base-green;
      color: #fff;
    }
  }
}

.news-container{
  width: 790px;
  margin: auto;
  .back{
    margin-bottom: 32px;
    button{
      padding: 12px 24px;
      background-color: #1C1642;
      color: #fff;
    }
  }
}

@media (max-width: 1100px){
  .news_item{
    .way{
      button{
        padding: 12px 0;

      }
    }
  }
}

@media (max-width: 992px){
  .news_item{
    .way{
      margin-bottom: 24px;
    }
  }
  .news-container{
    width: 97%;
  }
}
</style>