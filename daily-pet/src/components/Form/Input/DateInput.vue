<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import InputLayout from './InputLayout.vue'
import Checkbox from '../Checkbox/Checkbox.vue'

const isDisabled = ref(false)
const props = defineProps({
  label: { type: String, required: true },
  name: { type: String, required: true },
  errorMessage: { type: String, required: true },
  modelValue: String
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
  <InputLayout :label="label" :error-message="errorMessage" :is-date-input="true">
    <input
      class="date-input"
      type="date"
      :name="name"
      :disabled="isDisabled"
      :value="modelValue"
      @input="updateValue"
    />
    <Checkbox :id="name" label="몰라요" v-model="isDisabled" />
  </InputLayout>
</template>

<style lang="scss" scoped>
.date-input {
  padding: 1.2rem 2rem;
  border: 0.1rem solid #cfcfcf;
  border-radius: 2rem;
  &:focus {
    outline: none;
    border-color: #ff8125;
  }
}
</style>
