<script setup lang="ts">
const props = defineProps<{ id?: string; isLarge: boolean; onClickEvent?: () => void }>()
</script>

<template>
  <button :class="[{ 'btn--large': isLarge }, 'btn']" :form="id" @click.prevent="onClickEvent">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  padding: 1.2rem 1.6rem;
  border: none;
  border-radius: 0.4rem;
  background-color: #ff8125;
  color: #fff;
  font-weight: bold;
  &:hover {
    background-color: #ff5c00;
  }
}
.btn--large {
  width: 100%;
}
</style>
