import axios from 'axios';

const leadersInfo = {
  namespaced: true,

  state: {
    leaders: [
      {
        name: 'Nickname1',
        link: 'url-link-to-her-page',
        img: require('../assets/leader-1.png'),
        audience: 1000,
        category: 'leader',
        top: true,
        job: 'front',
        phone: '8999999999',
        mail: 'Nickname1.vorobeva@oktb',
      },
      {
        name: 'Nickname2',
        link: 'url-link-to-his-page',
        img: require('../assets/leader-2.png'),
        audience: 1000,
        category: 'blogger',
        top: true,
        job: 'full',
        phone: '812312412499',
        mail: 'Nickname2.vorobeva@oktb',
      },
      {
        name: 'Nickname3',
        link: 'url-link-to-her-page',
        img: require('../assets/leader-3.png'),
        audience: 1000,
        category: 'leader',
        top: true,
        job: 'front',
        phone: '8123345679',
        mail: 'Nickname3.vorobeva@oktb',
      },
      {
        name: 'Nickname8',
        link: 'url-link-to-her-page',
        img: require('../assets/leader-3.png'),
        audience: 1000,
        category: 'acrobats',
        top: true,
        job: 'director',
        phone: '8999999999',
        mail: 'Nickname8.vorobeva@oktb',
      },
      {
        name: 'Nickname10',
        link: 'url-link-to-her-page',
        img: require('../assets/leader-3.png'),
        audience: 1000,
        category: 'acrobats',
        top: false,
        job: 'director',
        phone: '8999999999',
        mail: 'Nickname10.vorobeva@oktb',
      },
      {
        name: 'Nickname4',
        link: 'url-link-to-his-page',
        img: require('../assets/leader-4.png'),
        audience: 1000,
        category: 'leader',
        top: false,
        job: 'back',
        phone: '8999999999',
        mail: 'natalya.vorobeva@oktb',
      },
    ],
    categories: [
      {
        type: 'leader',
        label: 'Лидеры мнений',
        active: true,
      },
      {
        type: 'blogger',
        label: 'Блоггеры',
        active: false,
      },
      {
        type: 'acrobats',
        label: 'Акробаты',
        active: false,
      },
    ],
    tLeaders: [],
    tCategory: [],
  },
  mutations: {
    SET_LEADERS(state, payload) {
      state.tLeaders = payload;
      console.log(state.tLeaders);
    },
    SET_LEADERS_CATEGORY(state, payload) {
      state.tCategory = payload;
      console.log(state.tCategory);
    },
  },

  actions: {
    setLeaders(context) {
      return axios.get('http://localhost:8000/api/leaders').then(response => {
        context.commit('SET_LEADERS', response.data);
      });
    },
    setLeadCategory(context) {
      return axios
        .get('http://localhost:8000/api/leaders-category')
        .then(response => {
          context.commit('SET_LEADERS_CATEGORY', response.data);
        });
    },
  },

  getters: {},
};
export default leadersInfo;
