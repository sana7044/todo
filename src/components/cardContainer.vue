<template>
    <div class="card-container">
        <div class="card"> 
            <div v-for="(card,index) in cardItems" :key="index" :class="card.classContainerName">
                <img :src="card.imgPath" :class="card.imgClass">
            </div>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
const props=defineProps({
    cardItems:{
        type:Array,
        required:true
    }
})

</script>
<style scoped lang="scss">

.card-container{
    display:flex;
    justify-content:center; /* Centers horizontally */
    align-items: center;  /* Centers vertically */
    height: 100vh;/* Full height of the viewport */
    background:#E0E0E0;
    position: relative; /* Ensure container respects absolute positioning */
}
.card{
    background-color:white; 
    height: 725px;
    width:400px;
    position: relative; /* Ensure relative positioning for child elements */
    display: block; /* Flex can disrupt absolute positioning */
}

.sit-anime-container{
    position:absolute;
    left:150px ;/* x-coordinate */
    top:147px ; /* y-coordinate */
}
.sit-anime{

    height:184px;
    width:159px;
}
.flower-vase-container{
    position:absolute;
    left:100px;/* x-coordinate */
    top:279px; /* y-coordinate */
}
.flower-vase{

    height:52px;
    width:36px;
}

.coffee-cup-container{
    position:absolute ;
    left:89px;/* x-coordinate */
    top:310px; /* y-coordinate */
}
.coffee-cup{
    height:22px;
    width:18px;
}
.stop-watch-container{
    position:absolute;
    left:104px;/* x-coordinate */
    top:69px; /* y-coordinate */
}
.stop-watch{
    height:50px;
    width:40px;
}
.desk-calendar-container{
    position:absolute;
    left:281.92px;/* x-coordinate */
    top:136px; /* y-coordinate */
}
.desk-calendar{
    height:26.6px;
    width:31.35px;
}
.notifications-container{
    position:absolute;
    left:270px;/* x-coordinate */
    top:225px; /* y-coordinate */
}
.notifications{
    height:42px;
    width:62px;
}
.pie-chart-container{
    position:absolute;
    left:84px;/* x-coordinate */
    top:180px; /* y-coordinate */
}
.pie-chart{
    height:26px;
    width:26px;
}
.bubble1-container{
    position:absolute;
    left:202px;/* x-coordinate */
    top:92px; /* y-coordinate */
}
.bubble1{
    height:4px;
    width:4px;
}
.bubble2-container{
    position:absolute;
    left:252px;/* x-coordinate */
    top:73px; /* y-coordinate */
}
.bubble2{
    height:8px;
    width:8px;
}
.bubble3-container{
    position:absolute;
    left:138px;/* x-coordinate */
    top:391px; /* y-coordinate */
}
.bubble3{
    height:8px;
    width:8px;
}
.bubble4-container{
    position:absolute;
    left:176px;/* x-coordinate */
    top:405px; /* y-coordinate */
}
.bubble4{
    height:4px;
    width:4px;
}
.bubble5-container{
    position:absolute;
    left:250px;/* x-coordinate */
    top:383px; /* y-coordinate */
}
.bubble5{
    height:8px;
    width:8px;
}
.bubble6-container{
    position:absolute;
    left:281px;/* x-coordinate */
    top:362px; /* y-coordinate */
}
.bubble6{
    height:4px;
    width:4px;
}
.ellipses-yellow-container{
    position:absolute;

    left:220px;/* x-coordinate */
    top:0px; /* y-coordinate */

}
.ellipses-yellow{

    height:180px;
    width:180px;
}
.ellipses-green-container{
    position:absolute;
    left:0px;/* x-coordinate */
    top:150px; /* y-coordinate */
}
.ellipses-green{
    height:180px;
    width:180px;
}
.ellipses-purple-container{
    position:absolute;
    left:220px;/* x-coordinate */
    top:220px; /* y-coordinate */
}
.ellipses-purple{
    height:180px;
    width:180px;
}
.ellipses-blue-container{
    position:absolute;
    left:76px;/* x-coordinate */
    top:355px; /* y-coordinate */
}
.ellipses-blue{
    height:180px;
    width:180px;
}

</style>
