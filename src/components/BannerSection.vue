<template>
  <section class="banner-section">
    <div class="fade" />
    <div class="container">
      <h1 data-aos="fade-up" data-aos-delay="1000">Yadira y Emmanuel</h1>
    </div>
  </section>
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

  @media (max-width: 600px) {
    height: 300px;
  }

  .fade {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(109, 109, 109, 0.3) 100%
    );
  }

  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-flow: row nowrap;
    padding: 50px 0;
    box-sizing: border-box;

    h1 {
      font-size: 60px;
      font-weight: 400;
      color: #f0f0f0;
      line-height: initial;
      margin: 0;
      text-align: center;

      @media (max-width: 600px) {
        font-size: 38px;
      }
    }
  }
}
</style>
