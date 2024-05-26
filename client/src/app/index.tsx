import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Chat from './components/Chat'
import MessageInput from './components/MessageInput'
import { userData } from './store/slices/userSlice'
import LoginForm from './components/Login'
import { WSConnect, WS_HOST } from './websocket'
import { useDispatch } from 'react-redux'
import { historyData } from './store/slices/chatSlice'

const App: React.FC = () => {
  const user = userData().name
  const history = historyData()
  const dispatch = useDispatch()

  const [socket, setSocket] = useState<WebSocket | undefined>()

  useEffect(() => {
    user && setSocket(new WebSocket(WS_HOST))
  }, [user])

  WSConnect(dispatch, history, socket)

  return (
    <div>
      <Container>
        <Header socket={socket} />
        <Chat />
        <MessageInput socket={socket} />
        <LoginForm open={user === ''} />
      </Container>
    </div>
  )
}

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 800px;
  width:100%
  background-image: url("https://i.imgur.com/YiqZI2r.png");
  background-position: center;
  overflow: visible;

    height: 100vh;
    margin: 0;
    border: none;
`

export default App
