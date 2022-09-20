<template>
  <div class="where-section">
    <div class="main-container where-container">
      <h2 data-aos="fade-up" data-aos-delay="500">¿Cuándo y dónde?</h2>
      <div>
        <p data-aos="fade-up" data-aos-delay="500">
          <i class="eva eva-calendar"></i> 26 de noviembre de 2022
        </p>
        <p data-aos="fade-up" data-aos-delay="500">
          <i class="eva eva-clock"></i> 1:00 pm
        </p>
        <p data-aos="fade-up" data-aos-delay="500">
          <i class="eva eva-pin"></i> Santuario de Santiago Apóstol, Coroneo,
          Gto.
        </p>
      </div>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14977.83755639691!2d-100.3651012!3d20.1982227!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d324bbb8c2bf21%3A0xc7deb245e937d56!2sSantuario%20de%20Santiago%20Ap%C3%B3stol!5e0!3m2!1ses-419!2smx!4v1663690145866!5m2!1ses-419!2smx"
      width="100%"
      height="400"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <div class="main-container where-container">
      <div>
        <p data-aos="fade-up" data-aos-delay="500">
          Después de la ceremonia religiosa los esperamos en la siguiente
          ubicación:
        </p>
        <p data-aos="fade-up" data-aos-delay="500">
          <i class="eva eva-clock"></i> 4:00 pm
        </p>
        <p data-aos="fade-up" data-aos-delay="500">
          <i class="eva eva-pin"></i> Callejón del fresno #2, Cerro Prieto
          Poniente, Coroneo, Gto.
        </p>
      </div>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2571.8760115771715!2d-100.4120881287724!3d20.227307108683423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDEzJzM3LjciTiAxMDDCsDI0JzQzLjYiVw!5e0!3m2!1ses-419!2smx!4v1663691918343!5m2!1ses-419!2smx"
      width="100%"
      height="400"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<style lang="scss" scoped>
.where-section {
  background-color: #f8f6f7;
  padding: 50px 0;

  h2 {
    font-size: 36px;
    font-weight: 600;
    color: #000;
    text-align: center;
    margin: 0 0 40px;

    @media (max-width: 600px) {
      font-size: 30px;
    }
  }

  h3 {
    font-size: 26px;
    font-weight: 400;
    margin: 0 0 30px;
    text-align: center;
  }

  iframe {
    margin-bottom: 30px;

    &:last-child {
      margin: 0;
    }
  }

  .where-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;

    p {
      font-size: 16px;
      font-weight: 400;
      margin: 0 0 15px;
    }

    > div {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-flow: column nowrap;
      margin-bottom: 30px;

      p {
        font-size: 16px;
        font-weight: 400;
        margin: 0 0 15px;
      }
    }
  }
}
</style>
