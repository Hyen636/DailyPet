<script setup lang="ts">
import ProfileHeader from './ProfileHeader/ProfileHeader.vue'
import ProfileContainer from './ProfileContainer/ProfileContainer.vue'

const props = defineProps({
  name: String,
  greeting: String,
  images: Object,
  type: String,
  gender: String,
  age: Number,
  weight: Number
})
</script>

<template>
  <div class="profile">
    <ProfileHeader :name="name" :greeting="greeting" :images="images" />
    <ProfileContainer :type="type" :gender="gender" :age="age" :weight="weight" />
  </div>
</template>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
