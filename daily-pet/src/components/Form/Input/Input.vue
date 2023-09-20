<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps({
  isLoginPage: Boolean,
  label: String,
  type: String,
  errorMessage: { type: String, required: true },
  modelValue: String
})
const emit = defineEmits(['update:modelValue'])

let errorMessage = computed(() => props.errorMessage)

const updateValue = (event: Event) => {
  const { value } = event.target as HTMLInputElement
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="input-container">
    <label class="input-container__label">{{ label }}</label>
    <div class="input-container__input">
      <div class="input-container__icon">
        <slot></slot>
      </div>
      <input
        :class="[
          { 'input--login-page': isLoginPage, 'input--error': errorMessage.length > 0 },
          'input'
        ]"
        :type="type"
        :value="modelValue"
        @input="updateValue"
      />
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
    .input-container__icon {
      position: absolute;
      top: 1.2rem;
      left: 1.8rem;
    }
    .input {
      width: 100%;
      padding: 1.2rem 2rem;
      border: 0.1rem solid #cfcfcf;
      border-radius: 2rem;
      &:focus {
        outline: none;
        border-color: #ff8125;
      }
    }
    .input--login-page {
      padding: 1.2rem 4rem;
    }
    .input--error {
      border-color: #ff4343;
      &:focus {
        outline: none;
        border-color: #ff4343;
      }
    }
  }
  .input-container__error-message {
    height: 1.2rem;
    font-size: 1rem;
    color: #ff4343;
    padding-left: 1rem;
  }
}
</style>
