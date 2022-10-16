<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo header"
      mode="horizontal"
      @select="handleSelect"
      background-color="#f8f8f8"
  >
    <div class="flex-grow" />
    <el-menu-item index="1">Processing Center</el-menu-item>
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

    }
  }

}
</script>

<style scoped>
.flex-grow {
  flex-grow: 0.90;

}
.header{
  top: 0;
  left: 0;
}
</style>