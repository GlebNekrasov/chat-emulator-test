<template>
  <div class="chat-widget">
    <div class="chat-widget__content">
      <div>
        <MessageCard
          v-for="message in messages"
          :key="message.id"
          :id="message.id"
          :message="message.message"
          :created-at="message.createdAt"
          :user="message.user"
          :is-own="props.user.id === message.user.id"
          class="chat-widget__content-message"
          :class="{ 'own-message': props.user.id === message.user.id }"
        />
      </div>
    </div>
    <div class="chat-widget__message-input">
      <VTextarea
        v-model="currentMessage"
        :rows="1"
        :max-rows="5"
        auto-grow
        density="compact"
        hide-details
        placeholder="Введите сообщение"
        variant="solo"
        class="chat-widget__message-input-text-area"
        @keydown.enter.exact.prevent="sendMessage"
      />
      <VBtn class="chat-widget__message-input-send-button" text="Отправить" @click="sendMessage" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useChatStore } from '@/stores/chat'
import type { User } from '@/types'
import MessageCard from '@/components/MessageCard.vue'

const props = defineProps<{
  user: User
}>()
const chatStore = useChatStore()
const { messages } = storeToRefs(chatStore)
const { addMessage } = chatStore

const currentMessage = ref<string>('')

function sendMessage() {
  currentMessage.value = currentMessage.value.trim()
  if (currentMessage.value) {
    addMessage(props.user, currentMessage.value)
    currentMessage.value = ''
  }
}
</script>

<style scoped lang="scss">
.chat-widget {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-height: 400px;
  background-color: #f0f2f5;
  margin-left: 36px;
  margin-right: 36px;
  padding: 12px;

  &__content {
    display: flex;
    flex-direction: column-reverse;
    overflow-y: auto;
    padding-top: 12px;
    padding-bottom: 4px;

    &-message {
      width: fit-content;
      max-width: 60%;
      margin-top: 16px;

      &.own-message {
        margin-left: auto;
      }
    }
  }

  &__message-input {
    display: flex;
    align-items: center;

    &-text-area {
      flex-grow: 1;
    }

    &-send-button {
      height: 40px;
      margin-left: 8px;
      text-transform: none;
    }
  }
}
</style>
