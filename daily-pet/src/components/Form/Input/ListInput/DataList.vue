<script setup lang="ts">
import CheckIcon from '@/assets/icon/CheckIcon.vue'
import DeleteIcon from '@/assets/icon/DeleteIcon.vue'
import EditIcon from '@/assets/icon/EditIcon.vue'
import { computed } from 'vue'

const props = defineProps({
  data: { type: Object, required: true },
  saveData: { type: Function, required: true },
  editData: { type: Function, required: true },
  removeData: { type: Function, required: true }
})
console.log(props.data)
let data = computed(() => props.data)
let listErorMessage = computed(() => props.data.listErorMessage)
</script>

<template>
  <li class="data-list">
    <div class="data-list__container">
      <input
        type="text"
        class="data-list__input"
        :readonly="data.readOnly"
        v-model="data.content"
      />
      <div class="data-list__btn-container">
        <button type="button" class="data-list__btn" v-if="!data.readOnly" @click="saveData(data)">
          <CheckIcon />
        </button>
        <button type="button" class="data-list__btn" v-if="data.readOnly" @click="editData(data)">
          <EditIcon />
        </button>
      </div>
      <button type="button" class="data-list__btn" @click="removeData(data)">
        <DeleteIcon />
      </button>
    </div>
    <div class="data-list__error-message">{{ listErorMessage }}</div>
  </li>
</template>

<style lang="scss" scoped>
.data-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  .data-list__container {
    position: relative;
    display: grid;
    grid-template-columns: 4fr 1fr;
    .data-list__input {
      width: 100%;
      padding: 1.2rem 2rem;
      border: 0.1rem solid #cfcfcf;
      border-radius: 2rem;
      &:focus {
        outline: none;
        border-color: #ff8125;
      }
    }
    .data-list__btn-container {
      position: absolute;
      top: 1.2rem;
      right: 7rem;
    }
    .data-list__btn {
      border: none;
      background-color: inherit;
    }
  }
  .data-list__error-message {
    height: 1.2rem;
    font-size: 1rem;
    color: #ff4343;
    padding-left: 1rem;
  }
}
</style>
