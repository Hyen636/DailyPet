<script setup lang="ts">
const props = defineProps({
  btn_name: String
})
</script>

<template>
  <button class="btn">{{ btn_name }}</button>
</template>

<style scoped>
.btn {
  width: 30rem;
  padding: 1.2rem 1.6rem;
  text-align: center;
  border-radius: 4px;
  border: none;
  background: var(--Point-Color, #ff8125);
  color: #ffffff;
  line-height: normal;
}
</style>
