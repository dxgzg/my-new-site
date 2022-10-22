<template>
  <div class="footer">

    <el-icon>
      <Calendar/>
    </el-icon>
    <time>
      {{writeTime}}
    </time>

    <el-icon style="margin-left: 20px;margin-right: 0">
      <Star />
    </el-icon>
    评分{{score}}
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
  margin-top: 12px;
  margin-left: 50px;
}
</style>