<template>

  <div >
    <mavon-editor  v-model="value" style="height: 600px"/>
  </div>

  <Content>

  </Content>
</template>

<script>
import Header  from "../components/Header.vue";
import Content from "../components/Content.vue";
import mavonEditor  from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import "../assets/css/main.css"

export default {
  components: {Content, Header,mavonEditor },
  data(){
    return{
      value:""
    }
  }
}
</script>

<style scoped>

</style>