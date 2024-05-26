export type MessageType = {
  sender: string
  content: string
  date: Date
  error?: boolean
  loading?: boolean
}

export type UserType = {
  name: string
}

export type ChatType = {
  history: MessageType[]
  online: number
}
