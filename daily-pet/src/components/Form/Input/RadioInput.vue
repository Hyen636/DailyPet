<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import Checkbox from '../Checkbox/Checkbox.vue'
import InputLayout from './InputLayout.vue'

const isDisabled = ref(false)
const props = defineProps({
  label: { type: String, required: true },
  name: { type: String, required: true },
  leftId: { type: String, required: true },
  rightId: { type: String, required: true },
  leftLabel: { type: String, required: true },
  rightLabel: { type: String, required: true },
  errorMessage: { type: String, required: true }
})
const emit = defineEmits(['update:modelValue'])

let errorMessage = computed(() => props.errorMessage)

const updateValue = (event: Event) => {
  const { value } = event.target as HTMLInputElement
  emit('update:modelValue', value)
}

watch(isDisabled, () => {
  if (isDisabled) {
    emit('update:modelValue', 'checked')
  }
})
</script>

<template>
  <InputLayout :label="label" :error-message="errorMessage" :is-radio-input="true">
    <input
      :class="[{ 'radio-input--both': name === 'toilet' }, 'radio-input']"
      type="radio"
      :name="name"
      :id="leftId"
      :value="leftId"
      :disabled="isDisabled"
      @input="updateValue"
    />
    <label :for="leftId" class="radio-input__label">{{ leftLabel }}</label>
    <input
      :class="[{ 'radio-input--both': name === 'toilet' }, 'radio-input']"
      type="radio"
      :name="name"
      :id="rightId"
      :value="rightId"
      :disabled="isDisabled"
      @input="updateValue"
    />
    <label :for="rightId" class="radio-input__label">{{ rightLabel }}</label>
    <Checkbox :id="name" :label="name === 'toilet' ? '둘다' : '몰라요'" v-model="isDisabled" />
  </InputLayout>
</template>

<style lang="scss" scoped>
.radio-input {
  display: none;
  &:checked + label {
    background: #ff5c00;
    color: #ffffff;
  }
  &:disabled + label {
    background: #868686;
    color: #ffffff;
  }
}
.radio-input--both {
  &:disabled + label {
    background: #ff5c00;
    color: #ffffff;
  }
}
.radio-input__label {
  text-align: center;
  border-radius: 0.4rem;
  padding: 1.2rem 1.6rem;
  background: #ff8125;
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 700;
}
</style>
