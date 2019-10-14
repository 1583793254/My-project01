<template>
  <div class="box">
      <Banner></Banner>
      <!-- 分类 -->
      <div class="f">
        <div>
            <div class="left">
                <Item 
                  v-for="index in 10"
                  :key="index"
                ></Item>  
            </div>
        </div>
         <div>
          切换按钮
        </div>
      </div>
      <!-- 分类 -->

      <!-- 商品推荐 -->
      <div class="product_box">
        <div class="product_title"><img style="display:block;" src="//img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png" alt=""></div>
        <div class="product_list">
          <div class="product_item">
              <div class="item_bg">
                <div><img  src="//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/65190/25/8601/255415/5d67adc8E33752a61/c3cad27a1b132e84.jpg!q70.dpg.webp" alt="img"></div>
                <p class="item_title">高品质抱枕荣顺出品高品质抱枕荣顺出品</p>
                <p class="item_money">
                <span class="item_price"><span>460</span></span><span class="item_price_tage">满减</span><span class="guess-button">看相似</span>
                </p>
                <p class="space"></p>
              </div>
              
          </div>
          <div class="product_item">
              <div class="item_bg">
                <div><img  src="//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/82950/16/3544/287856/5d1c0da5E070cc92e/055c35db12c19fa0.jpg!q70.dpg.webp" alt="img"></div>
                <p class="item_title">高品质抱枕荣顺出品高品质抱枕荣顺出品</p>
                <p class="item_money">
                <span class="item_price"><span>460</span></span><span class="item_price_tage">满减</span><span class="guess-button">看相似</span>
                </p>
                <p class="space"></p>
              </div>
              
          </div>
          <div class="product_item">
              <div class="item_bg">
                <div><img  src="//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/82950/16/3544/287856/5d1c0da5E070cc92e/055c35db12c19fa0.jpg!q70.dpg.webp" alt="img"></div>
                <p class="item_title">高品质抱枕荣顺出品高品质抱枕荣顺出品</p>
                <p class="item_money">
                <span class="item_price"><span>460</span></span><span class="item_price_tage">满减</span><span class="guess-button">看相似</span>
                </p>
                <p class="space"></p>
              </div>
              
          </div>
          <div class="product_item">
              <div class="item_bg">
                <div><img  src="//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/82950/16/3544/287856/5d1c0da5E070cc92e/055c35db12c19fa0.jpg!q70.dpg.webp" alt="img"></div>
                <p class="item_title">高品质抱枕荣顺出品高品质抱枕荣顺出品</p>
                <p class="item_money">
                <span class="item_price"><span>460</span></span><span class="item_price_tage">满减</span><span class="guess-button">看相似</span>
                </p>
                <p class="space"></p>
              </div>
              
          </div>
        </div>
        
      </div>
      <!-- 商品推荐 -->
  </div>
</template>

<script>
import Banner from '@/components/Banner';
import Item from '@/views/Home/Item';
export default {
  components:{
    Banner,Item
  }
  
}
</script>

<style scoped lang="scss"> 
.box{
    margin-top:44px;
    background:#f6f6f6;
    overflow: hidden;
    .product_box{
      background:#f0f2f5;
        .product_title{
            margin-top:0.1rem;
            padding:0 0.1rem;
            img{
              width:100%;
            }
        }

        .product_list{
          border-top:1px #f0f2f5 solid;
          margin:0 0.10rem 0.499844rem 0.10rem;
          overflow: hidden;
          .product_item:nth-child(odd){
            padding:0 0.02rem 0.04rem 0;
          }
          .product_item:nth-child(2n){
            padding:0 0 0.04rem 0.02rem;
          }

          .product_item{
            width:50%;
            box-sizing: border-box;
            float:left;
            .item_bg{
              background:white;
            }
            img{
              width:100%;
              float:left;
            }
            .item_title{
              padding:0 0.04rem;
              font-size:0.13rem;
            }
          // 商品价格栏
            .item_money{
              position:relative;
              height:0.26rem;
              .item_price{
                float:left;
                height:0.25rem;
                line-height:0.25rem;
                font-size:0.16rem;
                color:red;
                padding:0 0.05rem 0 0.04rem;          
              }

              .item_price_tage{
                  border:1px solid red;
                  font-size:0.10rem;
                  padding:0 0.03rem;
                  color:red;
              }
              .guess-button{
                  width:0.49rem;
                  height:0.24rem;
                  color:#686868;
                  font-size:0.12rem;
                  text-align:center;
                  line-height:0.24rem;
                  position:absolute;
                  right:0.08rem;
              }

              .guess-button::after{
                  content:"";
                  position:absolute;
                  top:0;
                  left:0;
                  width:0.49rem;
                  height:0.24rem;
                  border:1px solid #bfbfbf; 
              }
            }
            // 商品价格栏 --end 
              .space{
                height:0.24rem;
              }
        }
        }
        

    }
}
.f{
  width:200%;
  overflow: hidden;
  background:#f6f6f6;
  .left,.right{
    width:3.75rem;
    float:left; 
    overflow:hidden;
  }
}
</style>