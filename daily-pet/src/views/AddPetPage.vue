<script setup lang="ts">
import { ref } from 'vue'
import Plus from '@/assets/icon/Plus.vue'
import Input from '../components/Form/Input/InputAddPet.vue'
import Radio from '../components/Form/Radio/Radio.vue'
import Checkbox from '../components/Form/Checkbox/Checkbox.vue'
import Button from '../components/Button/ButtonAddPet.vue'
import InputMedicine from '@/components/Form/Input/InputMedicine.vue'

const selectedPet = ref<string>('강아지')
const checkedBirthday = ref<boolean>(false)
const checkedFirstday = ref<boolean>(false)
const checkedGender = ref<boolean>(false)
const checkedNeutralize = ref<boolean>(false)
const checkedVaccin = ref<boolean>(false)
const checkedToilet = ref<boolean>(false)

const alertName = ref<boolean>(false)
const alertBirthday = ref<boolean>(false)
const alertFirstday = ref<boolean>(false)
const alertWeight = ref<boolean>(false)
const alertGender = ref<boolean>(false)
const alertNeutralize = ref<boolean>(false)
const alertVaccin = ref<boolean>(false)
const alertToilet = ref<boolean>(false)
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

      <Input
        span="이름"
        name="text"
        type="text"
        class="input_text"
        alert="올바른 형식이 아닙니다."
        :showAlert="alertName"
      />

      <Input
        span="생일"
        name="date"
        type="date"
        class="input_date"
        alert="올바른 날짜가 아닙니다."
        :disabled="checkedBirthday"
        :showAlert="alertBirthday"
      >
        <Checkbox id="birthday" label="몰라요" v-model="checkedBirthday" />
      </Input>

      <Input
        span="처음 만난 날"
        name="date"
        type="date"
        class="input_date"
        alert="올바른 날짜가 아닙니다."
        :disabled="checkedFirstday"
        :showAlert="alertFirstday"
      >
        <Checkbox id="firstday" label="몰라요" v-model="checkedFirstday" />
      </Input>

      <Input
        span="몸무게"
        name="text"
        type="text"
        class="input_text"
        alert="올바른 형식이 아닙니다."
        :showAlert="alertWeight"
      />

      <Radio
        span="성별"
        name="gender"
        id="male"
        id2="female"
        label="남"
        label2="여"
        :disabled="checkedGender"
        :showAlert="alertGender"
      >
        <Checkbox id="gender" label="몰라요" v-model="checkedGender" />
      </Radio>
      <Radio
        span="중성화"
        name="neutralize"
        id="yesN"
        id2="noN"
        label="O"
        label2="X"
        :disabled="checkedNeutralize"
        :showAlert="alertNeutralize"
      >
        <Checkbox id="neutralize" label="몰라요" v-model="checkedNeutralize" />
      </Radio>
      <Radio
        span="필수접종"
        name="vaccin"
        id="yesV"
        id2="noV"
        label="O"
        label2="X"
        :disabled="checkedVaccin"
        :showAlert="alertVaccin"
      >
        <Checkbox id="vaccin" label="몰라요" v-model="checkedVaccin" />
      </Radio>
      <InputMedicine />
      <Radio
        span="배변장소"
        name="toilet"
        id="indoor"
        id2="outdoor"
        label="실내"
        label2="실외"
        :disabled="checkedToilet"
        :showAlert="alertToilet"
        v-if="selectedPet === '강아지'"
      >
        <Checkbox id="toilet" label="둘다" v-model="checkedToilet" />
      </Radio>
      <Button btn_name="등록하기" />
    </section>
  </main>
</template>

<style scoped>
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.section_add_pet {
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
