<template>
  <div class="item">
        <router-link to="/home" class="click" >
            <div><img src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp" alt=""></div>
            <span>京东超市</span>
        </router-link>
   </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.item{
   width:0.75rem;
   height:0.73984rem;
   float:left;
   .click{
     display:block;
     text-align: center;
     height:100%;
     img{
        width:0.39984rem;
        margin-top:0.10rem;
      }
      span{
        display:block;
        font-size:0.12rem;
        color:#666;
      }

   }
      
}
</style>