import React      from 'react'
import Buttons    from '@/components/Buttons/Buttons.jsx'
import Visible    from '@/state/Visible.jsx'
import Modal      from './Modal.jsx'
import { Themed } from '@/src/Theme.jsx'

const Confirm = ({
  initiallyRevealed=false,
  open=initiallyRevealed,
  confirmIcon='check',
  confirmText='Confirm',
  confirmColor='red',
  confirmClass,
  cancelIcon='cross',
  cancelText='Cancel',
  cancelColor='grey',
  cancelClass,
  confirm={
    iconRight:  confirmIcon,
    text:       confirmText,
    color:      confirmColor,
    className:  confirmClass
  },
  cancel={
    iconLeft:   cancelIcon,
    text:       cancelText,
    color:      cancelColor,
    className:  cancelClass
  },
  // prompt,
  buttonsClass,
  className=buttonsClass,
  buttonClass,
  modal,
  modalClass,
  onClick = () => window.alert('No confirm action defined'),
  ...props
}) => {
  const { isVisible, hide, show } = Visible({ visible: open })
  const onConfirm = e => {
    e.preventDefault()
    hide()
    onClick()
  }

  const confirmProps = {
    iconRight:  confirmIcon,
    text:       confirmText,
    color:      confirmColor,
    className:  confirmClass,
    ...confirm,
    onClick:    onConfirm,
  }

  const cancelProps = {
    iconLeft:   cancelIcon,
    text:       cancelText,
    color:      cancelColor,
    className:  cancelClass,
    outline:    true,
    ...cancel,
    onClick:    hide,
  }

  return modal
    /* v8 ignore start */
    ? <>
        <Buttons
          className={className}
          buttonClass={buttonClass}
          buttons={[ { ...props, onClick: show } ]}
        />
        <Modal
          isVisible={isVisible}
          confirm={confirmProps}
          cancel={cancelProps}
          modalClass={modalClass}
          {...props}
        />
      </>
    /* v8 ignore end */
    : <Buttons
        className={className}
        buttonClass={buttonClass}
        buttons={
          isVisible
            ? [ cancelProps, confirmProps ]
            : [ { ...props, onClick: show }]
        }
      />
}

export default Themed(Confirm, 'Confirm')
