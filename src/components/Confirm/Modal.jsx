import React  from 'react'
import Modal  from '@/components/Modal/Modal.jsx'
import Button from '../Button/Button.jsx'

const ConfirmModal = ({
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

const Buttons = ({
  buttonClass,
  cancel,
  confirm
}) =>
  <div className="flex space gap-4">
    <Button className={buttonClass} {...cancel}/>
    <Button className={buttonClass} {...confirm}/>
  </div>

export default ConfirmModal
