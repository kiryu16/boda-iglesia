<template>
  <section class="relative-section">
    <div class="main-container">
      <div class="box">
        <h2 data-aos="fade-up" data-aos-delay="1000">Nuestros Padres</h2>
        <p data-aos="fade-up" data-aos-delay="1000">Melania Pérez Gomez</p>
        <p data-aos="fade-up" data-aos-delay="1000">Javier Morales Pérez</p>
        <hr />
        <p data-aos="fade-up" data-aos-delay="1000">Lilia Garnica Rangel</p>
        <p data-aos="fade-up" data-aos-delay="1000">Raúl Hernández Torres</p>
      </div>
      <div class="box">
        <h2 data-aos="fade-up" data-aos-delay="300">Nuestros Padrinos</h2>
        <p data-aos="fade-up" data-aos-delay="300">Alma Nancy Pérez Mendoza</p>
        <p data-aos="fade-up" data-aos-delay="300">Arturo Ramirez Ortíz</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.relative-section {
  background-color: #fff;
  padding: 50px 0;

  h2 {
    font-size: 36px;
    font-weight: 600;
    color: #000;
    text-align: center;
    margin: 0 0 20px;

    @media (max-width: 600px) {
      font-size: 30px;
    }
  }

  p {
    font-size: 20px;
    font-weight: 400;
    margin: 0 0 15px;
    text-align: center;

    @media (max-width: 600px) {
      font-size: 20px;
    }
  }

  hr {
    border-color: #ddc3a0;
    border-width: 1px 0 0 0;
  }

  .box {
    + .box {
      margin-top: 30px;
    }
  }
}
</style>
