<script setup lang="ts">
import Avatar from './Avatar/Avatar.vue'

const props = defineProps({
  name: String,
  greeting: String,
  images: Object
})
</script>

<template>
  <div class="profile-header">
    <div class="profile-header__content">
      <h1 class="profile-header__name">{{ name }}</h1>
      <span class="profile-header__greeting">{{ greeting }}</span>
    </div>
    <Avatar :images="images" />
  </div>
</template>

<style lang="scss" scoped>
.profile-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6rem 3rem;
  background-color: #ff8125;
  color: #fff;
  border-radius: 0rem 0rem 2rem 2rem;
  .profile-header__content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    .profile-header__name {
      font-size: 3rem;
      font-weight: bold;
    }
    .profile-header__greeting {
      font-weight: lighter;
    }
  }
}
</style>
