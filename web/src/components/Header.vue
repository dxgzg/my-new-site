<template>
  <el-menu
      :default-active="activeIndex"
      class="header el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#f8f8f8"
  >
    <div class="flex-grow" />
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="live">生活</el-menu-item>
    <el-menu-item index="tech">技术</el-menu-item>
    <el-menu-item index="/todoList">todoList</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="4">Orders</el-menu-item>
  </el-menu>

</template>

<script>
import {ref} from "vue";



export default {
  name: "Header",
  setup(){
    const activeIndex = ref('1')

    let menuList = []

    return {
      activeIndex,
      menuList,
    }
  },
  methods:{
    handleSelect(key,keyPath){
      console.log("key:",key)
      console.log("keyPath:",keyPath)
      this.$router.push(key)
    }
  }

}
</script>

<style scoped>
.flex-grow {
  flex-grow: 0.90;

}
.header{
  /*top: 1000px;*/
  left: 0;
  font-size: 100px;
  /*position: fixed;*/
}
</style>
