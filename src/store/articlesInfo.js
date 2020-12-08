import axios from 'axios';

const articlesInfo = {
  namespaced: true,

  state: {
    Articles: [
      {
        title:
          'Lorem ipsu dolor sit amet, consectetur adipiscing elit. Amet, varius leo eu, sagittis, dictumst ',
        date: '15 февраля 2020',
        content:
          'Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука',
        theme: 'Наука',
        img: require('../assets/articles1.png'),
        isActive: true,
        hot: true,
      },
      {
        title:
          'Lorem ipsum dolor sit ame, consectetur adipiscing elit. Amet, varius leo eu, sagittis, dictumst ',
        date: '16 февраля 2020',
        content:
          'Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука',
        theme: 'Наука',
        img: require('../assets/articles1.png'),
        isActive: true,
        hot: true,
      },
      {
        title:
          'Lorem ipsum olor sit amet, consectetur adipiscing elit. Amet, varius leo eu, sagittis, dictumst ',
        date: '17 февраля 2020',
        content:
          'Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука',
        theme: 'Наука',
        img: require('../assets/articles1.png'),
        isActive: true,
        hot: false,
      },
      {
        title:
          'Lorem ipsum dolor sit aet, consectetur adipiscing elit. Amet, varius leo eu, sagittis, dictumst ',
        date: '18 февраля 2020',
        content:
          'Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука Наука',
        theme: 'Наука',
        img: require('../assets/articles1.png'),
        isActive: true,
        hot: false,
      },
      {
        title:
          'Lorm ipsum dolor sit amet, consectetur adipiscing elit. Amet, varius leo eu, sagittis, dictumst ',
        date: '19 января 2020',
        content:
          'Техника Техника Техника Техника Техника Техника Техника Техника Техника Техника Техника Техника Техника Техника Техника',
        theme: 'Техника',
        img: require('../assets/articles1.png'),
        isActive: false,
        hot: true,
      },
      {
        title:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vaius leo eu, sagittis, dictumst ',
        date: '20 января 2020',
        content:
          'Техника Техника Техника Техника Техника Техника Техника Техника Техника Техника Техника Техника Техника Техника Техника',
        theme: 'Техника',
        img: require('../assets/articles1.png'),
        isActive: false,
        hot: true,
      },
      {
        title:
          'Lorem ipsum dolor sit amet, consectetur adipiscng elit. Amet, varius leo eu, sagittis, dictumst ',
        date: '21 января 2020',
        content:
          'Техника Техника Техника Техника Техника Техника Техника Техника Техника Техника Техника Техника Техника Техника Техника',
        theme: 'Техника',
        img: require('../assets/articles1.png'),
        isActive: false,
        hot: false,
      },
      {
        title:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, varius leo eu,sagittis, dictumst ',
        date: '27 декабря 2019',
        content:
          'Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа',
        theme: 'Медиа',
        img: require('../assets/articles1.png'),
        isActive: false,
        hot: true,
      },
      {
        title:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, variu leo eu, sagittis, dictumst ',
        date: '12 декабря 2019',
        content:
          'Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа',
        theme: 'Медиа',
        img: require('../assets/articles1.png'),
        isActive: false,
        hot: true,
      },
      {
        title:
          'orem ipsum dolor sit amet, consectetur adipiscing elit. Amet, varius leo eu, sagittis, dictumst ',
        date: '4 декабря 2019',
        content:
          'Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа',
        theme: 'Медиа',
        img: require('../assets/articles1.png'),
        isActive: false,
        hot: false,
      },
      {
        title:
          'Lorem ipsum dolor sit amet, consectetur adipiscin elit. Amet, varius leo eu, sagittis, dictumst ',
        date: '11 декабря 2019',
        content:
          'Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа Медиа',
        theme: 'Медиа',
        img: require('../assets/articles1.png'),
        isActive: false,
        hot: false,
      },
      {
        title:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, varius le eu, sagittis, dictumst ',
        date: '18 февраля 2020',
        content:
          'Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг',
        theme: 'Досуг',
        img: require('../assets/articles1.png'),
        isActive: false,
        hot: true,
      },
      {
        title:
          'Lorem ipsum dolor sit amet, consectetur adipiscing lit. Amet, varius leo eu, sagittis, dictumst ',
        date: '18 февраля 2020',
        content:
          'Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг',
        theme: 'Досуг',
        img: require('../assets/articles1.png'),
        isActive: false,
        hot: true,
      },
      {
        title:
          'Lorem ipsum dolor sit amet, consecteur adipiscing elit. Amet, varius leo eu, sagittis, dictumst ',
        date: '8 февраля 2020',
        content:
          'Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг',
        theme: 'Досуг',
        img: require('../assets/articles1.png'),
        isActive: false,
        hot: false,
      },
      {
        title:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amt, varius leo eu, sagittis, dictumst ',
        date: '1 февраля 2020',
        content:
          'Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг Досуг',
        theme: 'Досуг',
        img: require('../assets/articles1.png'),
        isActive: false,
        hot: false,
      },
    ],
    Themes: [
      {
        theme: 'Наука',
        isActive: true,
      },
      {
        theme: 'Техника',
        isActive: false,
      },
      {
        theme: 'Медиа',
        isActive: false,
      },
      {
        theme: 'Досуг',
        isActive: false,
      },
    ],

    tThemes: [],
    tArticles: [],
  },
  mutations: {
    SET_THEMES(state, payload) {
      state.tThemes = payload;
      //console.log(state.tThemes);
    },
    SET_ARTICLES(state, payload) {
      state.tArticles = payload;
      //console.log(state.tArticles);
    },
  },

  actions: {
    setArcticThemes(context) {
      return axios.get('http://localhost:8000/api/themes').then(response => {
        context.commit('SET_THEMES', response.data);
      });
    },
    setArcticArctic(context) {
      return axios.get('http://localhost:8000/api/articles').then(response => {
        context.commit('SET_ARTICLES', response.data);
      });
    },
  },

  getters: {},
};

export default articlesInfo;
