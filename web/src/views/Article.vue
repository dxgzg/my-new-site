<template>
  <div>
    {{articleUid}}
  </div>


</template>

<script>

export default {
  props:{
    articleUid:String
  },
  data(){
    return{
      uid: 0,
    }
  },
  mounted() {
    this.uid = Number(this.articleUid)
  },

  name: "Article",
}
</script>

<style scoped>

</style>