import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Message, User } from '../types'
import dayjs from 'dayjs'

export const useChatStore = defineStore('chat', () => {
  const messages = ref<Message[]>([])
  const lastMessageId = ref<number>(0)
  function addMessage(user: User, message: string) {
    lastMessageId.value++
    const newMessage: Message = {
      id: lastMessageId.value,
      message: message,
      createdAt: dayjs(),
      user: user,
    }

    messages.value.push(newMessage)
  }

  return {
    messages,
    addMessage,
  }
})
