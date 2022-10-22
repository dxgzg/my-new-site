<template>
  <div class="main-inner">
    <h1 class="list-title">
      LIFE
    </h1>

    <div class="title-content-outer">
      <div class="title-content-inner">
        <h3 class="title">
          First article第一篇文章两只老虎两只老虎跑得快
        </h3>
        <div class="content-inner">
          <p class="content">
            hello world!你好~
          </p>

        </div>

        <Footer writeTime="2022-10-22 14:50" score="5.0"/>
      </div>


      <div class="title-content-inner">
        <h3 class="title">
          First article第二篇文章两只老虎两只老虎跑得快
        </h3>
        <div class="content-inner">

          <p class="content">
            hello world!你好~
          </p>

          <Footer writeTime="2022-10-20 13:11" score="5.0"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Footer  from "./Footer.vue";
export default {
  name: "content",
  components:{
    Footer
  }
}
</script>

<style scoped>
.main-inner {
  max-width: 800px;
  margin: 0 auto;
}

.list-title {
  margin-top: 30px;
  margin-left: 30px;
  text-align: center;
  font-family: Georgia;
  margin-bottom: 20px;
}

.title-content-outer {
  margin-left: 100px;
  max-width: 600px;
  min-width: 300px;
}

.title-content-inner{
  margin-top: 20px;
  border: 1px solid #ebebeb;
}

.title {
  font-size: 20px;
  font-weight: 600;
  font-family: inherit;
  margin-top: 20px;
  margin-left: 50px;
}

.content-inner {
  margin-top: 5px;
}


.content {
  margin-left: 50px;
  font-size: 18px;
  width: auto;
}

</style>