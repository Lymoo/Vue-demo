<template>
  <div>
    <div class="header">
      <p class="title">图书</p>
      <div class="search">
        <input type="text" v-model="searchText" placeholder="请输入您想查询的书名">
      </div>
      <div class="button">
        <a href="#" @click="search">搜索</a>
      </div>
    </div>
    <div v-show="isSearching">
      <img class="loading" src="./../assets/loading.png"/>
    </div>
    <div class="bookBox">
      <ul class="bookList" style="margin-bottom: 50px;">
        <li v-for="(item, index) in bookList" :class="{'lastBook': index % 3 == 2}">
          <img :src="item.image" :alt="item.title">
          <p class="bookTitle">{{item.title}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    import BookDetail from '../details/book_more.vue'
    export default {
      data () {
        return {
          bookList: [],
          searchText: '',
          isSearching: false
        }
      },
      created () {
        this.isSearching = true;
        this.$http.jsonp('https://api.douban.com/v2/book/search?q=前端&count=9').then(function (res) {
          this.bookList = res.body.books;
          this.isSearching = false;
        })
      },
      methods: {
        search () {
          this.isSearching = true;
          this.bookList = [];
          this.$http.jsonp('https://api.douban.com/v2/book/search?q=' + this.searchText + '&count=9').then(function (res) {
            this.bookList = res.body.books;
            console.log(this.bookList);
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
  .bookBox {
    float: left;
    width: 100%;
  }
  .loading {
    width: 20px;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate3d(-50%, -50%, 0);
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
  .bookList {
    float: left;
    padding: 5px;
  }
  .bookList > li {
    float: left;
    width: 30%;
    height: 120px;
    margin: 3% 1%;
  }
  .bookList > .lastBook {
    margin-right: 0;
  }
  .bookList > li > img {
    width: 100%;
    height: 100%;
  }
  .bookTitle {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
  }
</style>
