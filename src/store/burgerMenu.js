const burgerMenu = {
  namespaced: true,

  state: {
    burgerState: {
      active: false
    },
    burgerList: [
      {
        name: 'Главная',
        path: '/'
      },
      {
        name: 'Что такое "Медиа Будущего"?',
        path: '/'
      },
      {
        name: 'Новости',
        path: '/News'
      },
      {
        name: 'Статьи',
        path: '/Articles'
      },
      {
        name: 'Видео',
        path: '/Videos'
      },
      {
        name: 'Лидеры мнений',
        path: '/Leaders'
      }
    ]
  },
  mutations: {

  },

  actions: {
  },

  getters: {
    
  },
};
export default burgerMenu;
