import { useRef, useEffect } from 'react'
import ModalClose   from './Close'
import ModalContent from './Content'
import { Themed }   from '@/src/Theme'
import { doNothing } from '@abw/badger-utils'
import { ModalCSSProperties, ModalType } from './types'

const Modal: ModalType = ({
  ref,
  open,
  close,
  className,
  closeClass='close',
  closeIcon='cross',
  Close=ModalClose,
  Content=ModalContent,
  closeOnClick,
  onClick=closeOnClick ? close : undefined,
  onCancel=close||doNothing,
  style={},
  maxWidth,
  maxHeight,
  ...props
}) => {
  const spareRef = useRef<HTMLDialogElement>(null)
  ref ||= spareRef

  useEffect(
    () => {
      if (ref) {
        const { current } = ref as React.MutableRefObject<HTMLDialogElement>
        if (open) {
          current?.showModal()
        }
        else {
          current?.close()
        }
      }
    },
    [open, ref]
  )

  const styles: ModalCSSProperties = {
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
      onCancel={onCancel}
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