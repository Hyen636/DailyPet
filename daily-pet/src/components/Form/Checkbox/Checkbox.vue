<script setup lang="ts">
const props = defineProps({
  id: String,
  label: String,
  modelValue: Boolean
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="checkbox">
    <input
      type="checkbox"
      :id="id"
      class="checkbox__input"
      :value="modelValue"
      @input="$emit('update:modelValue', !modelValue)"
    />
    <label :for="id" class="checkbox__label">{{ label }}</label>
  </div>
</template>

<style lang="scss" scoped>
.checkbox {
  display: flex;
  align-items: center;
  .checkbox__input {
    accent-color: #ff8125;
  }
  .checkbox__label {
    color: #222;
    font-size: 1.2rem;
    font-weight: 300;
  }
}
</style>
