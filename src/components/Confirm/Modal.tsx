import Modal  from '@/components/Modal/Modal'
import Buttons from './Buttons'
import { ConfirmModalProps } from './types'

const ConfirmModal = ({
  isVisible,
  title,
  header,
  prompt,
  modalClass,
  ...props
}: ConfirmModalProps) =>
  <Modal
    {...props}
    open={isVisible}
    title={title}
    header={header}
    className={modalClass}
    text={
      prompt ?? <Buttons {...props}/>
    }
    footer={
      Boolean(prompt) && <Buttons {...props}/>
    }
  />


export default ConfirmModal
