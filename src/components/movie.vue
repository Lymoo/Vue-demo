<template>
  <div>
    <div class="header">
      <p class="title">电影</p>
      <div class="search">
        <input type="text" v-model="searchText" placeholder="请输入您想查询的电影名">
      </div>
      <div class="button">
        <a href="#" @click="search">搜索</a>
      </div>
    </div>
    <div class="movieBox" style="margin-top: 10px;">
      <p class="subtitle">正在热映</p>
      <div v-show="isSearchingH">
        <img class="loading" src="./../assets/loading.png"/>
      </div>
      <ul class="movieList">
        <li v-for="(item, index) in hotMovieList" :class="{'lastMovie': index == 2}">
          <img :src="item.images.medium" :alt="item.title">
          <p class="movieTitle">{{item.title}}</p>
        </li>
      </ul>
    </div>
    <div class="movieBox">
      <p class="subtitle">即将上映</p>
      <div v-show="isSearchingC">
        <img class="loading" src="./../assets/loading.png"/>
      </div>
      <ul class="movieList">
        <li v-for="(item, index) in comingSoonMovieList" :class="{'lastMovie': index == 2}">
          <img :src="item.images.medium" :alt="item.title">
          <p class="movieTitle">{{item.title}}</p>
        </li>
      </ul>
    </div>
    <div class="movieBox">
      <p class="subtitle">Top250</p>
      <div v-show="isSearchingT">
        <img class="loading" src="./../assets/loading.png"/>
      </div>
      <ul class="movieList" style="margin-bottom: 50px;">
        <li v-for="(item, index) in TopMovieList" :class="{'lastMovie': index == 2}">
          <img :src="item.images.medium" :alt="item.title">
          <p class="movieTitle">{{item.title}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        hotMovieList: [],
        comingSoonMovieList: [],
        TopMovieList: [],
        searchText: '',
        isSearchingH: false,
        isSearchingC: false,
        isSearchingT: false,
      }
    },
    created () {
      this.isSearchingH = true;
      this.isSearchingC = true;
      this.isSearchingT = true;
      this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters?count=3').then(function (res) {
//          console.log(res.body);
        this.hotMovieList = res.body.subjects;
        console.log(this.hotMovieList);
        this.isSearchingH = false;
      });
      this.$http.jsonp('https://api.douban.com/v2/movie/coming_soon?count=3').then(function (res) {
//        console.log(res.body);
        this.comingSoonMovieList = res.body.subjects;
        console.log(this.comingSoonMovieList);
        this.isSearchingC = false;
      });
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=3').then(function (res) {
//        console.log(res.body);
        this.TopMovieList = res.body.subjects;
        console.log(this.TopMovieList);
        this.isSearchingT = false;
      });
    },
    methods: {
      search () {
        this.isSearching = true;
        this.movieList = [];
        this.$http.jsonp('https://api.douban.com/v2/movie/coming_soon?count=3').then(function (res) {
          this.movieList = res.body.books;
          console.log(this.movieList);
          this.isSearching = false;
        })
      }
    }
  }
</script>

<style scoped>
  .header {
    text-align: center;
    padding-bottom: 5px;
    background-color: #eee;
    border-bottom: 1px solid #ccc;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
  }
  .search {
    text-align: center;
    display: inline-block;
  }
  .search > input {
    border: 1px solid #ccc;
    width: 150px;
    padding: 3px;
  }
  .button {
    display: inline-block;
  }
  .button > a {
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #fff;
    color: #000;
    display: inline-block;
    padding: 5px;
    cursor: pointer;
  }
  .subtitle {
    color: red;
    font-size: 20px;
    font-weight: bold;
    padding: 2px;
    border-bottom: 1px solid black;
    padding-left: 10px;
  }
  .loading {
    width: 20px;
    position: absolute;
    left: 50%;
    /*top: 40%;*/
    transform: translate3d(-50%, 0, 0);
    animation: loadingRun 1s infinite linear;
  }
  @keyframes loadingRun{
    0% {
      transform: translate3d(-50%, -50%, 0) rotateZ(0deg);
    }
    100% {
      transform: translate3d(-50%, -50%, 0) rotateZ(360deg);
    }
  }
  .movieBox {
    float: left;
    width: 100%;
  }
  .movieList {
    float: left;
    padding: 5px;
    margin-bottom: 10px;
    width: 96%;
  }
  .movieList > li {
    float: left;
    width: 30%;
    height: 150px;
    margin: 3% 2%;
  }
  .movieList > .lastMovie {
    margin-right: 0;
  }
  .movieList > li > img {
    width: 100%;
    height: 100%;
  }
  .movieTitle {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
  }
</style>
