import Modal  from '@/components/Modal/Modal'
import Buttons from './Buttons'
import { ConfirmModalType } from './types'

const ConfirmModal: ConfirmModalType = ({
  isVisible,
  title,
  header,
  prompt,
  modalClass,
  ...props
}) =>
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
