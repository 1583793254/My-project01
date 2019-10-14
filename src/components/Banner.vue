<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/70780/18/11677/92276/5d9311b2E0b2a91ff/200514b189ec106c.jpg!cr_1125x445_0_171!q70.jpg.dpg" alt=""></div>
            <div class="swiper-slide"><img src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/68681/13/11611/95858/5d901b22E13ced6a7/5dd7fe6859f195f4.jpg!cr_1125x445_0_171!q70.jpg.dpg" alt=""></div>
            <div class="swiper-slide"><img src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/68681/13/11611/95858/5d901b22E13ced6a7/5dd7fe6859f195f4.jpg!cr_1125x445_0_171!q70.jpg.dpg" alt=""></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
     
        
        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
    </div>
</template>

<script>
import "swiper/css/swiper.min.css"
import Swiper from 'swiper/js/swiper.min.js'

export default {
    created(){

        this.$nextTick(()=>{
            new Swiper ('.swiper-container', {
                //循环
                loop: true,
            
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                    clickable:true
                },
                on: {
                    touchStart: function(){
                        console.log("点击了");
                        
                    },
                    touchMove: function(){
                        console.log("滑动了");
                    },
                }
            })
        })
        
    }        
}
</script>

<style lang="scss" scoped>
.swiper-slide{
   
    font-size:0.16rem;
}
img{
    border-radius:0.05rem;
    width:3.50rem;
}
.swiper-wrapper{
    width:3.50rem;
    margin:0 auto;
}
.swiper-pagination-bullet{
    width:0.08rem;
    height:0.03rem;
}
</style>