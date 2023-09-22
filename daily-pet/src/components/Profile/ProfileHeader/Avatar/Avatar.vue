<script setup lang="ts">
const props = defineProps({ images: Object })
</script>

<template>
  <div class="avatar-container">
    <img class="avatar-container__avatar" v-for="image in images" :src="image" alt="avatar" />
  </div>
</template>

<style lang="scss" scoped>
.avatar-container__avatar {
  cursor: pointer;
  position: relative;
  width: 8rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  box-shadow: 0rem 0.4rem 0.4rem 0rem rgba(0, 0, 0, 0.25);
  &:first-child {
    z-index: 10;
    position: absolute;
    transform: translateX(-6rem);
  }
}
</style>
