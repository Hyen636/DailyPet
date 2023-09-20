<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import Logo from '../components/Common/Logo/Logo.vue'
import Input from '../components/Form/Input/Input.vue'
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
  if (id.value !== 'test') {
    errorMessage.id = '존재하지 않는 아이디입니다.'
  } else if (password.value !== 'test') {
    errorMessage.password = '비밀번호가 올바르지 않습니다.'
  } else {
    router.push('/')
  }
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
    <form class="login-page__form" @submit.prevent="onSubmit">
      <Input
        :is-login-page="true"
        label="아이디"
        type="text"
        :error-message="errorMessage.id"
        v-model="id"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
        >
          <path
            d="M7.5 0.086853C5.4375 0.086853 3.75 2.18685 3.75 4.77435C3.75 7.36185 5.4375 9.46185 7.5 9.46185C9.5625 9.46185 11.25 7.36185 11.25 4.77435C11.25 2.18685 9.5625 0.086853 7.5 0.086853ZM3.58125 9.46185C1.59375 9.5556 0 11.1869 0 13.2119V15.0869H15V13.2119C15 11.1869 13.425 9.5556 11.4188 9.46185C10.4062 10.6056 9.01875 11.3369 7.5 11.3369C5.98125 11.3369 4.59375 10.6056 3.58125 9.46185Z"
            fill="#FF8125"
          />
        </svg>
      </Input>
      <Input
        :is-login-page="true"
        label="비밀번호"
        type="password"
        :error-message="errorMessage.password"
        v-model="password"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
        >
          <path
            d="M13.341 1.74941C11.1216 -0.46253 7.52253 -0.46253 5.31808 1.74941C3.76598 3.28651 3.3011 5.49845 3.90094 7.44794L0.376845 10.972C0.129408 11.227 -0.0430482 11.7293 0.00943837 12.0893L0.234381 13.7238C0.31686 14.2637 0.819231 14.7736 1.35909 14.8486L2.99368 15.0735C3.35358 15.126 3.85596 14.961 4.11089 14.6986L4.72573 14.0837C4.8757 13.9413 4.8757 13.7013 4.72573 13.5514L3.27111 12.0968C3.05366 11.8793 3.05366 11.5194 3.27111 11.302C3.48855 11.0845 3.84846 11.0845 4.0659 11.302L5.52803 12.7641C5.67049 12.9065 5.91043 12.9065 6.05291 12.7641L7.6425 11.182C9.58451 11.7893 11.7964 11.317 13.341 9.77985C15.553 7.56791 15.553 3.96134 13.341 1.74941ZM9.37456 7.58291C8.33983 7.58291 7.50004 6.74312 7.50004 5.70839C7.50004 4.67366 8.33983 3.83387 9.37456 3.83387C10.4093 3.83387 11.2491 4.67366 11.2491 5.70839C11.2491 6.74312 10.4093 7.58291 9.37456 7.58291Z"
            fill="#FF8125"
          />
        </svg>
      </Input>
      <Button :is-large="true">로그인</Button>
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
