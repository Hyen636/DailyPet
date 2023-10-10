<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  subTitle: String,
  isCheckType: Boolean,
  maxCountCheck: { type: Number, default: 0 },
  countCheck: { type: Number, default: 0 },
  isTodoCheck: Boolean
})

const countCheck = ref(props.countCheck)
const isTodoCheck = ref(props.isTodoCheck)

const onClickCheckBtn = () => {
  if (props.maxCountCheck === countCheck.value + 1) {
    countCheck.value += 1
    isTodoCheck.value = !isTodoCheck.value
  } else if (props.maxCountCheck > countCheck.value) {
    countCheck.value += 1
  } else if (props.maxCountCheck === countCheck.value) {
    countCheck.value -= 1
    isTodoCheck.value = !isTodoCheck.value
  }
}
const onClickNormalBtn = () => {
  isTodoCheck.value = !isTodoCheck.value
}
</script>

<template>
  <div :class="['todo-box', { 'todo-box--checked': isTodoCheck }]">
    <div class="todo-box__header">
      <span class="todo-box__title">{{ title }}</span>
      <span :class="['todo-box__sub-title', { 'todo-box__sub-title--checked': isTodoCheck }]">{{
        subTitle
      }}</span>
    </div>
    <div class="todo-box__footer">
      <div v-if="isCheckType" class="btn-container" @click="onClickCheckBtn">
        <div
          v-if="maxCountCheck >= 3"
          :class="[
            'btn-container__check-btn',
            { 'btn-container__check-btn--checked': isTodoCheck }
          ]"
        >
          <svg
            v-if="countCheck >= 3"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
          >
            <path
              d="M4.07573 9.17343L0.175729 5.27343C-0.0585762 5.03912 -0.0585762 4.65923 0.175729 4.4249L1.02424 3.57637C1.25854 3.34204 1.63846 3.34204 1.87277 3.57637L4.5 6.20357L10.1272 0.576363C10.3615 0.342059 10.7415 0.342059 10.9758 0.576363L11.8243 1.4249C12.0586 1.6592 12.0586 2.0391 11.8243 2.27343L4.92426 9.17346C4.68994 9.40776 4.31004 9.40776 4.07573 9.17343Z"
              :fill="isTodoCheck ? '#ff8125' : '#fff'"
            />
          </svg>
        </div>
        <div
          v-if="maxCountCheck >= 2"
          :class="[
            'btn-container__check-btn',
            { 'btn-container__check-btn--checked': isTodoCheck }
          ]"
        >
          <svg
            v-if="countCheck >= 2"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
          >
            <path
              d="M4.07573 9.17343L0.175729 5.27343C-0.0585762 5.03912 -0.0585762 4.65923 0.175729 4.4249L1.02424 3.57637C1.25854 3.34204 1.63846 3.34204 1.87277 3.57637L4.5 6.20357L10.1272 0.576363C10.3615 0.342059 10.7415 0.342059 10.9758 0.576363L11.8243 1.4249C12.0586 1.6592 12.0586 2.0391 11.8243 2.27343L4.92426 9.17346C4.68994 9.40776 4.31004 9.40776 4.07573 9.17343Z"
              :fill="isTodoCheck ? '#ff8125' : '#fff'"
            />
          </svg>
        </div>
        <div
          v-if="maxCountCheck >= 1"
          :class="[
            'btn-container__check-btn',
            { 'btn-container__check-btn--checked': isTodoCheck }
          ]"
        >
          <svg
            v-if="countCheck >= 1"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
          >
            <path
              d="M4.07573 9.17343L0.175729 5.27343C-0.0585762 5.03912 -0.0585762 4.65923 0.175729 4.4249L1.02424 3.57637C1.25854 3.34204 1.63846 3.34204 1.87277 3.57637L4.5 6.20357L10.1272 0.576363C10.3615 0.342059 10.7415 0.342059 10.9758 0.576363L11.8243 1.4249C12.0586 1.6592 12.0586 2.0391 11.8243 2.27343L4.92426 9.17346C4.68994 9.40776 4.31004 9.40776 4.07573 9.17343Z"
              :fill="isTodoCheck ? '#ff8125' : '#fff'"
            />
          </svg>
        </div>
      </div>
      <div v-if="!isCheckType" class="btn-container">
        <button
          :class="['btn-container__btn', { 'btn-container__btn--checked': isTodoCheck }]"
          @click="onClickNormalBtn"
        >
          {{ isTodoCheck ? '완료' : '미완료' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.todo-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15.5rem;
  height: 10rem;
  padding: 2rem;
  color: #222;
  border-radius: 2rem;
  box-shadow: 0rem 0.3rem 1rem 0rem rgba(0, 0, 0, 0.15);
  .todo-box__header {
    display: flex;
    flex-direction: column;
    .todo-box__title {
      font-size: 1.8rem;
    }
    .todo-box__sub-title {
      font-size: 1.2rem;
      color: #5f5f5f;
    }
    .todo-box__sub-title--checked {
      color: #fff;
    }
  }
  .todo-box__footer {
    align-self: flex-end;
    .btn-container {
      display: flex;
      gap: 0.2rem;
      .btn-container__check-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1.8rem;
        aspect-ratio: 1/1;
        background-color: #ff8125;
        border-radius: 50%;
      }
      .btn-container__check-btn--checked {
        background-color: #fff;
      }
      .btn-container__btn {
        width: 5rem;
        padding: 0.2rem 0.8rem;
        font-size: 1.2rem;
        border: none;
        border-radius: 2rem;
        color: #fff;
        background-color: #ff8125;
      }
      .btn-container__btn--checked {
        color: #5f5f5f;
        background-color: #fff;
      }
    }
  }
}
.todo-box--checked {
  background-color: #ff8125;
  color: #fff;
}
</style>
