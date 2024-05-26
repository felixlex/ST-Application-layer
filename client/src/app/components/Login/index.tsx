import React, { useState } from 'react'
import GenericModal from '../Modal'
import { styled } from 'styled-components'
import { setUserDataAction } from '../../store/slices/userSlice'
import { useDispatch } from 'react-redux'

type Props = {
  open: boolean
}

const LoginForm: React.FC<Props> = ({ open }) => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const handleEnter = (event: React.KeyboardEvent) => {
    let value = (event.target as HTMLInputElement).value
    if (event.key === 'Enter' && value) {
      dispatch(setUserDataAction({ name: value }))
      setValue('')
    }
  }

  return (
    <GenericModal open={open} onClose={() => {}}>
      <Content>
        <Title>Вход</Title>

        <StyledInput
          placeholder="Введите ваше имя"
          value={value}
          onKeyDown={handleEnter}
          onChange={(e) => setValue(e.target.value)}
          $error={false}
          autoFocus
        />
      </Content>
    </GenericModal>
  )
}

const StyledInput = styled.input<{ $error?: boolean }>`
  border: none;
  --padding: 0px;
  outline: none;
  border-bottom: 2px solid #dddddd;
  padding: 6px 10px;
  font-size: 20px;
  transition: all 0.2s;

  height: 30px;

  &:focus {
    border-bottom: 2px solid #000;
  }

  ${(p) => p.$error && `border-bottom: 2px solid #ff000082;`}
`

const Title = styled.div`
  font-size: 28px;
  display: inline-block;
  padding: 0.3em 0.6em;
  border: 3px solid transparent;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`

export default LoginForm
