<template>
  <div id="app">
    <Header />
    <BurgerMenu />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BurgerMenu from '@/components/Burger_menu';
export default {
  components: {
    Header,
    Footer,
    BurgerMenu,
  },
  methods: {
    ...mapActions({
      setPar: 'newsInfo/setParmInfo',
      setVideos: 'Videos/setVideos',
      setArcticThem: 'articlesInfo/setArcticThemes',
      setArcticArctic: 'articlesInfo/setArcticArctic',
      setLeadersInfo: 'leadersInfo/setLeaders',
      setLeadersCategorInfo: 'leadersInfo/setLeadCategory',
    }),
  },
  created() {
    this.setPar();
    this.setArcticThem();
    this.setArcticArctic();
    this.setLeadersInfo();
    this.setLeadersCategorInfo();
    this.setVideos();
    //console.log('q');
  },
};
</script>

<style lang="scss">
@import '@/scss/variables';

.link-to-all {
  background-color: $base-green;
  color: #fff;
  padding: 16px 24px;
  width: 226px;
  float: right;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  line-height: 32px;

  letter-spacing: 0.1em;
  text-transform: uppercase;
  a {
    color: #fff;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f2f4f9;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

a:hover {
  text-decoration: none;
}

button {
  border: none;
  cursor: pointer;
  outline: none !important;
}

.w-48 {
  width: 48%;
}

.w-90 {
  width: 90%;
}

.w-98 {
  width: 98%;
}

@media (min-width: 1200px) {
  .container-xl {
    max-width: 1440px !important;
  }
}

@media (min-width: 992px) {
  .w-lg-100 {
    width: 100% !important;
  }
  .w-lg-48 {
    width: 48% !important;
  }
  .h-lg-100 {
    height: 100% !important;
  }
  .col-lg-5-8 {
    flex: 0 0 48% !important;
    max-width: 48% !important;
  }
}

@media (max-width: 992px) {
  .w-mob-100 {
    width: 100% !important;
  }
  .w-mob-98 {
    width: 98% !important;
  }
  .w-mob-50 {
    width: 50% !important;
  }
}

@media (max-width: 576px) {
  .link-to-all {
    float: initial;
    margin: auto;
    margin-top: 25px;
    a {
      color: #fff;
    }
  }
}
</style>
