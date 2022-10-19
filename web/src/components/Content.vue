<template>
  <div class="main-inner">
    <h1 class="list-title">
      LIFE
    </h1>


    <div class="title">
      First article第一篇文章
    </div>

    <div class="content">
        hello world!你好~
    </div>

  </div>
</template>

<script>
export default {
  name: "content"
}
</script>

<style scoped>
.main-inner{
  width: 800px;
  margin: 0 auto;
  text-align: center;
}

.list-title{
  margin-top: 30px;
  font-family: Georgia;
}

.title {
  margin: 20px auto 5px;
  width: 500px;
  font-size: 25px;
  font-weight: 600;
  font-family: PingFang SC;
}

.content{
  width: 500px;
  margin: 0 auto;
  font-size: 18px;
}
</style>