<template>
  <div>
     <div class="tabbar">
       <router-link v-for ='route in routes' :key='route.path' seact :to='route.path'>
        <!-- <i :class="'iconfont icon-${route.icon}-normal'"></i> -->
        <i :class="'icon-${route.icon}-normal'"></i>
        <p >{{route.name}}</p>
       </router-link>
     </div>
  </div>
</template>
<script>
import routes from '@/router/routes';
export default {
  name:'tabbar',
  data(){
    return{

      }
  },
  computed:{
    routes (){
      return routes.filter(r => r.name)
    }
  }
}
</script>
<style>
.tabbar{
  width: 100%;
  display:flex;
  height: 64px;

  background:#fff;
  border-top:1px solid gray;



}
.tabbar a{
  flex:1;
  text-align: center;
  text-decoration:none;
  font-size:14px;
}
p svg{
  width:20px;
  height:20px;
}
/* 选中 */
.router-link-active{
  color:red;
}

</style>
