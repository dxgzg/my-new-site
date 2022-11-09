<template>
  <div class="footer">

    <el-icon>
      <Calendar/>
    </el-icon>
    <time class="writeTime">
      {{writeTime}}
    </time>

    <el-icon style="margin-left: 20px;margin-right: 0">
      <Star />
    </el-icon>
    <span class="score">
          评分{{score}}
    </span>

  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    writeTime: String,
    score:String
  }
}
</script>

<style scoped>
.footer {
  /*background-color: #f7f7f7;*/
  /*height: 50px;*/
  margin-top: 20px;
  margin-left: 50px;
}

.writeTime{
  color: #79bbff;
}

.score{
  color: #ff7a38;
}
</style>