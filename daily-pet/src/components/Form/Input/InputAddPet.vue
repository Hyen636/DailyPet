<script setup lang="ts">
const props = defineProps({
  name: String,
  span: String,
  alert: String,
  type: String,
  class: String,
  disabled: Boolean,
  showAlert: Boolean
})
</script>

<template>
  <div v-if="name === 'text'" class="input">
    <span>{{ span }}</span>
    <input :type="type" :class="class" :name="name" />
    <slot></slot>
    <span class="alert" v-show="showAlert">{{ alert }}</span>
  </div>

  <div v-else-if="name === 'date'" class="input">
    <span>{{ span }}</span>
    <div class="input_date_box">
      <input :type="type" :class="class" :name="name" :disabled="disabled" />
      <slot></slot>
    </div>
    <span class="alert" v-show="showAlert">{{ alert }}</span>
  </div>
</template>

<style scoped>
.input {
  width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
}

.input > span {
  display: block;
  font-size: 1.4rem;
  color: var(--Black, #222);
  font-weight: 300;
}

.input input {
  padding: 1.2rem 2rem;
  border-radius: 20px;
  border: 1px solid var(--Border-Line, #cfcfcf);
}

.input_text {
  width: 26rem;
}

.input_date {
  width: 17.5rem;
}
.input input:focus {
  outline: none;
  border: 1px solid var(--Border-Line, #ff8125);
}

.input > .alert {
  color: var(--Red, #ff4343);
  font-size: 1rem;
  font-weight: 300;
  margin-left: 1rem;
}

.input_date_box {
  width: 30rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input_date_box > label {
  color: var(--Black, #222);
  font-size: 1.2rem;
  font-weight: 300;
}
</style>
