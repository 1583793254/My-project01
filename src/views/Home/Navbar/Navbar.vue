<template>
  <div class="navbar">
      <div class="text">
          <span class="icon01">1</span>
          <input type="text">
          <span class="icon02">2</span>
      </div>
  </div>
</template>

<script>
import router from '@/router';
export default {
created(){
    router.beforeEach((to, from, next) => {
      switch(to.name){
        case "Home1":
        console.log("Home1");
        break;
        case "Home2":
          console.log("Home2");
        break;
        default:
          break;
      }
      next();
  })
},  
destroy(){
    console.log("组件被销毁了");
}

}
</script>

<style lang="scss" scoped>
.navbar{
    width:100%;
    height:44px;
    position:fixed;
    top:0;
    z-index:10;

    // background: transparent;
    background:red;
    .text{
        height:44px;
        width:3.05rem;
        margin:0 20px 0 50px;
        input{
            width:2.75rem;
            height:0.30rem;
            margin-top:0.07rem;
            border:0;
            border-radius:15px;
        }
        .icon01{
            width:0.35rem;
            height:0.33rem;
            display:block;
            background:red;
            position:absolute;
            left:0;
        }
        .icon02{
            background:red;
        }
    }
}
</style>