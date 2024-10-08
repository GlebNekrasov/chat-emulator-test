<template>
  <VCard class="message-card" density="compact" :class="{ 'message-card--own': isOwn }">
    <template #text>
      <div class="message-card__date">
        {{ createdAt.format('DD.MM.YYYY HH:mm') }}
      </div>
      <div class="message-card__message">
        {{ message }}
      </div>
    </template>
  </VCard>
</template>

<script setup lang="ts">
import type { MessageCardProps } from '@/types'

defineProps<MessageCardProps>()
</script>

<style scoped lang="scss">
.message-card {
  border-radius: 16px 16px 16px 0px;

  &--own {
    border-radius: 16px 16px 0px 16px;
    background-color: #c5e6c1;
  }

  :deep(.v-card-text) {
    padding: 8px 12px;
  }

  &__message {
    white-space: pre-wrap;
  }

  &__date {
    opacity: 0.5;
    font-size: 0.85em;
  }
}
</style>
