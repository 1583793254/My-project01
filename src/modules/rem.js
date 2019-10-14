window.onload = function(){
    
    
    countRem(); //默认执行一次
    //当宽度改变时重新计算
    window.onresize = function(){
        countRem();
    }

    function countRem(){
        const html = document.documentElement || document.body;
        var fontSize = html.clientWidth / 3.75 + "px";
        html.style.fontSize = fontSize;
        console.log(fontSize);
    }
}



