import React, { ReactNode, useState } from 'react'
import Styled from './styles'

type Props = {
  children: ReactNode[] | ReactNode
  title: JSX.Element
  disabled?: boolean
}

const Tooltip: React.FC<Props> = (props) => {
  const { children, title } = props
  const [open, setOpen] = useState(false)

  let timeout: ReturnType<typeof setTimeout>

  const showTip = () => {
    timeout = setTimeout(() => setOpen(true), 350)
  }

  const hideTip = () => {
    clearTimeout(timeout)
    setOpen(false)
  }

  return (
    <Styled.TooltipWrapper onMouseEnter={showTip} onMouseLeave={hideTip}>
      <Styled.Tip $open={open}>{title}</Styled.Tip>
      {children}
    </Styled.TooltipWrapper>
  )
}

export default Tooltip
