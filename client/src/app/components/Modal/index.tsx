import React, { useEffect, createRef } from 'react'
import Styled from './styles'

type Props = {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

const GenericModal: React.FC<Props> = (props) => {
  const modalRef = createRef<HTMLDivElement>()
  const { open, onClose } = props

  const handleClick = () => {
    onClose?.()
  }

  useEffect(() => {
    const closeEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', closeEsc)
    return () => window.removeEventListener('keydown', closeEsc)
  }, [])

  return (
    <Styled.ModalWrapper $open={open} onClick={handleClick}>
      <Styled.ModalContent
        id="modal-content"
        ref={modalRef}
        $open={open}
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        {props.children}
      </Styled.ModalContent>
    </Styled.ModalWrapper>
  )
}

export default GenericModal
