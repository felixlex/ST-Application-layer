import React, { useEffect, useRef } from 'react'
import { styled } from 'styled-components'
import Message from '../Message'
import { historyData } from '../../store/slices/chatSlice'
import bg from '../../assets/sky.webp'
import ErrorIcon from '../../icons/ErrorIcon'
import { userData } from '../../store/slices/userSlice'
import Tooltip from '../Tooltip'
import Loader from '../Loader'

const Chat: React.FC = () => {
  const history = historyData()
  const userName = userData().name
  const chatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatRef?.current && history?.length) {
      chatRef.current.scrollTo({ top: chatRef.current.scrollHeight, left: 0, behavior: 'smooth' })
    }
  }, [chatRef, history])

  return (
    <Container $empty={history?.length === 0} ref={chatRef}>
      <div>
        {history && history.length > 0 ? (
          history
            .slice()
            ?.sort((a, b) => a.date.getTime() - b.date.getTime())
            .map((message, i) => {
              return (
                <ErrorContainer key={message.date.getTime()} $owner={message.sender === userName}>
                  <Message message={message} next={history[i + 1]} prev={history[i - 1]} />
                  {message.loading && <Loader />}
                </ErrorContainer>
              )
            })
        ) : (
          <Empty>Сообщений нет</Empty>
        )}
      </div>
    </Container>
  )
}

const ErrorContainer = styled.div<{ $owner: boolean }>`
  display: flex;
  gap: 10px;
  align-items: center;

  ${(props) =>
    props.$owner &&
    `
    margin-left: auto;
    flex-direction: row-reverse;
  `}
`

const Empty = styled.div`
  display: flex;
  color: #414141;
  padding: 2px 10px;
  background: #efefef;
  width: fit-content;
  margin: 25px auto;
  border-radius: 15px;
  font-size: 14px;
  
`

const Container = styled.div<{ $empty?: boolean }>`
  display: flex;
  height: 100%;
  overflow: auto;
  margin-inline-end:24%;
  &::-webkit-scrollbar {
    display: none;
  }

  & > div {
    
    display: flex;
    flex-direction: column;
    padding: 10px 15px;
    gap: 10px;
    margin-top: auto;
    width: 100%;
    min-height: 667px;
    justify-content: flex-end;

    @media (max-width: 1100px) {
      min-height: calc(100vh - 130px);
    }
  }
`

export default Chat
