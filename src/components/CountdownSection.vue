<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
const weddingDate = new Date(2022, 10, 26)
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
  <div class="countdown-section">
    <div class="main-container">
      <h2>Cuenta regresiva</h2>
      <div class="count-container">
        <div>
          <p>{{ diffDays }}</p>
          <p>Días</p>
        </div>
        <div>
          <p>{{ diffHours }}</p>
          <p>Horas</p>
        </div>
        <div>
          <p>{{ diffMinutes }}</p>
          <p>Minutos</p>
        </div>
        <div>
          <p>{{ diffSeconds }}</p>
          <p>Segundos</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.countdown-section {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;

  h2 {
    font-size: 30px;
    font-weight: 600;
    color: #000;
    text-align: center;
  }

  .count-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;

    > div {
      + div {
        margin-left: 20px;
      }
    }
  }
}
</style>
