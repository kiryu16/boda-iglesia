<template>
  <div class="banner-section">
    <div class="fade" />
    <div class="container">
      <h1>Nuestra historia</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner-section {
  width: 100%;
  height: 450px;
  position: relative;
  background-image: url('../assets/banner.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .fade {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(109, 109, 109, 0.4) 100%
    );
  }

  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;

    h1 {
      font-size: 60px;
      font-weight: 400;
      color: #f0f0f0;
      line-height: initial;
      margin: 0;
    }
  }
}
</style>
