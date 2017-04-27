<template>
 <div class="app-container">
   <div class="app-content">
     <router-view></router-view>
   </div>
   <div class="app-footer">
     <ul class="app-footer-nav">
       <li>
         <router-link to="/book">
           <img src="./assets/book.png" alt="图书">
         </router-link>
       </li>
       <li>
         <router-link to="/movie">
           <img src="./assets/movie.png" alt="电影">
         </router-link>
       </li>
       <li>
         <router-link to="/map">
           <img src="./assets/MAP.png" alt="地图">
         </router-link>
       </li>
       <li>
         <router-link to="/about">
           <img src="./assets/about.png" alt="关于">
         </router-link>
       </li>
     </ul>
   </div>
 </div>
</template>

<script>
  export default {

  }
</script>

<style>
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  html, body {
    width: 100%;
    height: 100%;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  body {
    background: #f0f2f5;
    font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
    font-size: 14px;
    color: #444;
  }
  .app-container {
    width: 100%;
    height: 100%;
  }
  .app-footer {
    background-color: #eee;
    height: 7%;
    width: 100%;
    position: fixed;
    bottom: 0;
  }
  .app-footer-nav {
    font-size: 20px;
    padding: 5px;
    display: flex;
  }
  .app-footer-nav > li {
    float: left;
    margin-right: 5px;
    cursor: pointer;
    flex: 1;
    text-align: center;
  }
  .app-content {
    background-color: #fff;
    height: 93%;
  }
</style>
