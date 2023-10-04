<script setup lang="ts">
import { ref } from 'vue'
import Plus from '@/assets/icon/PlusIcon.vue'
import TextInput from '../components/Form/Input/TextInput.vue'
import DateInput from '../components/Form/Input/DateInput.vue'
import RadioInput from '../components/Form/Input/RadioInput.vue'
import Button from '../components/Form/Button/Button.vue'
import ListInput from '@/components/Form/Input/ListInput/ListInput.vue'

const selectedPet = ref<string>('강아지')
const name = ref<string>('')
const date = ref<string>('')
const birthDay = ref<string>('')
const weight = ref<string>('')
const gender = ref<string>('')
const neutering = ref<string>('')
const vaccin = ref<string>('')
const toilet = ref<string>('')

const onSubmit = () => {}
</script>

<template>
  <main class="main_add_pet">
    <div class="profile_image">
      <Plus />
    </div>
    <section class="section_add_pet">
      <div class="tab_choose_pet">
        <input
          type="radio"
          class="btn_radio btn_radio_pet"
          name="pet"
          id="dog"
          value="강아지"
          v-model="selectedPet"
        />
        <label for="dog" class="btn_choose_pet">강아지</label>
        <input
          type="radio"
          class="btn_radio btn_radio_pet"
          name="pet"
          id="cat"
          value="고양이"
          v-model="selectedPet"
        />
        <label for="cat" class="btn_choose_pet">고양이</label>
      </div>
      <form id="addPet" :submit.prevent="onSubmit">
        <TextInput label="이름" name="text" type="text" errorMessage="" v-model="name" />
        <DateInput label="생일" name="birthDay" errorMessage="" v-model="date" />
        <DateInput label="처음 만난 날" name="firstDay" errorMessage="" v-model="birthDay" />
        <TextInput label="몸무게" name="weight" type="number" errorMessage="" v-model="weight" />
        <RadioInput
          label="성별"
          name="gender"
          leftId="male"
          rightId="female"
          leftLabel="남"
          rightLabel="여"
          error-message=""
          v-model="gender"
        />
        <RadioInput
          label="중성화"
          name="neutering"
          leftId="didNeutering"
          rightId="didNotNeutering"
          leftLabel="O"
          rightLabel="X"
          error-message=""
          v-model="neutering"
        />
        <RadioInput
          label="필수접종"
          name="vaccin"
          leftId="didVaccin"
          rightId="didNotVaccin"
          leftLabel="O"
          rightLabel="X"
          error-message=""
          v-model="vaccin"
        />
        <ListInput
          label="약 및 기타 건강식품 (비타민, 유산균 등)"
          name="medicine"
          error-message=""
        />
        <RadioInput
          v-if="selectedPet === '강아지'"
          label="배변장소"
          name="toilet"
          leftId="indoor"
          rightId="outdoor"
          leftLabel="실내"
          rightLabel="실외"
          error-message=""
          v-model="toilet"
        />
      </form>
      <Button id="addPet" :isLarge="true" :on-click-event="onSubmit">등록하기</Button>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.profile_image {
  width: 12rem;
  height: 12rem;
  background-color: #ff8125;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
  margin-bottom: 2rem;
}

.main_add_pet {
  max-width: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 5rem;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }
}

.section_add_pet {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}

.tab_choose_pet {
  margin-bottom: 3rem;
}

.btn_radio {
  display: none;
  opacity: 0;
}

.btn_choose_pet {
  display: inline-block;
  width: 12rem;
  border-bottom: 2px solid var(--Border-Line, #cfcfcf);
  padding: 1rem 0.5rem 1rem 0.5rem;
  text-align: center;
  color: var(--Light-Gray, #cfcfcf);
  font-size: 1.4rem;
  font-weight: 400;
}
.btn_radio:checked + label {
  border-bottom: 2px solid var(--Border-Line, #ff8125);
  color: #ff8125;
}

.input,
.radio {
  width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
}
.radio > span {
  display: block;
  font-size: 1.4rem;
  color: var(--Black, #222);
  font-weight: 300;
}
</style>
