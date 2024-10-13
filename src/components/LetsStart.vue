<template>
  <CardContainer :cardItems="startPageItems" />
</template>
<script setup>
import CardContainer from './cardContainer.vue'

const startPageItems = [
  {
    classContainerName: 'sit-anime-container',
    imgPath: 'src/components/icons/sit-anime.png',
    imgClass: 'sit-anime',
  },
  {
    classContainerName: 'flower-vase-container',
    imgPath: 'src/components/icons/flower-vase.png',
    imgClass: 'flower-vase',
  },
  {
    classContainerName: 'coffee-cup-container',
    imgPath: 'src/components/icons/coffee-cup.png',
    imgClass: 'coffee-cup',
  },
  {
    classContainerName: 'stop-watch-container',
    imgPath: 'src/components/icons/stop-watch.png',
    imgClass: 'stop-watch',
  },
  {
    classContainerName: 'desk-calendar-container',
    imgPath: 'src/components/icons/desk-calendar.png',
    imgClass: 'desk-calendar',
  },
  {
    classContainerName: 'notifications-container',
    imgPath: 'src/components/icons/notifications.png',
    imgClass: 'notifications',
  },
  {
    classContainerName: 'pie-chart-container',
    imgPath: 'src/components/icons/pie-chart.png',
    imgClass: 'pie-chart',
  },
  {
    classContainerName: 'bubble1-container',
    imgPath: 'src/components/icons/bubble1.png',
    imgClass: 'bubble1',
  },
  {
    classContainerName: 'bubble2-container',
    imgPath: 'src/components/icons/bubble2.png',
    imgClass: 'bubble2',
  },
  {
    classContainerName: 'bubble3-container',
    imgPath: 'src/components/icons/bubble3.png',
    imgClass: 'bubble3',
  },
  {
    classContainerName: 'bubble4-container',
    imgPath: 'src/components/icons/bubble4.png',
    imgClass: 'bubble4',
  },
  {
    classContainerName: 'bubble5-container',
    imgPath: 'src/components/icons/bubble5.png',
    imgClass: 'bubble5',
  },
  {
    classContainerName: 'bubble6-container',
    imgPath: 'src/components/icons/bubble6.png',
    imgClass: 'bubble6',
  },
]
</script>