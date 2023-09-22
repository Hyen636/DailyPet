<script setup lang="ts">
import PetType from './PetType/PetType.vue'
import PetInfo from './PetInfo/PetInfo.vue'

const props = defineProps({ type: String, gender: String, age: Number, weight: Number })
</script>

<template>
  <div class="profile-container">
    <PetType :type="type" />
    <PetInfo :gender="gender" :age="age" :weight="weight" />
  </div>
</template>

<style lang="scss" scoped>
.profile-container {
  transform: translateY(-4rem);
  width: 90%;
  display: flex;
  justify-content: space-between;
  padding: 3rem 3.5rem;
  background-color: #fff;
  border-radius: 2rem;
  box-shadow: 0rem 0.3rem 1rem 0rem rgba(0, 0, 0, 0.15);
}
</style>
