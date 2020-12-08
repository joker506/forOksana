import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import News from '@/views/News';
import News_item from '@/views/News_item';
import Leaders from '@/views/Leaders';
import nNewsArtic from '@/components/nNewsArtic';
import Articles from '@/views/Articles';
import nArticle from '@/components/subcomponents/nArticle';
import Videos from '@/views/Videos';
import nVideo from '@/views/nVideo';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/News',
    name: 'News',
    component: News,
  },
  {
    path: '/Articles',
    name: 'Articles',
    component: Articles,
  },
  {
    path: '/nNewsArtic/:id',
    name: 'nNewsArtic',
    component: nNewsArtic,
    props: true,
  },
  {
    path: '/nArticle/:id',
    name: 'nArticle',
    component: nArticle,
    props: true,
  },
  {
    path: '/nVideo/:id',
    name: 'nVideo',
    component: nVideo,
    props: true,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/News_item',
    name: 'News_item',
    component: News_item,
  },
  {
    path: '/Leaders',
    name: 'Leaders',
    component: Leaders,
  },
  {
    path: '/Videos',
    name: 'Videos',
    component: Videos,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
