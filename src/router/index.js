import Vue from 'vue'
import Router from 'vue-router'
import Book from './../components/book.vue'
import BookMore from './../details/book_more.vue'
import Movie from './../components/movie.vue'
import Map from './../components/map.vue'
import About from './../components/about.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/phone/vue/index.html',
      redirect: '/book'
    },
    {
      path: '/book',
      name: 'book',
      component: Book,
    },
    {
      path: '/book'
    },
    {
      path: '/movie',
      name: 'movie',
      component: Movie
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    },{
      path: '/about',
      name: 'about',
      component: About
    },

  ]
})
