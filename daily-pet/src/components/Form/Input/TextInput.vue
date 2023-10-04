<script setup lang="ts">
import { computed } from 'vue'
import PasswordIcon from '@/assets/icon/PasswordIcon.vue'
import UserIcon from '@/assets/icon/UserIcon.vue'
import InputLayout from './InputLayout.vue'

const props = defineProps({
  isLoginPage: Boolean,
  label: { type: String, required: true },
  type: { type: String, required: true },
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
</script>

<template>
  <InputLayout :label="label" :error-message="errorMessage">
    <div v-if="isLoginPage" class="text-input__icon">
      <UserIcon v-if="isLoginPage && type === 'text'" />
      <PasswordIcon v-if="isLoginPage && type === 'password'" />
    </div>
    <input
      :class="[
        {
          'text-input--login-page': isLoginPage,
          'text-input--error': errorMessage.length > 0,
          'text-input--weight': name === 'weight'
        },
        'text-input'
      ]"
      :type="type"
      :name="name"
      :value="modelValue"
      @input="updateValue"
    />
    <div v-if="name === 'weight'" class="text-input__weight-label">
      <span>kg</span>
    </div>
  </InputLayout>
</template>

<style lang="scss" scoped>
.text-input__icon {
  position: absolute;
  top: 1.2rem;
  left: 1.8rem;
}
.text-input__weight-label {
  position: absolute;
  top: 1.3rem;
  right: 1.8rem;
  span {
    font-size: 1.4rem;
    color: #5f5f5f;
  }
}
.text-input {
  width: 100%;
  padding: 1.2rem 2rem;
  border: 0.1rem solid #cfcfcf;
  border-radius: 2rem;
  &:focus {
    outline: none;
    border-color: #ff8125;
  }
}
.text-input--login-page {
  padding: 1.2rem 4rem;
}
.text-input--error {
  border-color: #ff4343;
  &:focus {
    outline: none;
    border-color: #ff4343;
  }
}
.text-input--weight {
  padding: 1.2rem 4rem 1.2rem 2rem;
}
</style>
