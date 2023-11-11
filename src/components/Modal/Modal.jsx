import React, { useRef, useEffect } from 'react'
import ModalClose   from './Close.jsx'
import ModalContent from './Content.jsx'
import { Themed }   from '@/src/Theme.jsx'

const Modal = ({
  ref,
  open,
  close,
  className,
  closeClass='close',
  closeIcon='cross',
  Close=ModalClose,
  Content=ModalContent,
  ...props
}) => {
  ref ||= useRef(null)

  useEffect(
    () => {
      const { current: el } = ref
      if (open) {
        el.showModal()
      }
      else {
        el.close()
      }
    },
    [open]
  )

  return (
    <dialog
      ref={ref}
      className={className}
    >
      { Boolean(close) &&
        <Close
          close={close}
          icon={closeIcon}
          className={closeClass}
        />
      }
      <Content {...props}/>
    </dialog>
  )
}

export default Themed(Modal, 'Modal')