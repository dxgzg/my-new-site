<template>
  <div class="main-inner">
    <h1 class="list-title">
      LIFE
    </h1>


    <div class="title-inner">
      <h3 class="title">
        First article第一篇文章两只老虎两只老虎跑得快
      </h3>
    </div>

    <div class="content-inner">

      <p class="content">
        hello world!你好~
      </p>

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
  /*text-align: center;*/
}

.list-title{
  margin-top: 30px;
  margin-left: 30px;
  text-align: center;
  font-family: Georgia;
}

.title-inner{
  /*margin: 30px auto 5px;*/
  margin-left: 30px;
  margin-top: 5px;
  min-width: 500px;
}

.title {
  font-size: 25px;
  font-weight: 600;
  font-family: PingFang SC;
}

.content-inner{
  margin-left: 30px;
  margin-top: 5px;

  min-width: 500px;
}


.content{
  font-size: 18px;
  width: 800px;
}
</style>