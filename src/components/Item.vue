<template>
  <div>
       <div @click="change">
         <div class="normal" v-if="select">
           未选中
        </div>
        <div class='active' v-else>
           选择中
         </div>
       </div>
  </div>
</template>

<script>
export default {
data(){
    return { select:true }
},
props:["sel","mark"],
methods:{
  change(){
    this.$router.push("/"+this.mark);
  }
},
watch:{
  sel:{
    immediate: true,
    handler(){
      if(this.sel == this.mark){
      this.select = false;
      }else{
        this.select = true;
      }
    }
  }
}
}
</script>

<style lang="scss">
div{
  .normal{
    text-align: center;
    height:0.499844rem;
    line-height:0.499844rem;  
  }
  .active{
    text-align: center;
    color:ghostwhite;
    height:0.499844rem; 
    line-height:0.499844rem; 
    background:cornflowerblue;
  }
}
</style>