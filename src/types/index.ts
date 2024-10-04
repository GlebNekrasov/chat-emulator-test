import type { Dayjs } from 'dayjs'

export interface User {
  id: number
  name: string
}

export interface Message {
  id: number
  message: string
  createdAt: Dayjs
  user: User
}

export interface MessageCardProps extends Message {
  isOwn: boolean
}
