<script setup lang="ts">
const resizeHeight = (e) => {
  e.target.style.height = 'auto'
  e.target.style.height = e.target.scrollHeight + 'px'
}
</script>

<template>
  <div class="textarea-box">
    <slot></slot>
    <textarea
      type="textarea"
      id="textarea"
      class="textarea"
      placeholder="내용을 입력해주세요."
      @input="resizeHeight"
    />
  </div>
</template>

<style lang="scss" scoped>
.textarea-box {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
}
.textarea {
  resize: none;
  width: 100%;
  aspect-ratio: 1/0.5;
  padding: 1.5rem;
  gap: 1rem;
  border-radius: 1rem;
  border: 0.1rem solid #cfcfcf;
  background: #fff;
  overflow: hidden;
  outline-color: #ff8125;
}
</style>
