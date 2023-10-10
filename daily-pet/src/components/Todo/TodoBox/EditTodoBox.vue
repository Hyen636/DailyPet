<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  subTitle: String,
  isCheckType: Boolean,
  maxCountCheck: { type: Number, default: 0 },
  isTodoCheck: Boolean
})

const isTodoCheck = ref(props.isTodoCheck)

const onClickTodoBox = () => {
  isTodoCheck.value = !isTodoCheck.value
}
</script>

<template>
  <div :class="['edit-todo-box', { 'todo-box--checked': isTodoCheck }]" @click="onClickTodoBox">
    <div class="edit-todo-box__header">
      <div class="edit-todo-box__title-container">
        <span class="title-container__title">{{ title }}</span>
        <button :class="'title-container__btn'">수정</button>
      </div>
      <span class="edit-todo-box__sub-title">{{ subTitle }}</span>
    </div>
    <div class="edit-todo-box__footer">
      <div v-if="isCheckType" class="edit-btn-container">
        <div v-if="maxCountCheck >= 3" class="edit-btn-container__check-btn"></div>
        <div v-if="maxCountCheck >= 2" class="edit-btn-container__check-btn"></div>
        <div v-if="maxCountCheck >= 1" class="edit-btn-container__check-btn"></div>
      </div>
    </div>
    <svg
      class="edit-todo-box__check-icon"
      v-if="isTodoCheck"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="23"
      viewBox="0 0 30 23"
      fill="none"
    >
      <path
        d="M10.1893 21.932L0.439322 12.182C-0.146441 11.5962 -0.146441 10.6465 0.439322 10.0607L2.56059 7.93933C3.14636 7.35351 4.09616 7.35351 4.68192 7.93933L11.25 14.5073L25.3181 0.439322C25.9038 -0.146441 26.8536 -0.146441 27.4394 0.439322L29.5607 2.56065C30.1464 3.14641 30.1464 4.09616 29.5607 4.68198L12.3107 21.9321C11.7248 22.5178 10.7751 22.5178 10.1893 21.932Z"
        fill="#FF8125"
      />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.edit-todo-box {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15.5rem;
  height: 10rem;
  padding: 2rem;
  color: #222;
  border-radius: 2rem;
  box-shadow: 0rem 0.3rem 1rem 0rem rgba(0, 0, 0, 0.15);
  .edit-todo-box__header {
    display: flex;
    flex-direction: column;
    .edit-todo-box__title-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title-container__title {
        font-size: 1.8rem;
      }
      .title-container__btn {
        width: 5rem;
        padding: 0.2rem 0.8rem;
        font-size: 1.2rem;
        border: none;
        border-radius: 2rem;
        color: #fff;
        background-color: #ff8125;
      }
    }
    .edit-todo-box__sub-title {
      font-size: 1.2rem;
      color: #5f5f5f;
    }
  }
  .edit-todo-box__footer {
    align-self: flex-end;
    .edit-btn-container {
      display: flex;
      gap: 0.2rem;
      .edit-btn-container__check-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1.8rem;
        aspect-ratio: 1/1;
        background-color: #ff8125;
        border-radius: 50%;
      }
    }
  }
  .edit-todo-box__check-icon {
    position: absolute;
    top: -1.5rem;
    right: -0.8rem;
  }
}
.todo-box--checked {
  outline: 0.2rem solid #ff8125;
}
</style>
