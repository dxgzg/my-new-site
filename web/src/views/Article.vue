<template>
  <div class="inner">


    <div class="inner-offset">

      <h3 class="title">
        First article第一篇文章两只老虎两只老虎跑得快
      </h3>

      <div class="article-info">
        <el-icon>
          <Calendar/>
        </el-icon>
        发表于 {{ writeTime }}
        <el-icon style="margin-left: 10px">
          <Clock/>
        </el-icon>
        更新于{{ updateTime }}
        <br/>

        <div style="margin-top: 5px">
          <el-icon>
            <View/>
          </el-icon>
          访问次数: {{ viewNum }}
        </div>
      </div>


      <div class="content">
        hello world!你好~
        <el-image style="width: 100px; height: 100px" src="../assets/img.png" fit="fill" />

      </div>

    </div>
  </div>


</template>

<script>

export default {
  props: {
    articleUid: String
  },
  data() {
    return {
      uid: 0,
      writeTime: "2022-10-22 20:30",
      updateTime: "2022-10-22 20:31",
      viewNum: 0
    }
  },
  mounted() {
    this.uid = Number(this.articleUid)
  },

  name: "Article",
}
</script>

<style scoped>
.inner {
  max-width: 800px;
  min-width: 500px;
  margin: 50px auto 0px;

  border: 1px skyblue solid;
}

.inner-offset {
  margin-left: 23%;
}

.title {
  font-size: 20px;
}

.article-info {
  margin-top: 15px;
}

.content {
  margin-top: 40px;
}
</style>