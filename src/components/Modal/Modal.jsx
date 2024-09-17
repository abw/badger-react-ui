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
  closeOnClick,
  onClick=closeOnClick ? close : null,
  style={},
  maxWidth,
  maxHeight,
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

  const styles = {
    ...style
  }
  if (maxWidth) {
    styles['--max-width'] = maxWidth
  }
  if (maxHeight) {
    styles['--max-height'] = maxHeight
  }

  return (
    <dialog
      ref={ref}
      className={className}
      style={styles}
      onClick={onClick}
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