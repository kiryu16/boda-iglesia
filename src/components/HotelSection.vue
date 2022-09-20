<template>
  <div class="hotel-section">
    <div class="main-container">
      <h2 data-aos="fade-up" data-aos-delay="500">Hotel sugerido</h2>
      <h3 data-aos="fade-up" data-aos-delay="500">Hotel Coroneo</h3>
      <div class="location" data-aos="fade-up" data-aos-delay="500">
        <p><i class="eva eva-pin"></i> Andador Hidalgo #12, Coroneo, Gto.</p>
        <p>
          <i class="eva eva-phone"></i>
          <a href="tel:+5214214730050">421 473 00 50</a>
        </p>
        <p>
          <img src="../assets/icon-wha.png" width="18px" />
          <a href="https://wa.me/+5214211052037" target="_blank"
            >421 105 20 37</a
          >
        </p>
        <p>
          <i class="eva eva-email"></i>
          <a href="mailto:hotelcoroneo@gmail.com">hotelcoroneo@gmail.com</a>
        </p>
      </div>
      <div data-aos="fade-up" data-aos-delay="500">
        <h4>Precios de las habitaciones (Fecha de los precios: 10/09/2022 )</h4>
        <p>Habitación con una cama matrimonial: <b>$400</b></p>
        <p>Habitación con dos camas matrimoniales: <b>$750</b></p>
        <p>Habitación con cuatro camas matrimoniales: <b>$1300</b></p>
        <!-- <p class="disclaimer">
          Sugrimos llamar para corroborar los precios ya que pueden haber
          cambiado.
        </p> -->
      </div>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1286.1699186181647!2d-100.36443537066584!3d20.199267894586885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d324bbb48248fb%3A0x7e41dfadfba8d3fb!2sHotel%20Coroneo!5e0!3m2!1ses-419!2smx!4v1663693883449!5m2!1ses-419!2smx"
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
.hotel-section {
  background-color: #f0e8e6;
  padding: 50px 0;

  h2 {
    font-size: 36px;
    font-weight: 600;
    color: #000;
    text-align: center;
    margin: 0 0 30px;

    @media (max-width: 600px) {
      font-size: 30px;
      margin: 0 0 20px;
    }
  }

  h3 {
    font-size: 26px;
    font-weight: 400;
    margin: 0 0 30px;
    text-align: center;

    @media (max-width: 600px) {
      font-size: 24px;
      margin: 0 0 20px;
    }
  }

  h4 {
    font-size: 22px;
    font-weight: 400;
    margin: 0 0 20px;
    text-align: center;
    width: 100%;

    @media (max-width: 600px) {
      font-size: 22px;
      margin: 0 0 20px;
    }
  }

  p {
    font-size: 16px;
    font-weight: 400;
    margin: 0 0 15px;

    &.disclaimer {
      font-size: 14px;
      color: #696969;
    }
  }

  /*  > .main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    margin-bottom: 30px;
  } */

  .location {
    margin-bottom: 30px;
  }
}
</style>
