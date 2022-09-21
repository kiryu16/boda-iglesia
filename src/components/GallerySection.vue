<template>
  <section class="gallery-section">
    <div class="main-container">
      <h2 data-aos="fade-up" data-aos-delay="300">
        ¡Gracias por acompañarnos!
      </h2>
      <div class="grid">
        <div>
          <img src="../assets/foto1.jpg" />
        </div>
        <div>
          <img src="../assets/foto2.jpg" />
        </div>
        <div>
          <img src="../assets/foto3.jpg" />
        </div>
        <div>
          <img src="../assets/foto4.jpg" />
        </div>
        <div>
          <img src="../assets/foto5.jpg" />
        </div>
        <div>
          <img src="../assets/foto6.jpg" />
        </div>
        <div>
          <img src="../assets/foto10.jpg" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.gallery-section {
  background-color: #e0e0e0;
  padding: 50px 0;

  h2 {
    font-size: 36px;
    font-weight: 600;
    color: #000;
    text-align: center;
    margin: 0 0 30px;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 300px;
    gap: 20px;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }

    > div {
      position: relative;
      border-radius: 5px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
