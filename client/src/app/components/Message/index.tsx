import React from 'react'
import { MessageType } from '../../types'
import { styled } from 'styled-components'
import { userData } from '../../store/slices/userSlice'
import CornerIcon from '../../icons/CornerIcon'

type Props = {
  message: MessageType
  next?: MessageType
  prev?: MessageType
}

const Message: React.FC<Props> = ({ message, next, prev }) => {
  const userName = userData().name

  let timeArr = message.date.toLocaleTimeString('ru-RU').split(':')
  timeArr.pop()
  let time = timeArr.join(':')
  if (message.sender === userName && message.error){}else{
  return (
    <Container
      $owner={message.sender === userName}
      $repeatNext={message.sender === next?.sender}
      $repeatPrev={message.sender === prev?.sender}
      $error={message.error}
    >
      {message.sender !== userName && message.sender !== prev?.sender && <Name>{message.sender}</Name>}
      <Content>{message.content}</Content>
      <SendDate>{time}</SendDate>
      {message.sender !== next?.sender}
    </Container>
  )
}}

const StyledCornerIcon = styled(CornerIcon)<{ $owner?: boolean }>`
  position: absolute;
  top: calc(100% - 1.03rem);
  left: -9px;
  width: 10px;
  height: 20px;

  ${(props) =>
    props.$owner &&
    `
    transform: scale(-1, 1);
    left: auto;
    right: -10px;
  `}
`

const SendDate = styled.div`
  font-size: 12px;
  margin-left: auto;
  color: #9f9f9f;
`

const Content = styled.div`
  font-size: 16px;
  overflow-wrap: break-word;
  max-inline-size: 150px;
`

const Name = styled.div`
  font-size: 12px;
  color: #4b4b4b;
`

const Container = styled.div<{ $owner?: boolean; $repeatNext?: boolean; $repeatPrev?: boolean; $error?: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-inline-start:33%;
  border: 1px solid;
  border-radius: 17px;
  width: fit-content;
  padding: 16px 20px;
  background: #f2f2f2;

  ${(props) =>
    props.$owner &&
    `
    border-bottom-left-radius: 17px;
  `}

  ${(props) =>
    props.$repeatNext && props.$owner
      ? `
    margin-bottom: -7px;
    
  `
      : props.$repeatNext &&
        `
    margin-bottom: -7px;
  `}

  ${(props) =>
    props.$repeatPrev && props.$owner
      ? `
  `
      : props.$repeatPrev &&
        `
  `}

  ${(props) =>
    props.$error &&
    `
    background-color:red;
  `}
`

export default Message
