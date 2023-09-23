<script setup lang="ts">
import Checkbox from '../Checkbox/Checkbox.vue'
const props = defineProps({
  span: String,
  name: String,
  id: String,
  id2: String,
  label: String,
  label2: String,
  disabled: Boolean,
  showAlert: Boolean
})
</script>

<template>
  <div class="radio">
    <span>{{ span }}</span>
    <div class="input_radio_box">
      <input
        type="radio"
        class="input_radio"
        :name="name"
        :id="id"
        :value="id"
        :disabled="disabled"
      />
      <label :for="id" class="input_radio_label">{{ label }}</label>
      <input
        type="radio"
        class="input_radio"
        :name="name"
        :id="id2"
        :value="id2"
        :disabled="disabled"
      />
      <label :for="id2" class="input_radio_label">{{ label2 }}</label>
      <slot></slot>
    </div>
    <span class="alert" v-show="showAlert">하나 이상 선택하셔야 합니다.</span>
  </div>
</template>

<style scoped>
.input_radio_box {
  width: 30rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.radio > span {
  display: block;
  font-size: 1.4rem;
  color: var(--Black, #222);
  font-weight: 300;
}

.input_radio {
  display: none;
  opacity: 0;
}

.input_radio_label {
  width: 6.8rem;
  height: 1.7rem;
  text-align: center;
  border-radius: 4px;
  background: var(--Point-Color, #ff8125);
  padding: 1.2rem 1.6rem;
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: normal;
}

.input_radio:checked + label {
  background: var(--Dark-Point_color, #ff5c00);
  color: #ffffff;
}

.input_radio:disabled + label {
  background: var(--Dark-Point_color, #868686);
  color: #ffffff;
}

.radio > .alert {
  color: var(--Red, #ff4343);
  font-size: 1rem;
  font-weight: 300;
  margin-left: 1rem;
}
</style>
