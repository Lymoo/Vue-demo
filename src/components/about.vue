<template>
  <div>
    <p class="title">关于</p>
    <div class="logo">
      <img src="./../assets/author.png" alt="黎默丶lymoo">
    </div>
    <div class="content">
      <p>这是一个可以查阅书本，查阅电影，查找书城的APP</p>
      <p>作者：黎默丶lymoo</p>
      <p>QQ: 64830872</p>
      <p>联系邮箱：lymoo0308@gmail.com</p>
      <p>github: https://github.com/Lymoo</p>
    </div>
  </div>
</template>

<script>

    export default {}
</script>

<style scoped>
  .title {
    width: 100%;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    padding-top: 30px;
  }
  .logo {
    text-align: center;
    padding-top: 30px;
  }
  .logo > img {
    width: 100px;
    height: 100px;
  }
  .content {
    text-align: center;
  }
  .content > p {
    margin: 25px 0;
  }
</style>
