<template>
  <div>
    <ca-header>
      <div  slot='axtra1'>首页</div>
      <div slot='axtra2'>更多</div>
    </ca-header>
    <div class="swipebox">
      <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    </div>

  </div>
</template>
<script>
import CaHeader from '@/components/CaHeader'
import {getSwiper} from '@/http'
export default {
  name:'home',
  data(){
    return {
      imgdata: ''
    }
  },
  components:{
      CaHeader,

  },
  mounted(){
    getSwiper()
    .then(rep=>{
      console.log(rep.data.imgdata)
      this.imgdata = rep.data.imgdata
    })
  }
}
</script>
<style>
.swipebox{
  border:1px solid red;
  margin-top:10px;
  width:100%;
  height:50px;
}
</style>
