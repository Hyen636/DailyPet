<script setup lang="ts">
const props = defineProps({
  id: String,
  label: String,
  modelValue: Boolean
})
defineEmits(['update:modelValue'])
</script>

<template>
  <input
    type="checkbox"
    :id="id"
    class="input_checkbox"
    :value="modelValue"
    @input="$emit('update:modelValue', !modelValue)"
  />
  <label :for="id" class="input_checkbox_label">{{ label }}</label>
</template>

<style scoped>
input[type='checkbox'] {
  accent-color: #ff8125;
}

.input_checkbox_label {
  color: var(--Black, #222);
  font-size: 1.2rem;
  font-weight: 300;
}
</style>
