<script setup lang="ts">
import { reactive } from 'vue'
import Profile from '../components/Profile/Profile.vue'
import Navigation from '../components/Common/Navigation/Navigation.vue'
import EmptyTodo from '../components/Todo/EmptyTodo/EmptyTodo.vue'
import Image_1 from '@/assets/images/avatar_1.png'
import Image_2 from '@/assets/images/avatar_2.png'

const profile = reactive({
  name: '멍멍이',
  greeting: '오늘 산책은 하셨나요?',
  images: [Image_1, Image_2],
  type: 'dog',
  gender: '남자',
  age: 3,
  weight: 4.85
})
</script>

<template>
  <Profile
    :name="profile.name"
    :greeting="profile.greeting"
    :images="profile.images"
    :type="profile.type"
    :gender="profile.gender"
    :age="profile.age"
    :weight="profile.weight"
  />
  <EmptyTodo />
  <Navigation />
</template>

<style lang="scss" scoped></style>
