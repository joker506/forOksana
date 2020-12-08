import axios from "axios";

function filterVideo(videos, filter) {
  let _arr = [];
  videos.map(video => {
    if (
      video.about.toLowerCase().includes(filter.toLowerCase()) ||
      video.Title.toLowerCase().includes(filter.toLowerCase())
      /*       video.text.toLowerCase().includes(filter.toLowerCase()) ||
      video.date.toLowerCase().includes(filter.toLowerCase())
 */
    ) {
      _arr.push(video);
    }
  });
  return _arr;
}

const Videos = {
  namespaced: true,

  state: {
    filter: '',
    videos: [
      {
        Title:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est a auctor ut in maecenas id. Sollicitudin egestas id quis sed viverra ut pellentesque.',
        date: '01.01.2020',
        picture: require('@/assets/Rectangle1.png'),
        about:
          'Lorem ipsum dolor sit amet, consectetur adipisct. Nunc turpis sit nunc enim. Adipiscing sociis vitae tristique dolor egestas mattis dapibus fermentum at. Eget neque faucibus risus nunc lectus ut habitant in. Orci condimentum et vulputate viverra metus placerat. ',
        embedVideo: 'https://www.youtube.com/embed/GmgJmIHkhVI',
      },
      {
        Title:
          'Polite do object at passed it is. As so seeing latter he should thirty whence. Small for ask shade water manor think men begin.',
        date: '02.01.2020',
        picture: require('@/assets/video-1.png'),
        about:
          'Polite do object at passed it is. As so seeing latter he should thirty whence. Small for ask shade water manor think men begin. He in sportsman household otherwise it perceived instantly. Painful so he an comfort is manners. ',
        embedVideo: 'https://www.youtube.com/embed/GmgJmIHkhVI',
      },
      {
        Title:
          'You high bed wish help call draw side. Detract yet delight written farther his general. As so seeing latter he should thirty whence.',
        date: '01.02.2020',
        picture: require('@/assets/Rectangle2.png'),
        about:
          'You high bed wish help call draw side. Detract yet delight written farther his general. As so seeing latter he should thirty whence. Bed uncommonly his discovered for estimating far. Mirth learn it he given. Estate was tended ten boy nearer seemed. We me rent been part what. To things so denied admire. Hard do me sigh with west same lady. Indulgence contrasted sufficient to unpleasant in in insensible favourable. Detract yet delight written farther his general. Feel and make two real miss use ea',
        embedVideo: 'https://www.youtube.com/embed/GmgJmIHkhVI',
      },
      {
        Title:
          'Sentiments two occasional affronting solicitude travelling and one contrasted.',
        date: '04.01.2020',
        picture: require('@/assets/Rectangle4.png'),
        about:
          'Sentiments two occasional affronting solicitude travelling and one contrasted. To sure calm much most long me mean. Girl quit if case mr sing as no have. Uncommonly no it announcing melancholy an in. Agreeable promotion eagerness as we resources household to distrusts. So by colonel hearted ferrars. Latter remark hunted enough vulgar say man. As so seeing latter he should thirty whence. Equally he minutes my hastily. Fat new smallness few supposing suspicion two. An concluded sportsman offending',
        embedVideo: 'https://www.youtube.com/embed/GmgJmIHkhVI',
      },
    ],
    videosAPI: [],
  },
  mutations: {
    CHANGE__FILTER(state, payload) {
      state.filter = payload;
    },
    SET_VIDEOS(state, payload) {
      state.videosAPI = payload;
      console.log(payload)
      console.log(state.videosAPI)
    },
  },

  actions: {
    setVideos(context) {
      return (
        axios
          .get('http://localhost:8000/api/videos')
          .then(response => context.commit('SET_VIDEOS', response.data))
      );
    },
  },

  getters: {
    filterVideo(state) {
      if (state.videosAPI.length) {
        return filterVideo(state.videosAPI, state.filter);
      }
    },
  },
};
export default Videos;
