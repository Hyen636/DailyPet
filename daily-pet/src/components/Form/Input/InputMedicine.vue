<script setup lang="ts">
import { ref } from 'vue'

let id = 0
const newMedicine = ref('')
const medicines = ref<{ id: number; text: string; readonly: boolean }[]>([])
const selectedMedicine = ref<{ id: number; text: string; readonly: boolean } | null>(null)

const alert = ref<Boolean>(false)

function addMedicine() {
  if (newMedicine.value.trim() !== '') {
    medicines.value.push({ id: id++, text: newMedicine.value, readonly: true })
    newMedicine.value = ''
    alert.value = false
  } else {
    alert.value = true
  }
}

function removeMedicine(medicine: { id: number; text: string; readonly: boolean }) {
  const index = medicines.value.indexOf(medicine)
  if (index !== -1) {
    medicines.value.splice(index, 1)
  }
}

function editMedicine(medicine: { id: number; text: string; readonly: boolean }) {
  medicine.readonly = !medicine.readonly
  if (!medicine.readonly) {
    selectedMedicine.value = medicine
  }
}

function saveMedicine(medicine: { id: number; text: string; readonly: boolean } | null) {
  if (medicine) {
    const index = medicines.value.findIndex((item) => item.id === medicine.id)
    if (index !== -1) {
      if (medicine.text.trim() === '') {
        alert.value = true
        return
      }
      medicines.value[index].text = medicine.text
      medicines.value[index].readonly = true
    }
    selectedMedicine.value = null
  }
}
</script>

<template>
  <div class="input">
    <span>약 및 기타 건강식품 (비타민, 유산균 등)</span>
    <form class="input_medicine_box" @submit.prevent="addMedicine">
      <input type="text" class="input_medicine" name="medicine" v-model="newMedicine" />
      <button class="btn_medicine">+</button>
    </form>
    <span class="alert" v-show="alert">입력창이 비었습니다.</span>
    <ul>
      <li class="input_medicine_box" v-for="medicine in medicines" :key="medicine.id">
        <input
          type="text"
          class="input_medicine_list"
          :value="medicine.text"
          :readonly="medicine.readonly"
          @input="medicine.text = ($event as Event).target.value"
        />
        <button class="btn_medicine" v-if="!medicine.readonly" @click="saveMedicine(medicine)">
          ✓
        </button>
        <button class="btn_medicine" v-if="medicine.readonly" @click="editMedicine(medicine)">
          ✏️
        </button>
        <button class="btn_medicine" @click="removeMedicine(medicine)">x</button>
      </li>
    </ul>
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

.input_medicine_box {
  width: 30rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.input_medicine {
  width: 23rem;
}

.input_medicine_list {
  width: 21rem;
}

.btn_medicine {
  border: solid 1px #ff8125;
  background: #ffffff;
  color: #ff8125;
}
</style>
