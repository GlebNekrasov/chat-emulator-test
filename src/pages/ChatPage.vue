<template>
  <div class="chat-page">
    <ChatWidget :user="user1" class="chat-page__widget" />
    <ChatWidget :user="user2" class="chat-page__widget" />
  </div>
</template>

<script setup lang="ts">
import type { User } from '@/types'
import ChatWidget from '@/components/ChatWidget.vue'

const user1: User = {
  id: 1,
  name: 'user1',
}

const user2: User = {
  id: 2,
  name: 'user2',
}
</script>

<style scoped lang="scss">
.chat-page {
  display: flex;
  justify-content: center;
  overflow: auto;
  height: 100vh;
  padding: 24px;

  &__widget {
    width: 100%;
    min-width: 400px;
    max-width: 700px;
  }
}
</style>
