import Vue from 'vue';
import Vuex from 'vuex';

import newsInfo from '@/store/newsInfo';
import leadersInfo from '@/store/leadersInfo';
import articlesInfo from '@/store/articlesInfo';
import Videos from '@/store/Videos';
import BurgerMenu from '@/store/burgerMenu';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: {
    newsInfo,
    leadersInfo,
    articlesInfo,
    Videos,
    BurgerMenu,
  },
});
