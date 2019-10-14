<template>
  <div class="header-tabber">
      <Item  
        v-for="(item,index) in btn"
        :key="index"
        class="item"
        :index="index"
        :sel = "sel"
        :mark = "item.mark"
      ></Item>
      
  </div>
</template>

<script>
import Item from '@/components/Item'
export default {
data(){
  return { 
    sel:this.$route.name,
    btn:[
      {mark:"Home1"},
      {mark:"Home2"},
      {mark:"Home3"},
      {mark:"Home4"},
      {mark:"Home5"},
    ]
  }
},
components:{
  Item
}
}
</script>

<style lang="scss">
.header-tabber{
    width:100%; 
    height:0.499844rem; 
    position:fixed;
    bottom:0;
    background:#cccccc;
    display:flex;
    .item{
      flex:1;
      .icon{
        display:block;
        height:100%;
      }
    }
}
</style>