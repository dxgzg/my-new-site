<template>
  <div class="main-inner">
    <h1 class="list-title">
      LIFE
    </h1>

    <div class="title-content">
      <h3 class="title">
        First article第一篇文章两只老虎两只老虎跑得快
      </h3>
      <div class="content-inner">

        <p class="content">
          hello world!你好~
        </p>

      </div>

      <h3 class="title">
        First article第二篇文章两只老虎两只老虎跑得快
      </h3>
      <div class="content-inner">

        <p class="content">
          hello world!你好~
        </p>

        <div class="footer">

          <el-icon>
            <Calendar />
          </el-icon>
          <time>
          2022-10-20 13:07</time>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "content"
}
</script>

<style scoped>
.main-inner {
  width: 800px;
  margin: 0 auto;
}

.list-title {
  margin-top: 30px;
  margin-left: 30px;
  text-align: center;
  font-family: Georgia;
}

.title-content {
  margin-left: 100px;
  margin-top: 20px;
  min-width: 500px;
}

.title {
  font-size: 25px;
  font-weight: 600;
 font-family:  inherit;
  margin-top: 20px;
}

.content-inner {
  margin-top: 5px;
}


.content {
  font-size: 18px;
  width: auto;
}

.footer{
  background-color: #f7f7f7;
  /*height: 50px;*/
  margin-top: 10px;
}
</style>