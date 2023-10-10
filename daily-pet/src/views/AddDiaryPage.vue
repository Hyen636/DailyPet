<script setup lang="ts">
import Plus from '@/assets/icon/PlusIcon.vue'
import TextareaInput from '@/components/Form/Input/TextareaInput.vue'
import Button from '@/components/Form/Button/Button.vue'
import { ref } from 'vue'

const addMedical = ref<boolean>(false)
const btnAddMedical = () => {
  console.log(addMedical)
  addMedical.value = !addMedical.value
}
</script>

<template>
  <form class="add_diary_form">
    <div class="add_image">
      <Plus fill="#868686" />
    </div>
    <TextareaInput />
    <hr />
    <div class="add_medical_box">
      <label>진료기록</label>
      <div class="add_medical" @click="btnAddMedical" v-show="!addMedical">
        <Plus fill="#868686" />
      </div>
      <div class="medical_box" v-show="addMedical">
        <TextareaInput><label>증상</label></TextareaInput>
        <TextareaInput><label>증상</label></TextareaInput>
      </div>
      <Button :isLarge="true">저장하기</Button>
    </div>
  </form>
</template>

<style scoped>
.add_diary_form {
  max-width: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 5rem;
  gap: 2rem;
}
.add_image {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 3.3rem;
  box-shadow: 0rem 0.3rem 1rem 0rem rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
}

hr {
  width: 100%;
  border: solid 0.1rem #cfcfcf;
}

.add_medical_box {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
}

.add_medical {
  width: 100%;
  aspect-ratio: 1 / 0.3;
  border-radius: 3rem;
  box-shadow: 0rem 0.3rem 1rem 0rem rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
}
.medical_box {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
}
</style>
