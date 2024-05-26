import { MessageType } from '../types'

export const compareMessages = (first: MessageType, second: MessageType) => {
  if (first.sender === second.sender && first.date.toString() === second.date.toString()) {
    return true
  }

  return false
}
