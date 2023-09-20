<script setup lang="ts"></script>

<template>
  <div class="logo">
    <div class="logo__svg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="68"
        height="58"
        viewBox="0 0 68 58"
        fill="none"
      >
        <path
          d="M38.0544 39.382C36.0587 42.1473 31.9413 42.1473 29.9456 39.382L24.5647 31.926C22.1782 28.6192 24.5411 24 28.6191 24L39.3809 24C43.459 24 45.8218 28.6192 43.4353 31.926L38.0544 39.382Z"
          fill="#FF8125"
        />
        <path
          d="M33.2782 34.7072C35.6328 44.462 32.7736 61.9194 2.5 53.7101"
          stroke="#FF8125"
          stroke-width="4"
          stroke-linecap="round"
        />
        <path
          d="M64.8437 52.0197C65.912 51.7389 67.0056 52.3773 67.2864 53.4456C67.5672 54.5139 66.9288 55.6075 65.8605 55.8883L64.8437 52.0197ZM36.6632 35.1965C35.5187 39.7813 35.7151 45.7592 39.2303 49.6295C42.6394 53.3829 49.927 55.9403 64.8437 52.0197L65.8605 55.8883C50.4406 59.9411 41.1984 57.7457 36.2693 52.3188C31.4464 47.0088 31.4964 39.3791 32.7823 34.2277L36.6632 35.1965Z"
          fill="#FF8125"
        />
        <circle cx="10" cy="8.5" r="8.5" fill="#FF8125" />
        <circle cx="58" cy="8.5" r="8.5" fill="#FF8125" />
      </svg>
    </div>
    <div class="logo__text">데일리펫</div>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  color: #ff8125;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  .logo__text {
    font-size: 2.4rem;
    font-weight: bold;
  }
}
</style>
