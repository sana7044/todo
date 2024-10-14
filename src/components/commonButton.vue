<template>
  <div class="button-container">
    <button class="btn">
      <span class="button-text">Let's Start</span>
      <span class="fas fa-arrow-right icon"></span>
    </button>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn {
  display: inline-block;
  background-color: #5f33e1;
  color: #ffffff;
  width: 331px;
  height: 52px;
  border-radius: 12px;
  border: none;
  text-align: center;
  cursor: pointer;
  font-size: 19px;
  font-weight: 600;
  box-shadow: 0 8px 16px 0 rgba(95, 51, 225, 0.2),
    0 6px 20px 0 rgba(95, 51, 225, 0.19);
  position: relative;
}
.icon {
  position: absolute;
  font-size: 24px; /* Size of the Font Awesome icon */
  right: 20px; /* Position it on the right side */
  top: 14px; /* Center vertically */
}
.btn:hover {
  background-color: #4610e6;
}
</style>
