import React    from 'react'
import Visible  from '@/state/Visible.jsx'
import Modal    from './Modal.jsx'

const ModalState = ({
  open=false
} = { }) => {
  const { isVisible, show, hide } = Visible({ visible: open })
  return {
    show,
    hide,
    Modal: props =>
      <Modal
        open={isVisible}
        {...props}
      />
  }
}

export default ModalState