<script setup>
import MainLayout from './components/MainLayout.vue'
</script>
<template>
  <div class="page-container">
    <MainLayout />
  </div>
</template>

<style scoped="scss">
.page-container {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center; 
  margin: auto;
  max-width: 400px;
  position: relative;
  overflow: hidden;
}
</style>
