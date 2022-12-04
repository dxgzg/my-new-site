<template>
  <div class="inner">

    <div class="title-hand">

      <h2 class="title">
        First article第一篇文章两只老虎两只老虎跑得快
      </h2>

      <div class="article-info">
        <el-icon class="article-ico">
          <Calendar/>
        </el-icon>
        发表于 {{ writeTime }}
        <el-icon style="margin-left: 10px" class="article-ico">
          <Clock/>
        </el-icon>
        更新于{{ updateTime }}

<!--        <div style="margin-top: 5px">-->
          <el-icon style="margin-left: 10px" class="article-ico">
            <View/>
          </el-icon>
          访问次数: {{ viewNum }}
<!--        </div>-->
      </div>
    </div>

      <div class="content">
        vue3.0-beta 版本已经发布了一段时间了，正式版本据说在年中发布（直播的时候说的是年中还是年终，网上传闻说是 6 月份）。嘴上说着学不动，身体却很诚实地创建一个 vue3 的项目，兴致勃勃地引入 vue2 插件的时候，眉头一皱，发现事情并没有那么简单。

        浏览器无情地抛出了一个错误：

        Uncaught TypeError: Cannot set property ‘\$toast’ of undefined

        不是说兼容 vue2 的写法吗，插件不兼容，这是闹哪样？发下牢骚之后还是得解决问题。研究插件的代码，是这么实现的


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
  min-width: 300px;
  margin: 30px auto 0px;


  border: 1px skyblue solid;
}
.title-hand{
  text-align: center;
}

.title {
  font-size: 25px;
}

.article-info {
  margin-top: 25px;
  position: relative;
}
.article-ico{
  position: relative;
  top:2px;
}

.content {
  line-height: 25px;
  margin: 50px 50px;
  text-indent:2em;
}
</style>