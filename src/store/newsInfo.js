import axios from 'axios';

function filterNews(dataFromApi, filter) {
  let _array = [];
  dataFromApi.map(news => {
    //console.log(news);
    if (
      news.author.toLowerCase().includes(filter.toLowerCase()) ||
      news.title.toLowerCase().includes(filter.toLowerCase()) ||
      news.text.toLowerCase().includes(filter.toLowerCase()) ||
      news.date.toLowerCase().includes(filter.toLowerCase())
    ) {
      _array.push(news);
      //console.log(_array);
    }
  });
  return _array;
}
const newsInfo = {
  namespaced: true,

  state: {
    filter: '',
    NewsArticle: [],
    dataFromApi: [],
  },

  mutations: {
    CHANGE_FILTER(state, payload) {
      state.filter = payload;
    },
    // 2. Создаем мутацию
    SET_INFO(state, payload) {
      state.dataFromApi = payload;
      //console.log(payload);
    },
  },
  // 1. Создаем действие по которому получаем данные по API
  actions: {
    setParmInfo(context) {
      return (
        axios
          // 1.1 Путь
          .get('http://localhost:8000/api/news')
          // 1.2 После получения ответа (response) запускаем мутацию (SET_INFO)
          .then(response => context.commit('SET_INFO', response.data))
      );
    },
  },

  getters: {
    filterNews(state) {
      if (state.dataFromApi.length) {
        return filterNews(state.dataFromApi, state.filter);
      }
    },
  },
};
export default newsInfo;
