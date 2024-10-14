<template>
  <div class="main">
    <CardContainer :cardItems="startPageItems"> </CardContainer>
    <div class="task-management">
      <div class="text-style">
        <span class="title">Task Management & To-Do List</span>
      </div>
      <div class="para-text">
        <p>
          This productive Tool is designed to help you better manage your Task
          project-wise conviniently!
        </p>
      </div>
    </div>
    <CommonButton :btnText="textItem" :btnIcon="iconClass" class="btn-position"/>
  </div>
</template>
<script setup>
import CardContainer from "./cardContainer.vue";
import CommonButton from "./commonButton.vue";

const textItem = "Let's Start";
const iconClass = "fas fa-arrow-right";
const startPageItems = [
  {
    classContainerName: "sit-anime-container",
    imgPath: "src/components/icons/sit-anime.png",
    imgClass: "sit-anime",
  },
  {
    classContainerName: "flower-vase-container",
    imgPath: "src/components/icons/flower-vase.png",
    imgClass: "flower-vase",
  },
  {
    classContainerName: "coffee-cup-container",
    imgPath: "src/components/icons/coffee-cup.png",
    imgClass: "coffee-cup",
  },
  {
    classContainerName: "stop-watch-container",
    imgPath: "src/components/icons/stop-watch.png",
    imgClass: "stop-watch",
  },
  {
    classContainerName: "desk-calendar-container",
    imgPath: "src/components/icons/desk-calendar.png",
    imgClass: "desk-calendar",
  },
  {
    classContainerName: "notifications-container",
    imgPath: "src/components/icons/notifications.png",
    imgClass: "notifications",
  },
  {
    classContainerName: "pie-chart-container",
    imgPath: "src/components/icons/pie-chart.png",
    imgClass: "pie-chart",
  },
  {
    classContainerName: "bubble1-container",
    imgPath: "src/components/icons/bubble1.png",
    imgClass: "bubble1",
  },
  {
    classContainerName: "bubble2-container",
    imgPath: "src/components/icons/bubble2.png",
    imgClass: "bubble2",
  },
  {
    classContainerName: "bubble3-container",
    imgPath: "src/components/icons/bubble3.png",
    imgClass: "bubble3",
  },
  {
    classContainerName: "bubble4-container",
    imgPath: "src/components/icons/bubble4.png",
    imgClass: "bubble4",
  },
  {
    classContainerName: "bubble5-container",
    imgPath: "src/components/icons/bubble5.png",
    imgClass: "bubble5",
  },
  {
    classContainerName: "bubble6-container",
    imgPath: "src/components/icons/bubble6.png",
    imgClass: "bubble6",
  },
];
</script>

<style lang="scss">
.text-style {
  width: 247px;
  height: 60px;
}
.para-text{
  width: 266px;
  height: 54px;
  font-size:14px;
  font-weight:16;
  color: #6E6A7C;
}
.task-management {
  display:flex;
  flex-direction: column;
  position: absolute;
  top: 55%;
  left: 50%; //places the element's left edge at the center of the container
  transform: translateX(
    -50%
  ); //moves it back by half of its width, centering it horizontally
  text-align: center;
  row-gap:10px;
}
.title {
  font-size: 24px;
  font-weight: 600;
}
.btn-position{
  position:relative;
  top:-130px;
}
</style>
