<template>
    <swiper  class="swiper-box">
        <swiper-slide class="swiper-item"></swiper-slide>
        <swiper-slide class="swiper-item"></swiper-slide>
        <swiper-slide class="swiper-item"></swiper-slide>
        <swiper-slide class="swiper-item"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
export default {
    data(){
        return{
             swiperOption: {
                pagination: '.swiper-pagination',
                direction: 'horizontal',          
            } 
        }       
    },
     
};
</script>

<style lang="scss" scoped>
@import '../base/css/base.scss';
    .swiper-box {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        .swiper-item {
            height: 5rem;
            background: url() no-repeat center/cover;
            /* 使用Mixin来处理2x,3x图 */
             &:nth-of-type(1){
             @include dpr-img("../assets/","vue"); 
           } 
            &:nth-of-type(2){
                @include dpr-img("../assets/","swiper1");
            }
            &:nth-of-type(3){
                @include dpr-img("../assets/","swiper2");
            }
            &:nth-of-type(4){
                @include dpr-img("../assets/","swiper3");
            }  
        }         }   
</style>














