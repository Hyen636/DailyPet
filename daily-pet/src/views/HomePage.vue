<script setup lang="ts">
import { reactive } from 'vue'
import Profile from '../components/Profile/Profile.vue'
import Navigation from '../components/Common/Navigation/Navigation.vue'
import EmptyTodo from '../components/Todo/EmptyTodo/EmptyTodo.vue'
import TodoBox from '@/components/Todo/TodoBox/TodoBox.vue'
import EditTodoBox from '@/components/Todo/TodoBox/EditTodoBox.vue'
import Image_1 from '@/assets/images/avatar_1.png'
import Image_2 from '@/assets/images/avatar_2.png'

const profile = reactive({
  name: '멍멍이',
  greeting: '오늘 산책은 하셨나요?',
  images: [Image_1, Image_2],
  type: 'dog',
  gender: '남자',
  age: 3,
  weight: 4.85,
  isHaveTodo: true
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
  <div class="todo">
    <div class="todo__header">
      <span class="todo__date">2023.09.12</span>
      <span class="todo__title">오늘의 할일</span>
    </div>
    <div v-if="profile.isHaveTodo" class="todo__content">
      <TodoBox
        title="식사량"
        sub-title="20/60g"
        button-type="check"
        :maxCountCheck="3"
        :count-check="0"
      />
      <TodoBox title="배변" sub-title="건강한상태" button-type="normal" :is-todo-check="true" />
      <TodoBox
        title="유산균"
        sub-title="1/2g"
        button-type="check"
        :maxCountCheck="2"
        :count-check="2"
        :is-todo-check="true"
      />
      <TodoBox title="간식" button-type="normal" />
      <TodoBox title="심장사상충" sub-title="2023.10.05" />
      <EditTodoBox title="식사량" sub-title="일일 60g" button-type="check" :max-count-check="3" />
    </div>
    <EmptyTodo v-else />
  </div>
  <Navigation />
</template>

<style lang="scss" scoped>
.todo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 0rem 3rem;
  .todo__header {
    align-self: self-start;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: #5f5f5f;
    .todo__date {
      font-size: 1.4rem;
    }
    .todo__title {
      font-size: 2rem;
    }
  }
  .todo__content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
}
</style>
