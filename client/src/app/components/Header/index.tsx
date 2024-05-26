import React from 'react'
import { styled } from 'styled-components'
import { useDispatch } from 'react-redux'
import { setUserDataAction, userData } from '../../store/slices/userSlice'
import ExitIcon from '../../icons/ExitIcon'
import { clearChatHistoryAction, onlineCount } from '../../store/slices/chatSlice'

type Props = {
  socket?: WebSocket
}

const Header: React.FC<Props> = ({ socket }) => {
  const user = userData()
  const online = onlineCount()
  const dispatch = useDispatch()

  const exitHandle = () => {
    dispatch(setUserDataAction({ name: '' }))
    dispatch(clearChatHistoryAction())
    socket?.close()
  }

  return (
    <Container>
      <div>
        <ChatInfo>
          <Title>Чат</Title>
          <Text>{online} онлайн</Text>
        </ChatInfo>
        <UserInfo>
          <div>
            <Name>{user.name}</Name>
            <Exit onClick={exitHandle}>
              <ExitIcon color="#898989" />
            </Exit>
          </div>
        </UserInfo>
      </div>
    </Container>
  )
}

const Exit = styled.button`
  background: transparent;
  border: none;
  font-size: 14px;
  color: #df0000;
  cursor: pointer;

  &:hover {
    color: #9d0000;
  }
`

const ChatInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
`

const Name = styled.div`
  font-size: 20px;
  color: #454545;
`

const UserInfo = styled.div`
  position: absolute;
  pointer-events: auto;
  width: 100%;
  height: 74px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  top: 0;
  text-align: right;
  box-shadow: 0px 15px 20px -15px rgb(0 0 0 / 33%);
  z-index: 100;

  & > div {
    padding: 0 20px;
    display: flex;
    gap: 10px;

    svg {
      &:hover {
        path:nth-child(2) {
          fill: #df0000;
        }
      }
    }
  }
`

const Text = styled.div`
  font-size: 14px;
  color: black;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 22px;
  color:white;
`

const Container = styled.div`
  height: 70px;
  margin-bottom: 4px;

  & > div {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    position: relative;
    padding: 10px 15px;
  }
`

export default Header
