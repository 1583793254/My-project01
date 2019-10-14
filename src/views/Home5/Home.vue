<template>
    <div class="home">
            <!-- 头部 -->
            <Navbar></Navbar> 
             <div class="bg"></div>
            <!-- 主体 -->
            <Box></Box>
            <Tabber></Tabber>
    </div>
</template>

<script>
import Navbar from '@/views/Home/Navbar/Navbar';
import Box from '@/views/Home/BodyBox';
import Tabber from '@/components/Tabber';
export default {
    components:{
        Navbar,Box,Tabber
    }
}
</script>

<style>
.home{
    font-size:0.15rem; 
}

.bg{
    width:100%;
    height:1.44984rem;
    background-image: linear-gradient(0deg,#f1503b,#c82519 50%);
    position:absolute;
    top:0;
    z-index:-1;
}

</style>