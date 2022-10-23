<template>
  <div class="main-inner">

    <div class="subject-inner">
      <h1 class="list-title">
        LIFE
      </h1>
<!--      <el-image style="max-width: 600px; height: 300px;z-index: -1;" src='./horse.jpg'-->
<!--                fit="contain">-->
<!--      </el-image>-->
    </div>

    <div class="title-content-outer">
      <div class="title-content-inner" v-for="(item,index) in articleList" :key="index">

        <h3 class="title" @click="toArticle(item.uid)">
          {{ item.title }}
        </h3>


        <el-image style="width: 30px; height: 30px;position: absolute;right: 20px;top:0" src='./dog.jpg' fit="fill"/>


        <div class="content-inner">
          <p class="content">
            {{ item.content }}
          </p>

        </div>

        <Footer :writeTime=item.writeTime :score="item.score"/>
      </div>

    </div>

  </div>
</template>

<script>
import Footer from "./Footer.vue";

export default {
  name: "content",
  components: {
    Footer
  },
  methods: {
    toArticle(uid) {
      console.log(uid)
      console.log(typeof uid)
      this.$router.push(`/article/${uid}`)
    }
  },
  data() {
    return {
      articleList: [
        {
          uid: 2,
          title: "First article第一篇文章两只老虎两只老虎跑得快111111",
          content: "hello world!你好~",
          writeTime: "2022-10-22 14:50",
          score: "5.0"
        },
        {
          uid: 3,
          title: "First article第二篇文章两只老虎两只老虎跑得快",
          content: "hello world!你好~",
          writeTime: "2022-10-20 14:50",
          score: "4.9"
        },
      ]
    }
  }

}
</script>

<style scoped>
.main-inner {
  max-width: 800px;
  margin: 0 auto;
}

.subject-inner{
  background-image: url("./horse.jpg") ;
  height: 300px;
  max-width: 600px;
  margin-top: 30px;
  /*center: center / cover no-repeat*/
  background-size:contain;
  background-repeat:no-repeat;
}

.list-title {
  margin-left: 20px;
  font-family: Georgia;
  font-size: 35px;
}

.title-content-outer {
  /*margin-left: 100px;*/
  max-width: 600px;
  min-width: 300px;
}

.title-content-inner {
  margin-top: 20px;
  border: 1px solid #ebebeb;
  position: relative;
}

.title {
  font-size: 20px;
  font-weight: 600;
  font-family: inherit;
  margin-top: 20px;
  margin-left: 50px;
  margin-right: 50px;
  cursor: pointer;
}

.title:hover {
  color: #409EFF;
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