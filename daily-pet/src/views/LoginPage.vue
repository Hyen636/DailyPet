<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import Logo from '../components/Common/Logo/Logo.vue'
import TextInput from '../components/Form/Input/TextInput.vue'
import Button from '../components/Form/Button/Button.vue'
import OAuth from '../components/OAuth/OAuth.vue'
import router from '@/router'

const id = ref('')
const password = ref('')
const errorMessage = reactive({
  id: '',
  password: ''
})

const onSubmit = () => {
  console.log(id.value)
  if (id.value !== 'test') {
    errorMessage.id = '존재하지 않는 아이디입니다.'
  } else if (password.value !== 'test') {
    errorMessage.password = '비밀번호가 올바르지 않습니다.'
  } else {
    router.push('/')
  }
  console.log(errorMessage)
}

watch(id, () => {
  if (id.value === '') {
    errorMessage.id = ''
  }
})

watch(password, () => {
  if (password.value === '') {
    errorMessage.password = ''
  }
})
</script>

<template>
  <div class="login-page">
    <Logo />
    <form id="login-page" class="login-page__form" @submit.prevent="onSubmit">
      <TextInput
        :is-login-page="true"
        label="아이디"
        type="text"
        name="id"
        :error-message="errorMessage.id"
        v-model="id"
      />
      <TextInput
        :is-login-page="true"
        label="비밀번호"
        type="password"
        name="password"
        :error-message="errorMessage.password"
        v-model="password"
      />
      <Button id="login-page" :is-large="true" :on-click-event="onSubmit">로그인</Button>
    </form>
    <OAuth />
    <div class="login-page__link">
      <router-link to="/find-user">아이디 / 비밀번호 찾기</router-link>
      <span>ㆍ</span>
      <router-link to="/join">회원가입</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-page {
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 10rem;
  .login-page__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 5.5rem;
    margin-bottom: 2rem;
  }
  .login-page__link {
    margin-top: 2rem;
    a {
      font-size: 1.2rem;
      text-decoration: none;
      color: #5f5f5f;
      &:hover {
        color: #222;
      }
    }
  }
}
</style>
