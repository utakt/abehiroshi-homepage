import Vue from 'vue'
import Router from 'vue-router'
import Top from './views/Top.vue'
import Movie from './views/Movie.vue'
import Drama from './views/Drama.vue'
import Stage from './views/Stage.vue'
import Photo from './views/Photo.vue'
import Essay from './views/Essay.vue'
import Kanri from './views/Kanri.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      //トップページ
      path: '/',
      name: 'top',
      component: Top
    },
    {
      //映画出演
      path: '/movie',
      name: 'movie',
      component: Movie
    },
    {
      //ドラマ出演
      path: '/drama',
      name: 'drama',
      component: Drama
    },
    {
      //舞台出演
      path: '/stage',
      name: 'stage',
      component: Stage
    },
    {
      //写真集
      path: '/photo',
      name: 'photo',
      component: Photo
    },
    {
      //出版本
      path: '/essay',
      name: 'essay',
      component: Essay
    },
    {
      //管理者ページ
      path: '/kanri',
      name: 'kanri',
      component: Kanri
    }
  ]
})
