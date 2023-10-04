<script setup lang="ts">
import { ref } from 'vue'
import PlusBoxIcon from '@/assets/icon/PlusBoxIcon.vue'
import InputLayout from '../InputLayout.vue'
import DataListVue from './DataList.vue'

const props = defineProps({
  label: { type: String, required: true },
  name: { type: String, required: true },
  errorMessage: { type: String, required: true }
})

let id = 0

const newData = ref('')
const datas = ref<{ id: number; content: string; readOnly: boolean; listErorMessage: String }[]>([])
const selectedData = ref<{
  id: number
  content: string
  readOnly: boolean
  listErorMessage: String
} | null>(null)
const errorMessage = ref('')

function addData() {
  if (newData.value.trim() !== '') {
    datas.value.push({ id: id++, content: newData.value, readOnly: true, listErorMessage: '' })
    newData.value = ''
    errorMessage.value = ''
  } else {
    errorMessage.value = '입력창이 비었습니다.'
  }
}

function removeData(data: {
  id: number
  content: string
  readOnly: boolean
  listErorMessage: String
}) {
  const index = datas.value.indexOf(data)
  if (index !== -1) {
    datas.value.splice(index, 1)
  }
}

function editData(data: {
  id: number
  content: string
  readOnly: boolean
  listErorMessage: String
}) {
  data.readOnly = !data.readOnly
  if (!data.readOnly) {
    selectedData.value = data
  }
}

function saveData(
  data: { id: number; content: string; readOnly: boolean; listErorMessage: String } | null
) {
  if (data) {
    const index = datas.value.findIndex((item) => item.id === data.id)
    if (index !== -1) {
      if (data.content.trim() === '') {
        datas.value[index].listErorMessage = '입력창이 비었습니다.'
        return
      }
      datas.value[index].content = data.content
      datas.value[index].readOnly = true
      datas.value[index].listErorMessage = ''
    }
    selectedData.value = null
  }
}
</script>

<template>
  <InputLayout :label="label" :error-message="errorMessage" :isDateInput="true">
    <input type="text" class="list-input" :name="name" v-model="newData" @keyup.enter="addData" />
    <button type="button" class="list-input__btn" @click="addData">
      <PlusBoxIcon />
    </button>
  </InputLayout>
  <ul class="input-container__list-container">
    <DataListVue
      v-for="data in datas"
      :key="data.id"
      :data="data"
      :save-data="saveData"
      :edit-data="editData"
      :remove-data="removeData"
    />
  </ul>
</template>

<style lang="scss" scoped>
.list-input {
  padding: 1.2rem 2rem;
  border: 0.1rem solid #cfcfcf;
  border-radius: 2rem;
  &:focus {
    outline: none;
    border-color: #ff8125;
  }
}
.list-input__btn {
  border: none;
  background-color: inherit;
}
</style>
