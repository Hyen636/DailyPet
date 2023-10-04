<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  label: { type: String, required: true },
  errorMessage: { type: String, required: true },
  isDateInput: Boolean,
  isRadioInput: Boolean,
  isListInput: Boolean
})

let errorMessage = computed(() => props.errorMessage)
</script>

<template>
  <div class="input-container">
    <label class="input-container__label">{{ label }}</label>
    <div
      :class="[
        { 'input-container__input--grid': isDateInput || isRadioInput || isListInput },
        { 'input-container__input--date': isDateInput || isListInput },
        { 'input-container__input--radio': isRadioInput },
        'input-container__input'
      ]"
    >
      <slot></slot>
    </div>
    <div class="input-container__error-message">{{ errorMessage }}</div>
  </div>
</template>

<style lang="scss" scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #222;
  .input-container__label {
    font-size: 1.4rem;
  }
  .input-container__input {
    position: relative;
  }
  .input-container__input--grid {
    display: grid;
    align-items: center;
    gap: 0.5rem;
  }
  .input-container__input--date {
    grid-template-columns: 4fr 1fr;
  }
  .input-container__input--radio {
    grid-template-columns: 2fr 2fr 1fr;
  }
  .input-container__error-message {
    height: 1.2rem;
    font-size: 1rem;
    color: #ff4343;
    padding-left: 1rem;
  }
}
</style>
