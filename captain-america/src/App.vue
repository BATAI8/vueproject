<template>
  <div id="app" class="wrapper">
   <div class="main">
      <router-view/>
   </div>
   <footer>
     <tabbar></tabbar>
   </footer>
  </div>
</template>

<script>
const Tabbar = () => import('@/components/tabbar')
export default {
  name: 'App',
  components:{
    Tabbar
  }
}
</script>

<style>
body{
  padding-bottom:64px;
}
footer{
  background:#fff;
  width:100%;
  position:fixed;
  bottom:0;
  left:0;
  right:0;
}
</style>
