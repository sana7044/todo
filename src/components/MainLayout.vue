<template>
  <div>
    <div class="green-gradient"></div>
    <div class="yellow-gradient"></div>
    <div class="blue-gradient"></div>
    <div class="sky-gradient"></div>
    <router-view />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.green-gradient {
  position: absolute;
  left: -50px;
  width: 130px;
  height: 130px;
  top: 126px;
  border-radius: 50%;
  opacity: 0.2;
  background: linear-gradient(
    180deg,
    #46f080 0%,
    rgba(70, 240, 138, 0.15) 100%
  );

  backdrop-filter: blur(100px);
  overflow: hidden;
  filter: drop-shadow(10px 50px 40px #46f080);
}
.yellow-gradient {
  background: linear-gradient(
    180deg,
    #edf046 0%,
    rgba(240, 233, 70, 0.15) 100%
  );
  position: absolute;
  right: 30px;
  width: 130px;
  height: 100px;
  top: 45px;
  opacity: 0.2;
  filter: drop-shadow(10px 20px 40px #edf046);
}

.blue-gradient {
  background: linear-gradient(180deg, #2555ff 0%, rgba(37, 85, 255, 0.25) 100%);
  position: absolute;
  right: -50px;
  width: 130px;
  height: 100px;
  top: 232px;
  opacity: 0.1;
  border-radius: 50%;
  filter: drop-shadow(10px 20px 10px #2555ff);
}
.sky-gradient {
  background: linear-gradient(
    180deg,
    #46bdf0 0%,
    rgba(70, 179, 240, 0.15) 100%
  );
  position: absolute;
  left: 76px;
  width: 130px;
  height: 100px;
  top: 450px;
  opacity: 0.1;

  filter: drop-shadow(10px 20px 10px #46bdf0);
}
</style>
