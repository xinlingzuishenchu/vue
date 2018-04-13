<template>
    <div id="container">      
        <swiperComponent :swiperOption="swiperOption"></swiperComponent>       
    </div>
</template>

<script>
import swiperComponent from './swiper.vue'
export default {
    data() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                direction: 'horizontal',          
            },                      
        }
    },
    components:{
        swiperComponent,
    }    
}
</script>