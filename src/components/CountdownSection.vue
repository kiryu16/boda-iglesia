<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const weddingDate = new Date(2022, 10, 26, 13)
const diff = ref(Math.abs(new Date() - weddingDate))
const diffSeconds = computed(() => Math.floor((diff.value / 1000) % 60))
const diffMinutes = computed(() => Math.floor((diff.value / 1000 / 60) % 60))
const diffHours = computed(() => Math.floor((diff.value / 1000 / 60 / 60) % 24))
const diffDays = computed(() => Math.floor(diff.value / 1000 / 60 / 60 / 24))
let interval = null

onMounted(() => {
  interval = setInterval(() => {
    diff.value -= 1000
  }, 1000)
})
onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<template>
  <section class="countdown-section">
    <div class="main-container">
      <h2 data-aos="fade-up" data-aos-delay="300">
        Tiempo restante hasta la fecha
      </h2>
      <div class="count-container">
        <div data-aos="fade-up" data-aos-delay="600">
          <p>{{ diffDays }}</p>
          <p>Días</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="900">
          <p>{{ diffHours }}</p>
          <p>Horas</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="1200">
          <p>{{ diffMinutes }}</p>
          <p>Minutos</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="1500">
          <p>{{ diffSeconds }}</p>
          <p>Segundos</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.countdown-section {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  background: #f0f0f0;

  @media (max-width: 600px) {
    height: 320px;
  }

  h2 {
    font-size: 36px;
    font-weight: 600;
    color: #000;
    text-align: center;
    margin: 0 0 30px;

    @media (max-width: 600px) {
      font-size: 30px;
    }
  }

  .count-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;

    > div {
      + div {
        margin-left: 100px;

        @media (max-width: 600px) {
          margin-left: 20px;
        }
      }

      p {
        text-align: center;
        margin: 0;

        &:first-child {
          font-size: 60px;
          font-weight: 500;
          color: #917040;

          @media (max-width: 600px) {
            font-size: 30px;
          }
        }

        &:last-child {
          font-size: 20px;
          font-weight: 500;
          color: #917040;

          @media (max-width: 600px) {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
