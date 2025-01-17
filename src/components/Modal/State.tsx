import Visible  from '@/state/Visible'
import Modal    from './Modal.jsx'
import { ModalProps } from './types'

const ModalState = ({
  open=false
} = { }) => {
  const { isVisible, show, hide } = Visible({ visible: open })
  return {
    show,
    hide,
    Modal: (props: ModalProps) =>
      <Modal
        open={isVisible}
        {...props}
      />
  }
}

export default ModalState