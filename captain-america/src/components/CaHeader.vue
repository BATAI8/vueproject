<template>
  <div class="ca-header">
      <div class="fanhui" @click='fanhui'>返回</div>
      <div><slot  name='axtra1'></slot></div>
      <div><slot name='axtra2'></slot></div>

  </div>
</template>
<script>
export default {
  name:'caheader',
  methods:{
      fanhui (){
        this.$router.history.go(-1)
      }
  }
}
</script>
<style scoped>
.ca-header{
  height:52px;
  background:red;
  display: flex;
  line-height:52px;
}
.fanhui{
  cursor: pointer
}
.ca-header >div{
  flex:1;
}
</style>>


